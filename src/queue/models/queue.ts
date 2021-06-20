import {Element} from "./element";
import {Uuid} from "./uuid";

export class Queue {
    protected queue: Element[] = [];

    public getCountElements(): number {
        return this.queue.length;
    }

    public getElement(): Element | null {
        return this.queue.find(_ => true) ?? null;
    }

    public addElement(url: string, proxy: object | string | null = null): Element {
        const element = Element.createElementQueue(url, proxy);
        this.queue.push(element);
        return element;
    }

    public removeElementByUuid(uuid: Uuid): void {
        this.queue = this.queue.filter((element: Element) => element.getUuid() !== uuid)
    }

    public removeElement(element: Element): void {
        return this.removeElementByUuid(element.getUuid());
    }
}

export const singletonQueue: Queue = new Queue();