import { setDifficulty } from './difficulty';

test('Should be string saying very easy', () => {
  expect(
    setDifficulty({ difficulty: { name: 'any text', index: 85 } }, 0),
  ).toStrictEqual({
    difficulty: { name: 'very easy', index: 0 },
  });
});

test('Should be string saying extreme', () => {
  expect(
    setDifficulty({ difficulty: { name: 'default', index: 0 } }, 7),
  ).toStrictEqual({
    difficulty: { name: 'extreme', index: 7 },
  });
});
