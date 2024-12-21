// function DeleUser(userId){//создание функции конструктора
//     //rhis={}
//     this.type="DELETE-USER"
//     this.payload={
//         userId:userId
//     }
//     //return this
// }
//
// const action1=new DeleUser(1122)//обязательно исп-ть NEW
// const action2=new DeleUser(2222)//обязательно исп-ть NEW
// console.log(action1)
// console.log(action2)
//--------------------------------------------

class DeleteUserAction{//аналог функции конструктора, но уже с помощью класса
    constructor(userId){
        this.type="DELETE-USER";
        this.counter=0
        this.payload={
            userId:userId
        }
    }
    hello(){
        this.counter++
        console.log(`I am ${this.payload.userId} my counter=${this.counter}`)
    }
}
const deleteUserAction1=new DeleteUserAction(1212)
const deleteUserAction2=new DeleteUserAction(1313)
deleteUserAction1.hello()
deleteUserAction1.hello()
deleteUserAction1.hello()
deleteUserAction1.hello()
deleteUserAction1.hello()
deleteUserAction2.hello()
deleteUserAction2.hello()

//---------------------------------------------------
// function helloFoo() {
//    console.log(`I am ${this.name} from ${this.site}`)
// }
// const userFabric=(name)=>{
//     const user={
//         name:name,
//         site:'it-inc',
//         dateOfBirth:new Date(1998,1,2),
//         hello:helloFoo
//     }
//     return user
// }
// const user1=userFabric("DIMA");
// user1.hello()