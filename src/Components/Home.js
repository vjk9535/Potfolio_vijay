import React from 'react'
import photo from '../photo.jpg'
import { Image } from 'semantic-ui-react'
import { Paper, MenuList, MenuItem,ListItemText,Divider,Box} from '@mui/material'
import { useState} from 'react'
import Work from './Work'
import Certification from './Certification'
import Skill from './Skill'
import Education from './Education'
import Achievement from './Achievement'
import Poc from './Poc'
export default function Home(props) {

  const [displayState, setDisplayState] = useState({
    Skills: false,
    WorkExperience: false,
    Certifications: false,
    Educations: false,
    Achievements: false,
    POC: false,
  });

  const handleMenuClick = (key) => {
    setDisplayState({ ...Object.fromEntries(Object.entries(displayState).map(([k, v]) => [k, k === key])) });
  };
  const { Skills, WorkExperience, Certifications, Educations, Achievements, POC } = displayState;

  return (
    <div>
      <div className='ball'></div>
      <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
        },
        justifyContent:'center',
        marginLeft:'18%'
      }}
    >
    <Image src={photo} size='small' rounded />
    </Box>
     
      <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
        },
        marginLeft:'5%',
        marginTop:'1%'
      }}
    >
        <Paper sx={{maxWidth: '100%', border: '1px solid black', textAlign: 'center'}} style={{height:'300px'}} >
          <MenuList sx={{width:200}}>
            {[
              { key: 'Skills', label: 'Skills' },
              { key: 'WorkExperience', label: 'Work Experience' },
              { key: 'Certifications', label: 'Certifications' },
              { key: 'Educations', label: 'Education' },
              { key: 'Achievements', label: 'Achievements' },
              { key: 'POC', label: 'POC' },
            ].map(({ key, label }) => (
              <>
                <MenuItem
                  style={{ backgroundColor: displayState[key] ? '#067b9c' : '' }}
                  onClick={() => handleMenuClick(key)}
                >
                  <ListItemText
                    className={key}
                    style={{ color: displayState[key] ? 'white' : 'black' }}
                  >
                    {label}
                  </ListItemText>
                </MenuItem>
                <Divider />
              </>
            ))}
          </MenuList>
        </Paper>
      {Skills && <Skill />}
      {WorkExperience && <Work />}
      {Certifications && <Certification />}
      {Educations && <Education />}
      {Achievements && <Achievement />}
      {POC && <Poc />}
      {!Object.values(displayState).some((v) => v) && (
        <div>
          <p style={{ display: 'flex', justifyContent: 'center', fontSize: '200%', fontWeight: 'bold' }}>
            Mr. Vijay Kumar
          </p>
          <p style={{ display: 'flex', justifyContent: 'center', fontSize: '200%', fontWeight: 'bold' }}>
          Front End (React JS) Developer
          </p>
          <p style={{ fontSize: '20px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', padding: '0% 20% 5% 20%' }}>
            " More than 2+ year of experience in front end development in React JS. Interested in learning new technologies and to successfully
            develop various features under minimal supervision. Good Knowledge working on Responsive UI using HTML5, CSS, JavaScript, ES6. "
          </p>
        </div>
      )}
    </Box>
    </div>
  );
}
