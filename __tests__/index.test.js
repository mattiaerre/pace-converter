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
  mih2kmh
} = require('../index');

const scenarios = [
  {
    minkm: 4.0,
    kmh: 15.0,
    minmi: 6.437,
    mih: 9.321
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
    minmi: 12.874,
    mih: 4.661
  }
];

describe('minkm2kmh', () => {
  scenarios.forEach((scenario) => {
    test(`expect ${scenario.minkm} minkm to be ${scenario.kmh} kmh`, () => {
      const minkm = scenario.minkm;
      const kmh = minkm2kmh(minkm);
      expect(kmh).toBe(scenario.kmh);
    });
  });
});

describe('kmh2minkm', () => {
  scenarios.forEach((scenario) => {
    test(`expect ${scenario.kmh} kmh to be ${scenario.minkm} minkm`, () => {
      const kmh = scenario.kmh;
      const minkm = kmh2minkm(kmh);
      expect(minkm).toBe(scenario.minkm);
    });
  });
});

describe('minkm2minmi', () => {
  scenarios.forEach((scenario) => {
    test(`expect ${scenario.minkm} minkm to be ${scenario.minmi} minmi`, () => {
      const minkm = scenario.minkm;
      const minmi = minkm2minmi(minkm);
      expect(minmi).toBe(scenario.minmi);
    });
  });
});

describe('minmi2minkm', () => {
  scenarios.forEach((scenario) => {
    test(`expect ${scenario.minmi} minmi to be ${scenario.minkm} minkm`, () => {
      const minmi = scenario.minmi;
      const minkm = minmi2minkm(minmi);
      expect(minkm).toBe(scenario.minkm);
    });
  });
});

describe('minkm2mih', () => {
  scenarios.forEach((scenario) => {
    test(`expect ${scenario.minkm} minkm to be ${scenario.mih} mih`, () => {
      const minkm = scenario.minkm;
      const mih = minkm2mih(minkm);
      expect(mih).toBe(scenario.mih);
    });
  });
});

describe('mih2minkm', () => {
  scenarios.forEach((scenario) => {
    test(`expect ${scenario.mih} mih to be ${scenario.minkm} minkm`, () => {
      const mih = scenario.mih;
      const minkm = mih2minkm(mih);
      expect(minkm).toBe(scenario.minkm);
    });
  });
});

describe('kmh2minmi', () => {
  scenarios.forEach((scenario) => {
    test(`expect ${scenario.kmh} kmh to be ${scenario.minmi} minmi`, () => {
      const kmh = scenario.kmh;
      const minmi = kmh2minmi(kmh);
      expect(minmi).toBe(scenario.minmi);
    });
  });
});

describe('minmi2kmh', () => {
  scenarios.forEach((scenario) => {
    test(`expect ${scenario.minmi} minmi to be ${scenario.kmh} kmh`, () => {
      const minmi = scenario.minmi;
      const kmh = minmi2kmh(minmi);
      expect(kmh).toBe(scenario.kmh);
    });
  });
});

describe('kmh2mih', () => {
  scenarios.forEach((scenario) => {
    test(`expect ${scenario.kmh} kmh to be ${scenario.mih} mih`, () => {
      const kmh = scenario.kmh;
      const mih = kmh2mih(kmh);
      expect(mih).toBe(scenario.mih);
    });
  });
});

describe('mih2kmh', () => {
  scenarios.forEach((scenario) => {
    test(`expect ${scenario.mih} mih to be ${scenario.kmh} kmh`, () => {
      const mih = scenario.mih;
      const kmh = mih2kmh(mih);
      expect(kmh).toBe(scenario.kmh);
    });
  });
});
