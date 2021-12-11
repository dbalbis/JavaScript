/* ARRAYS */

const menu = ['[1] Milanesas ', '[2] Asado ', '[3] Ensalada '];

/* CONSTRUCTOR */

class Plato {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  listarPlatos() {
    alert(
      'El plato que pediste es: ' +
        this.nombre +
        ' y el precio es: ' +
        this.precio
    );
  }
}

const Plato1 = new Plato('Milanesas', '$500');
const Plato2 = new Plato('Asado', '$650');
const Plato3 = new Plato('Ensalada', '$700');

/* FUNCION -SOLO PARA MODO TAKE AWAY */

function extra(num2) {
  var num2 = 80;
  suma = precio + num2;
}

/* BIENVENIDA */

alert('Bienvenido a Abu Dhabi. Déjate sorprender con nuestros platos.');

alert('Te traemos los mas finos sabores Arabes a la puerta de tu casa.');

let modo = +prompt('[1] Desea Take-Away o [2] Delivery?');

while (modo > 2 || modo < 0 || modo == null || /\D/.test(modo) || modo == '') {
  modo = +prompt('[1] Desea Take-Away o [2] Delivery?');
}

/* MODO TAKE AWAY */

if (modo === 1) {
  alert(
    'Los pedidos para retirar en el local tienen un costo de $80 extra por las bandejas de plastico.'
  );
  celular = +prompt('Ingrese su celular.');
  while (celular == null || /\D/.test(celular) || celular == '') {
    celular = +prompt('Ingrese su celular.');
  }
  let bandeja = +prompt(
    'Nuestro menu es: Bandeja[1]: $400 Bandeja[2]: $560 Bandeja[3]: $1100. Ingrese el número de bandeja:'
  );
  while (
    bandeja > 3 ||
    bandeja < 1 ||
    bandeja == null ||
    /\D/.test(bandeja) ||
    bandeja == ''
  ) {
    bandeja = +prompt(
      'Nuestro menu es: Bandeja[1]: $400 Bandeja[2]: $560 Bandeja[3]: $1100. Ingrese el número de bandeja:'
    );
  }

  switch (bandeja) {
    case 1:
      var precio = 400;
      console.log(precio);
      extra();
      alert(
        `Estamos preprando su Plato. Total: ${suma}, se enviara a ${celular} un mensaje cuando este listo. Te esperamos!`
      );
      alert('Gracias, Chauu!');
      break;
    case 2:
      var precio = 560;
      extra();
      alert(
        `Estamos preprando su Plato. Total: ${suma}, se enviara a ${celular} un mensaje cuando este listo. Te esperamos!`
      );
      alert('Gracias, Chauu!');
      break;
    case 3:
      var precio = 1100;
      extra();
      alert(
        `Estamos preprando su Plato. Total: ${suma}, se enviara a ${celular} un mensaje cuando este listo. Te esperamos!`
      );
      alert('Gracias, Chauu!');
      break;
  }
}

/* MODO DELIVERY */

if (modo === 2) {
  direccion = prompt('Ingrese su dirección:');
  while (direccion == null || direccion == '') {
    direccion = prompt('Ingrese su dirección:');
  }
  let plato = +prompt('Ingrese el numero: ' + menu);

  while (
    plato > 3 ||
    plato < 1 ||
    plato == null ||
    /\D/.test(plato) ||
    plato == ''
  ) {
    plato = +prompt('Ingrese el numero: ' + menu);
  }
  switch (plato) {
    case 1:
      Plato1.listarPlatos();
      alert(
        `Estamos preprando su Plato. Se enviara a: ${direccion}. Disfruta la comida!`
      );
      alert('Gracias, Chauu!');
      break;
    case 2:
      Plato2.listarPlatos();
      alert(
        `Estamos preprando su Plato. Se enviara a: ${direccion}. Disfruta la comida!`
      );
      alert('Gracias, Chauu!');
      break;
    case 3:
      Plato3.listarPlatos();
      alert(
        `Estamos preprando su Plato. Se enviara a: ${direccion}. Disfruta la comida!`
      );
      alert('Gracias, Chauu!');
      break;
  }
}
