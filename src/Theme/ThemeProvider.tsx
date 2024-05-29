import { ReactNode, useEffect, useState } from 'react'
import ThemeContext from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props
  const [isMobile, setIsMobile] = useState(window.innerWidth < 786);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 786);
    };

    window.addEventListener('resize', handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        isMobile
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider