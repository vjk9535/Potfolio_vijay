import React, { useEffect } from 'react'
import photo from '../photo.jpg'
import { Image } from 'semantic-ui-react'
import { Paper, MenuList, MenuItem,ListItemText,Divider } from '@mui/material'
import { useState} from 'react'
import Work from './Work'
import Certification from './Certification'
import Skill from './Skill'
import Education from './Education'
import Achievement from './Achievement'
import Poc from './Poc'
export default function Home(props) {

    const [skillIsShown, setSkillIsShown] = useState(false);
    const [initialDisplay, setInitialDisplay] = useState(false);
    const [workDisplay, setWorkDisplay] = useState(false);
    const [certificationDisp, setCertificationDisp] = useState(false);
    const [educationDisp, setEducationDisp] = useState(false);
    const [achievementDisp, setachievementDisp] = useState(false);
    const [pocDisp, setpocDisp] = useState(false);

useEffect(() => {
if(skillIsShown=== false && workDisplay=== false && certificationDisp=== false && educationDisp=== false && achievementDisp=== false && pocDisp === false) {
  setInitialDisplay(true);
}
else {
  setInitialDisplay(false);
}
},[skillIsShown,workDisplay,certificationDisp,educationDisp, achievementDisp , pocDisp]);  
const SkillClick = event => {
    
    setSkillIsShown(current => !current);
    setWorkDisplay(false);
    setCertificationDisp(false);
    setEducationDisp(false);
    setpocDisp(false);
        setachievementDisp(false);
      }

      const WorkClick = event => {
        setWorkDisplay(current => !current);
        setSkillIsShown(false);
        setCertificationDisp(false);
        setEducationDisp(false);
        setpocDisp(false);
        setachievementDisp(false);
          }

          const certificationClick = event => {
            setCertificationDisp(current => !current);
            setWorkDisplay(false);
            setSkillIsShown(false);
            setEducationDisp(false);
            setpocDisp(false);
            setachievementDisp(false);
              }
              const educationClick = event => {
                setEducationDisp(current => !current);
                setSkillIsShown(false);
                setWorkDisplay(false);
                setCertificationDisp(false);
                setachievementDisp(false);
                setpocDisp(false);
                  }
                  const achievementClick = event => {
                    setachievementDisp(current => !current);
                    setSkillIsShown(false);
                setWorkDisplay(false);
                setCertificationDisp(false);
                setEducationDisp(false);
                setpocDisp(false);
                      }
                      const pocClick = event => {
                        setpocDisp(current => !current);
                        setSkillIsShown(false);
                setWorkDisplay(false);
                setCertificationDisp(false);
                setachievementDisp(false);
                setEducationDisp(false);
                          }
 
  return (
<div>
<div className='ball'></div>
    <div style={{display:'flex',justifyContent:'center'}}>
    <Image src={photo} size='small' rounded/>
    </div>
    <div style={{display:'flex',padding:'2% 0% 0% 3%'}}>
    <Paper sx={{ width: 220, maxWidth: '100%',border:'1px solid black',textAlign:'center'}}>
      <MenuList >
        <MenuItem style={{backgroundColor: skillIsShown ? '#067b9c' : ''}}>
          <ListItemText className='Skills' onClick={SkillClick}  style={{color: skillIsShown ? 'white' : 'black'}}>Skills</ListItemText>
        </MenuItem>
        <Divider/>
        <MenuItem style={{backgroundColor: workDisplay ? '#067b9c' : ''}}>
          <ListItemText className='WorkExperience' onClick={WorkClick} style={{color: workDisplay ? 'white' : 'black'}}>Work Experience</ListItemText>
        </MenuItem>
        <Divider/>
        <MenuItem style={{backgroundColor: certificationDisp ? '#067b9c' : ''}}>
          <ListItemText className='Certifications' onClick={certificationClick} style={{color: certificationDisp ? 'white' : 'black'}}>Certifications</ListItemText>
        </MenuItem>
        <Divider/>
        <MenuItem style={{backgroundColor: educationDisp ? '#067b9c' : ''}}>
          <ListItemText className='Education' onClick={educationClick} style={{color: educationDisp ? 'white' : 'black'}}>Education</ListItemText>
        </MenuItem>
        <Divider/>
        <MenuItem style={{backgroundColor: achievementDisp ? '#067b9c' : ''}}>
          <ListItemText className='Achievements' onClick={achievementClick} style={{color: achievementDisp ? 'white' : 'black'}}>Achievements</ListItemText>
        </MenuItem>
        <Divider/>
        <MenuItem style={{backgroundColor: pocDisp ? '#067b9c' : ''}}>
          <ListItemText className='POC' onClick={pocClick} style={{color: pocDisp ? 'white' : 'black'}}>POC</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
    </div>
{skillIsShown && <Skill />}
{workDisplay && <Work />}
{certificationDisp && <Certification/>}
{educationDisp && <Education/>}
{achievementDisp && <Achievement/>}
{pocDisp && <Poc/>}
{initialDisplay && <div><p style={{display:'flex',justifyContent:'center',marginTop:'-15%',fontSize:'200%',fontWeight:'bold'}}>Mr. Vijay Kumar</p><br/><p style={{display:'flex',justifyContent:'center',marginTop:'-5%',fontSize:'200%',fontWeight:'bold'}}><br />Front End (React JS) Developer</p>
<p style={{fontSize:'20px',fontWeight:'bold',display:'flex',justifyContent:'center',padding:'0% 20% 5% 20%'}}>" More than 2+ year of experience in front end development in React JS. Interested in learning new technologies and to successfully
            develop various features under minimal supervision. Good Knowledge working on Responsive UI using HTML5, CSS, JavaScript, ES6. "</p>
</div>}
</div>
  )
}
