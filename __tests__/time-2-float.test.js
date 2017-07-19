const time2float = require('../src/time-2-float');
const scenarios = require('../__mocks__/scenarios');

describe('float-2-time', () => {
  scenarios.forEach((scenario) => {
    test(`expect ${scenario.time} to be ${scenario.float}`, () => {
      expect(time2float(scenario.time)).toBe(scenario.float);
    });
  });
});
