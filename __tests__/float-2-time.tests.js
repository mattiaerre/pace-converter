const float2time = require('../src/float-2-time');
const scenarios = require('../__mocks__/scenarios');

describe('float-2-time', () => {
  scenarios.forEach((scenario) => {
    test(`expect ${scenario.float} to be ${scenario.time}`, () => {
      expect(float2time(scenario.float)).toBe(scenario.time);
    });
  });
});
