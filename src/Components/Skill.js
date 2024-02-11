 import { Tooltip } from '@mui/material';
import React from 'react';
import { Image } from 'semantic-ui-react';

function SkillItem({ imageSrc, label, tooltipTitle, rowNumber }) {
  return (
    <Tooltip title={tooltipTitle} placement='right'>
      <span className={`Skill${rowNumber}`}>
        <Image src={imageSrc} size={'tiny'}/>
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

  // Split the skills array into two separate arrays
  const firstRowSkills = skills.slice(0, 4);
  const secondRowSkills = skills.slice(4);

  return (
    <div style={{width:'100%'}}>
      {/* Map over the first row skills and assign them the "Skill-first-row" class */}
      <div className="horizontalGrid1">
        {firstRowSkills.map((skill, index) => (
          <SkillItem key={index} {...skill} rowNumber={1} />
        ))}
      </div>

      {/* Map over the second row skills and assign them the "Skill-second-row" class */}
      <div className="horizontalGrid1">
        {secondRowSkills.map((skill, index) => (
          <SkillItem key={index + 5} {...skill} rowNumber={2} />
        ))}
      </div>
    </div>
  );
}