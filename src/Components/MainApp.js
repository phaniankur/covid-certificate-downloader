import React, {useState} from 'react'
import axios from 'axios'
import Hex from 'crypto-js/enc-hex';
import Input from './Library/Input';
import Box from './Library/Box'
import Button from './Library/Button';

var crypto = require('crypto-js/sha256')


function MainApp() {

    const [phone, setphone] = useState('')
    const [Txn, setTxn] = useState('')
    const [otp, setotp] = useState('')
    const [Token, setToken] = useState('')
    const [Id, setId] = useState('')

    function handlePhone(e) {
        setphone(e.target.value)
    }
    
    const handleOTPgen= (e)=> {
        e.preventDefault()
        
        axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',
        {
            mobile: phone,
        },{
            headers: {
            
            'content-type': 'application/json'
            }})
        .then(res=> {
            
        //console.log(res.data.txnId)
        setTxn(res.data.txnId)
        
        }
        )
    }
    
    function handleOTP(e) {
        setotp(e.target.value)
    }

    const handleOtpverify = (e)=> {
    console.log('OTP:' , otp)
    console.log('TxnId:' , Txn)
        
    e.preventDefault()
    const cr = (Hex.stringify(crypto(otp)))

    axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP',
        {
            otp: cr,
            txnId: Txn,
        },
        {
            headers: {
            'content-type': 'application/json'
            }
        }
        )
        .then(res=> {
            //console.log('TOKEN: ', res.data.token)
            setToken(res.data.token)
        })
        .catch(err=> console.log(err))
        }

    function handleBenId(e) {
        setId(e.target.value)
    }

    const handleCert = (e)=> {
    e.preventDefault()
    
    axios.get('https://cdn-api.co-vin.in/api/v2/registration/certificate/public/download',
        {
            responseType: 'arraybuffer',
            headers: {
                'Authorization': `Bearer ${Token}`,
                'Content-Type': 'application/pdf'
            },
            params:{
                beneficiary_reference_id: Id,
                }
        }
    )
    .then(res=> {
            //console.log('Certificate: ', res)
            var blob=new Blob([res.data], {type: "application/pdf"});// change resultByte to bytes
            var link=document.createElement('a');
            link.href=window.URL.createObjectURL(blob);
            link.download="Modiji.pdf";
            link.click();
    })
    .catch(err=> console.log(err))
    }
    
    return (
        <>
        <Box
        //bg='red'
        width={['100%','40%']}
        p={['0.5rem', '0rem']}
        //height='100vh'
        
        >
            <Box
            //bg='green'
            //p='0.5rem'
            display='flex'
            //justifyItems='center'
            alignItems= 'center'
            flexDirection= 'column'
            >
                <Input variant='primary' placeholder='Phone Number' onChange={handlePhone} />
                
                <Button variant='primary' onClick={handleOTPgen}>Get OTP</Button>
            </Box>
            <Box
            //bg='coral'
            //p='0.5rem'
            display='flex'
            alignItems= 'center'
            flexDirection= 'column'
            >
                
                    <Input variant='primary' placeholder='Enter OTP' onChange={handleOTP}/>
                
                <Button variant= 'primary' onClick={handleOtpverify}>Verify OTP</Button>
            </Box>
            <Box
            //bg='grey'
            //p='0.5rem'
            display='flex'
            alignItems= 'center'
            flexDirection= 'column'
            //width='50%'
            //p='0.5rem'
            >
                
                    <Input variant='primary' placeholder='Enter Beneficiary ID' onChange={handleBenId}/>
                
                <Button variant= 'primary' onClick={handleCert}>Submit ID</Button>
            </Box>
        </Box>
        
        </>
    )
}


export default MainApp
