import React from 'react'
import { OutLineButton, LinkButton, FilledButton } from './styles'

export default function Button({
  variant = '',
  children,
  mt,
  mb,
  ml,
  mr,
  size,
  color,
  onClick = () => {},
  ...rest
}) {
  switch (variant.toLowerCase()) {
    case 'filled':
      return (
        <FilledButton
          mt={mt}
          mb={mb}
          ml={ml}
          mr={mr}
          size={size}
          color={color}
          onClick={onClick}
          {...rest}
        >
          {children}
        </FilledButton>
      )
    case 'outline':
      return (
        <OutLineButton
          mt={mt}
          mb={mb}
          ml={ml}
          mr={mr}
          size={size}
          color={color}
          onClick={onClick}
          {...rest}
        >
          {children}
        </OutLineButton>
      )
    case 'link':
      return (
        <LinkButton
          mt={mt}
          mb={mb}
          ml={ml}
          mr={mr}
          size={size}
          color={color}
          onClick={onClick}
          {...rest}
        >
          {children}
        </LinkButton>
      )

    default:
      return (
        <FilledButton
          mt={mt}
          mb={mb}
          ml={ml}
          mr={mr}
          size={size}
          color={color}
          {...rest}
        >
          {children}
        </FilledButton>
      )
  }
}
