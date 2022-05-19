import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import Hex from 'crypto-js/enc-hex';

import Input from './Library/Input';
import Box from './Library/Box'
import Button from './Library/Button';
import { Beneficiaries, generateOTP, VerifyOTP } from './api';

var crypto = require('crypto-js/sha256')

function MainContent() {

    let history = useHistory();

    const [phone, setphone] = useState('')
    const [Txn, setTxn] = useState('')
    const [otp, setotp] = useState('')
    const [Token, setToken] = useState('')
    const [error, setError] = useState('')

    function handlePhone(e) {
        setphone(e.target.value)
    }

    const handleOTPgen= (e)=> {
        e.preventDefault()

        generateOTP(phone)
        .then(res=> setTxn(res.data.txnId))

    }

    function handleOTP(e) {
        setotp(e.target.value)
        setError('')
    }

    const handleOtpverify = (e)=> {
    e.preventDefault()

    const cr = (Hex.stringify(crypto(otp)))

    VerifyOTP(cr, Txn)
    .then(res=> setToken(res.data.token))
    .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setError(error.response.data.error)
          console.log(error.response.data);
          console.log(error.response.status);
        }
      });

    }
    useEffect(() => {
      if(Token!== ''){
        Beneficiaries(Token)
        .then(res=> {
        history.push({
            pathname:'./dashboard',
        state: res.data.beneficiaries,
        token: Token
    })})
      }
    }, [Token, history])

    return (
        <>
        <Box
        //bg='#FFC2B8'
        width={['100%','40%']}
        height= '40vh'
        p={['1rem', '2rem']}
        borderRadius= '8px'

        >
            <Box
            //bg='red'
            display={Txn? 'none': 'flex'}
            justifyItems='center'
            alignItems= 'center'
            flexDirection= 'column'
            >
                <Input variant='primary' placeholder='Enter Phone Number' onChange={handlePhone} />

                <Button variant='primary' onClick={handleOTPgen}>Get OTP</Button>
            </Box>
            <Box
            //bg='coral'
            //p='0.5rem'
            display= {Token? 'none': Txn? 'flex': 'none'}
            //display={Token? 'none': 'flex'}
            alignItems= 'center'
            flexDirection= 'column'
            >

                <Input variant='primary' placeholder='Enter OTP' onChange={handleOTP}/>
                <Box
                color='red'
                fontSize='12px'
                pb='0.5rem'
                >{error}</Box>

                <Button variant= 'primary' onClick={handleOtpverify}>Verify OTP</Button>
            </Box>

        </Box>

        </>
    )
}


export default MainContent
