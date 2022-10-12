// const x =(str: string): number|string => {
//     return 13
// }

// interface IUser {
//     name: string,
//     age: number,
//     status: boolean
// }

// const user:IUser ={
//     name:'Max',
//     age:12,
//     status:false
// }

// const user: Partial<IUser> = {
//     status: false
// }

// console.log(user.name);

// interface IUser<T> {
//     name: string,
//     age: number,
//     status: boolean,
//     data:T
// }
//
// const user:IUser<number[]>={
//     name: 'Max',
//     age: 13,
//     status: false,
//     data:[1,2,3]
// }

// class User {
//
//     constructor(public id: number,private name:string, private age: number) {
//         this.id = id;
//         this.name = name;
//         this.age = age
//     }
// }
//
// const user = new User(15,'Max',12)
// console.log(user.id)
//
// const a = (str:string):void=>{
// //without return
// }
//
// interface  IShapeActions{
//     area:()=>number,
//     perimeter:()=>number
// }
//
// interface IGreeting{
//     hello:()=>void
// }
//
// class Rectangle implements IShapeActions, IGreeting {
//     constructor(private a: number, private b: number) {
//     }
//
//     area(): number {
//         return this.a * this.b
//     }
//
//     hello(): void {
//         console.log('Hi');
//     }
//
//     perimeter(): number {
//         return this.a * 2 + this.b * 2;
//     }
// }
//
// const rectangle = new Rectangle(5,10)
//
// console.log(rectangle.area());
//
// class Triangle implements  IShapeActions{
//     constructor(private a:number,private b:number, private c:number ) {
//     }
//
//     area():number {
//        return this.a * this.b * this.c
//     }
//
//     perimeter():number{
//         return this.c * 2 / this.b
//     }
// }
//
// const triangle = new Triangle(1,14,66)
//
// const shapes: IShapeActions[]=[new Triangle(1,14,66), new Triangle(1,4,4)]
//
// for(let shape of shapes){
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }

// const asd=():number => {
//     return 18
// }
//
// type MyFunction = ReturnType<typeof asd>
//
// const a:MyFunction = 15

 import {userService} from "./services";

userService.getAll()
    .then(value => value.data)


















