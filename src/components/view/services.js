import load from './../controller/loader';

const types = document.querySelectorAll('.type');
document.addEventListener('DOMContentLoaded', generateServices);

for (const type of types) {
  type.addEventListener('click', generateServices);
}

async function generateServices(event) {
  const services = await load('./../../db/services.json');
  let currentType = [];
  if (event.type === 'DOMContentLoaded') {
    currentType = services.demolition;
  } else {
    currentType = services[event.target.id];
  }

  const currency = await load('https://www.nbrb.by/api/exrates/rates/431');
  const table = document.getElementById('table');

  if (table.childNodes.length > 0) {
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }
  }

  const trHeading = document.createElement('tr');
  const thName = document.createElement('th');
  thName.innerHTML = 'Виды работ';
  const thUnit = document.createElement('th');
  thUnit.innerHTML = 'Единица измерения';
  const thPrice = document.createElement('th');
  thPrice.innerHTML = 'Цена, BYN, от';

  table.append(trHeading);
  trHeading.append(thName, thUnit, thPrice);

  for (let i = 0; i < currentType.length; i++) {
    const trNew = document.createElement('tr');
    const thCurrentTypeName = document.createElement('td');
    thCurrentTypeName.innerHTML = `${currentType[i].name}`;
    const thCurrentTypeUnit = document.createElement('td');
    thCurrentTypeUnit.innerHTML = `${currentType[i].unit}`;
    const thCurrentTypePrice = document.createElement('td');
    thCurrentTypePrice.innerHTML = `${currentType[i].price}`;

    table.append(trNew);
    trNew.append(thCurrentTypeName, thCurrentTypeUnit, thCurrentTypePrice);
  }

  console.log(currency);
}
