// Dom Manipulation
// buat elemen baru
// ! insert before untuk menambahkan ke sebelum element tersebut
// ! append child berfungsi untuk 
const pBaru = document.createElement('p');
const tekspBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(tekspBaru);

// pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// latihan 
 const pBaru2 = document.createElement('li');
 const tekspBaru2 = document.createTextNode('Item Baru');
 
 pBaru2.appendChild(tekspBaru2);

// const sectionB = document.querySelector('section#b ul');
// sectionB.appendChild(pBaru2);

// =========================================
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(pBaru2, li2);


// remove
const remove1 = document.getElementsByTagName('a')[0];
sectionA.removeChild(remove1);

// replace
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksh2Baru = document.createTextNode('Judul baru');

h2Baru.appendChild(teksh2Baru);

sectionB.replaceChild(h2Baru, p4);

const para4 = document.querySelector('section#b p');
para4.addEventListener('click', function () {
    const ali = document.querySelector('section#b ul');
    const varBaru = document.createElement('p');
    const teksBaru = document.createTextNode('hello');
    varBaru.appendChild(textBaru);
    ali.appendChild(varBaru);
})









