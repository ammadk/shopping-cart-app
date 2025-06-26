import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { fetchListsRequest, addListRequest, addItemRequest, fetchItemsRequest } from './store/actions';

const App = () => {
  const dispatch = useDispatch();
  const { lists, items } = useSelector((state: RootState) => state.cart);
  const [listName, setListName] = useState('');
  const [selectedListId, setSelectedListId] = useState<number | null>(null);
  const [itemName, setItemName] = useState('');

  useEffect(() => {
    dispatch(fetchListsRequest());
  }, [dispatch]);

  const handleAddList = () => {
    if (listName.trim()) {
      dispatch(addListRequest(listName));
      setListName('');
    }
  };

  const handleListSelect = (id: number) => {
    setSelectedListId(id);
    dispatch(fetchItemsRequest(id));
  };

  const handleAddItem = () => {
    if (selectedListId && itemName.trim()) {
      dispatch(addItemRequest(selectedListId, itemName));
      setItemName('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopping Lists</h1>
      <input value={listName} onChange={e => setListName(e.target.value)} placeholder="New List Name" />
      <button onClick={handleAddList}>Add List</button>
      <ul>
        {lists.map(list => (
          <li key={list.id} onClick={() => handleListSelect(list.id)}>
            {list.name}
          </li>
        ))}
      </ul>

      {selectedListId && (
        <>
          <h2>Items</h2>
          <input value={itemName} onChange={e => setItemName(e.target.value)} placeholder="New Item" />
          <button onClick={handleAddItem}>Add Item</button>
          <ul>
            {items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default App;