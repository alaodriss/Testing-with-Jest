const say = require('../say');

test('Say jest message', () => {
  expect(say()).toBe('Hello Jest');
});