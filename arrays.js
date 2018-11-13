var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  return array = [element, ...array];
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray (array, element) {
  return array = [...array, element];
}

function destructivelyAddElementToEndOfArray (array, element) {
  return array.push(element);
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array
}

function removeElementFromBeginningOfArray (array) {
  return array.slice(1);
}

function destructivelyAddElementToEndOfArray (array) {
  array.pop();
  return array
}
