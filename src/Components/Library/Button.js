import styled from 'styled-components'
import { variant } from 'styled-system'

const Button = styled('button')(
  {
    appearance: 'none',
    fontFamily: 'inherit',
  },
  variant({
    variants: {
      primary: {
        fontWeight: 'bold',
        fontSize: '16px',
        color: 'white',
        bg: '#1f497d',
        width:'100%',
        height: '35px',
        borderRadius: '8px'
      },
      
      secondary: {
        color: 'white',
        bg: 'red',
        fontWeight: 'bold',
      },
    }
  })
)

export default Button