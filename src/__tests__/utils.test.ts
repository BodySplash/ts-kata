import {input} from "./day1_input";

const example =
    `199
  200
  208
  210
  200
  207
  240
  269
  260
  263`;

const parseInput = (input: string) => {
    return input.split("\n")
        .map(v => v.trim())
        .map(v => Number.parseInt(v, 10))
        ;
}


function countIncreases(numbers: number[]) {
    return numbers.map<number>((value, index, values) => {
        return value < values[index + 1] ? 1 : 0;
    }).reduce((acc, v) => acc + v, 0);
}

describe('day 1', () => {
    describe('parser', () => {
        it('should parse', () => {
            const expected = [
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

            expect(parseInput(example)).toEqual(expected);

        });
    });

    describe("increase", () => {

        test("should been increased seven times", () => {
            const expected = 7;

            expect(countIncreases(parseInput(example))).toEqual(expected);
        })

        test("should been increased height times", () => {
            const newInput = [...parseInput(example), 264];
            const expected = 8;

            const result = countIncreases(newInput);

            expect(result).toEqual(expected);
        })

        test("should handle empty list", () => {
            const expected = 0;

            const result = countIncreases([]);

            expect(result).toEqual(expected);
        })

        test("should answer one thousand one hundred and thirty nine on real input", () => {
            const expected = 1139;

            const result = countIncreases(parseInput(input));

            expect(result).toEqual(expected);
        })

    })
});
