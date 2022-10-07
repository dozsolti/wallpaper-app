import { RANDOM_LOCK } from "../utils/constants";
import { Author } from "./Author";

export class Photo {
  id: string;

  url: string;
  author: Author;
  license: string;

  constructor({
    url,
    author,
    license,
  }: {
    author: Author;
    url: string;
    license: string;
  }) {
    this.author = author;
    this.url = url;
    this.id = this.url.split("/").pop() || RANDOM_LOCK() + "";
    this.license = license;
  }
}
