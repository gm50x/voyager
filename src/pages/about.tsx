import Head from 'next/head'

import { Container, Typography, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  messageContainer: {
    minHeight: 'calc(100vh - 64px)',
    height: 'calc(100vh - 64px)',
    '& h3': {
      [theme.breakpoints.down('sm')]: {
        width: '70%',
        textAlign: 'center'
      }
    }
  }
}))

export const About = () => {
  const classes = useStyles()
  return (
    <Container>
      <Head>
        <title>Voyager | About</title>
        <meta name="description" content="NextJS + Material UI Sample APP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box display="flex" justifyContent="center" alignItems="center" className={classes.messageContainer}>
          <Typography variant="h3">This page is under construction!</Typography>
        </Box>
      </main>

    </Container>
  )
}

export default About