import React from 'react'
import Paginator from 'components/Paginator'
import ExportExcel from 'components/ExportExcel'
import useCustomerTable from 'hooks/useCustomerTable.hook'

import {
  Container,
  TableRow,
  TableRowHeader,
  Table,
  TableCell,
  Header,
  FilterContainer,
  PaginatorContainer,
  TableContainer,
} from './styles'
import TextField from 'components/TextField'
import Typography from 'components/Typography'
import PageLoader from 'loaders/PageLoader'
import WithoutResults from 'components/Empty'

//Constante que indica los columnas que tendran un estilo especial
const idBolds = 'amount fee'

function AllCustomerTable() {
  const {
    rowActive,
    selectRow,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    keyword,
    updateKeyword,
    columns,
    filteredData,
    paginatorInfo,
    handlePageClick,
    isLoading,
  } = useCustomerTable()

  if (isLoading) return <PageLoader />

  return (
    <Container>
      <Header>
        <Typography variant="title2" value="All customers" />

        <FilterContainer>
          <TextField
            width={300}
            placeholder="Search by Name & Email"
            search={true}
            type="text"
            value={keyword}
            onChange={e => {
              updateKeyword({ value: e.target.value })
            }}
          />
          <ExportExcel columns={columns} data={filteredData} />
        </FilterContainer>
      </Header>
      <TableContainer>
        {Array.isArray(filteredData) && filteredData.length > 0 && (
          <Table {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroup => (
                <TableRowHeader {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </th>
                  ))}
                </TableRowHeader>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row)
                return (
                  <TableRow
                    onClick={() => selectRow({ id: row.id })}
                    selected={rowActive === row.id}
                    {...row.getRowProps()}
                  >
                    {row.cells.map(cell => {
                      return (
                        <TableCell
                          isBold={idBolds.includes(cell.column.id)}
                          {...cell.getCellProps()}
                        >
                          {cell.render('Cell')}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </tbody>
          </Table>
        )}

        {!Array.isArray(filteredData) ||
          (filteredData.length === 0 && <WithoutResults />)}
      </TableContainer>

      {Array.isArray(filteredData) && filteredData.length > 0 && (
        <PaginatorContainer>
          <Typography
            variant="title3"
            value={`Total: ${paginatorInfo?.totalRows || '0'}`}
            mr="24px"
          />
          <Paginator
            pageCount={paginatorInfo.totalPages}
            onPageClick={handlePageClick}
          />
        </PaginatorContainer>
      )}
    </Container>
  )
}

export default React.memo(AllCustomerTable)
