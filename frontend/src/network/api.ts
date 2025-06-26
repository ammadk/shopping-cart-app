import axios from 'axios';

export const getLists = () => axios.get('/api/lists');
export const createList = (name: string) => axios.post('/api/lists', { name });
export const getItems = (listId: number) => axios.get(`/api/lists/${listId}/items`);
export const createItem = (listId: number, name: string) => axios.post(`/api/lists/${listId}/items`, { name });
