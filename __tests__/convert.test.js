const convert = require('../src/convert');
const units = require('../src/units');

describe('convert', () => {
  const scenarios = [
    {
      pace: '4:30',
      unit: units.MINKM
    },
    {
      pace: '4:40',
      unit: units.MINKM
    },
    {
      pace: '5:00',
      unit: units.MINKM
    },
    {
      pace: 12,
      unit: units.KMH
    },
    {
      pace: 13.6,
      unit: units.KMH
    },
    {
      pace: 3.96,
      unit: units.KMH
    },
    {
      pace: 6.12,
      unit: units.KMH
    },
    {
      pace: '8:00',
      unit: units.MINMI
    },
    {
      pace: '8:30',
      unit: units.MINMI
    },
    {
      pace: '7:30',
      unit: units.MINMI
    }
  ];

  scenarios.forEach((scenario) => {
    test(`when ${scenario.pace} ${scenario.unit} expect model to match snapshot`, () => {
      const model = convert(scenario.pace, scenario.unit);
      expect(model).toMatchSnapshot();
    });
  });

  test('unknown unit to throw error matching snapshot', () => {
    expect(() => { convert(1000, '$'); }).toThrowErrorMatchingSnapshot();
  });
});
