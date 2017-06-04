const float2time = require('../src/float-2-time');

describe('float-2-time', () => {
  const scenarios = [
    {
      number: 4.0,
      time: '04:00'
    },
    {
      number: 5.5,
      time: '05:30'
    },
    {
      number: 10.25,
      time: '10:15'
    }
  ];

  scenarios.forEach((scenario) => {
    test(`expect ${scenario.number} to be ${scenario.time}`, () => {
      expect(float2time(scenario.number)).toBe(scenario.time);
    });
  });

  test('expect to throw', () => {
    expect(() => { float2time(100); }).toThrow();
  });

  test('expect not to throw', () => {
    expect(() => { float2time(50); }).not.toThrow();
  });
});
