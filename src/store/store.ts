import {
  createStore,
  action,
  Action,
  createTypedHooks,
  Thunk,
  thunk,
  Computed,
  computed,
} from "easy-peasy";
import { Collection } from "../models/Collection";
import { Interest } from "../models/Interest";
import { Photo } from "../models/Photo";
import LanguageService from "../services/LanguageService";
import StorageService, { STORAGE_KEYS } from "../services/StorageService";
import { Appearance } from "react-native";
import { DEFAULT_THEME } from "../utils/constants";
import { ThemeColors, themes } from "../themes";

type Theme = keyof typeof themes;

interface CollectionsType {
  [collectionId: string]: Collection;
}
interface StoreModel {
  colors: Computed<StoreModel, ThemeColors>;

  theme: Theme;
  setTheme: Action<StoreModel, Theme>;

  interests: Interest[];
  _setInterests: Action<StoreModel, Interest[]>;
  updateInterests: Thunk<StoreModel, Interest[]>;
  loadSavedInterests: Thunk<StoreModel>;

  collections: CollectionsType;
  collectionsAsArray: Computed<StoreModel, Array<Collection>>;
  _setCollections: Action<StoreModel, CollectionsType>;
  updateCollections: Thunk<StoreModel, CollectionsType>;
  loadSavedCollections: Thunk<StoreModel>;
  deleteCollectionById: Thunk<StoreModel, string>;

  createCollection: Thunk<StoreModel, Collection>;
  togglePhotoInCollection: Thunk<
    StoreModel,
    { collection: Collection; photo: Photo }
  >;
  isPhotoInAnyCollection: Computed<StoreModel, (photo: Photo) => boolean>;
}

const store = createStore<StoreModel>({
  theme: Appearance.getColorScheme() ?? DEFAULT_THEME,
  setTheme: action((state, theme) => {
    state.theme = theme;
  }),

  colors: computed((state) => themes[state.theme]),

  interests: [],
  _setInterests: action((state, selectedInterests) => {
    state.interests = selectedInterests.sort(Interest.SORT_ALPHABETICAL);
  }),
  updateInterests: thunk(async (actions, selectedInterests) => {
    actions._setInterests(selectedInterests);
    await StorageService.setItem(STORAGE_KEYS.INTERESTS, selectedInterests);
  }),
  loadSavedInterests: thunk(async (actions) => {
    const savedInterests = await StorageService.getItem(
      STORAGE_KEYS.INTERESTS,
      []
    );
    actions._setInterests(savedInterests);
    return savedInterests.length !== 0;
  }),

  collections: {},
  collectionsAsArray: computed((state) =>
    Object.values(state.collections).sort(Collection.SORT_CHRONOLOGICALLY)
  ),
  _setCollections: action((state, collections) => {
    state.collections = collections;
  }),
  updateCollections: thunk(async (actions, collections) => {
    actions._setCollections(collections);
    await StorageService.setItem(STORAGE_KEYS.COLLECTIONS, collections);
  }),
  loadSavedCollections: thunk(async (actions) => {
    let savedCollections = await StorageService.getItem(
      STORAGE_KEYS.COLLECTIONS,
      {
        liked: new Collection({
          name: LanguageService.t("common.liked"),
          createdAt: 99999999999999,
          deletable: false,
        }), // create at Infinity because it has to be first in the lists.
      }
    );
    if (Object.values(savedCollections).length > 0) {
      savedCollections = Object.values(savedCollections).reduce(
        (t: CollectionsType, v: any) => {
          return {
            ...t,
            [v.id]: new Collection({
              ...v,
              photos: v.photos.map((p: any) => new Photo(p)),
            }),
          };
        },
        {}
      );
    }

    actions._setCollections(savedCollections);
  }),

  deleteCollectionById: thunk(async (actions, collectionId, helper) => {
    const collections = { ...helper.getState().collections };

    delete collections[collectionId];
    actions.updateCollections(collections);
  }),

  createCollection: thunk((actions, newCollection, helper) => {
    const collections = { ...helper.getState().collections };

    collections[newCollection.id] = newCollection;
    actions.updateCollections(collections);
  }),
  togglePhotoInCollection: thunk((actions, { collection, photo }, helper) => {
    const collections = { ...helper.getState().collections };

    if (collections[collection.id].hasPhoto(photo)) {
      collections[collection.id].removePhoto(photo);
    } else {
      collections[collection.id].addPhoto(photo);
    }

    actions.updateCollections(collections);
  }),

  isPhotoInAnyCollection: computed(
    (state) => (photo: Photo) =>
      Object.values(state.collections).findIndex((x) => x.hasPhoto(photo)) !==
      -1
  ),
});

const typedHooks = createTypedHooks<StoreModel>();

(window as any).myApp = { store };

export { store };
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
