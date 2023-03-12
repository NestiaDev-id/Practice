// alert('Hello world');
// alert('perkenalkan');
// alert('nama saya adalah marta');


// var nama = prompt('masukkan nama anda');
// alert("halo "+nama);

//-------- promt mirip seperti input

// var test = confirm('yang bener');
// if (test == true) {
//     alert('user menekan OK!');
// } else {
//     alert('user menekan CANCEL');
// }

//------ if else, yes true

alert('Welcome to Website');
var pilihan = true;

while (pilihan === true) {
    var nama = prompt('masukkan nama: ');
    alert('halo '+nama);

    pilihan = confirm("mau coba lagi");
}

//------ while menu pilihan yes true 