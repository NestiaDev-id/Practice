// DOM Selection
// document.getElementByid
const getJudul = document.getElementById('judul');
getJudul.style.color = 'darkblue';
getJudul.style.backgroundColor = 'lightBlue';
getJudul.innerHTML = "Welcome to My Website";

// document.getElementsByTagName
const paragraf = document.getElementsByTagName('p');

for (let index = 0; index < paragraf.length; index++) {
    paragraf[index].style.backgroundColor = 'lightblue';
}

const header = document.getElementsByTagName('h1')[0];
header.style.fontFamily = 'Patrick Hand';

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML= 'Ini diubah dari javascript';

// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'green';

const para = document.querySelectorAll('p');
para[2].style.backgroundColor = 'orange';

const sectionB = document.querySelector('section#b');
const pepe = sectionB.getElementsByTagName('p')[0];
pepe.style.backgroundColor = 'blue';

// =======================
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
   const ul = document.querySelector('section#b ul');
   const varBaru = document.createElement('li');
   const tekstBaru = document.createTextNode('new item');
   
   varBaru.appendChild(tekstBaru);
   ul.appendChild(varBaru);
}); 