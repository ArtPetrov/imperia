import {Queue, singletonQueue as queue1, singletonQueue as queue2} from './queue';
import {Element} from "./element";

test('Get count elements in queue', () => {
    const queue: Queue = new Queue();
    expect(queue.getCountElements()).toBe(0);
});

test('Get null from empty queue', () => {
    const queue: Queue = new Queue();
    expect(queue.getElement()).toBeNull();
});

test('Add two elements in Queue and get count elements now', () => {
    const queue: Queue = new Queue();
    queue.addElement('https://test.ru');
    queue.addElement('https://test2.ru');
    expect(queue.getCountElements()).toBe(2);
});

test('Get fist element from queue', () => {
    const queue: Queue = new Queue();
    const firstElement: Element = queue.addElement('https://test.ru');
    queue.addElement('https://test2.ru');
    expect(queue.getElement().getUuid()).toBe(firstElement.getUuid());
});

test('Remove element from queue by uuid and get new first element', () => {
    const queue: Queue = new Queue();
    const firstElement: Element = queue.addElement('https://test.ru');
    const secondElement: Element = queue.addElement('https://test2.ru');
    queue.removeElementByUuid(firstElement.getUuid());
    expect(queue.getElement().getUuid()).toBe(secondElement.getUuid());
});


test('Remove element from queue and get new first element', () => {
    const queue: Queue = new Queue();
    const firstElement: Element = queue.addElement('https://test.ru');
    const secondElement: Element = queue.addElement('https://test2.ru');
    queue.removeElement(firstElement);
    expect(queue.getElement()).toBe(secondElement);
});

test('Check singelton for example', () => {
    const firstElement: Element = queue1.addElement('https://test.ru');
    expect(queue2.getElement()).toEqual(firstElement);
})