// Cara untuk membuat Object pada javascript
// 1. Object Literal
let mahasiswa1 = {
    nama: 'Christian',
    energi: 10,
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    }
}
// 2. Function Declaration

// 3. Constructor Function