var mhs = {
    nama : "Yohanes Christian Devano",
    nrp : '2893719',
    email : 'christian@gmail.com',
    jurusan : 'Teknik Informatika'
}

var mhs2 = {
    nama : "Christian Mariano",
    nrp : '832109381',
    email : 'mariano@gmail.com',
    jurusan : 'Teknik Mesin'
}

function buatOpjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatOpjectMahasiswa('Supriyanto', '28092091', 'supri@gmail.com', 'Matematika');


// constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}
var mhs4 = new Mahasiswa('TONO', '208918', 'tono@gmail.com', 'Bahasa Indonesia');