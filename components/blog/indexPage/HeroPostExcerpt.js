import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  excerpt: {
    padding: theme.spacing(2,2,2,5),
    fontSize: '1.3rem',
    [theme.breakpoints.only('sm')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0),
      textAlign: 'center',
    },
  },
}))

export default function HeroPostExcerpt({ titlePosition, excerpt }) {
  const classes = useStyles()
  return (
    <Grid item sm={7}>
      <Typography
        className={classes.excerpt}
        variant='body2'
        color='textSecondary'
        align={titlePosition}
        gutterBottom>
        {excerpt}
      </Typography>
    </Grid>
  )
}
