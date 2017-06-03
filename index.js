/* eslint-disable arrow-body-style */

const round3 = number => (Math.round(number * 1000) / 1000);

const subtract001 = (number) => {
  if (round3(number % 1) === 0.001) {
    return number - 0.001;
  }
  if (round3(number % 1) === 0.501) {
    return number - 0.001;
  }
  return number;
};

const add001 = (number) => {
  if (round3(number % 1) === 0.999) {
    return number + 0.001;
  }
  return number;
};

const combine = number => (add001(subtract001(round3(number))));

const KM_TO_MILES = 0.6214; // info: https://www.wolframalpha.com/input/?i=km+to+miles

const MINUTES_IN_AN_HOUR = 60;

const minkm2kmh = (minkm) => {
  return combine(MINUTES_IN_AN_HOUR / minkm);
};

const kmh2minkm = (kmh) => {
  return combine(MINUTES_IN_AN_HOUR / kmh);
};

const minkm2minmi = (minkm) => {
  return combine(minkm / KM_TO_MILES);
};

const minmi2minkm = (minmi) => {
  return combine(minmi * KM_TO_MILES);
};

const minkm2mih = (minkm) => {
  return combine((MINUTES_IN_AN_HOUR / minkm) * KM_TO_MILES);
};

const mih2minkm = (mih) => {
  return combine((MINUTES_IN_AN_HOUR / mih) * KM_TO_MILES);
};

const kmh2minmi = (kmh) => {
  return combine((MINUTES_IN_AN_HOUR / kmh) / KM_TO_MILES);
};

const minmi2kmh = (minmi) => {
  return combine((MINUTES_IN_AN_HOUR / minmi) / KM_TO_MILES);
};

const kmh2mih = (kmh) => {
  return round3(kmh * KM_TO_MILES);
};

const mih2kmh = (mih) => {
  return combine(mih / KM_TO_MILES);
};

module.exports = {
  minkm2kmh,
  kmh2minkm,
  minkm2minmi,
  minmi2minkm,
  minkm2mih,
  mih2minkm,
  kmh2minmi,
  minmi2kmh,
  kmh2mih,
  mih2kmh
};
