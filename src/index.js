// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (enumProperty) => {return enumProperty;};
const createNotEnumerableProperty = (notEnumProperty) => {Object.defineProperty(Object.prototype, notEnumProperty, {           
    enumerable: false,
    value: 'value'
  });
  return notEnumProperty;};
const createProtoMagicObject = () => {};
const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {
  var tmp = JSON.stringify({});
  return new Object(tmp);
};
const toBuffer = () => {};
const sortByProto = (array) =>  {
    array.sort((a, b) => {
      this.x = a;
      this.y = b;
    return this.x - this.y;
    })
    return array;
};;

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;