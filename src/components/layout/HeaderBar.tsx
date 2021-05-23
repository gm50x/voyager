import { useState } from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { AppBar, Toolbar, Button, makeStyles, Hidden, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { NavMenu } from '@@components'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  logo: {
    cursor: 'pointer'
  }
}))
export const HeaderBar = () => {
  const classes = useStyles()
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!isMenuOpen)

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Hidden mdUp>
          <IconButton onClick={toggleMenu} color="inherit">
            <MenuIcon />
          </IconButton>
        </Hidden>
        <NextLink href="/">
          <Image src="/voyager.svg" width={100} height={64} className={classes.logo} />
        </NextLink>
        <NavMenu isOpen={isMenuOpen} onClose={toggleMenu} />
        <Button variant="text" color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}