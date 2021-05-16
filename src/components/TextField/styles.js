import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  margin-top: ${({ mt }) => (mt ? mt : 0)};
  margin-bottom: ${({ mb }) => (mb ? mb : 0)};
  margin-left: ${({ ml }) => (ml ? ml : 0)};
  margin-right: ${({ mr }) => (mr ? mr : 0)};
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const Label = styled.label`
  font-family: Be Vietnam;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};
  margin-bottom: 5px;
`

export const TextFieldContainer = styled.fieldset`
  //background: ${({ theme }) => theme.accent2};
  background-color: #eaeaea;
  border: none;
  border-radius: 22px;
  margin: 0;
  position: relative;
  width: 100%;

  input {
    font-family: Be Vietnam;
    font-weight: bold;
    font-size: 16px;
    line-height: 23px;
    color: ${({ theme }) => theme.primaryText};

    border: none;
    outline: none;
    padding: 8px 8px 8px 40px;
    background-color: transparent;
    width: 100%;

    &:focus ~ svg {
      color: ${({ theme }) => theme.primaryText};
    }

    &:placeholder {
      font-weight: 400;
      color: ${({ theme }) => theme.secondaryText};
      opacity: 1;
    }
  }

  svg {
    color: ${({ theme }) => theme.secondaryText};

    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`
