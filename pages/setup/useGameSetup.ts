import { useEffect, useState } from "react"

interface UseRangeArgs {
    initialValue: number
    getDescription: (value: number) => string;
}

type UseRangeReturn = [number, (value: number) => void, string]

const useRangeProps = (args: UseRangeArgs): UseRangeReturn => {
    const { initialValue, getDescription } = args
    const [value, setValue] = useState<number>(initialValue)
    const [description, setDescription] = useState('')

    useEffect(() => {
        setDescription(getDescription(value))
    }, [value])

    return [value, setValue, description]
}

const descriptionBuilder = (value: number, ...i18keys: string[]) => {
    if (i18keys.length) {
        const rangeSize = 100 / i18keys.length
        for (let i = 0; i < i18keys.length; i++) {
            const isRightDescription = value < (rangeSize * (i + 1))
            if (isRightDescription) {
                return `setup.form.${i18keys[i]}`
            }
        }
    }

    return ''
}

export const useGameSetup = () => {
    const [trickComplexity, setTickComplexity, skillTrickDescription] = useRangeProps({
        initialValue: 40,
        getDescription: (value: number) => {
            return descriptionBuilder(value, 'buddy_tip_low', 'buddy_tip_mid', 'buddy_tip_high')
        }
    })

    const [buddySkill, setBuddySkill, buddySkillDescription] = useRangeProps({
        initialValue: 60,
        getDescription: (value: number) => {
            return descriptionBuilder(value, 'trick_tip_low', 'trick_tip_mid', 'trick_tip_high')
        }
    })

    return {
        buddySkill, setBuddySkill, buddySkillDescription,
        trickComplexity, setTickComplexity, skillTrickDescription
    }

}