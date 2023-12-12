import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { buddyDescriptionKeys, descriptionBuilder, trickDescriptionKeys } from './descriptionBuilder';

export interface GameState {
	buddySkill: number;
	buddySkillDescription: string;
	trickComplexity: number;
	trickComplexityDescription: string;
}

const initialState: GameState = {
	buddySkill: 40,
	buddySkillDescription: descriptionBuilder(40, ...buddyDescriptionKeys),
	trickComplexity: 50,
	trickComplexityDescription: descriptionBuilder(50, ...trickDescriptionKeys),
};

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setBuddySkill: (state, action: PayloadAction<number>) => {
			state.buddySkill = action.payload;
			state.buddySkillDescription = descriptionBuilder(action.payload, ...buddyDescriptionKeys);
		},
		setTrickComplexity: (state, action: PayloadAction<number>) => {
			state.trickComplexity = action.payload;
			state.trickComplexityDescription = descriptionBuilder(action.payload, ...trickDescriptionKeys);
		},
	},
});

export const { setBuddySkill, setTrickComplexity } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
