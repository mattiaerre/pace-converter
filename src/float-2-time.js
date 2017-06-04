const pad2 = integer => (integer <= 9 ? `0${integer}` : integer);

const float2time = (float) => {
  const integer = Math.floor(float);
  const decimal = float % 1;
  const minutes = integer;
  const seconds = pad2(60 * decimal);
  return `${minutes}:${seconds}`;
};

module.exports = float2time;
