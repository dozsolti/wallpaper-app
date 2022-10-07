import { Interest } from "../models/Interest";

export const NO_HEADER = { headerShown: false };

export const ALL_INTERESTS = [
  new Interest("Art"),
  new Interest("Business"),
  new Interest("Culture"),
  new Interest("Education"),
  new Interest("Environment"),
  new Interest("Health"),
  new Interest("Human rights"),
  new Interest("Humanitarian"),
  new Interest("Humanities"),
  new Interest("International"),
  new Interest("Law"),
  new Interest("Politics"),
  new Interest("Science"),
  new Interest("Social"),
  new Interest("Sport"),
  new Interest("Technology"),
  new Interest("Transport"),
  new Interest("War"),
];

export const SEARCH_RESULT_COUNT = 10;
export const INTEREST_RESULT_COUNT = 3;

export const RANDOM_LOCK = () => Math.floor(Math.random() * 9999);
