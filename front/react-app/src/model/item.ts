export interface IItem{
  id : number
  priority : Priority
  description : string
  name : string
}

export enum Priority{
  NaoDefinido = 'NaoDefinido',
  Baixa = 'Baixa',
  Média = 'Média',
  Alta = 'Alta'
}