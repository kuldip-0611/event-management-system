export interface PaginationComponentProps {
    totalPage: number
    handlePageClick: (page: number) => void
    active: number
    setActive: (page: number) => void
  }
  