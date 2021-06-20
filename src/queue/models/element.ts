import {Uuid} from "./uuid";

export class Element {
    public uuid: Uuid;

    constructor(public url: string, public proxy: object | string | null = null) {
        this.uuid = new Uuid();
    }

    static createElementQueue(url: string, proxy: object | string | null = null) {
        return new Element(url, proxy);
    }

    public getUrl(): string {
        return this.url;
    }

    public getProxy(): object | string | null {
        return this.proxy;
    }

    public getUuid(): Uuid {
        return this.uuid;
    }
}