import styled, { css } from 'styled-components'

const Primitive = css`
  font-family: Be Vietnam;
  font-style: normal;
  font-weight: 400;
  margin-top: ${({ mt }) => (mt ? mt : 0)};
  margin-bottom: ${({ mb }) => (mb ? mb : 0)};
  margin-left: ${({ ml }) => (ml ? ml : 0)};
  margin-right: ${({ mr }) => (mr ? mr : 0)};
`

export const Title = styled.h1`
  ${Primitive}
  font-weight: bold;
  font-size: 2.2em;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};

  @media (min-width: 680px) {
    font-size: 3em;
    line-height: 64px;
  }

  @media (min-width: 850px) {
    font-size: 56px;
  }
`
export const Title2 = styled.h2`
  ${Primitive}
  font-weight: bold;
  font-size: 40px;
  line-height: 44px;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};
`

export const Title3 = styled.h3`
  ${Primitive}
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: ${({ color, theme }) => (color ? color : theme.primaryText)};
`
export const Link = styled.h3`
  ${Primitive}
  font-weight: bold;
  font-size: 16px;
  color: ${({ color, theme }) => (color ? color : theme.accent)};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const Link2 = styled.h4`
  ${Primitive}
  font-weight: bold;
  font-size: 14px;
  color: ${({ color, theme }) => (color ? color : theme.accent)};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const Body = styled.p`
  ${Primitive}
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${({ color, theme }) => (color ? color : theme.secondaryText)};

  @media (min-width: 680px) {
    font-size: 16px;
    line-height: 26px;
  }
`

export const Caption = styled.span`
  ${Primitive}
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: ${({ color, theme }) => (color ? color : theme.secondaryText)};
`

export const Caption2 = styled.span`
  ${Primitive}
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: ${({ color, theme }) => (color ? color : theme.secondaryText)};
`
