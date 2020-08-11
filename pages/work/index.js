import { makeStyles, useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Head from 'next/head'

import { DevelopDark, DevelopLight } from '../../components/svg/Develop'
import { projectInformation } from '../../components/work/ProjectInformation'
import PageIntro from '../../components/PageIntro'
import WorkProject from '../../components/work/indexPage/WorkProject'

const useStyles = makeStyles(theme => ({
  WorkPage__ROOT: {
    minHeight: '100vh',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  workPage__container: {
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1),
    },
  },
  workPage__image: {
    [theme.breakpoints.only('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  project: {
    padding: theme.spacing(50),
  },
}))

const workPageIntro = `
This section is reserved for projects that I'm proud of. The project
details come straight from the public README.md that's hosted on
Github. I figure that this would be the best way to keep this portfolio
up to date, while motivating me to make better writeups.
`

export default function WorkPage() {
  const classes = useStyles()
  const theme = useTheme()
  const type = theme.palette.type
  const isDarkMode = type === 'dark' ? true : false
  // Step 2a: components/work/ProjectInformation.js
  const { weathernautInfo } = projectInformation
  return (
    <article>
      <Head>
        <title>Work | Projects</title>
        <meta
          property='description'
          content='A collection of projects developed by Steven Del Rosario'
        />
      </Head>
      <main className={classes.WorkPage__ROOT}>
        <PageIntro title='Work' paragraph={workPageIntro} />
        <Container className={classes.workPage__container} maxWidth='lg'>
          <Container maxWidth='md' className={classes.workPage__image}>
            {isDarkMode ? <DevelopDark /> : <DevelopLight />}
          </Container>
          {/* Step 2b: components/work/ProjectInformation.js.
              alternate orientation with 'imageLeft' || 'imageRight' */}
          <WorkProject orientation='imageLeft' projectInfo={weathernautInfo} />
        </Container>
      </main>
    </article>
  )
}
