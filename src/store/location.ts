import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { locations } from '@constants';
import type { Location, LocationKey } from '@/types';

const DEFAULT_LOCATION_KEY: LocationKey = 'work';
const DEFAULT_LOCATION = locations[DEFAULT_LOCATION_KEY];

type LocationStore = {
    activeLocation: Location;
    setActiveLocation: (location: Location) => void;
    resetActiveLocation: () => void;
};

const useLocationStore = create<LocationStore>()(
    immer(set => ({
        activeLocation: DEFAULT_LOCATION,
        setActiveLocation: (location: Location) =>
            set(state => {
                state.activeLocation = location;
            }),

        resetActiveLocation: () =>
            set(state => {
                state.activeLocation = DEFAULT_LOCATION;
            }),
    })),
);

export default useLocationStore;
