import Image from 'next/image'
import NextLink from 'next/link'
import { AppBar, Toolbar, Typography, SvgIcon, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    marginLeft: theme.spacing(2),
    flexGrow: 1
  },
  logo: {
    '& svg path': {
      fill: 'red'
    }
  }
}))
export const HeaderBar = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <object type="image/svg+xml" data="/voyager.svg" className={classes.logo}>
          <Image src="/vercel.svg" width={100} height={64} />
        </object>
        <NextLink href="/">
          <Image src="/voyager.svg" width={100} height={64} />
        </NextLink>
        <Typography className={classes.title}>Voyager</Typography>
        <Typography>Hey Ho!</Typography>
      </Toolbar>
    </AppBar>
  )
}