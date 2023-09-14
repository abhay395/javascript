const discripter=Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(discripter)
// i am not change this pi value

const chai={
    name:'gingerChai',
    price:250,
    isAvailable:true,
    ak:function(){
        console.log(250)
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'))
Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: true,
    configurable: false

})
chai.name='aj'
console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai,'name'))
for (let [key,value] of Object.entries(chai) ) {
    if(typeof value!== 'function'){
        console.log(`${key}:${value}`)
    }
}