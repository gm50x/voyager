import { useRouter } from 'next/router'
import NextLink from 'next/link'

export const NavMenuItem = ({ href, text }) => {
  const router = useRouter()

  const classes = []
  if (router.pathname === href) {
    classes.push('active')
  }

  return (
    <NextLink href={href}>
      <a className={classes.join()}>
        {text}
      </a>
    </NextLink>
  )
}

export default NavMenuItem