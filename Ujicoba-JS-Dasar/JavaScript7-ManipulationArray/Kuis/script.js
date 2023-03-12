var penumpang = ['Yohanes', undefined, 'Christian'];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for(var kursi = 0; kursi <= penumpang.length; kursi++) {
            if ( penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if(penumpang[i] === namaPenumpang) {
                console.log('maaf nama anda sama')
                return penumpang;
            } else if (i == penumpang.length -1){
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }    
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
    if(penumpang.length == 0) {
        console.log('Angkot masih kosong.');
        return penumpang;
    } else {
        for(var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] == undefined;
                return penumpang;
            } else if(i == penumpang.length-1) {
                console.log(namaPenumpang+ ' tidak ada di dalam angkot')
                return penumpang;
            }
        }
    } 
    return penumpang;
}