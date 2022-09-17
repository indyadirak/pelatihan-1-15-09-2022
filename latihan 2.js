class Laptop
{
    constructor()
    {
        this.pilihan_tersimpan = []
    }

    pilihan(nomor)
    {
        if(nomor == 1)
        {
            console.log("anda memilih menggunakan Linux")
            this.pilihan_tersimpan.push(nomor)
        }
        else if(nomor == 2)
        {
            console.log("anda memilih menggunakan WIndows")
            this.pilihan_tersimpan.push(nomor)
        }
        else
        {
            console.log("mohon maaf, pilihan anda tidak ada di grup-bios")
            this.pilihan_tersimpan.push(nomor)
        }
    }
}

let bios = new Laptop
bios.pilihan(1)
console.log(bios.pilihan_tersimpan)