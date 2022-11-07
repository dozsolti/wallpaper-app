import LanguageService from "../services/LanguageService";

export class Interest {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  get name() {
    return LanguageService.t("interests." + this.id);
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
