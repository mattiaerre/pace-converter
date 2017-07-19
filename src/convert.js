const time2float = require('./time-2-float');
const float2time = require('./float-2-time');
const {
  minkm2kmh,
  minkm2minmi,
  minkm2mih,
  kmh2minkm,
  kmh2minmi,
  kmh2mih,
  minmi2minkm,
  minmi2kmh,
  minmi2mih
} = require('./converters');
const units = require('./units');

const convert = (pace, unit) => {
  if (unit === units.MINKM) {
    const minkm = time2float(pace);
    return {
      minkm: pace,
      kmh: minkm2kmh(minkm),
      minmi: float2time(minkm2minmi(minkm)),
      mih: minkm2mih(minkm)
    };
  }
  if (unit === units.KMH) {
    const kmh = Number.parseFloat(pace);
    return {
      minkm: float2time(kmh2minkm(kmh)),
      kmh: pace,
      minmi: float2time(kmh2minmi(kmh)),
      mih: kmh2mih(kmh)
    };
  }
  if (unit === units.MINMI) {
    const minmi = time2float(pace);
    return {
      minkm: float2time(minmi2minkm(minmi)),
      kmh: minmi2kmh(minmi),
      minmi: pace,
      mih: minmi2mih(minmi)
    };
  }
  throw new Error('unknown unit');
};

module.exports = convert;
