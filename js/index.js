/* FUNCION -SOLO PARA MODO TAKE AWAY */

function extra(num2) {
  var num2 = 80;
  suma = precio + num2;
}

/* BIENVENIDA */

alert('Bienvenido a Abu Dhabi. Déjate sorprender con nuestros platos.');

alert('Te traemos los mas finos sabores Arabes a la puerta de tu casa.');

let modo = +prompt('[1] Desea Take-Away o [2] Delivery?');

while (modo == null || /\D/.test(modo) || modo == '') {
  modo = +prompt('Debe Ingresar: [1] Take-Away o [2] Delivery');
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
  while (bandeja == null || /\D/.test(bandeja) || bandeja == '') {
    bandeja = +prompt(
      'Debe Ingresar:  Bandeja[1]: $400 Bandeja[2]: $560 Bandeja[3]: $1100.'
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
  let plato = +prompt(
    'Nuestros Platos son: Plato[1]: $350 Plato[2]: $500 Plato[3]: $1050. - Ingrese el número del plato:'
  );

  while (plato == null || /\D/.test(plato) || plato == '') {
    plato = +prompt(
      'Debe Ingresar: Plato[1]: $350 Plato[2]: $500 Plato[3]: $1050.'
    );
  }
  switch (plato) {
    case 1:
      alert(
        `Estamos preprando su Plato. Total: $305 se enviara a: ${direccion}. Disfruta la comida!`
      );
      alert('Gracias, Chauu!');
      break;
    case 2:
      alert(
        `Estamos preprando su Plato. Total: $500 se enviara a: ${direccion}. Disfruta la comida!`
      );
      alert('Gracias, Chauu!');
      break;
    case 3:
      alert(
        `Estamos preprando su Plato. Total: $1050 se enviara a: ${direccion}. Disfruta la comida!`
      );
      alert('Gracias, Chauu!');
      break;
  }
}
