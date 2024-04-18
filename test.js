import { muralianSchema } from './index.js';


let structure = { name: 'string', age: 'number', isStudent: 'boolean' };

let data = { name: 'John Doe', age: 25, isStudent: true };

let schema = await muralianSchema( structure );

let result = schema.validate( data );

console.log( result );