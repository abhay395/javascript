let myName='hitesh     '


// console.log(myName.length);

let myHeros=['thor','spiderman']

let heropower={
    thor:'hammer',
    spiderman:'sling',
    getSpiderPower:function(){
        console.log(`spidey power is ${this.spiderman}`)
    }
}
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objecte`)
}
// heropower.hitesh()
myHeros.hitesh()

// inheritancse
const User={
    name: "chai",
    email:'chaii@google.com'
}
const Teacher={
    makeVideo:true
}
const TeacherSupport={
    isAvailable:false
}
const TAsupport={
    makeAssignment:'Js assingment',
    fullTime:true,
    __proto__:TeacherSupport
}
Teacher.__proto__=User

//moder syntax
Ob 