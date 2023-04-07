import React from 'react'
import { Box,
  Stack,
  Typography,
  Button,
  Card,
  Link,
 } from '@mui/material'
import logo from './images/healTracjk.jpeg'
import doc from './images/Sprints1.jpg'


export default function Landing() {
  return (
    <Box>
      <Card
      sx={{
        display:'flex',
        // width:'500px',
        // marginLeft:'800px',
        // mt:'50px',
        // justifyContent:'right',
        // alignItems:'right',
        background:'#9fd1dd',
        marginBottom:'50px',

      }}>
        <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 5, md: 100 }}
        >

        <img src={logo} style={{borderRadius:'50%', width:'60px', margin:'3px'}}alt="" />
        <Box
        >
        <Button
          type="submit"
          variant="contained"
          // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
          style={{
            backgroundColor: '#228b22',
            // boxShadow: '3px 3px 3px green',
            margin: '10px'
          }}
          >
          Home
          </Button>
          <Button
          type="submit"
          variant="contained"
          // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
          style={{
            backgroundColor: '#4169E1',
            // boxShadow: '3px 3px 3px green',
            margin: '10px'
          }}
          >
            Features
          </Button>
          <Button
          type="submit"
          variant="contained"
          // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
          style={{
            backgroundColor: '#228b22',
            // boxShadow: '3px 3px 3px green',
            margin: '10px'
          }}
          >
          Working
          </Button>
          <Button
          type="submit"
          variant="contained"
          // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
          style={{
            backgroundColor: '#4169E1',
            // boxShadow: '3px 3px 3px green',
            margin: '10px'
          }}
          >
            Pricing
          </Button>
          </Box>
          </Stack>
      </Card>
      <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 5, md: 20 }}
      sx={{
        justifyContent:'center',
        marginTop:'0px',
      }}
      >
        <Stack marginTop={'100px'}>
        <Box >
          <Typography
          sx={{
            display:'inline-block',
            fontSize:'1.2rem',
            color:'#228B22',
            fontWeight:'bold',

          }}
          >Your Health, </Typography>
          <Typography
          sx={{
            display:'inline-block',
            color:'#4169E1',
            fontWeight:'bold',
          }}
          > Your Data</Typography>

        </Box>
        <Box>
        <Typography variant='h3'
          sx={{
            color:'#228B22',
            display:'inline-block',
            fontWeight:'bold',

          }}
          >Heal</Typography>
          <Typography variant='h3'
          sx={{
            display:'inline-block',
            color:'#4169E1',
            fontWeight:'bold',

          }}
          >Track</Typography>
        </Box>

        <Box>


          <Typography sx={{
            fontSize:'.9rem',
          }}>Now manage your health records</Typography>
        </Box>
        <Typography sx={{
            fontSize:'.9rem',
          }}>A path for your better tomorrow</Typography>
           <Typography sx={{
            fontSize:'.9rem',
          }}>Your health our priority</Typography>

        <Box>
        <Button
          type="submit"
          variant="contained"
          // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
          style={{
            backgroundColor: '#228b22',
            // boxShadow: '3px 3px 3px green',
            margin: '10px'
          }}
          href='login'
          >Login</Button>
          <Button
          type="submit"
          variant="contained"
          // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
          style={{
            backgroundColor: '#4169E1',
            // boxShadow: '3px 3px 3px green',
            margin: '10px'
          }}
          href='register'
          >Register</Button>
        </Box>

      </Stack>
      <Box>
        <img src={doc}></img>
      </Box>
    </Stack>
    <Box sx={{ mt: 'auto', py: 2, backgroundColor: '#9fd1dd' }}>
      <Typography variant="body2" align="center">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link sx={{ p: 1 }} href="/">Home</Link>
          <Link sx={{ p: 1 }} href="/about-us">About Us</Link>
          <Link sx={{ p: 1 }} href="/contact-us">Contact Us</Link>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">Stay Connected:</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link sx={{ p: 1 }} href="https://www.instagram.com/">Instagram</Link>
            <Link sx={{ p: 1 }} href="https://www.twitter.com/">Twitter</Link>
            <Link sx={{ p: 1 }} href="https://www.facebook.com/">Facebook</Link>
          </Box>
        </Box>
      </Typography>
    </Box>
   </Box>

  )
}
