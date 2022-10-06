import axios from "axios";
import { Author } from "../models/Author";
import { Photo } from "../models/Photo";
import { SEARCH_RESULT_COUNT, INTEREST_RESULT_COUNT } from "../utils/constants";

class PhotoService {
    #width = 1080;
    #height = 1920;
    #baseUrl = "https://loremflickr.com/json";

    constructor() {
        this.init();
    }

    async init() {}

    getRandomByPageNumber(pageNumber: number) {
        const todaysTimestamp = new Date().setHours(0, 0, 0, 0);
        return todaysTimestamp + pageNumber;
    }

    /*"file": "https://loremflickr.com/cache/resized/65535_51958233162_042bdd1277_k_720_1280_nofilter.jpg",
        "filter": "",
        "height": 1280,
        "license": "cc-nc-sa",
        "owner": "Ian E. Abbott",
        "tagMode": "all",
        "tags": "all",
        "width": 720,*/
    getPhoto(
        keyword = "all",
        random = Math.floor(Math.random() * 9999)
    ): Promise<Photo | null> {
        return axios
            .get(
                `${this.#baseUrl}/${this.#width}/${
                    this.#height
                }/${keyword}?lock=${random}`
            )
            .then<Photo>((response) => {
                const result = response.data;

                return new Photo({
                    id: random + "",
                    author: new Author(result.owner),
                    previewUrl: result.file,
                    license: result.license,
                });
            })
            .catch((err) => {
                console.log({ err, message: err.message, code: err.code });
                return null;
            });
    }

    async getPhotos({
        keyword,
        length = INTEREST_RESULT_COUNT,
        pageNumber = 0,
        random = false,
    }: {
        keyword: string;
        length?: number;
        pageNumber?: number;
        random?: boolean;
    }): Promise<Photo[]> {
        return Promise.all(
            new Array(length)
                .fill(null)
                .map((_, i) =>
                    this.getPhoto(
                        keyword,
                        random
                            ? undefined
                            : this.getRandomByPageNumber(pageNumber) + i
                    )
                )
        ).then((photos) => photos.filter((p): p is Photo => p != null));
    }

    getPhotosByInterestId(interestId: string, pageNumber: number = 0) {
        return this.getPhotos({
            keyword: interestId,
            pageNumber,
        });
    }

    getPhotosBySearchQuery(query: string): Promise<Photo[]> {
        return this.getPhotos({
            keyword: query,
            length: SEARCH_RESULT_COUNT,
        });
    }

    getPhotosByAuthor() {}
}

export default new PhotoService();
