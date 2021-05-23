import { Card, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  cardClicker: {
    width: '45%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    }
  },
  card: {
    margin: '1rem',
    padding: '1.5rem',
    textAlign: 'left',
    textDecoration: 'none',
    border: `1px solid ${theme.palette.primary.dark}`,
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
    '&:hover': {
      borderColor: theme.palette.secondary.dark,
      color: theme.palette.secondary.dark,
      boxShadow: `0 2px 5px ${theme.palette.secondary.dark}`
    },
    '& .card-heading': {
      fontSize: '1.5rem',
      fontWeight: 700,
      marginBottom: '1rem',
    },
    '& .card-body': {
      fontSize: '1.15rem'
    }
  }
}))

export const HomeClickableCard = ({ title, description, href }) => {
  const classes = useStyles()
  return (
    <a className={classes.cardClicker} href={href}>
      <Card variant="outlined" className={classes.card}>
        <Typography variant="h5" className="card-heading">{title} &rarr;</Typography>
        <Typography variant="body1" className="card-body">{description}</Typography>
      </Card>
    </a>
  )
}

export default HomeClickableCard