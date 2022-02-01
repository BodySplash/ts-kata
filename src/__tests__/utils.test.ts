
import {input} from './input_day1';


function count_increments_in_depths_measurements(depths_measurements: number[]) {
  const [, result] = depths_measurements.reduce(([previous, count]:[undefined|number, number], element)=> {

    if(typeof previous !== "undefined" && element> previous) {
      return [element, count+1];
    }
    return [element, count];

  }, [undefined, 0]);
  return result;
}


describe('Sonar sweep', () => {

  const sample = [
    199,
    200,
    208,
    210,
    200,
    207,
    240,
    269,
    260,
    263];


  it('do stuff', () => {

    const result = count_increments_in_depths_measurements(sample);

    expect(result).toEqual(7);

  });

  it('do for real', () => {
      const result = count_increments_in_depths_measurements(input);

      expect(result).toEqual(10);
  });

});
