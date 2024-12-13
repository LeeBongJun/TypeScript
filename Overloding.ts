// 함수 - 오버로딩(Overloding)

// 1)
function add1(a: string, b: string) {
  return a + b
}

function add2(a: number , b: number) {
  return a + b
}
add1('hello' , 'world~')
add2(1, 2)
add1('hello' , 2)
add2('hello' , 2)

// 2)
function add(a: string, b: string) : string   // 타입 선언
function add(a: number , b: number ) : number // 타입 선언
function add(a: any , b : any) {              // 함수 구현
  return a + b
}

add('hello' , 'world~')
add(1, 2)
add('hello' , 2)
add('hello' , 2)