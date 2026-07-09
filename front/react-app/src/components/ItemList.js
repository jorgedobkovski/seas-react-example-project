import React from 'react'
import Item from './Item'

export default function ItemList(props) {
  return (
    <div className="mb-4">
        <div className="row g-3">
          {props.items.map((item) => (
            <Item
                key={item.id}
                item={item}
                handleConfirmModal={props.handleConfirmModal}
                getItem={props.getItem}
            />
          ))}
        </div>
      </div>
  )
}