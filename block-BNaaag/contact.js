

/// async code 

console.log('first'); 

function set() {
  return setTimeout(() => console.log('sursj'),2000);
}
set();

console.log('last');