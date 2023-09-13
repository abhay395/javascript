function multiply(num){
    return num*5
}
multiply.power=2
// console.log(multiply(5))
// console.log(multiply.power)
// console.log(multiply.prototype)

function createUser(username,price){
    this.username=username
    this.price=price
}
createUser.prototype.increment=function(){
    this.price++
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.price}`)
}
const chai=new createUser('chai',25)
const tea =new createUser('tea',250)
// console.log(tea)
// console.log(tea.increment)
tea.printMe()
