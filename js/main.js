const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// Чтобы ESLint не ругался на неиспользуемые функции, временно вызовите их по одному разу после объявления.
getRandomPositiveInteger(0, 10);

const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;

  return +result.toFixed(digits);
};

// Чтобы ESLint не ругался на неиспользуемые функции, временно вызовите их по одному разу после объявления.
getRandomPositiveFloat(1, 2, 4);
