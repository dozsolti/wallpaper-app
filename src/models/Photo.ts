import { Author } from "./Author";

export class Photo {
    id: string;

    previewUrl: string;
    author: Author;

    constructor({
        id,
        previewUrl,
        author,
    }: {
        id: string;
        author: Author;
        previewUrl: string;
    }) {
        this.id = id;
        this.author = author;
        this.previewUrl = previewUrl;
    }
}
