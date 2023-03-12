const getTxtNama = document.getElementById('lbNama');
const getTxtJumPil = document.getElementById('idJumlahPilihan');
const getButton = document.getElementById('idSimpan');


// ujicoba
const output1 = document.getElementById('txt1');
const output2  = document.getElementById('txt2');


getButton.addEventListener('click', () => {
    
    if (getTxtNama.value == "" || getTxtJumPil.value == "") {
        alert("Maaf data yang anda masukkan belum lengkap");
    } else {
        
        for (let index = 0; index < getTxtJumPil.value; index++) {
            let getPilihanJurusan = document.getElementById('pilihanJurusan');
            let countainer = document.getElementById('countainer');
            let varBaru = document.createElement('p');
            let teksBaru = document.createTextNode('Pilihan Item '+(index+1)+'');
            
            // select.appendChild(opSelect);
            // teksBaru.appendChild(select);
            
            
            varBaru.appendChild(teksBaru);        
            countainer.appendChild(getPilihanJurusan);
            countainer.appendChild(varBaru);
            
        }
        
        
        output1.innerHTML = "Nama : "+getTxtNama.value;
        output2.innerHTML = "Jumlah Pilihan : "+ getTxtJumPil.value;
    }
});

// getButton.addEventListener('click', function() {
//     const isiBaru = document.createElement('p');
//     const teksBaru = document.createTextNode('Pilihan -');
//     isiBaru.appendChild(teksBaru);
    
//     const countainer = document.querySelector('countainer#txt2');
//     countainer.appendChild(isiBaru);
// });


