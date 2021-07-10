const sum = (a, b) => a + b;
// eslint-disable-next-line import/prefer-default-export

const asyncFunc = (data) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (data) {
      resolve(data);
    } else {
      reject(new Error('err'));
    }
  }, 150);
});
export { sum, asyncFunc };
