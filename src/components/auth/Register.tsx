import React, { useState } from 'react'
import {
  Box,
  Stack,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Button

} from '@mui/material'
import main from './images/Sprints1.jpg'
import doc from './images/doc.jpg'
import patient from './images/patient.jpg'

export default function Register() {
  const [user, setUser] = useState('');
  return (
    <>
      <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 5, md: 30 }}
      sx={{
        display:'flex',
        alignItems:'center',

      }}>
        <Box
        sx={{
          border:'3px solid gray',
          paddingTop:'1rem',
          paddingLeft:'2rem',
          paddingRight:'2rem',
          marginLeft:'3rem',
        }}>

            <Typography
            variant='h4'
            sx={{
              display:'flex',
              justifyContent:'center',
              mb:'20px',
              mt:'0'
            }}
            >
              Choose Account Type
            </Typography>

            <img src={doc} style={{
              width:'200px',
              height:'200px',
              display:'inline-block',
              borderRadius:'10%',
              marginRight:'2rem',

            }}
            alt="" />

            <img src={patient} style={{
              width:'200px',
              height:'200px',
              borderRadius:'10%',
              display:'inline-block',

            }} alt="" />

            <Box
            sx={{
              // position:'relative',
            }}
            >
              <FormControl>
  {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
  <RadioGroup
  row

    aria-labelledby="demo-radio-buttons-group-label"
    // defaultValue="Pateint"
    name="radio-buttons-group"
  >
    <FormControlLabel sx={{
    marginLeft:'60px'
  }}
  value="female" control={<Radio />} label="Doctor" />
    <FormControlLabel
    sx={{
      marginLeft:'110px'
    }}
    value="male" control={<Radio />} label="Patient" />
  </RadioGroup>
</FormControl>
      </Box>

          <Typography
          sx={{
            justifyContent:'right',
            alignItems:'right',
            marginLeft:'40%',
          }}>Hello {user}!</Typography>
          <Typography sx={{
            marginLeft:'10%'
          }}>Please fill out this below form to get started.</Typography>

          <Box>
          <TextField
fullWidth

          sx={{
  display:'block',
  // mb:'20px',
  // justifyContent:'center',
  // marginLeft:'20%',
  marginTop:'10px',

  }}
  id="outlined-basic" label="Enter your Name." variant="outlined" />
<TextField
fullWidth
sx={{
  display:'block',
  // marginLeft:'10%',
  // mb:'20px',
  justifyContent:'center',
  marginTop:'10px',

  }}
   id="outlined-basic" label="Enter your age." variant="outlined" />
<Button
          type="submit"
          variant="contained"
          // sx={{ fontSize: '1.2rem', padding: '.6rem 1.2rem' }}
          style={{
            backgroundColor: '#4169E1',
            // boxShadow: '3px 3px 3px green',
            marginTop:'1rem',
            marginBottom:'2rem',
            marginLeft: '37%'
          }}
          href='register'
          >Register</Button>
          </Box>

        </Box>
        <img src={main} alt="" style={{
          marginTop:'100px'
        }}/>
      </Stack>
    </>
  )
}

