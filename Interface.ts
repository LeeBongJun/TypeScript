// 인터페이스(Interface)

// 선택적 속서 - ?
// 읽기전용 속성 - readonly

// interface User {
//   name : string , 
//   readonly age : number ,
//   isValid? : boolean
// }
// 
// const heropy : User = {
//   name : 'Heropy' ,
//   age : 85 ,
//   isValid : true
// } 
// 
// heropy.isValid = false;
// heropy.age = 22
// 
// const neo : User = {
//   name : 'Neo' ,
//   age : 102
// }
 
// 함수 타입 - 호출 시그니처(Call Signature)

// interface GetName {
//   (message : string) : string
// }
// interface User {
//   name : string , 
//   readonly age : number ,
//   getName : (param : string) => string
// }
// 
// const heropy : User = {
//   name : 'Heropy' ,
//   age : 85 ,
//   getName(message : string) {
//     console.log(message)
//     return this.name
//   }
// }
// heropy.getName('Hello~')

// 인덱스 가능 타입 - 인덱스 시그니처(Index Signature)
// interface Fruits {
//   [item: number] : string
// }
// 
// const fruits : Fruits = ['Apple' , 'Banana' , 'Cherry']
// console.log(fruits)
// 
// interface User {
//   [key: string] : unknown
//   name : string
//   age : number
// }
// const heropy : User = {
//   name : 'Heropy' ,
//   age : 85
// }
// 
// heropy['isValid'] = true
// heropy['emails'] = ['thesecon@gmail.com' , 'test@gmail.com']
// console.log(heropy)

// 확장(상속)
interface UserA {
  name : string
  age : number
}
interface UserB extends UserA {
  isValid : boolean
}

const heroppy : UserA = {
  name : 'Herrpoy' ,
  age : 85 ,
}
const neo : UserB = {
  name : 'Neo' ,
  age : 102 ,
  isValid : true
}

interface FullName {
  firstName : string
  lastName : string
}
interface FullName {
  middleName : string
  lastName : boolean // 똑같은 이름을 가진 인터페이스는 가능하지만 속성 다른 타입은 X
}

const fulName : FullName = {
  firstName : 'Tomas' ,
  middleName : 'Sean' ,
  lastName : 'Connery'
}

