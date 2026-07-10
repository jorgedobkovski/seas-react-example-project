import React from 'react'
import ItemCard from './ItemCard'

export default function ItemList(props) {
  return (
    <div className="mb-4">
        <div className="row g-3">
          {props.items.map((item) => (
            <ItemCard
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