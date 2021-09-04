import React from 'react'
import Box from './Library/Box'

function Footer() {
    return (
            <footer>
                <Box
                m='1rem'
                //bg='red'
                fontStyle= 'italic'
                fontSize= '15px'
                display='flex'
                justifyContent='center'
                alignItems= 'center'
                flexDirection = 'column'
                color= '#1f497d'
                textAlign= 'center'
                >
                    This website is secure and is running on Indian Government's https://apisetu.gov.in/.
                    <Box pt='0.5rem' fontStyle= 'normal' fontSize= '14px'>
                        Developed by <a href='https://github.com/phaniankur'>Ankur Phani</a>
                    </Box>
                </Box>
                
            </footer>
        
    )
}

export default Footer
