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

interface GetName {
  (message : string) : string
}
interface User {
  name : string , 
  readonly age : number ,
  getName : GetName
}

const heropy : User = {
  name : 'Heropy' ,
  age : 85 ,
  getName(message : string) {
    console.log(message)
    return this.name
  }
}
heropy.getName('Hello~')

// 인덱스 가능 타입 - 인덱스 시그니처(Index Signature)
// 확장(상속)