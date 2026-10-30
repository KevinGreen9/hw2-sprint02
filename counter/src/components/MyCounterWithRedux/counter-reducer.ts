
export type CounterState = {
    value: number
    startValue: number
    maxValue: number
    isApplied: boolean
}

const initialState: CounterState = {value: 0, startValue: 0, maxValue: 5,  isApplied: false};

    type ActionsType =
| {type: 'increment'}
| {type: 'reset'}
| {type: 'apply_settings'; payload: {max: number; start: number}}




export const counterReducer = (state = initialState, action: ActionsType):CounterState => {
    switch (action.type) {
        case 'increment':
            return {...state, value: state.isApplied && state.value < state.maxValue ? state.value + 1 : state.value
            }
        case 'reset': {
            return {...state, value: state.startValue};
        }
        case 'apply_settings': {
            return {...state,
                maxValue: action.payload.max,
                startValue: action.payload.start,
                value: action.payload.start,
                isApplied: true, }
        }
        default:
            return state
            }
        }


