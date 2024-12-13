import _ from 'lodash' 
 
const str = 'thr brown jumps over the lazy dog.'

console.log(_.camelCase(str))
console.log(_.snakeCase(str))
console.log(_.kebabCase(str))