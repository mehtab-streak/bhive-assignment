import { makeStyles } from '@material-ui/styles'

import assets from '../assets'

const { Coworking, HeroBg, SideHeroBg } = assets

const Hero = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <article className={classes.article}>
        <figure className={classes.figure}>
          <img
            loading="lazy"
            src={HeroBg}
            alt="Main Banner Image"
            className={classes.image}
          />
          <h1 className={classes.heading}>
            Host your meeting with world-class amenities. Starting at{" "}
            <span className={classes.secondaryText}>₹199/-!</span>
          </h1>
        </figure>
      </article>
      <aside className={classes.aside}>
        <img
          loading="lazy"
          src={Coworking}
          alt="Supporting Image"
          className={classes.asideImage}
        />
      </aside>
    </div>
  )
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    gap: '1.25rem', // gap-5
    '@media (max-width: 640px)': {
      flexDirection: 'column-reverse', // sm:flex-col-reverse
    },
    '@media (max-width: 768px)': {
      flexDirection: 'column-reverse', // max-md:flex-col
      gap: 0, // max-md:gap-0
    },
  },
  article: {
    display: 'flex',
    flexDirection: 'column',
    width: '68%', // w-[71%]
    '@media (max-width: 768px)': {
      marginLeft: 0, // max-md:ml-0
      width: '100%', // max-md:w-full
    },
  },
  figure: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    mixBlendMode: 'multiply', // mix-blend-multiply
    minHeight: '604px',
    overflow: 'hidden',
    '@media (max-width: 640px)': {
      minHeight: 'auto',
      height: 'auto', // sm:h-auto
    },
    '@media (max-width: 768px)': {
      maxWidth: '100%', // max-md:max-w-full
    },
  },
  image: {
    position: 'absolute',
    inset: 0,
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    '@media (max-width: 640px)': {
      display: 'none', // sm:hidden
    },
  },
  heading: {
    position: 'relative',
    marginTop: '7rem', // mt-28
    fontSize: '4.5rem', // text-7xl
    fontWeight: 'bold',
    letterSpacing: '-0.02em', // tracking-tighter
    color: '#1f2937', // text-primary-text
    textAlign: 'left',
    paddingLeft: '6rem',
    width: '70%',
    '@media (max-width: 640px)': {
      paddingLeft: '2rem',
      marginTop: '2rem', // sm:mt-1
      fontSize: '1.25rem', // sm:text-xl
      width: '100%',
    },
    '@media (min-width: 1024px)': {
      fontSize: '3rem', // sm:text-xl
    }
  },
  secondaryText: {
    color: '#FFBB00', // text-secondary-text
  },
  aside: {
    background: `url(${SideHeroBg})`,
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '1.25rem', // ml-5
    width: '32%', // w-[29%]
    '@media (max-width: 768px)': {
      backgroundPosition: 'bottom',
      marginLeft: 0, // max-md:ml-0
      width: '100%', // max-md:w-full
    },
  },
  asideImage: {
    alignSelf: 'stretch',
    margin: 'auto',
    width: '100%',
    mixBlendMode: 'multiply', // mix-blend-multiply
    aspectRatio: '1 / 1',
    '@media (max-width: 768px)': {
    },
  },
})

export default Hero
