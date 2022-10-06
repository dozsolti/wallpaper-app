import toSlugCase from "to-slug-case";
import { Photo } from "./Photo";

export class Collection {
    id: string;
    name: string;
    photos: Photo[];
    createdAt: number;

    constructor({
        name,
        createdAt,
        photos,
    }: {
        name: string;
        createdAt?: number;
        photos?: Photo[];
    }) {
        this.id = toSlugCase(name);
        this.name = name;
        this.photos = photos ? photos : [];

        this.createdAt = createdAt ? createdAt : Date.now();
    }

    get previewUrl() {
        return this.photos?.[0]?.previewUrl ?? "";
    }

    hasPhoto(photo: Photo): boolean {
        return this.photos.findIndex((p) => p.id == photo.id) != -1;
    }

    removePhoto(photo: Photo) {
        this.photos = this.photos.filter((p) => p.id != photo.id);
    }
    addPhoto(photo: Photo) {
        this.photos.push(photo);
    }

    static SORT_CHRONOLOGICALLY(a: Collection, b: Collection) {
        return b.createdAt.valueOf() - a.createdAt.valueOf();
    }
}
