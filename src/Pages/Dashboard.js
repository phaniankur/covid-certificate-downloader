import React,{useState, useEffect} from 'react'
import { useHistory,useLocation} from 'react-router-dom';

import Box from '../Components/Library/Box'
import Footer from '../Components/Footer'
import download from '../images/Download.png'
import { DownloadCertificate } from '../Components/api';

const Dashboard = () => {
  let history = useHistory();
  const location = useLocation();
  const [beneficiaryDetails, setBeneficiaryDetails] = useState('')

  useEffect(() => {
    setBeneficiaryDetails(location.state)
  }, [location.state])

  console.log(location)

  const handleCert = (Id)=> {

    DownloadCertificate( location.token, Id)
    .then(res=> {

        var blob=new Blob([res.data], {type: "application/pdf"});// change resultByte to bytes
        var link=document.createElement('a');
        link.href=window.URL.createObjectURL(blob);
        link.download="Modiji.pdf";
        link.click();
    })
    .catch(err=> console.log(err))
    }
  return (
      <Box
        display='flex'
        flexDirection= 'column'
        >
          <Box
          color= '#1f497d'
          m='1rem'
          display='flex'
            justifyItems='center'
            alignItems= 'center'
            flexDirection= 'column'
          >
            <Box
            fontWeight = 'bold'
            fontSize= {['1.2rem','1.5rem']}
            >Jabbed?</Box>
            <Box
            fontSize= '1rem'
            >Download your Covid Certificate Now!</Box>
          </Box>

          <Box
          color= '#1f497d'
          fontWeight = 'bold'
          m= '1rem'
          >
            Beneficiaries:</Box>
          <Box
          display={['block', 'block','flex']}
          flexWrap={['none','wrap']}
          >
        {
        beneficiaryDetails && beneficiaryDetails.map((item, i)=>(
        <Box
        key={i}
        bg='white'
        m='0.5rem'
        borderRadius= '10px'
        boxShadow = '2px 3px 10px grey'
        p='1rem'
        >
          <Box
          display='flex'
          justifyContent='space-between'
          >
            <Box
            pb='0.5rem'
            >Name: <span style={{color: '#1f497d'}}>{item.name}</span> </Box>
            <Box><img src={download} alt='downl' onClick={()=>handleCert(item.beneficiary_reference_id)} /></Box>

          </Box>

            <Box
            display='flex'
            justifyContent='space-between'
            pb='0.5rem'
            >
                <Box>Gender: <span style={{color: '#1f497d'}}>{item.gender}</span></Box>
                <Box>Birth Year: <span style={{color: '#1f497d'}}>{item.birth_year}</span></Box>
            </Box>
            <Box
            display='flex'
            justifyContent='space-between'
            pb='0.5rem'
            >
                <Box>Dose 1: <span style={{color: 'green'}}>{item.dose1_date}</span></Box>
                {
                  item.dose2_date?
                  <Box>Dose 2: <span style={{color: 'green'}}>{item.dose2_date}</span>
                  </Box>
                  :
                  <Box>Dose 2: <span style={{color: 'red'}}>Pending</span>
                  </Box>

                }

            </Box>
            <Box
            pb='0.5rem'
            >Vaccine: <span style={{color: '#1f497d'}}>{item.vaccine}</span></Box>
            <Box>Ref Id: <span style={{color: '#1f497d'}}>{item.beneficiary_reference_id}</span></Box>

            </Box>))}
          </Box>
          <Box
          ml='1rem'
          mt='1rem'
          fontSize='0.8rem'
          onClick={()=>history.push('/')}
          >Login Again</Box>
          <Footer/>
        </Box>
  )
}

export default Dashboard