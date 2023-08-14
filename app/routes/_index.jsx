import React, { useState } from 'react';
import { Outlet, useNavigate } from '@remix-run/react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Person as PersonIcon, Email as EmailIcon, Phone as PhoneIcon } from '@mui/icons-material';
import ErrorIcon from '@mui/icons-material/Error';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Index() {
  const navbarStyles = {
    backgroundColor: 'rgb(32, 22, 82)',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    height: '100px',
    width: '100%',
    position: 'fixed',
    zIndex: '1000',
    display: 'flex',
    fontWeight: 'bolder', // Make the font weight bolder
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentStyles = {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '120px',
    fontSize: '42px',
    lineHeight: '1.1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    fontFamily: 'Inter',
  };

  const centeredText = {
    textAlign: 'center',
    fontSize: '22px',
    fontWeight: 'normal',
    marginTop: '-28px',
  };

  const formFieldStyles = {
    width: '100%',
    marginBottom: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)', // Add box shadow
  };

  const submitButtonStyles = {
    cursor: 'pointer',
    fontSize: '30px',
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
      backgroundColor: 'darkblue',
      color: 'white',
    },
    width: '100%',
    height: '70px',
  };


  const HeroImageContainer = {

    marginTop: '20px',
    width: '240px',
    height: '300px',
  };

  const formContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px',
    maxWidth: '700px',
    width: '50%',
    margin: '0 auto',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const contentContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '40px',
  };

  // State for form fields
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here

    // Redirect to the second page
    navigate('/second-page'); // Replace 'second-page' with the actual route path
  };

  return (
    <div>
         <AppBar position="fixed" style={navbarStyles}>
        <Toolbar>
          <Typography variant="h5" style={{ display: 'flex', alignItems: 'center' }}>
            <ErrorIcon style={{ color: 'white'}} /> {/* Add the ErrorIcon */}
            Exclusive Video Case Study Reveals:
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div style={contentStyles}>
          <p>
            <strong>How To Make $10,000+ Per Month Using a
              <br />
              NEW Simple Skill Called "TikTok Organic"
              <br />
              WITHOUT Upfront Costs, Ads, Inventory, Or
              <br />
              Showing Your Face...
            </strong>
          </p>
        </div>
        <p style={centeredText}>"This is the #1 wealth builder in 2023 for busy beginners without tech-y skills..."</p>

        <div style={formContainer}>
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <TextField
              placeholder="Enter Your First Name Here..."
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={formFieldStyles}
              InputProps={{
                startAdornment: <PersonIcon style={{ marginRight: '8px', color: 'gray' }} />,
              }}
            />
            <TextField
              placeholder="Enter Your Email Address Here..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={formFieldStyles}
              type="email"
              InputProps={{
                startAdornment: <EmailIcon style={{ marginRight: '8px', color: 'gray' }} />,
              }}
            />
            <TextField
              placeholder="Enter Your Phone Number Here..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={formFieldStyles}
              type="tel"
              InputProps={{
                startAdornment: <PhoneIcon style={{ marginRight: '8px', color: 'gray' }} />,
              }}
            />
            <Button type="submit" variant="contained" color="primary" style={submitButtonStyles}>
              <b>YES, I WANT THE FREE CASE STUDY!</b>
            </Button>
          </form>
        </div>
        <div style={contentContainer}>
          <p>See EXACTLY How This TikTok Loophole Works Step-By-Step...</p>
        </div>
        {/* <div style={contentContainer}>
          <img src="https://imgs.search.brave.com/yCRVMN4JAdipQOGo6zhb_LCoksXx9nNPjLbYSzduSV0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2Y0L1VTQUZBX0hv/c3RzX0Vsb25fTXVz/a18oSW1hZ2VfMV9v/Zl8xNylfKGNyb3Bw/ZWQpLmpwZw" alt="Elon Musk" style={HeroImageContainer} />
          <p>This free case study is presented by Adrian Dimac, who created multiple 7 figure</p> 
           <p> income streams thanks to this little-known loophole of making passive income with TikTok Organic </p>

            <strong>You're Going to Learn...</strong> 
           
            <ul style={{ textAlign: 'left' }}>
          <li>How to launch an automated income stream using the TikTok App on your phone.</li>
          <li>The 3 steps to making a full-time income for busy people without experience</li>
          <li>How everyday people are tapping into this rapidly emerging trend</li>
        </ul>
        <div style={formContainer}>

        <Button type="button" variant="contained" color="primary" style={submitButtonStyles}>
                <b>Watch the free case study</b>
              </Button>
        </div>
        </div> */}
        {/* Your other content */}
      </main>
      <Outlet />
    </div>
  );
}

export default Index;
