class User{
    constructor(username){
        this.username=username
        this.abhay=function(){
            return this.username
        }
    }
    logme(){
        console.log(`Username :${this.username}`)
    }
    static createId(){
        return`123` 
    }
}
const hitesh=new User('Abhay')
// hitesh.createId()=457
console.log(hitesh.abhay())
// console.log(hitesh.createId())

class Teacher extends User{
    constructor(username,email){
        super (username)
        this.email=email
    }
}
const iphone=new Teacher("Iphone","I@phone.com")
console.log(iphone.createId ())