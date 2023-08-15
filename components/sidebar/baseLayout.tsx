import {ReactNode} from "react"

interface Props{
    children: ReactNode | ReactNode[];
}

export default function baseLayout({children}:Props) {
  return (
    <div>{children}</div>
  )
}
