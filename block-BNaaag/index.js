console.log('node');

console.time('task');
for(i=0; i <10000000; i++){ 
}

console.timeEnd('task');

console.log('last');

let bff = Buffer.alloc(10);
bff.write('Welcome to Buffer');

console.log(bff.toString());
