import { makeStyles } from '@material-ui/styles'
import assets from "../assets"
import ThemeContext from '../Theme/ThemeContext'
import { useContext } from 'react'

const { MobileApp, Arrow, Playstore, Appstore } = assets

const Footer = () => {
  const classes = useStyles()
  const currentYear = new Date().getFullYear()
  const { isMobile } = useContext(ThemeContext)

  return (
    <footer>
      <div className={classes.footer}>
        <p className={classes.downloadText}>Download our app now
          {isMobile && <img src={Arrow} alt='arrow' />}
        </p>
        <section className={classes.section}>
          <img
            loading="lazy"
            src={MobileApp}
            alt="Background Image"
            className={classes.mobileAppImage}
          />
          {!isMobile && <div />}
          <div className={classes.content}>
            <h2 className={classes.heading}>
              Boost your productivity with the BHIVE Workspace app. Elevate your workspace,
              collaborate efficiently, and unlock exclusive perks.
            </h2>
            <div className={classes.buttons}>
              <img
                loading="lazy"
                src={Playstore}
                alt="App Store Badge"
                className={classes.badge}
              />
              <img
                loading="lazy"
                src={Appstore}
                alt="Google Play Badge"
                className={classes.badge}
              />
            </div>
          </div>
        </section>
      </div>
      <div className={classes.copyright}>
        © Copyright {currentYear}. Bhive Private Limited
      </div>
    </footer>
  )
}

const useStyles = makeStyles({
  footer: {
    overflow: 'hidden',
    paddingTop: '2.75rem', // pt-11
    marginTop: '4rem', // mt-16
    width: '100%',
    '@media (max-width: 768px)': {
      marginTop: '2.5rem', // max-md:mt-10
      maxWidth: '100%', // max-md:max-w-full
    },
  },
  downloadText: {
    display: 'flex',
    alignSelf: 'flex-start',
    marginLeft: '8rem', // ml-32
    fontSize: '2.25rem', // text-4xl
    fontWeight: 'bold',
    lineHeight: '1.75rem', // leading-7
    color: '#1f2937',
    '@media (max-width: 768px)': {
      marginInline: '2rem', // max-md:ml-2.5
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 28,
    },
  },
  section: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '12rem', // mt-48
    marginInline: '5rem', // mx-24
    height: '15rem', // h-60
    backgroundColor: 'white',
    borderRadius: '1.25rem', // rounded-2xl
    border: '1px solid rgba(229, 231, 235, 0.8)', // border border-stone-200 border-opacity-80
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', // shadow-sm

    '@media (max-width: 768px)': {
      marginInline: '1.5rem', // mx-24
      height: '100%', // h-60
      flexDirection: 'column',
      paddingLeft: '1.25rem', // max-md:px-5
      paddingRight: '1.25rem', // max-md:px-5
      marginTop: '1.5rem', // max-md:mt-10
      maxWidth: '100%', // max-md:max-w-full
    },
  },
  mobileAppImage: {
    objectFit: 'cover', // object-cover
    position: 'absolute',
    top: '-8rem', // -top-32
    paddingLeft: '3rem',


    '@media (max-width: 768px)': {
      top: 0,
      marginTop: 40,
      position: 'relative',
      paddingLeft: 0,
    }

  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '2.5rem', // pb-10

    '@media (max-width: 768px)': {
      paddingBottom: '1rem', // pb-10
    }
  },
  heading: {
    alignSelf: 'flex-end',
    fontSize: '1.25rem', // text-xl
    lineHeight: '1.75rem', // leading-7
    color: '#525252', // text-zinc-600
    width: '586px',
    '@media (max-width: 768px)': {
      display: 'none',
      maxWidth: '100%', // max-md:max-w-full
    },
  },
  buttons: {
    display: 'flex',
    gap: '1.25rem', // gap-5
    justifyContent: 'space-between',
    alignSelf: 'flex-start', // self-baseline
    marginTop: '2.75rem', // mt-11
    '@media (max-width: 768px)': {
      marginTop: '2.5rem', // max-md:mt-10
    },
  },
  badge: {
    flexShrink: 0, // shrink-0
    maxWidth: '100%', // max-w-full
    '&:first-child': {
      aspectRatio: '3.23 / 1',
      width: '146px',
    },
    '&:last-child': {
      aspectRatio: '2.94 / 1',
      width: '132px',
    },
  },
  copyright: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBlock: '1rem', // py-4
    marginTop: '2.5rem', // mt-10
    width: '100%',
    fontSize: '0.875rem', // text-sm
    lineHeight: '1.25rem', // leading-5
    backgroundColor: '#1f2937', // bg-gray-800
    color: '#d4d4d4', // text-zinc-300
    '@media (max-width: 768px)': {
      maxWidth: '100%', // max-md:max-w-full
    },
  },
})

export default Footer
