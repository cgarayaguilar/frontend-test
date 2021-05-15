import styled, { css } from 'styled-components'

const ActiveStyles = css`
  cursor: pointer;
  background-color: ${({ theme }) => theme.accent2};
  color: ${({ theme }) => theme.primaryText};
`

export const Container = styled.section`
  margin-top: 64px;
`

export const Table = styled.table`
  border-spacing: 0;
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  width: 100%;
`

export const TableRowHeader = styled.tr`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  color: ${({ theme }) => theme.primaryText};
  text-align: left;
  white-space: nowrap;
  border-radius: 8px;
  padding: 20px;

  & > th {
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 20px 8px;
    vertical-align: top;
    background-color: ${({ theme }) => theme.background};
    border-bottom: 1px solid ${({ theme }) => theme.card};

    &:first-of-type {
      border-radius: 8px 0 0 0;
    }

    &:last-of-type {
      border-radius: 0 8px 0 0;
    }
  }
`

export const TableRow = styled.tr`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  text-align: left;
  white-space: nowrap;
  padding: 20px;
  ${({ selected }) => selected && `${ActiveStyles}`}

  &:hover {
    ${ActiveStyles}
  }
`

export const TableCell = styled.td`
  padding: 20px 8px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.card};

  color: ${({ isBold, theme }) =>
    isBold ? theme.accent : theme.secondaryText};
  font-weight: ${({ isBold }) => (isBold ? '700' : 'normal')};
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FilterContainer = styled.div`
  width: 500px;
  display: grid;
  grid-template-columns: 1fr 100px;
`
