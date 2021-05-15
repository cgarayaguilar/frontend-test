import React, { useState, useMemo, useEffect } from 'react'
import { useTable } from 'react-table'
import { useQuery, gql } from '@apollo/client'
import { formatDistance } from 'date-fns'

const EMPTY_OBJECT = 0

const CUSTOMER_QUERY = gql`
  query ($page: Int) {
    stripeAllCustomerTable(perPage: 25, page: $page) {
      title
      subtitle
      helpinfo
      page
      perPage
      pages
      total
      docs {
        customer_id
        created
        name
        email
        phone
        country
        state
        city
        amount
        fee
        total_records
        currency
      }
    }
  }
`

export default function useCustomerTable() {
  const [customerData, setCustomerData] = useState([])
  const [paginatorInfo, setPaginatorInfo] = useState({
    totalPages: 1,
    totalRows: 1,
    rowsPerPage: 1,
    currentPage: 1,
  })

  const { loading, error, data, fetchMore } = useQuery(CUSTOMER_QUERY, {
    variables: {
      page: 1,
    },
  })

  const [isLoading, setIsLoading] = useState(loading)

  //Estado que gestiona la fila que se encuentra activa
  const [rowActive, setRowActive] = useState('')
  //Estado que gestiona la keyword mediante la cual se hara el filtro en la tabla
  const [keyword, setKeyword] = useState('')

  /**
   * @param  {String} {value} // recibe el valor de la keyword mediante la cual se filtraran los datos en la tabla
   * @return  {void}
   */
  const updateKeyword = ({ value }) => setKeyword(value)

  /**
   * @param  {Object} {element} // recibe el valor de la keyword mediante la cual se filtraran los datos en la tabla
   * @return  {Boolean} //Retorna true si el elemento que se le pasa es un objeto con datos
   */
  const isObject = element => {
    if (typeof element !== 'object') return false
    if (Object.keys(element).length === EMPTY_OBJECT) return false

    return true
  }

  const updatePaginator = ({ data }) => {
    if (!isObject(data)) return

    setPaginatorInfo({
      totalPages: data.pages,
      totalRows: data.total,
      rowsPerPage: data.perPage,
      currentPage: data.page,
    })
  }

  const updateTable = ({ data }) => setCustomerData(data)

  /**
   * @param  {String} {id} // recibe el id de la fila que se marcara como activa
   * @return  {void} =>setRowActive(id
   */
  const selectRow = ({ id }) => {
    console.log('Fila activa', id)
    setRowActive(id)
  }

  //Listado de columnas que se mostraran en la tabla
  const columns = React.useMemo(
    () => [
      {
        Header: 'DATE CREATED',
        accessor: 'created',
      },
      {
        Header: 'CUSTOMER ID',
        accessor: 'customer_id',
      },
      {
        Header: 'CUSTOMER NAME',
        accessor: 'name',
      },
      {
        Header: 'EMAIL',
        accessor: 'email',
      },
      {
        Header: 'PHONE',
        accessor: 'phone',
      },
      {
        Header: 'PAYMENTS',
        accessor: 'total_records',
      },
      {
        Header: 'LTR',
        accessor: 'amount',
      },
      {
        Header: 'FEE',
        accessor: 'fee',
      },
      {
        Header: 'COUNTRY',
        accessor: 'country',
      },
      {
        Header: 'STATE',
        accessor: 'state',
      },
      {
        Header: 'CITY',
        accessor: 'city',
      },
    ],
    []
  )

  //Filtrar los datos de los clientes segun el keyword ingresado
  const filteredData = useMemo(() => {
    if (!Array.isArray(customerData)) return []
    if (!keyword) return customerData

    return customerData.filter(customer => {
      return (
        String(customer.name).toLowerCase().includes(keyword.toLowerCase()) ||
        String(customer.email).toLowerCase().includes(keyword.toLowerCase())
      )
    })
  }, [customerData, keyword])

  //Obtenemos una instancia de la tabla
  const tableInstance = useTable({ columns, data: filteredData })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  const handlePageClick = ({ selected }) => {
    setIsLoading(true)

    const _currentPage = selected + 1

    try {
      fetchMore({
        variables: {
          page: _currentPage,
        },
      }).then(data => {
        if (!isObject(data)) return setIsLoading(false)

        const paginator = data.data.stripeAllCustomerTable

        const customers = data.data.stripeAllCustomerTable.docs.map(
          customer => ({
            ...customer,
            created: formatDistance(new Date(customer.created), new Date(), {
              addSuffix: true,
            }),
          })
        )

        updatePaginator({ data: paginator })

        updateTable({ data: customers })
      })
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!isObject(data)) return

    const paginator = data.stripeAllCustomerTable

    const customers = data.stripeAllCustomerTable.docs.map(customer => ({
      ...customer,
      created: formatDistance(new Date(customer.created), new Date(), {
        addSuffix: true,
      }),
    }))

    updatePaginator({ data: paginator })

    updateTable({ data: customers })
  }, [data])

  useEffect(() => {
    setIsLoading(loading)
  }, [loading])

  return {
    rowActive,
    selectRow,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    keyword,
    updateKeyword,
    loading,
    error,
    columns,
    filteredData,
    paginatorInfo,
    handlePageClick,
    isLoading,
  }
}
