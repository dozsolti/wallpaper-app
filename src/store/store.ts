import { createStore, action, Action, createTypedHooks } from "easy-peasy";
import { Interest } from "../models/Interest";

interface StoreModel {
    interests: Interest[];
    setInterests: Action<StoreModel, Interest[]>;
}

export const store = createStore<StoreModel>({
    interests: [],
    setInterests: action((state, selectedInterests) => {
        state.interests = selectedInterests.sort(Interest.SORT_ALPHABETICAL);
    }),
});

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
