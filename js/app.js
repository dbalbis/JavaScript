const cards = document.getElementById('cards');
const items = document.getElementById('items');
const footer = document.getElementById('footer');
const templateCard = document.getElementById('template-card').content;
const templateFooter = document.getElementById('template-footer').content;
const templateCarrito = document.getElementById('template-carrito').content;
const botonCompra = document.getElementById('boton-pedido');
const fragment = document.createDocumentFragment();
const URL = 'https://jsonplaceholder.typicode.com/users';
let carrito = {};

/* EVENTOS */
document.addEventListener('DOMContentLoaded', () => {
  fetchData();
  if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    pintarCarrito();
  }
});
cards.addEventListener('click', (e) => {
  addCarrito(e);
  btnAccion(e);
});

items.addEventListener('click', (e) => {
  btnAccion(e);
});

botonCompra.addEventListener('click', () => {
  if (Object.keys(carrito).length === 0) {
    alert('Selecciona al menos un articulo.');
  } else {
    alert('Compra realizada con exito.');
    carrito = {};
    pintarCarrito();
  }
});

/* TRAER PRODUCTOS DEL JSON */
const fetchData = async () => {
  try {
    const res = await fetch('./js/api.json');
    const data = await res.json();
    /* console.log(data); */
    pintarCards(data);
  } catch (error) {
    console.log(error);
  }
};
/* PINTAR PRODUCTOS */
const pintarCards = (data) => {
  data.forEach((producto) => {
    templateCard.querySelector('h3').textContent = producto.nombre;
    templateCard.querySelector('span').textContent = producto.precio;
    templateCard.querySelector('img').setAttribute('src', producto.img);
    templateCard.querySelector('.btn-primary').dataset.id = producto.id;

    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};

/* Agregar Carrito */

const addCarrito = (e) => {
  if (e.target.classList.contains('btn-primary')) {
    setCarrito(e.target.parentElement);
  }
  e.stopPropagation();
};

const setCarrito = (objeto) => {
  const producto = {
    id: objeto.querySelector('.btn-primary').dataset.id,
    title: objeto.querySelector('h3').textContent,
    precio: objeto.querySelector('span').textContent,
    cantidad: 1,
  };

  if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad = carrito[producto.id].cantidad + 1;
  }

  carrito[producto.id] = { ...producto };
  pintarCarrito();
};

/* PINTAR CARRITO */
const pintarCarrito = () => {
  items.innerHTML = '';

  Object.values(carrito).forEach((producto) => {
    templateCarrito.querySelector('th').textContent = producto.title;
    templateCarrito.querySelectorAll('td')[0].textContent = producto.id;
    templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad;
    templateCarrito.querySelector('span').textContent =
      producto.precio * producto.cantidad;

    templateCarrito.querySelector('.btn-info').dataset.id = producto.id;
    templateCarrito.querySelector('.btn-danger').dataset.id = producto.id;

    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);
  pintarFooter();
  localStorage.setItem('carrito', JSON.stringify(carrito));
};

/* PINTAR FOOTER */

const pintarFooter = () => {
  footer.innerHTML = '';

  if (Object.keys(carrito).length === 0) {
    footer.innerHTML = `
      <th scope="row" colspan="5">Carrito vacío!</th>
      `;
    return;
  }

  // Sumar Total
  const nCantidad = Object.values(carrito).reduce(
    (acc, { cantidad }) => acc + cantidad,
    0
  );
  const nPrecio = Object.values(carrito).reduce(
    (acc, { cantidad, precio }) => acc + cantidad * precio,
    0
  );

  templateFooter.querySelectorAll('td')[0].textContent = nCantidad;
  templateFooter.querySelector('span').textContent = nPrecio;

  const clone = templateFooter.cloneNode(true);
  fragment.appendChild(clone);
  footer.appendChild(fragment);

  /* VACIAR CARRITO */

  const btnVaciar = document.getElementById('vaciar-carrito');
  btnVaciar.addEventListener('click', () => {
    carrito = {};
    pintarCarrito();
  });
};

/* BOTONES + Y - */

const btnAccion = (e) => {
  if (e.target.classList.contains('btn-info')) {
    /* carrito [e.target.dataset.id] */
    const producto = carrito[e.target.dataset.id];
    producto.cantidad = carrito[e.target.dataset.id].cantidad + 1;
    carrito[e.target.dataset.id] = { ...producto };
    pintarCarrito();
  }

  if (e.target.classList.contains('btn-danger')) {
    const producto = carrito[e.target.dataset.id];
    producto.cantidad = carrito[e.target.dataset.id].cantidad - 1;
    if (producto.cantidad === 0) {
      delete carrito[e.target.dataset.id];
    }
    pintarCarrito();
  }
  e.stopPropagation;
};

/* Ocultar Compras (JQUERY) */

$('#ocultar-compras').click(() => {
  $('tbody#items').slideToggle(0);
});

/* MOSTRANDO ULTIMAS 10 CLIENTES (JQUERY) */

$('.ultimos-pedidos').append(
  $.get(URL, (response, status) => {
    if (status !== 'success') {
      throw new Error('Error');
    }

    console.log(response);
    for (const user of response) {
      $('.ultimos-pedidos').prepend(`
      
      <h4> ${user.email} </h4>`);
    }
  })
);
