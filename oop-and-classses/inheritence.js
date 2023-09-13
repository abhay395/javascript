class User{
    constructor(UserName){
        this.UserName=UserName
    }
    logMe(){
        console.log(`User Name is ${this.UserName}`)
    }
}
class Teacher extends User{
    constructor(UserName,email,password){
        super (UserName)
        this.email=email
        this.password=password
    }
    addCours(){
        console.log(`New course was added by ${this.UserName}`)
    }
}

const chai=new Teacher('Hitesh','Hetesh@gmial.com',452)
chai.addCours()
const tea=new User('Raju')
tea.logMe()
chai.logMe()
console.log(chai instanceof Teacher)