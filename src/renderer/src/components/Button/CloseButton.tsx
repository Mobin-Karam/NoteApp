import { ComponentProps } from 'react'
import { IoMdClose } from 'react-icons/io'

export const CloseButton = ({ className }: ComponentProps<'span'>) => {
  return <IoMdClose className={className} />
}
