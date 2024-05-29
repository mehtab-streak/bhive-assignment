import { makeStyles } from "@material-ui/styles"

import assets from "../assets"
import ThemeContext from "../Theme/ThemeContext"
import { useContext } from "react"

const { Arrow } = assets


// Define the structure of a single facility object
interface Facility {
  iconSrc: string
  alt: string
  label: string
}

// Define the props for the Facilities component
interface FacilitiesProps {
  facilities: Facility[]
}

const Facilities: React.FC<FacilitiesProps> = (props) => {
  const { facilities } = props
  const classes = stylesheet()
  const { isMobile } = useContext(ThemeContext)

  return (
    <div className={classes.root}>
      <h2 className={classes.heading}>
        Why Choose us?
        {isMobile && <img src={Arrow} alt='arrow' />}
      </h2>
      <section className={classes.section}>
        <div className={classes.grid}>
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={classes.facility}
              style={{
                borderBottom: index < 4 ? '1px solid #e2e8f0' : undefined,
                borderRight: (index !== 3 && index !== 7) ? '1px solid #e2e8f0' : undefined,
              }}
            >
              <img
                loading="lazy"
                src={facility.iconSrc}
                alt={facility.alt}
                className={classes.icon}
              />
              <div className={classes.label}>
                {facility.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const stylesheet = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    marginTop: '2.75rem', // 11 in Tailwind
    width: '100%',
    paddingLeft: '6rem', // 24 in Tailwind
    paddingRight: '6rem', // 24 in Tailwind
    '@media (max-width: 768px)': {
      marginTop: '2.5rem', // 10 in Tailwind
      maxWidth: '100%',
      paddingLeft: '1.75rem', // sm:px-7
      paddingRight: '1.75rem', // sm:px-7
    },
    '@media (min-width: 769px) and (max-width: 1024px)': {
      paddingLeft: '2.5rem', // md:px-10
      paddingRight: '2.5rem', // md:px-10
    },
  },
  heading: {
    fontSize: '2.25rem', // text-4xl in Tailwind
    fontWeight: 'bold',
    letterSpacing: 'wide', // tracking-wide in Tailwind
    color: '#263238', // text-primary-text in Tailwind
    '@media (max-width: 768px)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '2.5rem', // max-md:mt-10
      maxWidth: '100%', // max-md:max-w-full
      fontSize: 28,
    },
  },
  section: {
    marginBottom: '1rem',
    '@media (max-width: 768px)': {
      maxWidth: '100%',
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // grid-cols-4 in Tailwind
    marginTop: '1rem', // mt-4 in Tailwind
    fontSize: '1.125rem', // text-lg in Tailwind
    color: '#263238', // text-primary-text in Tailwind
    '@media (max-width: 640px)': {
      gridTemplateColumns: 'repeat(2, 1fr)', // sm:grid-cols-2 in Tailwind
      marginTop: '2.5rem', // max-md:mt-10
      gap: 20,
    },
  },
  facility: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    borderColor: '#e2e8f0', // border-gray-100 in Tailwind
    '@media (max-width: 640px)': {
      padding: '1rem',
      flexDirection: 'column',
      fontSize: 14,
      border: 'none',
      backgroundColor: 'white',
      borderRadius: '0.375rem', // sm:rounded-md in Tailwind
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // sm:shadow-sm in Tailwind
    },
  },
  icon: {
    flexShrink: 0,
    width: '2rem', // w-8 in Tailwind
    aspectRatio: '1 / 1', // aspect-square in Tailwind
  },
  label: {
    flex: '1 1 auto',
    margin: 'auto 10px',
  },
})

export default Facilities
