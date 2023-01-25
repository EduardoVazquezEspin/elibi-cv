import { useState } from 'react'
import { StyledImage } from './styles'

const RotatingImage = ({
  srcList = [],
  alt = ''
}) => {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0)
  setTimeout(() => {
    setCurrentSrcIndex((currentSrcIndex + 1) % srcList.length)
  }, 2000)
  return (
    <StyledImage
      src={srcList[currentSrcIndex]}
      alt={alt}
      height='500px'
    />
  )
}

export default RotatingImage
