/* eslint-disable arrow-body-style */

const round3 = number => (Math.round(number * 1000) / 1000);

const KM_TO_MILES = 0.6214; // info: https://www.wolframalpha.com/input/?i=km+to+miles

const MINUTES_IN_AN_HOUR = 60;

const minkm2kmh = (minkm) => {
  return round3(MINUTES_IN_AN_HOUR / minkm);
};

const kmh2minkm = (kmh) => {
  return round3(MINUTES_IN_AN_HOUR / kmh);
};

const minkm2minmi = (minkm) => {
  return round3(minkm / KM_TO_MILES);
};

const minmi2minkm = (minmi) => {
  return round3(minmi * KM_TO_MILES);
};

const minkm2mih = (minkm) => {
  return round3((MINUTES_IN_AN_HOUR / minkm) * KM_TO_MILES);
};

const mih2minkm = (mih) => {
  return round3((MINUTES_IN_AN_HOUR / mih) * KM_TO_MILES);
};

module.exports = { minkm2kmh, kmh2minkm, minkm2minmi, minmi2minkm, minkm2mih, mih2minkm };
