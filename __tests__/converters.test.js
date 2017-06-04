const {
  minkm2kmh,
  kmh2minkm,
  minkm2minmi,
  minmi2minkm,
  minkm2mih,
  mih2minkm,
  kmh2minmi,
  minmi2kmh,
  kmh2mih,
  mih2kmh,
  mih2minmi,
  minmi2mih
} = require('../src/converters');

describe('converters', () => {
  const scenarios = [
    {
      minkm: 4.0,
      kmh: 15.0,
      minmi: 6.437,
      mih: 9.321
    },
    {
      minkm: 4.661,
      kmh: 12.873,
      minmi: 7.5,
      mih: 8.0
    },
    {
      minkm: 5.0,
      kmh: 12.0,
      minmi: 8.046,
      mih: 7.457
    },
    {
      minkm: 6.0,
      kmh: 10.0,
      minmi: 9.656,
      mih: 6.214
    },
    {
      minkm: 7.0,
      kmh: 8.571,
      minmi: 11.265,
      mih: 5.326
    },
    {
      minkm: 8.0,
      kmh: 7.5,
      minmi: 12.873,
      mih: 4.661
    }
  ];

  describe('minkm2kmh', () => {
    scenarios.forEach((scenario) => {
      test(`expect ${scenario.minkm} minkm to be ${scenario.kmh} kmh`, () => {
        const minkm = scenario.minkm;
        const kmh = minkm2kmh(minkm);
        expect(Math.abs(kmh - scenario.kmh)).toBeLessThan(0.0011);
        expect(kmh).toMatchSnapshot();
      });
    });
  });

  describe('kmh2minkm', () => {
    scenarios.forEach((scenario) => {
      test(`expect ${scenario.kmh} kmh to be ${scenario.minkm} minkm`, () => {
        const kmh = scenario.kmh;
        const minkm = kmh2minkm(kmh);
        expect(Math.abs(minkm - scenario.minkm)).toBeLessThan(0.0011);
        expect(minkm).toMatchSnapshot();
      });
    });
  });

  describe('minkm2minmi', () => {
    scenarios.forEach((scenario) => {
      test(`expect ${scenario.minkm} minkm to be ${scenario.minmi} minmi`, () => {
        const minkm = scenario.minkm;
        const minmi = minkm2minmi(minkm);
        expect(Math.abs(minmi - scenario.minmi)).toBeLessThan(0.0011);
        expect(minmi).toMatchSnapshot();
      });
    });
  });

  describe('minmi2minkm', () => {
    scenarios.forEach((scenario) => {
      test(`expect ${scenario.minmi} minmi to be ${scenario.minkm} minkm`, () => {
        const minmi = scenario.minmi;
        const minkm = minmi2minkm(minmi);
        expect(Math.abs(minkm - scenario.minkm)).toBeLessThan(0.0011);
        expect(minkm).toMatchSnapshot();
      });
    });
  });

  describe('minkm2mih', () => {
    scenarios.forEach((scenario) => {
      test(`expect ${scenario.minkm} minkm to be ${scenario.mih} mih`, () => {
        const minkm = scenario.minkm;
        const mih = minkm2mih(minkm);
        expect(Math.abs(mih - scenario.mih)).toBeLessThan(0.0011);
        expect(mih).toMatchSnapshot();
      });
    });
  });

  describe('mih2minkm', () => {
    scenarios.forEach((scenario) => {
      test(`expect ${scenario.mih} mih to be ${scenario.minkm} minkm`, () => {
        const mih = scenario.mih;
        const minkm = mih2minkm(mih);
        expect(Math.abs(minkm - scenario.minkm)).toBeLessThan(0.0011);
        expect(minkm).toMatchSnapshot();
      });
    });
  });

  describe('kmh2minmi', () => {
    scenarios.forEach((scenario) => {
      test(`expect ${scenario.kmh} kmh to be ${scenario.minmi} minmi`, () => {
        const kmh = scenario.kmh;
        const minmi = kmh2minmi(kmh);
        expect(Math.abs(minmi - scenario.minmi)).toBeLessThan(0.0011);
        expect(minmi).toMatchSnapshot();
      });
    });
  });

  describe('minmi2kmh', () => {
    scenarios.forEach((scenario) => {
      test(`expect ${scenario.minmi} minmi to be ${scenario.kmh} kmh`, () => {
        const minmi = scenario.minmi;
        const kmh = minmi2kmh(minmi);
        expect(Math.abs(kmh - scenario.kmh)).toBeLessThan(0.0011);
        expect(kmh).toMatchSnapshot();
      });
    });
  });

  describe('kmh2mih', () => {
    scenarios.forEach((scenario) => {
      test(`expect ${scenario.kmh} kmh to be ${scenario.mih} mih`, () => {
        const kmh = scenario.kmh;
        const mih = kmh2mih(kmh);
        expect(Math.abs(mih - scenario.mih)).toBeLessThan(0.0011);
        expect(mih).toMatchSnapshot();
      });
    });
  });

  describe('mih2kmh', () => {
    scenarios.forEach((scenario) => {
      test(`expect ${scenario.mih} mih to be ${scenario.kmh} kmh`, () => {
        const mih = scenario.mih;
        const kmh = mih2kmh(mih);
        expect(Math.abs(kmh - scenario.kmh)).toBeLessThan(0.0011);
        expect(kmh).toMatchSnapshot();
      });
    });
  });

  describe('mih2minmi', () => {
    scenarios.forEach((scenario) => {
      test(`expect ${scenario.mih} mih to be ${scenario.minmi} minmi`, () => {
        const mih = scenario.mih;
        const minmi = mih2minmi(mih);
        expect(Math.abs(minmi - scenario.minmi)).toBeLessThan(0.0011);
        expect(minmi).toMatchSnapshot();
      });
    });
  });

  describe('minmi2mih', () => {
    scenarios.forEach((scenario) => {
      test(`expect ${scenario.minmi} minmi to be ${scenario.mih} mih`, () => {
        const minmi = scenario.minmi;
        const mih = minmi2mih(minmi);
        expect(Math.abs(mih - scenario.mih)).toBeLessThan(0.0011);
        expect(mih).toMatchSnapshot();
      });
    });
  });
});
