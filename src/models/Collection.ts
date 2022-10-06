import toSlugCase from "to-slug-case";
import { Photo } from "./Photo";

export class Collection {
    id: string;
    name: string;
    photos: Photo[];
    createdAt: number;

    deletable: boolean;

    constructor({
        name,
        photos = [],
        createdAt = Date.now(),
        deletable = true,
    }: {
        name: string;
        createdAt?: number;
        photos?: Photo[];
        deletable?: boolean;
    }) {
        this.id = toSlugCase(name);
        this.name = name;
        this.photos = photos;

        this.createdAt = createdAt;
        this.deletable = deletable;
    }

    get url() {
        return this.photos?.[0]?.url ?? "";
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
