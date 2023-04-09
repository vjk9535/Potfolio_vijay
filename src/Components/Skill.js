 import { Tooltip } from '@mui/material';
import React from 'react';
import { Image } from 'semantic-ui-react';

function SkillItem({ imageSrc, label, tooltipTitle }) {
  return (
    <Tooltip title={tooltipTitle} placement='right'>
      <span className='Skill'>
        <Image src={imageSrc} size='tiny' />
        <p>{label}</p>
      </span>
    </Tooltip>
  );
}

export default function Skill() {
  const skills = [
    { imageSrc: 'logo192.png', label: 'ReactJS', tooltipTitle: '7/10' },
    { imageSrc: 'Js.png', label: 'JavaScript', tooltipTitle: '8/10' },
    { imageSrc: 'Css.png', label: 'CSS3', tooltipTitle: '7/10' },
    { imageSrc: 'Html.png', label: 'HTML5', tooltipTitle: '7/10' },
    { imageSrc: 'Mysql.png', label: 'MySQL', tooltipTitle: '8/10' },
    { imageSrc: 'logo192.png', label: 'React-Native', tooltipTitle: '7/10' },
    { imageSrc: 'Expressjs.png', label: 'ExpressJS', tooltipTitle: '3/10' },
    { imageSrc: 'MongoDB.jpg', label: 'MongoDB', tooltipTitle: '3/10' },
    { imageSrc: 'NodeLogo.png', label: 'NodeJS', tooltipTitle: '3/10' },
  ];

  return (
    <div className='horizontalGrid1' style={{width:'100%'}}>
      {skills.map((skill) => (
        <SkillItem {...skill} />
      ))}
    </div>
  );
}
