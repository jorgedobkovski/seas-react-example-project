import React from 'react'
import Item from './Item'

export default function ItemList(props) {
  return (
    <div className="mb-4">
        <h5 className="mb-3">Lista de Itens</h5>
        <div className="row g-3">
          {props.items.map((item) => (
            <Item
                key={item.id}
                item={item}
                removeItem={props.removeItem}
                getItem={props.getItem}
            />
          ))}
        </div>
      </div>
  )
}