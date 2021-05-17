import styled from 'styled-components'

export const Container = styled.section``

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 32px 0;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const Filter = styled.ul`
  margin-top: 24px;
  width: 200px;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
  text-align: center;
  background-color: #eaeaea;
  border-radius: 22px;
  padding: 2px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`
export const Option = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  font-family: Be Vietnam;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme, isActive }) => (isActive ? '#fff' : theme.secondaryText)};
  border-radius: 22px;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.accent : '#eaeaea'};

  cursor: pointer;
`
