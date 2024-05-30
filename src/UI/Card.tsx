import React, { memo } from 'react'
import { makeStyles } from '@material-ui/styles'
import assets from '../assets'

const { RightArrowDark, RightArrowLight, SpaceTitle, Map } = assets

export interface CardProps {
  title: string
  location: string
  mainImgAlt: string
  logoImgAlt: string
  workspaceImgAlt: string
  dayPassPrice: string
  dayPassLabel: string
  bulkPassPrice: string
  bulkPassLabel: string
  latitude: number,
  longitude: number,
  image_url: string,
}


const Card: React.FC<CardProps> = memo((props) => {
  const classes = useStyles()
  const {
    title,
    logoImgAlt,
    location,
    mainImgAlt,
    workspaceImgAlt,
    dayPassLabel,
    dayPassPrice,
    bulkPassLabel,
    bulkPassPrice,
    latitude,
    longitude,
    image_url,
  } = props

  const imgUrl = `https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/${image_url}`

  return (
    <div className={classes.card}>
      <section className={classes.section}>
        <header className={classes.header}>
          <h2>{location}</h2>
          <a href={`https://www.google.com/maps?q=${latitude},${longitude}`} target='_blank' className={classes.mapLink}>
            <img loading="lazy" src={Map} alt={logoImgAlt} />
          </a>
        </header>
        <div className={classes.imageContainer}>
          <img loading="lazy" src={imgUrl} alt={mainImgAlt} className={classes.mainImage} />
          <div className={classes.overlay}>
            <img loading="lazy" src={SpaceTitle} alt={workspaceImgAlt} />
            <div className={classes.title}>{title}</div>
          </div>
        </div>
        <div className={classes.discount}>
          20% Discount
        </div>
      </section>
      <div className={classes.bottomContainer}>
        <section className={classes.section1}>
          <div className={classes.priceContainer}>
            <h3 className={classes.passLabel}>{dayPassLabel}</h3>
            <div className={classes.price}>
              <span>₹ {dayPassPrice}
                <span className="day">/ Day</span>
              </span>
              <div className='flex' style={{ marginLeft: 20 }}>
                <img loading="lazy" src={RightArrowLight} alt="Ellipsis icon" className='w-2' />
                <img loading="lazy" src={RightArrowLight} alt="Ellipsis icon" className='w-2' />
                <img loading="lazy" src={RightArrowDark} alt="Ellipsis icon" className='w-2' />
              </div>
            </div>
          </div>
        </section>
        <section className={classes.section2}>
          <div className={classes.priceContainer}>
            <h3 className={classes.passLabel}>{bulkPassLabel}</h3>
            <div className={classes.price}>
              <span>₹ {bulkPassPrice}
                <span className="day">/ 10 Days</span>
              </span>
              <div className='flex'>
                <img loading="lazy" src={RightArrowLight} alt="Ellipsis icon" className='w-2' />
                <img loading="lazy" src={RightArrowLight} alt="Ellipsis icon" className='w-2' />
                <img loading="lazy" src={RightArrowDark} alt="Ellipsis icon" className='w-2' />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
})


const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: '14px 0',
    margin: '10px auto',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'rgba(175, 175, 175, 0.5)',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
  },
  section: {
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    padding: '0 12px',
  },
  header: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'space-between',
    fontSize: '20px',
    color: '#2D3748',
  },
  mapLink: {
    '& img': {
      borderRadius: '8px',
      border: 'none',
      width: '52px',
      aspectRatio: '1',
    },
  },
  imageContainer: {
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'start',
    padding: '8px 0 80px',
    marginTop: '16px',
    width: '100%',
    fontSize: '14px',
    color: '#D69E2E',
    whiteSpace: 'nowrap',
    aspectRatio: '1.71',
    letterSpacing: '2px',

    '& img': {
      borderRadius: 6,
    },
  },
  mainImage: {
    objectFit: 'cover',
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'relative',
    margin: '0 16px',
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
    padding: '8px',
    marginBottom: '48px',
    borderRadius: '8px',
    border: '1px solid',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    backgroundColor: '#2D3748',
    borderColor: '#D69E2E',
    opacity: '0.5',
  },
  title: {
    color: '#D69E2E',
  },
  discount: {
    alignSelf: 'flex-end',
    display: 'flex',
    justifyContent: 'center',
    padding: '2px 4px',
    marginTop: '12px',
    marginRight: '38px',
    fontSize: '12px',
    backgroundColor: '#2D3748',
    borderRadius: '4px',
    border: '1px solid',
    borderColor: '#2D3748',
    color: '#FAFAFA',
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '-8px',
    margin: '0 12px',

    '@media (max-width: 768px)': {
      gap: 20,
    },
  },
  section1: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#F7FAFC',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: '#E2E8F0',
  },
  section2: {
    display: 'flex',
    gap: '8px',
    padding: '10px',
    backgroundColor: '#F6E05E',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: '#ECC94B',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  passLabel: {
    fontSize: '14px',
    color: '#718096',
  },
  price: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: '12px',
    gap: 10,
    fontSize: '20px',
    color: '#2D3748',
    opacity: '0.8',
    '& span': {
      fontSize: '20px',
      fontWeight: '600',
    },
    '& .day': {
      fontSize: '10px',
      color: '#2D3748',
    },

    '@media (max-width: 768px)': {
      fontSize: '18px',
    },
  },
  ellipsisContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0',
    '& img': {
      aspectRatio: '0.58',
      fill: '#2D3748',
      width: '7px',
    },
  },
  img: {
    width: 11,
    height: 11,
  }
})

export default Card
