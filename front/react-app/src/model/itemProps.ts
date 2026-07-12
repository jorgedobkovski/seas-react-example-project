import { IItem } from "./item"

export interface ItemListProps{
    items: IItem[]
    getItem : (id: number) => void
    handleConfirmModal : (id: number) => void
}

export interface ItemCardProps{
    key : number
    item: IItem
    getItem : (id: number) => void
    handleConfirmModal : (id: number) => void
}

export interface ItemFormProps{
  selectedItem : IItem,
  updateItem: (item : IItem ) => void,
  addItem: (item : IItem ) => void,
  cancelItem: () => void,
}
