import styled, { css } from 'styled-components'

const ActiveStyles = css`
  background-color: ${({ theme }) => theme.accent2};
  color: ${({ theme }) => theme.primaryText};
`

export const Container = styled.section`
  margin-top: 64px;
  max-width: 100vw;
  overflow: auto;
`

export const Table = styled.table`
  border-spacing: 0;
  background-color: ${({ theme }) => theme.background};
  border-radius: 22px;
  width: 100%;
`

export const TableRowHeader = styled.tr`
  font-family: Be Vietnam;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: ${({ theme }) => theme.primaryText};
  text-align: left;
  white-space: nowrap;
  border-radius: 22px;
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
      border-radius: 22px 0 0 0;
    }

    &:last-of-type {
      border-radius: 0 22px 0 0;
    }
  }
`

export const TableRow = styled.tr`
  font-family: Be Vietnam;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: left;
  white-space: nowrap;
  padding: 20px;
  cursor: pointer;

  background-color: ${({ selected, theme }) =>
    selected ? theme.accent2 : '#fff'};

  color: ${({ selected, theme }) =>
    selected ? theme.primaryText : theme.secondaryText};

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
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: 868px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`

export const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 400px) {
    grid-template-columns: 1fr min-content;
  }

  @media screen and (min-width: 1400px) {
    justify-content: end;
    grid-template-columns: 500px min-content;
  }
  grid-gap: 8px;
`

export const PaginatorContainer = styled.div`
  display: flex;
  justify-content: center;
`
