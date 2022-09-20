import toSlugCase from "to-slug-case";

export class Interest {
    id: string;
    name: string;

    constructor(name: string) {
        this.id = toSlugCase(name);
        this.name = name;
    }
}
