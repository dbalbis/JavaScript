const contenedor = document.querySelector('#contenedor-platos');
const tableBody = document.querySelector('#carritoContenedor');

stockPlatos.forEach((prod) => {
  const div = document.createElement('div');

  div.className = 'card-m m-4';
  div.style = 'width: 18rem;';

  div.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="${prod.img}" class="card-img-top" style=" height: 270px" style=" width: auto" alt="...">
  <div class="card-body">
    <h3 class="card-title">${prod.nombre}</h3>
    <p><strong> Precio: $${prod.precio} </strong></p>
    <div class="col text-center">
    <button onclick='agregarAlCarrito(${prod.id})' class=" btn btn-primary">Comprar</button>
    </div>
  </div>
</div>
  `;

  contenedor.appendChild(div);
});

const carrito = [];

/* AGREGAR AL CARRITO */
function agregarAlCarrito(prodId) {
  let plato = stockPlatos.find((item) => item.id == prodId);
  carrito.push(plato);
  mostrarCompra();
}

/* MOSTRAR COMPRA */

const mostrarCompra = () => {
  tableBody.innerHTML = '';

  carrito.forEach((prod) => {
    const tr = document.createElement('tr');
    tr.className = 'table-primary';
    tr.innerHTML = `
            <th scope='row'>${prod.id}</th>
            <td ><img src="${prod.img}" alt="" width= "180px" height= "180px"></td>
            <td >${prod.nombre}</td>
            <td >$${prod.precio}</td>
    `;
    tableBody.appendChild(tr);

    /* TOTAL CON JQUERY */

    const precio = Object.values(carrito).reduce(
      (acc, { precio }) => acc + precio,
      0
    );

    $('.total p').append(`${precio}`);
    console.log(precio);
    localStorage.setItem('Compra', JSON.stringify(carrito));
  });
};

/* BOTON REALIZAR PEDIDO  */

$('.total button').on('click', function () {
  alert('Compra realizada con exito.');
});
