import { Author } from "./Author";

export class Photo {
    id: string;

    previewUrl: string;
    author: Author;
    license: string;
    
    constructor({
        id,
        previewUrl,
        author,
        license,
    }: {
        id: string;
        author: Author;
        previewUrl: string;
        license: string;
    }) {
        this.id = id;
        this.author = author;
        this.previewUrl = previewUrl;
        this.license = license;
    }
}
