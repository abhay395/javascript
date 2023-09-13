// class user{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password
//     }
     
//     encryptPassword(){
//         return `abc${this.password}`
//     }
//     changeUsername(){
//         return`${this.username.toUpperCase()}`
//     }
// }
// const chai=new user('Abhay','Abhay@gmail.com','123')
// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())

//behind the scene
function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password
}
User.prototype.encryptPassword=function(){
    return `abc${this.password}`
}
User.prototype.changeUsername=function(){
    return`${this.username.toUpperCase()}`
}
const chai=new User("abhay","abhay@gmail.com",478)
console.log(chai.changeUsername())
console.log(chai.encryptPassword())