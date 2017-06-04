const time2float = (time) => {
  const minutes = time.split(':')[0];
  const seconds = time.split(':')[1];
  const integer = parseInt(minutes, 10);
  const decimal = seconds / 60;
  return integer + decimal;
};

module.exports = time2float;
