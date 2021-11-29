export default (object) => {
  let objectData = [];

  if (object && object.data) {
    objectData = object.data;
  }

  return objectData;
};
