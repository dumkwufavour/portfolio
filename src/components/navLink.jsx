import Link from "next/link"

const NavLink = ({link}) => {
  return (
    <Link className='' href={link.url}>{link.title}</Link>
  )
}

export default NavLink