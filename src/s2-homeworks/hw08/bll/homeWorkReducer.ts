import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

const initState = [] as UserType[]


type InitStateType = typeof initState;

export const homeWorkReducer = (state: InitStateType = initState, action: ActionType): InitStateType => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if(action.payload === 'up') {
               return  [ ...state].sort((a, b) => a.name.localeCompare(b.name));
             } if (action.payload === 'down') {
               return [ ...state].sort((a, b) => b.name.localeCompare(a.name));
        }
            else{
                return state;
            }
        }

        case 'check': {

            return  [...state.filter(u => u.age > action.payload )].sort((a, b) => a.age - b.age);
            // need to fix
        }
        default:
            return state
    }
}
