const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;

  return +result.toFixed(digits);
};

const getRandomLengthArrayOfUniqueValues = (uniqueValues) => {
  const maxLength = uniqueValues.length;
  const randomLength = getRandomPositiveInteger(1, maxLength);
  const randomArray = [];

  while (randomArray.length < randomLength) {
    const uniqueIndex = getRandomPositiveInteger(0, maxLength - 1);
    const uniqueValue = uniqueValues[uniqueIndex];

    if (randomArray.includes(uniqueValue)) {
      continue;
    }

    randomArray.push(uniqueValue);
  }

  return randomArray;
};

const makeCounter = (counterInitialValue) => {
  let currentCount = counterInitialValue;
  return () => currentCount++;
};

export {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getRandomLengthArrayOfUniqueValues,
  makeCounter
};
