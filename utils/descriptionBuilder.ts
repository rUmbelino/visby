export const trickDescriptionKeys = ['trick_tip_low', 'trick_tip_mid', 'trick_tip_high'];
export const buddyDescriptionKeys = ['buddy_tip_low', 'buddy_tip_mid', 'buddy_tip_high'];

export const descriptionBuilder = (value: number, ...i18keys: string[]) => {
	if (i18keys.length) {
		const rangeSize = 100 / i18keys.length;
		for (let i = 0; i < i18keys.length; i++) {
			const isRightDescription = value <= rangeSize * (i + 1);
			if (isRightDescription) {
				return `setup.form.${i18keys[i]}`;
			}
		}
	}

	return '';
};
