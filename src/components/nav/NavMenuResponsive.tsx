import { Drawer, Divider, makeStyles } from '@material-ui/core'
import NavMenuItem from './NavMenuItem'

import {
  Home as HomeIcon,
  Info as AboutIcon
} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  nav: {
    '& ul': {
      minWidth: '40vw',
      width: '40vw',
      justifyContent: ''
    },
    '& ul li': {
      marginTop: '1rem',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      fontSize: '1.5rem',
      marginBottom: '1rem'
    },
    '& ul li a': {
      transition: 'color 0.15s ease'
    },
    '& ul li a:hover': {
      color: theme.palette.secondary.dark,
      textDecoration: 'underline'
    },
    '& ul li a.active': {
      color: theme.palette.secondary.dark,
    }
  }
}))

export const NavMenuResponsive = ({ isOpen = false, onClose }) => {
  const classes = useStyles()
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose} className={classes.nav}>
      <ul>
        <li>
          <HomeIcon />
          <NavMenuItem href="/" text="Home" />
        </li>
        <Divider />
        <li>
          <AboutIcon />
          <NavMenuItem href="/about" text="About" />
        </li>
      </ul>
    </Drawer>
  )
}

export default NavMenuResponsive