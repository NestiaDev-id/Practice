 // ! Beberapa penjelasan agar mudah untuk dipahami
 function showInputFields() {
    // Mengambil inputan jumlah pilihan
    const numChoicesInput = document.getElementById("num-choices");
    const numChoices = parseInt(numChoicesInput.value);

    // Memvalidasi inputan jumlah pilihan
    if (isNaN(numChoices) || numChoices < 1) {
        // Jika inputan tidak valid, tampilkan pesan error
        const errorEl = document.createElement("p");
        errorEl.classList.add("text-red-500", "mb-2");
        errorEl.innerText = "Jumlah Pilihan harus diisi dengan angka positif!";
        numChoicesInput.insertAdjacentElement("afterend", errorEl);
        return;
    }

    // Membuat input field sejumlah yang diminta
    let output = "";
    for (let i = 1; i <= numChoices; i++) {
        output += `<label for="choice${i}" class="block text-gray-700 font-bold mb-2">Pilihan ${i}:</label>
<input type="text" id="choice${i}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"><br>`;
    }

    // Menambahkan tombol untuk menampilkan radio button
    output += `<button onclick="showRadioButtons()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">Kirim</button>`;

    // Menampilkan input field dan tombol di halaman
    document.getElementById("input-fields").innerHTML = output;
}


// Program ini untuk menampilkan pilihan radio button dengan nilai yang diinputkan oleh user

function showRadioButtons() {
    // Membuat array kosong untuk menyimpan pilihan
    const choices = [];

    // Membuat variabel isError dan menginisialisasinya dengan nilai false
    let isError = false;

    // Melakukan loop sebanyak nilai dari input dengan id "num-choices" yang di-parse sebagai integer
    for (let i = 1; i <= parseInt(document.getElementById("num-choices").value); i++) {
        // Mendapatkan elemen input dengan id "choice" + i dan memasukkannya ke dalam variabel choiceInput
        const choiceInput = document.getElementById(`choice${i}`);
        // Mendapatkan nilai dari elemen input dan menghapus whitespace di awal dan akhir string
        const choice = choiceInput.value.trim();
        // Jika input kosong, membuat elemen <p> dengan pesan kesalahan dan menambahkan kelas CSS, lalu menambahkannya ke dalam elemen input yang bersangkutan
        if (!choice) {
            // Set variabel isError menjadi true
            isError = true;
            // Membuat elemen <p> dengan pesan kesalahan
            const errorEl = document.createElement("p");
            errorEl.classList.add("text-red-500", "mb-2");
            errorEl.innerText = `Pilihan ${i} harus diisi!`;
            // Memasukkan elemen <p> setelah elemen input
            choiceInput.insertAdjacentElement("afterend", errorEl);
        } else {
            // Jika input tidak kosong, memasukkan nilai ke dalam array choices
            choices.push(choice);
        }
    }

    // Jika terdapat kesalahan pada input, keluar dari fungsi
    if (isError) {
        return;
    }

    // Membuat variabel output dan menginisialisasinya dengan string kosong
    let output = "";

    // Melakukan loop sebanyak elemen dalam array choices dan membangun output dengan menambahkan elemen radio button dan label ke dalamnya
    for (let i = 0; i < choices.length; i++) {
        output += `<div class="flex items-center mb-2">
    <input type="radio" name="choice" value="${choices[i]}" class="mr-2">
    <label for="${choices[i]}" class="text-gray-700 font-semibold">${choices[i]}</label>
</div>`;
    }


    // Menambahkan elemen button untuk menampilkan hasil ke dalam output
    output += `<button onclick="showResult()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">Kirim</button>`;

    // Mengganti konten dari elemen dengan id "input-fields" dengan output yang telah dibuat
    document.getElementById("input-fields").innerHTML = output;
}


function showResult() {
    const name = document.getElementById("name").value;
    // mengambil nilai input dengan id "name"
    const choices = [];
    const choicesEls = document.querySelectorAll('input[name="choice"]');


    // mengambil semua elemen input dengan name="choice"
    for (let i = 0; i < choicesEls.length; i++) {
        choices.push(choicesEls[i].value);
        // menyimpan nilai setiap elemen input ke dalam array "choices"
    }

    const choiceSelected = document.querySelector('input[name="choice"]:checked'); // mengambil elemen input yang dipilih
    // error trapping jika tidak ada pilihan yang dipilih
    if (!choiceSelected) {
        const errorEl = document.createElement("p");
        errorEl.classList.add("text-red-500", "mb-2");
        errorEl.innerText = "Anda harus memilih salah satu pilihan!";
        document.getElementById("output").innerHTML = "";
        document.getElementById("output").appendChild(errorEl);
        return;
    }
    const choice = choiceSelected ? choiceSelected.value : ""; // jika elemen input dipilih, ambil nilainya, jika tidak, kosongkan

    // membuat output teks
    const output = `Halo, nama saya ${name}, saya mempunyai sejumlah ${choices.length} pilihan hobi yaitu ${choices.join(", ")}, dan saya menyukai ${choice}.`;

    // menampilkan output teks di dalam elemen dengan id "output"
    const outputEl = document.getElementById("output");
    outputEl.innerHTML = output;

    // menambahkan class pada elemen "outputEl" untuk styling
    outputEl.classList.add("bg-white", "text-slate-800", "border", "border-gray-300", "px-4", "py-2", "rounded");
}