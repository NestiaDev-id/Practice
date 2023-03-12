const tombol = document.getElementById('tidButton');

tombol.onclick = function () {
    // document.body.style.backgroundColor = 'red';
    // document.body.style.backgroundColor = 'red'; salah?
    document.body.classList.toggle('buttonRandom');
}

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tombol.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 +1);
    const g = Math.round(Math.random() * 255 +1);
    const b = Math.round(Math.random() * 255 +1);

    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

const sMerah = document.querySelector('input[name=sMerah');
const sHijau = document.querySelector('input[name=sHijau');
const sBiru = document.querySelector('input[name=sBiru');

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
document.body.addEventListener('mousemove', function(event) {
    const xMouse = Math.round((event.clientX / window.innerWidth)*255);
    const yMouse = Math.round((event.clientY / window.innerHeight)*255);
    document.body.style.backgroundColor = 'rgb('+xMouse+ ',' + yMouse+ ',100)';
});


