const initialState = { lists: [], items: [] };

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_LISTS_SUCCESS':
      return { ...state, lists: action.payload };
    case 'FETCH_ITEMS_SUCCESS':
      return { ...state, items: action.payload };
    default:
      return state;
  }
};