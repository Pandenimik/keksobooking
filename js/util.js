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

const numWord = (value, words) =>{
  value = Math.abs(value) % 100;
  const num = value % 10;
  if(value > 10 && value < 20) {return words[2];}
  if(num > 1 && num < 5) {return words[1];}
  if(num === 1) {return words[0];}
  return words[2];
};

export {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getRandomLengthArrayOfUniqueValues,
  makeCounter,
  numWord
};
