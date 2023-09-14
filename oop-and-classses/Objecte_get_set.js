const User={
    _email:'Abhay@kl.com',
    _pasword:'abc',
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}
const tea= Object.create(User)
console.log(tea)