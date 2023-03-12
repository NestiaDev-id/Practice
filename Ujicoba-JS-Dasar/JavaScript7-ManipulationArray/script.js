// Manipulasi array

// 1. Menambah isi array
// var arr = [];
// arr[0] = 'Yohanes';
// arr[1] = 'Christian';
// arr[2] = 'Devano';
// arr[3] = 'Sumanto';
// arr[4] = 'Supri';

// console.log(arr);

// 2. Menghapus isi array
// var arr = ['Yohanes', 'Christian','Devano','Supri','Sumanto'];
// arr[2] = undefined;

// console.log(arr);
// ! tidak terhapus, hanya saja isi variabelnya digantikan dengan undefined

// 3. Menampilkan isi array
// var arr = ['Yohanes', 'Christian','Devano','Supri','Sumanto'];

// for (let i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' +(i+1)+ ' : '+arr[i]);
// }

// Method pada array
// 1. join
var arr = ['Yohanes', 'Christian','Devano','Supri','Sumanto'];
//! merubah isi array menjadi string kemudian akan ditampilkan
// console.log(arr.join(' - '));

// 2.push & pop
// ! push untuk mendorong atau memasukkan pada bagian akhir 
// ! pop untuk menghapus
// arr.push('Saka','Tono');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));


// 3. Unshift & Shift
// ! Unshift untuk menambah data paling depan dan shift menghapus data paling depan
// arr.unshift('Dio','Raden');
// arr.shift();
// console.log(arr.join(' - '));

// 4. Splice
// ! splice(indexawal, mauDihapusBerapa, elementBaru1, elementBaru2, ...)
// arr.splice(1.,0,'Makmur','Rafi');
// console.log(arr.join(' - '));

// 5. Slice
// slice (awak, akhir);
// var arr2 = arr.slice(1,3);
// console.log(arr.join(' - '));

// 6. forEach
// var listAngka = [2,3,5,1,8,7,6,9];
// var listMhs = ['Yohanes', 'Christian','Devano'];
// listAngka.forEach(function(e) {
//     console.log(e);
// });
// listMhs.forEach(function(e, i){
//     console.log('Mahasiswa ke-'+(i+1)+' adalah : '+e);
// })

// 7. map
// var listAngka = [2,3,5,1,8,7,6,9];
// var angka = listAngka.map(function(e) {
//     return e*5;
// });
// console.log(angka.join('-'));

// 8. Sort
// ! untuk mengurutkann anka
// var listAngka = [2,3,5,1,8,7,6,9];
// listAngka.sort(function(a,b){
//     return a-b;
// });
// console.log(listAngka.join('-'));

// 9. Filter & find
// ! untuk memfilter dan mencari angka
var listAngka = [2,3,5,1,8,7,6,9];
var angka = listAngka.filter(function(e) {
    return e > 5;
});
var angka2 = listAngka.find(function(e) {
    return e > 5;
});
console.log(angka);
console.log(angka2);