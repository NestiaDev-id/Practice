// ! error ???
function ubahWarna() {
    p2.style.backgroundColor = 'blue';
}
const p2 = document.querySelector('.p2');
p2.onClick = ubahWarna;

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
    p4.style.backgroundColor = 'blue';
});
