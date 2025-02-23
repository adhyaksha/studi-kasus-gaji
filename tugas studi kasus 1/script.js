let gaji = 5000000
let bonusPerhari = 200000
let bonus20Hari = 50000
let i = 1

let absensi = prompt("berapa hari kamu masuk")
if (absensi <= 30) {
    let hasil = (gaji + bonusPerhari * absensi);
    alert(`gaji anda terdapat ${hasil}`)
    let tidakMasuk = prompt("berapa lama kamu tidak masuk")
    if (tidakMasuk >= 2) {
        var result = (hasil - gaji)
        alert(`gaji anda di  potong ${result}`)
    }

}else if (absensi >= 21) {
    let hasil = (gaji + bonusPerhari * absensi + bonus20Hari)
    alert(`horeeeee gaji anda di tambah `)
    let tidakMasuk = prompt("berapa lama kamu tidak masuk")
    if (tidakMasuk >= 2) {
        let hasil = (hasil - gaji)
        alert(`gaji anda di  potong ${hasil}`)
    }
}  