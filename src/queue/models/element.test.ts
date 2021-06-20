import {Element} from './element';
import {Uuid} from "./uuid";

test('Create Element for Queue', () => {
    const el: Element = Element.createElementQueue('https://test.ru');
    expect(el.getUrl()).toBe('https://test.ru');
    expect(el.getProxy()).toBeNull();
    expect(el.getUuid()).toBeInstanceOf(Uuid);
});