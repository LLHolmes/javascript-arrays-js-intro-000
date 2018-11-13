var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  return array = [element, ...array]
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  return array.unshift(element)
}
