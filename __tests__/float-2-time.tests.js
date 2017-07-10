const float2time = require('../src/float-2-time');

describe('float-2-time', () => {
  const scenarios = [
    {
      float: 4.0,
      time: '04:00.00'
    },
    {
      float: 5.5,
      time: '05:30.00'
    },
    {
      float: 10.25,
      time: '10:15.00'
    },
    {
      float: 15.152,
      time: '15:09.12'
    },
    {
      float: 9.804,
      time: '09:48.24'
    }
  ];

  scenarios.forEach((scenario) => {
    test(`expect ${scenario.float} to be ${scenario.time}`, () => {
      expect(float2time(scenario.float)).toBe(scenario.time);
    });
  });
});
