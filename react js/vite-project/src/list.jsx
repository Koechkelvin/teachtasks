
import React from 'react';
import Item from './item';

const List = ({ list }) => (
  <ul>
    {list.map(item => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

export default List;
