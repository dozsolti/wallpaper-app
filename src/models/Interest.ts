import toSlugCase from "to-slug-case";

export class Interest {
  id: string;
  name: string;

  constructor(name: string) {
    this.id = toSlugCase(name);
    this.name = name;
  }

  static SORT_ALPHABETICAL(a: Interest, b: Interest) {
    if (!a) {
      return 1;
    }
    if (!b) {
      return -1;
    }
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  }
}
