class Weapon {
    constructor(identifier) {
        this.identifier = identifier
        this.shots = 5
    }

    shoot() {
        if(this.shots > 0) {
            console.log("Bang!")
            this.shots -= 1
        } else { //precisamos instanciar o erro
            throw new Error("Arma " + this.identifier + " sem munição")
        }
    }

    reload () {
        this.shots = 5
        console.log("Recarregando a arma com mais 5 tiros")
    }

}

let myWeapon = new Weapon("101 1005")

console.log(myWeapon)

try {
    myWeapon.shoot()
    myWeapon.shoot()
    myWeapon.shoot()
    myWeapon.shoot()
    myWeapon.shoot()
    myWeapon.shoot() //Aqui será lançado o erro
} 
catch(err) { //o parametro do catch é um Error
    console.log(err.message)
    myWeapon.reload()
}
finally {
    console.log(myWeapon)
}

//O erro para o código