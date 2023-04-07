import { Tooltip } from '@mui/material'
import React from 'react'
import { Image } from 'semantic-ui-react'
export default function Skill() {
  return (
    <div
    className="horizontalGrid1">
        <Tooltip title='7/10' placement='right'><span className='SkillJs'><Image src={'logo192.png'} size='tiny' rounded/><p style={{display:'flex',padding:'2% 0% 2% 6%'}}>ReactJS</p></span></Tooltip>
        <span className='SkillJs'><Image src={'Js.png'} size='tiny' rounded/><p style={{display:'flex',padding:'2% 0% 2% 4%'}}>JavaScript</p></span>
        <span className='SkillJs'><Image src={'Css.png'} size='tiny' rounded/><p style={{display:'flex',padding:'2% 0% 2% 10%'}}>CSS3</p></span>
        <span className='SkillJs'><Image src={'Html.png'} size='tiny' rounded/><p style={{display:'flex',padding:'2% 0% 2% 6%'}}>HTML5</p></span>
        <span className='SkillReact'><Image src={'Mysql.png'} size='tiny' rounded/><p style={{display:'flex',padding:'2% 0% 2% 6%'}}>MySQL</p></span>
        <span className='SkillReact'><Image src={'logo192.png'} size='tiny' rounded/><p>React-Native</p></span>
        <span className='SkillReact'><Image src={'Expressjs.png'} size='tiny' rounded/><p style={{display:'flex',padding:'2% 0% 2% 6%'}}>ExpressJS</p></span>
        <span className='SkillReact'><Image src={'MongoDB.jpg'} size='tiny' rounded/><p style={{display:'flex',padding:'2% 0% 2% 6%'}}>MongoDB</p></span>
        <span className='SkillReact'><Image src={'NodeLogo.png'} size='tiny' rounded/><p style={{display:'flex',padding:'2% 0% 2% 6%'}}>NodeJS</p></span>
    </div>
  )
}
