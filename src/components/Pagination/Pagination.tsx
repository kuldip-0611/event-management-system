import React from 'react'
import {useTranslation} from 'react-i18next'
import Pagination from 'react-bootstrap/Pagination'
import './pagination.css'
import {PaginationComponentProps} from './pagination.props'
import Previous from '../../assets/icons/Previous'
import Next from '../../assets/icons/Next'

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  totalPage,
  handlePageClick,
  active,
  setActive,
}) => {
  const {t} = useTranslation()
  const items = []

  items.push(
    <button
      className="border-0 bg-transparent"
      onClick={() => handlePageChange(active - 1)}
      type="button"
      aria-label={t('previous')}
      disabled={active === 1}
    >
      <Previous color={active === 1 ? '#bfbfbf' : '#000'} />
    </button>,
  )

  if (active > 3) {
    items.push(
      <Pagination.Item key={1} onClick={() => handlePageChange(1)}>
        1
      </Pagination.Item>,
    )
    items.push(<Pagination.Ellipsis key="first-ellipsis" />)
  }

  for (let number = Math.max(1, active - 1); number <= Math.min(totalPage, active + 1); number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>,
    )
  }

  if (active < totalPage - 2) {
    items.push(<Pagination.Ellipsis key="last-ellipsis" />)
    items.push(
      <Pagination.Item key={totalPage} onClick={() => handlePageChange(totalPage)}>
        {totalPage}
      </Pagination.Item>,
    )
  }

  items.push(
    <button
      className="border-0 bg-transparent"
      onClick={() => handlePageChange(active + 1)}
      type="button"
      aria-label={t('next')}
      disabled={active === totalPage}
    >
      <Next color={active === totalPage ? '#bfbfbf' : '#000'} />
    </button>,
  )

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPage) {
      handlePageClick(page)
      setActive(page)
    }
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  )
}

export default PaginationComponent
