const user={
    username:'Abhay',
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        //console.log('Got user details from database')
    // console.log(`UserName ${this.username}`)
    console.log(this)
    }
}
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

// +++++++++++++++++++++++++++++++++
//constructer Function

function User(username, loginCount,isloggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isloggedIn=isloggedIn
    this.greeting=function(){
        console.log(`Welocome ${this.username}`)
    }
    // return this
}
const user1=new User('Hitesh',12,true)
const user2= new User('Abhay' ,15, false)
console.log(user1.constructor)
// console.log(user2)
console.log(user2 instanceof User)
