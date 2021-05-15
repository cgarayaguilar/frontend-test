import styled from 'styled-components'

export const ExportButton = styled.button`
  cursor: pointer;
  margin-left: 8px;
  border: none;
  outline: none;
  border-radius: 8px;
  color: #fff;
  background: ${({ theme }) => theme.green};
  display: flex;
  align-items: center;
  padding: 14px 20px;
  font-size: 18px;
  font-weight: 700;

  & svg {
    margin-right: 16px;
  }
`
