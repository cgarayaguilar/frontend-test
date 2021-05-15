import PropTypes from 'prop-types'
import React from 'react'
import ReactExport from 'react-export-excel'
import { RiFileExcel2Fill as ExcelIcon } from 'react-icons/ri'
import { ExportButton } from './styles'

const ExcelFile = ReactExport.ExcelFile
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn

export default function ExportExcel({ columns, data }) {
  return (
    <ExcelFile
      element={
        <ExportButton>
          <ExcelIcon size={24} />
          Excel
        </ExportButton>
      }
    >
      <ExcelSheet data={data} name="Customers">
        {Array.isArray(columns) &&
          columns.map(column => (
            <ExcelColumn
              key={column.accessor}
              label={column.Header}
              value={column.accessor}
            />
          ))}
      </ExcelSheet>
    </ExcelFile>
  )
}

ExportExcel.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
}
