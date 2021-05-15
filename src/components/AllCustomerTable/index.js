import React from 'react'
import ErrorComponent from 'components/Error'
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
} from './styles'
import TextField from 'components/TextField'
import Typography from 'components/Typography'
import PageLoader from 'loaders/PageLoader'

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
      <Typography variant="title" value="All customers" mb="8px" />
      <Header>
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

        <Paginator
          pageCount={paginatorInfo.totalPages}
          onPageClick={handlePageClick}
        />
      </Header>

      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <TableRowHeader {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
    </Container>
  )
}

export default React.memo(AllCustomerTable)
