import { render, screen } from '@testing-library/react';
import App from './App';
import {compareVersionStrings} from './CompareVersionString';


test('should return false for Empty Strings', () => {
  const result = compareVersionStrings('', '');

  expect(result).toBe(false)
});

test('should return false for Strings with special characters', () => {
  const result = compareVersionStrings('@', '@');

  expect(result).toBe(false)
});

test('should return 1 for v1 > v2', () => {
  const result = compareVersionStrings('1.2', '1.1');

  expect(result).toBe(1)
});

test('should return -1 for v1 < v2', () => {
  const result = compareVersionStrings('1.1', '1.2');

  expect(result).toBe(-1)
});

test('should return 2 for when v1 = v2', () => {
  const result = compareVersionStrings('1.2', '1.2');

  expect(result).toBe(2)
});

test('should return 2 for when v1 = v2 but with trailing 0s', () => {
  const result = compareVersionStrings('1.2', '1.2.0.0.0');

  expect(result).toBe(2)
});

test('should return 1 for when v1 > v2, (when v1 contains lesser number of dots)', () => {
  const result = compareVersionStrings('1.2', '1.1.2.2.3');

  expect(result).toBe(1)
});

test('should return 1 for when v1 > v2, (when v2 contains lesser number of dots)', () => {
  const result = compareVersionStrings('1.2.4.5.5', '1.2');

  expect(result).toBe(1)
});

test('should return -1 for when v1 < v2, (when v1 contains lesser number of dots)', () => {
  const result = compareVersionStrings('1.1', '1.2.2.2');

  expect(result).toBe(-1)
});

test('should return -1 for when v1 < v2, (when v2 contains lesser number of dots)', () => {
  const result = compareVersionStrings('1.5.1.1', '1.6');

  expect(result).toBe(-1)
});
