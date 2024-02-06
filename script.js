alert("GAME TEBAK ANGKA \n pilih angka 1-10 \n kamu punya 3 kesempatan");

const angkaBenar = Math.floor(Math.random() * 10) + 1;

for (let nyawa = 3; nyawa >= 1; nyawa--) {

    const tebakUser = prompt("Masukkan tebakan angka");

    if (tebakUser == angkaBenar) {   // validasi check input benar
        alert(`tebakan anda betul! \n angka yang benar adalah ${angkaBenar}`);
        break;
    } else if (tebakUser > angkaBenar) { // validasi check input besar
        alert(`tebakan anda terlalu tinggi \n anda masih punya ${nyawa - 1} kesempatan`);
    } else if (tebakUser < angkaBenar) { // validasi check input kecil
        alert(`tebakan anda terlalu rendah \n anda masih punya ${nyawa - 1} kesempatan`);
    }

    if (nyawa ==1) {
        alert(`anda gagal! \n angka yang benar adalah ${angkaBenar}`);
    }
}