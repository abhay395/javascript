class User {
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value.toLowerCase()
    }
}
const Hitesh=new User('Abhay@gmal','478')
console.log(Hitesh.email)