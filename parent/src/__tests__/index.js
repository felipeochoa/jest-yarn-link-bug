import { add42 } from '../index';

it("adds 42 to 2", function() {
    expect(add42(2)).toEqual(44);
});
