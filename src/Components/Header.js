import React from 'react'
import Box from './Library/Box'

function Header() {
    return (
        <Box
            fontWeight= 'bold'
            fontSize= {['1.2rem','1.5rem']}
            textAlign= 'center'
            color= '#1f497d'
            display='flex'
            justifyItems='center'
            alignItems= 'center'
            flexDirection= 'column'
        >
           <Box fontSize={['1.8rem','2rem']} pb='1rem'>Jabbed? </Box>
           <Box fontSize= {['1rem' ,'1.5rem']}>Download your Covid Certificate Now!</Box>
        </Box>
    )
}

export default Header
