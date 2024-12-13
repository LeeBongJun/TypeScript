// 제네릭(Generic)
/// 함수

interface Obj {
  x : number
}
type Arr = [number, number]

function toArray<T>(a : T , b : T) {
  return [a,b]
}

console.log(
  toArray<string>('Neo' , 'Anderson') ,
  toArray<number>(1, 2)               ,
  toArray<boolean>(true, false)       ,
  toArray<Obj>({x : 1} , {x:2})       ,
  toArray<Arr>([1,2] , [3,4])
)




