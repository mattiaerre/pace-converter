const pad2 = number => (number <= 9 ? `0${number}` : number);

const float2time = (float) => {
  const integer = Math.floor(float);
  const decimal = float % 1;
  const minutes = integer;
  const seconds = pad2(60 * decimal.toFixed(3));
  return `${minutes}:${seconds}`;
};

module.exports = float2time;
