
// import React, { useEffect, useState } from 'react';
// import Layout from '../layouts/Layout'; // Import the Layout component
// import { Avatar, Button, Typography, Container, Grid, Input } from '@mui/material';

// const Profile = () => {
//   const [profilePic, setProfilePic] = useState('');
//   const [username, setUsername] = useState(''); // State for username
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch username from API
//     fetch('/api/user/profile')
//       .then(response => response.json())
//       .then(data => {
//         setUsername(data.username || 'Guest');
//         setProfilePic(data.profilePic || 'https://via.placeholder.com/150');
//         setLoading(false);
//       })
//       .catch(() => {
//         setUsername('Error fetching username');
//         setLoading(false);
//       });
//   }, []);

//   const handleProfilePicChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setProfilePic(reader.result);
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <Layout>
//       <Container maxWidth="sm">
//         <div className="profile">
//           <h2>Profile Page</h2>
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             <>
//               <Grid container spacing={3} alignItems="center">
//                 <Grid item xs={12} md={4} container direction="column" alignItems="center">
//                   <Avatar
//                     src={profilePic}
//                     alt="Profile"
//                     sx={{ width: 150, height: 150 }}
//                   />
//                   <Button
//                     variant="contained"
//                     component="label"
//                     sx={{ mt: 2 }}
//                   >
//                     Upload Photo
//                     <Input
//                       type="file"
//                       accept="image/*"
//                       hidden
//                       onChange={handleProfilePicChange}
//                     />
//                   </Button>
//                 </Grid>
//                 <Grid item xs={12} md={8}>
//                   <Typography variant="body1">
//                     <strong>Username:</strong> {username}
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </>
//           )}
//         </div>
//       </Container>
//     </Layout>
//   );
// };

// export default Profile;

// import React, { useEffect, useState } from 'react';
// import Layout from '../layouts/Layout'; // Import the Layout component
// import { Avatar, Button, Typography, Container, Grid, Input } from '@mui/material';

// const Profile = () => {
//   const [profilePic, setProfilePic] = useState('');
//   const [username, setUsername] = useState(''); // State for username
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Login and fetch username from API
//     fetch('https://dummyjson.com/auth/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         username: 'emilys',
//         password: 'emilyspass',
//         expiresInMins: 30, // optional, defaults to 60
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.username) {
//           setUsername(data.username);
//           setProfilePic(data.profilePic || 'https://via.placeholder.com/150');
//         } else {
//           setUsername('Guest');
//         }
//         setLoading(false);
//       })
//       .catch(() => {
//         setUsername('Error fetching username');
//         setLoading(false);
//       });
//   }, []);

//   const handleProfilePicChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setProfilePic(reader.result);
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <Layout>
//       <Container maxWidth="sm">
//         <div className="profile">
//           <h2>Profile Page</h2>
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             <>
//               <Grid container spacing={3} alignItems="center">
//                 <Grid item xs={12} md={4} container direction="column" alignItems="center">
//                   <Avatar
//                     src={profilePic}
//                     alt="Profile"
//                     sx={{ width: 150, height: 150 }}
//                   />
//                   <Button
//                     variant="contained"
//                     component="label"
//                     sx={{ mt: 2 }}
//                   >
//                     Upload Photo
//                     <Input
//                       type="file"
//                       accept="image/*"
//                       hidden
//                       onChange={handleProfilePicChange}
//                     />
//                   </Button>
//                 </Grid>
//                 <Grid item xs={12} md={8}>
//                   <Typography variant="body1">
//                     <strong>Username:</strong> {username}
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </>
//           )}
//         </div>
//       </Container>
//     </Layout>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from 'react';
import Layout from '../layouts/Layout'; // Import the Layout component
import { Avatar, Button, Typography, Container, Grid, Input, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Profile = () => {
  const [profilePic, setProfilePic] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // State for email
  const [phoneNumber, setPhoneNumber] = useState(''); // State for phone number
  const [gender, setGender] = useState(''); // State for gender
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Login and fetch user details from API
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.username) {
          setUsername(data.username);
          setEmail(data.email || 'N/A');
          setPhoneNumber(data.phone || 'N/A');
          setProfilePic(data.profilePic || 'https://via.placeholder.com/150');
        } else {
          setUsername('Guest');
          setEmail('N/A');
          setPhoneNumber('N/A');
        }
        setLoading(false);
      })
      .catch(() => {
        setUsername('Error fetching username');
        setEmail('Error fetching email');
        setPhoneNumber('Error fetching phone number');
        setLoading(false);
      });
  }, []);

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePic(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Layout>
      <Container maxWidth="sm">
        <div className="profile">
          <h2>Profile Page</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={4} container direction="column" alignItems="center">
                  <Avatar
                    src={profilePic}
                    alt="Profile"
                    sx={{ width: 150, height: 150 }}
                  />
                  <Button
                    variant="contained"
                    component="label"
                    sx={{ mt: 2 }}
                  >
                    Upload Photo
                    <Input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={handleProfilePicChange}
                    />
                  </Button>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography variant="body1"><strong>Username:</strong> {username}</Typography>
                  <Typography variant="body1"><strong>Email:</strong> {email}</Typography>
                  <Typography variant="body1"><strong>Phone:</strong> {phoneNumber}</Typography>
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel id="gender-select-label">Gender</InputLabel>
                    <Select
                      labelId="gender-select-label"
                      value={gender}
                      label="Gender"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </>
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default Profile;
