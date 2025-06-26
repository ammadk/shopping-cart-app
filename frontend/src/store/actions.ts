export const fetchListsRequest = () => ({ type: 'FETCH_LISTS_REQUEST' });
export const fetchListsSuccess = (lists: any[]) => ({ type: 'FETCH_LISTS_SUCCESS', payload: lists });
export const addListRequest = (name: string) => ({ type: 'ADD_LIST_REQUEST', payload: name });
export const addItemRequest = (listId: number, name: string) => ({ type: 'ADD_ITEM_REQUEST', payload: { listId, name } });
export const fetchItemsRequest = (listId: number) => ({ type: 'FETCH_ITEMS_REQUEST', payload: listId });
export const fetchItemsSuccess = (items: any[]) => ({ type: 'FETCH_ITEMS_SUCCESS', payload: items });