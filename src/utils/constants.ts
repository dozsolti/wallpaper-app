import { Interest } from "../models/Interest";
import LanguageService from "../services/LanguageService";

export const NO_HEADER = { headerShown: false };

export const ALL_INTERESTS = [
  new Interest(LanguageService.t("interests.art")),
  new Interest(LanguageService.t("interests.business")),
  new Interest(LanguageService.t("interests.culture")),
  new Interest(LanguageService.t("interests.education")),
  new Interest(LanguageService.t("interests.environment")),
  new Interest(LanguageService.t("interests.health")),
  new Interest(LanguageService.t("interests.humanRights")),
  new Interest(LanguageService.t("interests.humanitarian")),
  new Interest(LanguageService.t("interests.humanities")),
  new Interest(LanguageService.t("interests.international")),
  new Interest(LanguageService.t("interests.law")),
  new Interest(LanguageService.t("interests.politics")),
  new Interest(LanguageService.t("interests.science")),
  new Interest(LanguageService.t("interests.social")),
  new Interest(LanguageService.t("interests.sport")),
  new Interest(LanguageService.t("interests.technology")),
  new Interest(LanguageService.t("interests.transport")),
  new Interest(LanguageService.t("interests.war")),
];

export const SEARCH_RESULT_COUNT = 10;
export const INTEREST_RESULT_COUNT = 3;

export const RANDOM_LOCK = () => Math.floor(Math.random() * 9999);
