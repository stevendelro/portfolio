import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Project from '../components/work/Project'

import PageIntro from '../components/PageIntro'

const useStyles = makeStyles(theme => ({
  rootWorkPage: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  mainContainer: {
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1),
    },
  },
}))

/**********************************
 ********** PAGE SETUP ************
 **********************************/

const workPageIntro = `
Something short and leading about the collection
below—its contents, the creator, etc. Make it short and sweet, but not too
short so folks don't simply skip over it entirely.
`
/**********************************
 ******* WEATHERNAUT SETUP ********
 **********************************/

const weathernautInfo = {
  name: 'Weathernaut',
  summary:`
    This weather app converts location names into coordinates, then it uses
    those coordinates to fetch current weather data for that location. Styled
    with Material UI and written in React with hooks.
  `,
  keyFeatures: `
    Upon page load, the app will ask permission to utilize the browser's
    Geolocation API. If approved, it will automatically fetch weather data.
    It's also responsive across all screen widths.
  `,
  technologies: `
    Styled with Material UI. Recharts display chart data. Icons purchased from
    Lance Snider. Built within the NextJS React Framework.
  `,
}

export default function WorkPage() {
  const classes = useStyles()
  return (
    <article className={classes.rootWorkPage}>
      <PageIntro title='Work' paragraph={workPageIntro} />
      <Container className={classes.mainContainer} maxWidth='lg'>
        <Project
          name='Weathernaut'
          image='/weathernaut.png'
          paragraphs={weathernautInfo}
          website='https://weathernaut.now.sh'
          orientation='imageLeft'
        />
      </Container>
    </article>
  )
}
