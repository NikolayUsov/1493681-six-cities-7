export const isObject = (obj) => obj !== null && obj.constructor.name === 'Object';

export const deepClone = (obj) => {
  const cloneObject = {};
  for (const i in obj) {
    if (isObject(obj[i])) {
      cloneObject[i] = deepClone(obj[i]);
      continue;
    }
    cloneObject[i] = obj[i];
  }

  return cloneObject;
};
