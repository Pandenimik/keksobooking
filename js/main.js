function getRandomInteger(min, max) {
  if (min < 0 || max <= min) {
    throw 'Диапазон должен быть положительным и не может быть равен нулю!';
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}

// Чтобы ESLint не ругался на неиспользуемые функции, временно вызовите их по одному разу после объявления.
getRandomInteger(0, 10);

function getRandomFloat(min, max, precision) {
  if (min < 0 || max <= min) {
    throw 'Диапазон должен быть положительным и не может быть равен нулю!';
  }

  return (Math.random() * (max - min) + min).toFixed(precision); // Максимум и минимум включаются
}

// Чтобы ESLint не ругался на неиспользуемые функции, временно вызовите их по одному разу после объявления.
getRandomFloat(1, 2, 3);
