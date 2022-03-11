function areaOfSquare(num){
  return num * num * num *num;
}

function areaOfRectangle(l, b){
  return l * b;
}

function areaOfCircle(r){
  let p = 3.14;
  return p * r * r;
}


module.exports = {
  areaOfSquare,
  areaOfRectangle,
  areaOfCircle
}