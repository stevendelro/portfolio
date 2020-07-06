import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ImageArea from './ImageArea'
import TextArea from './TextArea'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),
  },
  divider: {
    margin: theme.spacing(5, 0)
  },
}))

export default function HorizontalPreview({
  title,
  coverImage,
  date,
  excerpt,
  readingTime,
  slug,
}) {
  const classes = useStyles()
  const theme = useTheme()
  const isTinyScreen = useMediaQuery(theme.breakpoints.down('xs'))
  let adjustedForSmallScreens

  if (isTinyScreen) {
    adjustedForSmallScreens = (
      <>
        <ImageArea coverImage={coverImage} title={title} slug={slug} />
        <TextArea
          title={title}
          date={date}
          slug={slug}
          excerpt={excerpt}
          readingTime={readingTime}
        />
      </>
    )
  }
  if (!isTinyScreen) {
    adjustedForSmallScreens = (
      <>
        <TextArea
          title={title}
          date={date}
          slug={slug}
          excerpt={excerpt}
          readingTime={readingTime}
        />
        <ImageArea coverImage={coverImage} title={title} slug={slug} />
      </>
    )
  }
  return (
    <>
      <Divider className={classes.divider} />
      <Grid
        container
        className={classes.root}
        direction='row'
        justify='space-between'
        alignItems='flex-start'>
        {adjustedForSmallScreens}
      </Grid>
    </>
  )
}