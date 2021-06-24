/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line import/prefer-default-export

export const isObject = (obj) => obj !== null && obj.constructor.name === 'Object';

export const deepClone = (obj) => {
  const cloneObject = {};
  for (const i in obj) {
    if (isObject(obj[i])) {
      cloneObject[i] = deepClone(obj[i]);
      // eslint-disable-next-line no-continue
      continue;
    }
    cloneObject[i] = obj[i];
  }

  return cloneObject;
};
