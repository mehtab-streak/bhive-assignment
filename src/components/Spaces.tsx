import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/styles'

import Card from "../UI/Card"
import { spacesUrl } from "../utils/const"
import useFetch from '../hooks/useFetch'
import assets from "../assets"
import ThemeContext from '../Theme/ThemeContext'

const { Arrow } = assets

interface Space {
  name: string
  day_pass_price: string
  latitude: number
  longitude: number
  images: string[]
}

const Spaces: React.FC = () => {
  const classes = useStyles()
  const { loading, data, error } = useFetch<Space[]>(spacesUrl)
  const { isMobile } = useContext(ThemeContext)

  return (
    <div className={classes.root}>
      <h2 className={classes.heading}>
        Our Space {!isMobile && 'Overview'}
        {isMobile && <img src={Arrow} alt='arrow' />}
      </h2>
      <h2>{loading && 'Loading the spaces...'} </h2>
      <h2>{error && 'Error fetching spaces'}</h2>
      <div className={classes.grid}>
        {data?.map((item) => {
          const { name, day_pass_price, latitude, longitude, images } = item
          const url = images[0]
          return (
            <Card
              key={name}
              title="Honeykomb"
              logoImgAlt="Logo Image"
              location={name}
              mainImgAlt="Main Image"
              workspaceImgAlt="Workspace Image"
              dayPassLabel="Day Pass"
              dayPassPrice={day_pass_price}
              bulkPassLabel="Bulk Pass"
              bulkPassPrice="2400"
              latitude={latitude}
              longitude={longitude}
              image_url={url}
            />
          )
        })}
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    paddingLeft: '6rem', // px-24
    paddingRight: '6rem', // px-24
    '@media (max-width: 640px)': {
      paddingLeft: '1.75rem', // sm:px-7
      paddingRight: '1.75rem', // sm:px-7
    },
    '@media (min-width: 641px) and (max-width: 1024px)': {
      paddingLeft: '2.5rem', // md:px-10
      paddingRight: '2.5rem', // md:px-10
    },
  },
  heading: {
    marginTop: '9rem', // mt-36
    fontSize: '2.25rem', // text-4xl
    fontWeight: 'bold',
    letterSpacing: 'wide', // tracking-wide
    color: '#1f2937', // text-gray-800
    '@media (max-width: 768px)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '2.5rem', // max-md:mt-10
      maxWidth: '100%', // max-md:max-w-full
      fontSize: 28,
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // grid-cols-3
    gap: '0.5rem', // gap-y-2
    columnGap: '3rem', // gap-x-12
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr', // Change to single column layout on small screens
    },
  },
})

export default Spaces
