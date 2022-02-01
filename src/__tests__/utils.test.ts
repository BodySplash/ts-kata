import { input, input2 } from './input_day1';

function zip<T>(arrays: T[][]): T[][] {
  return arrays[0].map((_, i) => arrays.map((a) => a[i]));
}

function slice3<T>(array: T[]): T[][] {
  return zip([array.slice(0, -2), array.slice(1), array.slice(2)]);
}

function sum(array: number[]): number {
  return array.reduce((acc, elt) => acc + elt, 0);
}

function count_increments_in_depths_measurements(
  depths_measurements: number[],
) {
  const [, result] = depths_measurements.reduce(
    ([previous, count]: [undefined | number, number], element) => {
      if (typeof previous !== 'undefined' && element > previous) {
        return [element, count + 1];
      }
      return [element, count];
    },
    [undefined, 0],
  );
  return result;
}

function count_increments_in_depths_measurements_windows(
  depths_measurements: number[],
): number {
  return count_increments_in_depths_measurements(
    slice3(depths_measurements).map(sum),
  );
}

describe('Sonar sweep', () => {
  describe('Part 1', () => {
    const sample = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

    it('counts increments in depths measurements', () => {
      const result = count_increments_in_depths_measurements(sample);

      expect(result).toEqual(7);
    });

    it('do for real', () => {
      const result = count_increments_in_depths_measurements(input);

      expect(result).toEqual(1139);
    });

    it('do for real for josselin', () => {
      const result = count_increments_in_depths_measurements(input2);

      expect(result).toEqual(1226);
    });
  });

  describe('Part 2', () => {
    const sample = [607, 618, 618, 617, 647, 716, 769, 792];

    it('count the number of times the sum of measurements in this sliding window increases', () => {
      const result = count_increments_in_depths_measurements_windows(sample);

      expect(result).toBe(5);
    });

    it('do for real for josselin', () => {
      const result = count_increments_in_depths_measurements_windows(input2);

      expect(result).toEqual(1252);
    });
  });
});

describe('the functional belt', () => {
  it('slice array', () => {
    const array = [0, 1, 2, 3, 4];

    const slicedArray = slice3(array);

    expect(slicedArray).toEqual([
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4],
    ]);
  });

  it('zip two arrays', () => {
    const result = zip([
      [1, 2],
      [2, 3],
    ]);

    expect(result).toEqual([
      [1, 2],
      [2, 3],
    ]);
  });

  it('zip three arrays', () => {
    const result = zip([
      [1, 2],
      [2, 3],
      [3, 4],
    ]);

    expect(result).toEqual([
      [1, 2, 3],
      [2, 3, 4],
    ]);
  });
});
