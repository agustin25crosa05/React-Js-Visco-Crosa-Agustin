//Aca voy a hacer la peticion asincrona a una API

import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';

const ItemList = () => {
    const [items, setItems] = useState([]);

    //Peticiones AJAX
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            //.then(json => console.log(json))
            .then(json => setItems(json))
    }, []);

  return( <div>
      {items.map((item)=>{
          return(<div>
            <Item data={item}/>
        </div>)
      })}
  </div>
  );
};

export default ItemList;
