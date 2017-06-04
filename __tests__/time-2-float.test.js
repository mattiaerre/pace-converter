const time2float = require('../src/time-2-float');

describe('float-2-time', () => {
  const scenarios = [
    {
      time: '4:00',
      float: 4.0
    },
    {
      time: '5:30',
      float: 5.5
    },
    {
      time: '10:15',
      float: 10.25
    }
  ];

  scenarios.forEach((scenario) => {
    test(`expect ${scenario.time} to be ${scenario.float}`, () => {
      expect(time2float(scenario.time)).toBe(scenario.float);
    });
  });
});
