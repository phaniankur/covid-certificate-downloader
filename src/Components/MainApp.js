import React, {useState} from 'react'
import axios from 'axios'
import Hex from 'crypto-js/enc-hex';
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
            link.download="certificate.pdf";
            link.click();
    })
    .catch(err=> console.log(err))
    }
    
    return (
        <>
        <div>
            <form onSubmit={handleOTPgen}>
                <input type='text' placeholder='phone number' name='phone_number' onChange={handlePhone} />
                <button >Get OTP</button>
            </form>
            <br/>

            <form onSubmit={handleOtpverify}>
                <input type='number' placeholder='OTP' name='OTP' onChange={handleOTP} />
                <button>Submit OTP</button>
            </form>
            <br/>

            <form onSubmit={handleCert}>
                <input type='number' placeholder='Beneficiary ID' name='Beneficiary ID' onChange={handleBenId} />
                <button>Submit B_Id</button>
            </form>
        </div>
        
        </>
    )
}

export default MainApp
