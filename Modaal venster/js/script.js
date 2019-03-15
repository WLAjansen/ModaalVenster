// variable die alle content van de modale vensters heeft
const modaalContent = document.querySelectorAll('.modaalContent');

// alle modaal content verwijderen uit de DOM
for (let i = 0; i < modaalContent.length; i++) {
  let modaalNode = modaalContent[i];
  modaalNode.parentNode.removeChild(modaalNode);
}

// nodelist van alle modale knoppen, die inhoud moet oproepen
const modaalKnoppen = document.querySelectorAll('.modaal-knop');
const modaalKnoppenArray = [];

// toekomstige node-elementen aanmaken in variabelen
let modaalAchtergrond = document.createElement('div');
modaalAchtergrond.className = 'modaal-achtergrond';
let modaal = document.createElement('div');
modaal.className = 'modaal';
let sluitKnop = document.createElement('button');
sluitKnop.className = 'sluit-knop';
sluitKnop.innerHTML = '&#x00D7;';

// modale content aan DOM toevoegen
const voegInhoudToe = (event) => {
  const teller = modaalKnoppenArray.indexOf(event.target);
  console.log(teller);
  modaal.appendChild(sluitKnop);
  modaal.appendChild(modaalContent[teller]);
  modaalAchtergrond.appendChild(modaal);
  document.body.appendChild(modaalAchtergrond);
}

// sluit het modale vensters

const sluitModaal = () => {
  modaal.innerHTML = '';
  modaalAchtergrond.innerHTML = '';
  document.body.removeChild(modaalAchtergrond);
}

// sluitKnop event sluiten afgeschreven
sluitKnop.addEventListener('click', sluitModaal)

// alle modaalknoppen in een array plaatsen eventlistener koppelen
for (let i = 0; i < modaalKnoppen.length; i++) {
  // toevoegen aan de array
  modaalKnoppenArray.push(modaalKnoppen[i]);
  // klik-event toevoegen
  modaalKnoppen[i].addEventListener('click', voegInhoudToe);
}