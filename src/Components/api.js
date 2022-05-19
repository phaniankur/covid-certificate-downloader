import axios from 'axios'
import { BASE_URL } from './ip'

export const generateOTP = (mobile) =>{

    try{
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        return axios.post(`${BASE_URL}/v2/auth/generateMobileOTP`,
        {
            mobile: parseInt(mobile),
            secret: 'U2FsdGVkX1+yVQVO1s5vCUsT+L+KqZKec0LeeU+6Ual0Nj8E9YrBYw9SLbcB1FS2vIcq7sRFwuxb7PC+Hn9pUQ=='
        }, config)
    } catch(err){
        return null
    }
}
export const VerifyOTP =(cr, Txn)=>{
    try{
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        return axios.post(`${BASE_URL}/v2/auth/validateMobileOtp`,
            {
                otp: cr,
                txnId: Txn,
            },
            config
            )
    } catch(err){
        return null
    }
}

export const DownloadCertificate =(Token, Id)=>{
    try{

        return axios.get(`${BASE_URL}/v2/registration/certificate/download`,
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
    } catch(err){
        return null
    }
}

export const Beneficiaries =(Token)=>{

    try{

        return axios.get(`${BASE_URL}/v4/appointment/beneficiaries`,
        {
            headers: {
                'Authorization': `Bearer ${Token}`,
                'Content-Type': 'application/pdf'
            }
        }
    )
    } catch(err){
        return null
    }
}

