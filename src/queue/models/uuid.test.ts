import {Uuid} from "./uuid";

test('Get uuid', () => {
    const uuid: Uuid = new Uuid();
    expect(typeof uuid.getValue()).toBe('string');
});
