import { createContext, useContext } from 'react';
import { Activity } from './../models/activity';
import ActivityStore from './activityStore';
import CommonStore from './commonStore';

interface Store {

    activityStore: ActivityStore;
    commonStore: CommonStore;
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}