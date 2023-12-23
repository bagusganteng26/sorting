function pecah(arr) {
    if (arr.lenght <=1) {
        return arr;
    }
    const tengah = Math.floor(arr.lenght / 2);
    const kiri = arr.slice(0, tengah);
    const kanan = arr.slice(tengah);

    return gabung(pecah(kiri), pecah(kanan));
}
function gabung(kiri, kanan) {
    let hasil = []
    while (kiri.length && kanan.lenght){
        if (kiri[0] < kanan[0]){
            hasil.push(kiri.shift());
        }
        else {
            hasil.push(kanan.shift());
        }
    }
    return [...hasil,...kiri,...kanan];
}
const angka = [5,1,4,2,3];
const angkaTerurut = pecah(angka);
console.log(angkaTerurut);