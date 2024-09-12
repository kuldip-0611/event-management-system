import {AnyCnameRecord} from 'dns'

export interface SelectionProps {
  data: SelectData[]
  selectedId: number
  setSelectedId: (id: number) => void
}

export interface SelectData {
  id: number
  title: string
  icon?: any
}
