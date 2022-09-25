import axios from "axios";
import { Author } from "../models/Author";
import { Photo } from "../models/Photo";

class PhotoService {
    #width = 1080;
    #height = 1920;
    #baseUrl = "https://loremflickr.com/json";

    constructor() {
        this.init();
    }

    async init() {}

    /*"file": "https://loremflickr.com/cache/resized/65535_51958233162_042bdd1277_k_720_1280_nofilter.jpg",
        "filter": "",
        "height": 1280,
        "license": "cc-nc-sa",
        "owner": "Ian E. Abbott",
        "tagMode": "all",
        "tags": "all",
        "width": 720,*/
    getPhoto(random = Math.floor(Math.random() * 9999)): Promise<Photo | null> {
        return axios
            .get(
                `${this.#baseUrl}/${this.#width}/${
                    this.#height
                }/all?lock=${random}`
            )
            .then<Photo>((response) => {
                const result = response.data;

                return new Photo({
                    id: random + "",
                    author: new Author(result.owner),
                    previewUrl: result.file,
                });
            })
            .catch((err) => {
                console.log({ err, message: err.message, code: err.code });
                return null;
            });
    }

    getPhotos({ length } = { length: 3 }): Promise<Photo[]> {
        return new Promise(async (resolve) => {
            const result = [];
            for (let i = 0; i < length; i++) {
                const r = await this.getPhoto();
                if (r) result.push(r);
            }
            resolve(result);
        });
    }

    getPhotosByInterest(interest: string) {}

    getPhotosBySearchQuery(query: string) {}

    getPhotosByAuthor() {}
}

export default new PhotoService();