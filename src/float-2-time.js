const pad2 = (integer) => {
  if (integer > 99) {
    throw new Error('the integer is greater than 99');
  }
  return integer <= 9 ? `0${integer}` : integer;
};

const float2time = (float) => {
  const integer = Math.floor(float);
  const decimal = float % 1;
  const minutes = pad2(integer);
  const seconds = pad2(60 * decimal);
  return `${minutes}:${seconds}`;
};

module.exports = float2time;
