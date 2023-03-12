const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
};
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);
/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
Saya berasal dari Tattooine
*/

const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

// !push berfungsi untuk menambahkan data di akhir array.
myArray.push('JavaScript');
console.log(myArray);

/* output
[ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */
// ! pop untuk mengeluarkan data pada akhir array
myArray.pop();
console.log(myArray);

/* output
[ Cokelat, 42.5, 22, true ]
*/

// ! shift() digunakan untuk mengeluarkan elemen pertama dari array
// ! unshift() digunakan untuk menambahkan elemen di awal array
myArray.shift();
myArray.unshift("Apple");

console.log(myArray);

/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/

// ! delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong
delete myArray[1];
console.log(myArray);

/* output
[ 'Cokelat', <1 empty item>, 22, true, 'Programming' ]
*/

//  ! Untuk menghapus elemen, gunakan metode splice()

myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);

/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/