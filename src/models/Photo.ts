import { Author } from "./Author";

export class Photo {
    id: string;

    previewUrl: string;
    author: Author | null;

    constructor({
        id,
        previewUrl,
        author,
    }: {
        id: string;
        author: Author | null;
        previewUrl: string;
    }) {
        this.id = id;
        this.author = author;
        this.previewUrl = previewUrl;
    }
}
