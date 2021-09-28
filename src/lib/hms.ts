import type { HMSStore } from '@100mslive/hms-video-store';
import { HMSReactiveStore } from '@100mslive/hms-video-store';
import { readable } from 'svelte/store';

type StateSelector<T extends object, U> = (state: T) => U;

const hms = new HMSReactiveStore();

export const _hmsStore = hms.getStore();
export const hmsActions = hms.getHMSActions();

export const selectorHmsStore = <StateType>(selector: StateSelector<HMSStore, StateType>) =>
	readable<StateType>(null, (set) => {
		const subscription = _hmsStore.subscribe((val) => set(val), selector);

		return () => subscription();
	});
