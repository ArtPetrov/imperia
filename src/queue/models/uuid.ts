import {v4 as uuidV4} from "uuid";

export class Uuid {
    private readonly value: string;

    constructor() {
        this.value = uuidV4();
    }

    public getValue() {
        return this.value;
    };
}
