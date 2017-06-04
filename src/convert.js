const time2float = require('./time-2-float');
const float2time = require('./float-2-time');
const { minkm2kmh, minkm2minmi, minkm2mih } = require('./converters');

const convert = (pace, unit) => {
  if (unit === 'minkm') {
    return {
      minkm: pace,
      kmh: minkm2kmh(time2float(pace)),
      minmi: float2time(minkm2minmi(time2float(pace))),
      mih: minkm2mih(time2float(pace))
    };
  }
  throw new Error('unknown unit');
};

module.exports = convert;
