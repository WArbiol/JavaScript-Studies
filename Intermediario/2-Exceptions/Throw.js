class Weapon {
    constructor(identifier) {
        this.identifier = identifier
        this.shots =5
    }

    shoot() {
        if(this.shots > 0) {
            console.log("Bang!")
            this.shots -= 1
        } else { //precisamos instanciar o erro
            throw new Error("Arma " + this.identifier + " sem munição")
        }
    }

}

let myWeapon = new Weapon("101 1005")

console.log(myWeapon)

for(let i = 1; i <= 7; i+=1){
    myWeapon.shoot()
    console.log(myWeapon)
}

//O erro para o código