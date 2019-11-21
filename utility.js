// ---------------------------map on two lists-----------------------------
const mapOnTwoLists = function(mapper, list1, list2) {
  let length = Math.min(list1.length, list2.length);
  let mappedList = [];
  for (let index = 0; index < length; index++) {
    mappedList.push(mapper(list1[index], list2[index]));
  }
  return mappedList;
};

//----------------------partial Fucntion-----------------------------
const createPartialFunction = function(action, firstArguement) {
  return function(...restArguements) {
    return action(firstArguement, ...restArguements);
  };
};

//--------------------------------combine function------------

const combine = function(action1, action2) {
  return function(...argument) {
    return action2(action1(...argument));
  };
};

//------------------------------reduce----------------------------

const reduce = function(reducer, list, initialContext) {
  if (initialContext) {
    return list.reduce(reducer, initialContext);
  }

  return list.reduce(reducer);
};

//---------------------------partition--------------------------

const isDiffProperty = function(property, val1, val2) {
  return property(val1) != property(val2);
};

const partition = function(property, list) {
  let result = [];
  const partitionProcessor = function(element) {
    if (
      result.length == 0 ||
      isDiffProperty(property, result.slice(-1)[0][0], element)
    ) {
      result.push([element]);
    } else {
      result.slice(-1)[0].push(element);
    }
  };
  list.forEach(partitionProcessor);
  return result;
};

//--------------------------zip--------------------------------

const zip = function(list1, list2) {
  const length = Math.min(list1.length, list2.length);
  const zippedArray = [];
  for (index = 0; index < length; index++) {
    zippedArray.push([list1[index], list2[index]]);
  }
  return zippedArray;
};
//--------------------------cycle--------------------------------

const cycle = function(list, cycles) {
  let newList = [];
  for (let index = 0; index < cycles; index++) {
    newList.push(list[index % list.length]);
  }
  return newList;
};
//----------------------------iterator---------------------------

const iterator = function(action, val, times) {
  if (times <= 0) {
    return Val;
  }
  return iterator(action, action(val), times - 1);
};
//----------------------------export---------------------------

exports.cycle = cycle;
exports.zip = zip;
exports.map2 = mapOnTwoLists;
exports.createPartialFunction = createPartialFunction;
exports.combine = combine;
exports.reduce = reduce;
exports.iterator = iterator;
