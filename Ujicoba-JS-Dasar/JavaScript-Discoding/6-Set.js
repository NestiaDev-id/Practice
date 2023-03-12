// ! Set juga bersifat unik dan tidak ada duplikasi. 
const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);

/* output
Set(3) { 1, 4, 6 }
*/

// ! pada program diatas terdapat beberapa angka
// ! yang duplikat, dengan menggunakan set akan
// ! secara otomatis membuang angka tersebut
// ! Untuk menambahkan data kedalam Set kita bisa menggunakan add()

numberSet.add(5);
numberSet.add(6);
numberSet.add(10);
numberSet.add(6);
// ! add hanya benerima satu element saja, nilai yang duplikat akan diabaikan

console.log(numberSet);

/* output
Set(5) { 1, 4, 6, 5, 10 }
*/