import { ADD_ITEM, EDIT_ITEM, FETCH_ITEM, DELETE_ITEM } from './constant';
const url = "https://api.github.com/users/defunkt/repos";

const initialState = {
    items:[]
};
export default function contactReducer(state = initialState, action) {
    switch (action.type) {        
        case FETCH_ITEM:
           return { ...state, items: action.payload };           
        case DELETE_ITEM:
            const dataFilter = state.items.filter((item) =>item.id !== action.payload);
            return { ...state, items: dataFilter };
        case ADD_ITEM:
            return { ...state, items: [action.payload, ...state.items] };
        case EDIT_ITEM:
            const itemsEdited = state.items.map((item) =>{
                return item.id === action.payload.id ? {...action.payload} : item;
            })
            return { ...state, items: itemsEdited };
        default:
            return state;
    }
};
export async function fetchData(dispatch) {
    const result = await fetch(url);
    const data = await result.json();
    dispatch({ type: FETCH_ITEM, payload: data })
}