import { RANDOM_LOCK } from "../utils/constants";
import { Author } from "./Author";

export class Photo {
    id: string;

    previewUrl: string;
    author: Author;
    license: string;

    constructor({
        previewUrl,
        author,
        license,
    }: {
        author: Author;
        previewUrl: string;
        license: string;
    }) {
        this.author = author;
        this.previewUrl = previewUrl;
        this.id = this.previewUrl.split("/").pop() || RANDOM_LOCK() + "";
        this.license = license;
    }
}
