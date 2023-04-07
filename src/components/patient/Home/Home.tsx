import React from 'react';
import { Button, Grid, Box, Typography, Stack, TextField } from '@mui/material';

function Home() {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search doctors"
            sx={{ width: '300px' }}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}
          >
            Add Records
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="success"
            sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' }}
          >
            Give Access
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={2}>
          <Grid item>
            <img
              src="https://imgs.search.brave.com/4eTgEY6kK-qj8IVXNCjyntK6ZHdakFrMTFk74tiOn7c/rs:fit:640:360:1/g:ce/aHR0cHM6Ly9jZG4u/dmlkZW9wbGFzdHku/Y29tL2FuaW1hdGlv/bi9kb2N0b3Itd2l0/aC1wYXRpZW50LXN0/b2NrLWFuaW1hdGlv/bi0zMDY3LTEyODB4/NzIwLmpwZw"
              style={{ height: '400px', width: '600px' }}
            />
          </Grid>
          <Grid item>
            <Stack
              direction="column"
              spacing={2}
              sx={{
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '6px',
                padding: '40px',
                paddingRight:'300px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              <Typography variant="h5" gutterBottom>
                Patient Details
              </Typography>
              <Typography variant="subtitle1">Patient Name:</Typography>
              <Typography variant="subtitle1">Patient Address:</Typography>
              <Typography variant="subtitle1">Doctor Name:</Typography>
              <Typography variant="subtitle1">Symptoms:</Typography>
              <Typography variant="subtitle1">Diagnosis:</Typography>
              <Typography variant="subtitle1">Reports:</Typography>
              <Typography variant="subtitle1">Treatment:</Typography>
              <Typography variant="subtitle1">Medication:</Typography>
              <Typography variant="subtitle1">Details:</Typography>
              <Typography variant="subtitle1">Bills:</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
