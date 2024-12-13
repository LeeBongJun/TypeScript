// 클래스

// 접근 제어자(Access Modifires)
// public   - 어디서나 자유롭게 접근 가능, 클래스 바디에서 생략 가능
// proteced - 나와 파생 된 후손 클래스 내에서 접근 가능
// private  - 내 클레스에서만 접근 가능

class UserA {
  public first : string = ''
  public last : string = ''
  public age : number = 0

  constructor(first : string , last : string , age : number) {
    this.first = first
    this.last = last
    this.age = age
  }

  getAge() {
    return `${this.first} ${this.last} ${this.age}`
  }
}

class UserB extends UserA {
  getAge() {
    return `${this.first} ${this.last} ${this.age}`
  }
}

class UserC extends UserB {
  getAge() {
    return `${this.first} ${this.last} ${this.age}`
  }
}

const neo = new UserA('Neo' , "Anderson" , 102)
console.log(neo.first)
console.log(neo.last)
console.log(neo.age)

