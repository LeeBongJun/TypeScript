// 함수 - 명시적 this

interface Cat {
  name : string
  age : number
}

const cat : Cat = {
  name : 'Lucy' ,
  age : 3
}

function hello(message : string) {
  console.log(`Hello ${this.name}, ${message}`)
}

hello.call(cat , 'You are pretty awesome!')