var chocolateBars = ["hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(a, b){
  c = [b, ...a]
  return c
}

function destructivelyAddElementToBeginningOfArray(a,b){
  //a[0]=b;
  a.unshift(b);
  return a
}

function addElementToEndOfArray(a, b){
  a.push(b);
  return a
}

function destructivelyAddElementToEndOfArray(a,b){
  a = [a,...b]
  return a
}

function accessElementInArray(a,b){
  return a[b]
}

function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift();
  return a
}

function removeElementFromBeginningOfArray(a){
  return a.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(a){
  a.pop();
  return a
}