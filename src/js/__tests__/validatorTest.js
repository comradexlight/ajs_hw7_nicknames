import Validator from '../validator';

test.each([
  ['name', true],
  ['name123a', true],
  ['name_123a', true],
  ['name-123a', true],
  ['name123a456a', true],
  ['1name', false],
  ['name1', false],
  ['name_', false],
  ['_name', false],
  ['-name', false],
  ['name-', false],
  ['имя', false],
  ['name!', false],
  ['name?', false],
  ['name*', false],
  ['name$', false],
])('Testing validateUsername method of Validator class with name: %s and expected result', (name, expected) => {
  const validToName = new Validator(name);
  expect(validToName.validateUsername()).toBe(expected);
});
