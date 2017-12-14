const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name){
  drivers.push("Ralph");
}
function destructivelyPrependDriver(name){
  drivers.unshift("Bob");
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function appendDriver(name){
  var newArray = drivers.slice();
  newArray.push("Broom");
  return newArray;
}

function prependDriver(name){
  var newArray = drivers.slice();
  newArray.unshift("Arnold");
  return newArray;
}
