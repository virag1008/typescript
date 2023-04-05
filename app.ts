// ////////////////////////////////////////

// export{}
// class Devices {
//     electronics() {
//         console.log('samsung M30')
//     }
// }
// let Products = new Devices()
// Products.electronics()

// ////////////////////////////////////////

// export{}
// let a:string = 'hello';
// console.log(a)

// ////////////////////////////////////////

// export{}
// function pname(x:string,y:string) {
//     console.log( x + y)
// }
// pname('10','5')

// ////////////////////////////////////////

// let price:number
// price = 10.155
// console.log(price)

// ////////////////////////////////////////

// // //wrong way
// // let person : object = {
// //     name:"virag",
// //     age : 27
// // }
// // console.log(person.name) //show error

// // //correct way
// // let person :{name:string,age:number} = {
// //     name:"virag",
// //     age : 27
// // }
// // console.log(person.name) 

// // correct way //var type define karun...

// type objType = { name:string, age:number}
// let person : objType = {
//     name:"virag",
//     age : 27
// }
// console.log(person.name) 

// ////////////////////////////////////////

// // let arr = [1,2,'hi']
// // console.log(arr)

// // let arr:any[] = [1,2,'hi']
// // console.log(arr)

// // let arr:[ number,number,string,boolean ] = [1,2,'hi',true]
// // console.log(arr)

// let arr:string[] = ['js','ts','react']
// console.log(arr)
// arr[2]='python'
// console.log(arr)

// ////////////////////////////////////////

// // tuple is same as an array just advance writing method of array

// let arr : (string | number)[] = ['php','java',15,'js']
// console.log(arr)

// ////////////////////////////////////////

// enum subjects {
//     physics, chemistry, math , bio 
// }
// console.log( subjects)
// console.log(subjects.math)
// console.log( typeof subjects)

// ////////////////////////////////////////

// // union in ts [ OR(|) operator in ts ] 

// // let a : string | number = 'this value acept only string or number'

// function union (a:string | number , b: string | number ) {
//     // return a + b   // this is not acept in union type so we need to take it in if else condition 
//     if ( typeof a === 'number' &&   typeof b === 'number') {
//         return a + b
//     } else {
//         return a.toString() + b.toString() 
//     }
// }
// console.log(union(10,20))
// console.log(union('Virag','Jain'))

// ////////////////////////////////////////

// // Literals in ts [ OR(|) operator without giving dataType direct assign values ] 

// // let a : 'hello world' | 1008 = 'hello world'    // this value acept only 'hello world' or 1008

// function literal (a:string | number , b: string | number , type: 'string-Parameters' | 'number-Parameters' ) {
//     // return a + b   // this is not acept in literal type so we need to take it in if else condition 
//     if ( type === 'number-Parameters' ) {
//         return (+a) + (+b)
//     } else {
//         return a.toString() + b.toString() 
//     }
// }
// console.log(literal(10,20,'number-Parameters'))
// console.log(literal('Virag','Jain','string-Parameters'))


// ////////////////////////////////////////

// // Type Alias in ts [give common type to many variables ] 

// type varType = string | number | undefined

// let a: varType = 'virag'
// let b: varType = 2112.95
// let c: varType = undefined

// ////////////////////////////////////////

//  // function type ...it is the type of type of value return from that function

//  // function fun ( a: number, b:number ):number {
//  //    return a+b
//  // }
//  // console.log(fun(10,20))


// let a = 'hi'
// let b = 10
// let c = undefined

// function fun ():number {
//    return b;  // b is ok but a & c sathi error yenar
// }
// console.log(fun())

// // function cha type undefined sudhha asu shakto

// ///////////////////////////////////////
 
// // function void - function without return 

// function fun() { }
// fun()

// function fun1() { console.log('viod function') }
// fun1()

// ///////////////////////////////////////

 // // unknown type in ts 

// // let a:any;
// // a = 10;
// // a = 'hello'
 
// // let b:number;
// // b = a
// // console.log(b)  // typeof b is string ...aapn number define karun sudhha string geli so we use unknwon 

// let a:unknown;
// a = 'hello'
// a = 10;

// let b:number;
// // b = a
// // console.log(b) // error occared 
// if(typeof a === 'number'){
//     b = a
//     console.log(b) 
// }

// ///////////////////////////////////////

// function apiError(msg,code):never {
//     throw {message:msg , apicode : code};
// }
// console.log(apiError('server error', 500))

// ///////////////////////////////////////

// class Users {
//     name:''
//     marks : ''
//     grade = 'a'
//     couple(fname){
//         return `${fname} is not single`
//     }
// }
//  let user = new Users;  // constructor nahi mhanun call karaychi garsj nahi
//  console.log(user.couple('anil'))

// ///////////////////////////////////////

//  // private and public access modifiers.. 

// class Users {
//     private name = ''
//     setName(fname){
//          this.name = fname
//     }
//     getName(){
//         return (this.name , this.getNameLength())
//     }
//     private getNameLength(){
//         return this.name.length
//     }
// }
//  let user = new Users;  // constructor nahi mhanun call karaychi garsj nahi
//  user.setName('anil')
// //  user.name = 'virag'                //name private aahe so error yeto otherwise nahi yenar
//  console.log(user.getName())
//  // console.log(user.getNameLength())  // private function aahe so baherun access nahi karu shakat aat madhun access karta yeil ... error occared

// ///////////////////////////////////////

// // constructor and shorthand initialisation

// // old method
// class Users {
//      name = ''
//      batch = ''
//      age=0
//     constructor(fname , batch, age){
//          this.name = fname
//          this.batch = batch
//          this.age = age
//     }
//     getName(){
//         console.log(this.name, this.batch, this.age )
//     }
// }
//  let user = new Users( 'virag', 'mern', 27 ); 
//  user.getName()

//  // latest method 

// class Users {
//         constructor( public fname , public batch, public age){
//         }
//         getName(){
//             console.log(this.fname, this.batch, this.age )
//         }
//     }
//      let user = new Users( 'virag', 'mern', 27 ); 
//      user.getName()

// ///////////////////////////////////////

// // readonly vs private

// // class User{
// //     private name="virag"
// // }
// // let u1 = new User();
// // console.log(u1.name) // error

// class User{
//     readonly name="virag"
// }
// let u1 = new User();
// console.log(u1.name) // error

// ///////////////////////////////////////

// // inheritance in class

// class MakeEmail{
//     userMail(fname){
//         return `${fname}@gmail.com`
//     }
// }

// class User extends MakeEmail {
//     addUser(fname){
//         return `${fname} is added in user list.`
//     }
// }
// let user = new User;
// console.log(user.addUser('vir'))
// console.log(user.userMail('vir'))

// class Student extends MakeEmail {
//     studentId(fname){
//         return `${fname} is student of mern batch.`
//     }
// }
// let student = new Student()
// console.log(student.studentId('viru'))
// console.log(student.userMail('viru'))

// ///////////////////////////////////////
