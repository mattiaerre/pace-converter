const float2time = require('../src/float-2-time');

describe('float-2-time', () => {
  const scenarios = [
    {
      float: 4.0,
      time: '4:00.00'
    },
    {
      float: 5.5,
      time: '5:30.00'
    },
    {
      float: 10.25,
      time: '10:15.00'
    }
  ];

  scenarios.forEach((scenario) => {
    test(`expect ${scenario.float} to be ${scenario.time}`, () => {
      expect(float2time(scenario.float)).toBe(scenario.time);
    });
  });
});
