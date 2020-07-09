import { useRouter } from 'next/router'
import { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

function a11yProps(tabIndex) {
  return {
    id: `horizontal-tab-${tabIndex}`,
    'aria-controls': `horizontal-tabpanel-${tabIndex}`,
  }
}

const MyTabs = withStyles({
  indicator: {
    backgroundColor: '#ffffff00', // remove active tab indicator
  },
})(Tabs)

const MyTab = withStyles(theme => ({
  root: {
    minWidth: 90,
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightLight,
    margin: theme.spacing(0, 4),
    [theme.breakpoints.down('lg')]: {
      margin: theme.spacing(0, 2),
      padding: theme.spacing(2, 0),
    },
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0, 1),
    },
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
    '&:hover': {
      color:
        theme.palette.type === 'dark'
          ? theme.palette.secondary.light
          : theme.palette.primary.light,
      opacity: 1,
    },
    '&$selected': {
      color:
        theme.palette.type === 'dark'
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color:
        theme.palette.type === 'dark'
          ? theme.palette.secondary.light
          : theme.palette.primary.light,
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />)

const useStyles = makeStyles(theme => ({
  tab: {
    fontSize: '1.5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem',
    },
    '& > span': {
      transition: 'all .2s ease-in-out',
      '&:hover': { transform: 'scale(1.1)' },
    },
  },
}))

function Menu() {
  const classes = useStyles()
  const router = useRouter()
  const { pathname } = router
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  // Ensure proper tag is active on page refresh
  pathname === '/' && activeTabIndex !== 0 && setActiveTabIndex(0)
  pathname === '/work' && activeTabIndex !== 1 && setActiveTabIndex(1)
  pathname === '/blog' && activeTabIndex !== 2 && setActiveTabIndex(2)
  pathname === '/mail' && activeTabIndex !== 3 && setActiveTabIndex(3)

  const handleTabSwitch = (event, selectedTabIndex) => {
    event.preventDefault()
    setActiveTabIndex(selectedTabIndex)
  }

  const LinkTab = (label, index) => {
    const lowerCased = label.toLowerCase()
    return (
      <MyTab
        key={index}
        component='a'
        className={classes.tab}
        label={label}
        onClick={event => {
          event.preventDefault()
          router.push(`/${lowerCased === 'home' ? '' : lowerCased}`)
        }}
        {...a11yProps(index)}
      />
    )
  }
  return (
    <>
      <MyTabs
        orientation='horizontal'
        value={activeTabIndex}
        onChange={handleTabSwitch}
        aria-label='home menu tabs'>
        {['HOME', 'WORK', 'BLOG', 'MAIL'].map((arrayItem, index) =>
          LinkTab(arrayItem, index)
        )}
      </MyTabs>
    </>
  )
}

export default Menu