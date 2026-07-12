import React from 'react'
import ItemCard from './ItemCard'
import { ItemListProps } from '../../model/itemProps'

const ItemList : React.FC<ItemListProps> = ({items, getItem, handleConfirmModal} : ItemListProps) => {
  return (
    <div className="mb-4">
        <div className="row g-3">
          {items.map((item) => (
            <ItemCard
                key={item.id}
                item={item}
                handleConfirmModal={handleConfirmModal}
                getItem={getItem}
            />
          ))}
        </div>
      </div>
  )
}

export default ItemList;