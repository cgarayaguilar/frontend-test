import React from 'react'
import ReactPaginate from 'react-paginate'

import './styles.css'

function Paginator({ pageCount = 5, onPageClick = () => {} }) {
  return (
    <ReactPaginate
      previousLabel={'← Previous'}
      nextLabel={'Next →'}
      pageCount={pageCount}
      onPageChange={onPageClick}
      containerClassName={'pagination'}
      previousLinkClassName={'pagination__link'}
      nextLinkClassName={'pagination__link'}
      disabledClassName={'pagination__link--disabled'}
      activeClassName={'pagination__link--active'}
    />
  )
}

export default React.memo(Paginator)
