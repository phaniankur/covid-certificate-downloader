import React, { useState } from 'react'
import Hex from 'crypto-js/enc-hex';
import axios from 'axios'
var crypto = require('crypto-js/sha256')

//import crypto from 'crypto-js'


function Crypt() {


    //var cr = crypto.createHash('sha256').update('hello').digest('hex')

    const [msg, setmsg] = useState('')
    const [crypt, setcrypt] = useState()
    

    const handleChange = (e) => {
        setmsg(e.target.value)
    }
    
    const handleCrypt = (e) =>{

        e.preventDefault()
        setcrypt(Hex.stringify(crypto(msg)))
        
        axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP',
        {
            otp: "c62fa32f9b91c4a7dc9cfce56b3cba268838c26532dfc2a106e525dc1be204ad",
            txnId: "f127dcaa-481c-4047-94c9-df561e9548a0",
          },
          {
            headers: {
            'content-type': 'application/json'
            }
        }
        )
        .then(res=> console.log('TOKEN: ', res.data))
        .catch(err=> console.log(err))
        }

    return (
        <>
    
        <form onSubmit={handleCrypt}>
                <input type='number' placeholder='phone number' name='Message' onChange={handleChange} />
                <button >Krrypt</button>
            </form>

        <div>
            {crypt}
        </div>
        </>
    )
}

export default Crypt
