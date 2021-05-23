import { Hidden, makeStyles } from '@material-ui/core'
import NavMenuItem from './NavMenuItem'
import NavMenuResponsive from './NavMenuResponsive'

const useStyles = makeStyles(theme => ({
  nav: {
    flexGrow: 1,
    marginLeft: '2.5rem',
    '& ul': {
      display: 'flex'
    },
    '& ul li': {
      marginLeft: '.5rem',
      marginRight: '.5rem',
    },
    '& ul li a': {
      fontSize: '1.25rem',
      transition: 'color .15s ease'
    },
    '& ul li a.active': {
      color: theme.palette.secondary.dark
    },
    '& ul li a:hover': {
      color: theme.palette.secondary.dark,
      textDecoration: 'underline'
    }
  }
}))

export const NavMenu = ({ isOpen = false, onClose }) => {
  const classes = useStyles()

  return (
    <>
      <nav className={classes.nav}>
        <Hidden smDown>
          <ul>
            <li>
              <NavMenuItem href="/" text="Home" />
            </li>
            <li>
              <NavMenuItem href="/about" text="About" />
            </li>
          </ul>
        </Hidden>
        <Hidden mdUp>
          <NavMenuResponsive isOpen={isOpen} onClose={onClose} />
        </Hidden>
      </nav>
    </>
  )
}

export default NavMenu