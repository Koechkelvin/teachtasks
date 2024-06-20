
import React from 'react';

const Item = ({ item }) => (
  <li>
    <h2>{item.title}</h2>
    <p>{item.url}</p>
    <p>{item.author}</p>
    <p>{item.num_comments}</p>
    <p>{item.points}</p>
    
  </li>
);

export default Item;
