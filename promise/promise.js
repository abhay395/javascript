// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 1')
//         resolve()
//     },2000)
// }).then(function(){
//     console.log('async 1 resole')
// })
const PromiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 1')
        resolve()
    }, 1000)
})

PromiseOne.then(function () {
    console.log('async 1 resole')
})
const PromiseTwo = new Promise(function (resole, reject) {
    setTimeout(function () {
        console.log('Async Task2');
        resole({ Name: 'Abhay', Email: 'abhayparja@gmail.com' })
    }, 1000)
})

PromiseTwo.then(function (user) {
    console.log('Async Task 2 resole')
    console.log(user)
})

const Promisethree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ userName: 'hetesh', Password: 123 })
        } else {
            reject('Error :somthing went wrong')
        }
    }, 1000)
})
Promisethree
    .then((user) => {
        console.log(user);
        return user.userName;
    })
    .then((userName) => {
        console.log(userName);
    })
    .catch((error) => {
        console.log(error)
    }).finally(() => {
        console.log('the promise is ether resolve of rejected')
    })
const PromiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ userName: 'javscripte', Password: 123 })
        } else {
            reject('Error :js went wrong')
        }
    }, 1000)
})
async function consumePromiseFive(){
    try {
        const respnse= await PromiseFive
    console.log(respnse)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//     const data= await response.json()
//     console.log(data)
//     } catch (error) {
//         console.log('Error',error)
//     }
// }
// getAllUser()
fetch('https://jsonplaceholder.typicode.com/users')
.then((respnse)=>{
    return respnse.json()
})
.then((data)=>{
    console.log(data)
})
.catch(()=>{
    console.log('Error')
})
.finally()