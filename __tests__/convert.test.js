const convert = require('../src/convert');

describe('convert', () => {
  const scenarios = [
    {
      pace: '4:30',
      unit: 'minkm'
    }
  ];

  scenarios.forEach((scenario) => {
    test(`when ${scenario.pace} ${scenario.unit} expect model to match snapshot`, () => {
      const model = convert(scenario.pace, scenario.unit);
      expect(model).toMatchSnapshot();
    });
  });
});