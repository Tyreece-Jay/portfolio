import React from 'react';
import { SkillPercentage } from './skillpercentage';
import Skill from './skill';
import { CircularProgressbar } from 'react-circular-progressbar';

export default function Skills() {
  return <div className="Skills">
    <h3 className="Skills-headline">Knowledge Is Everything</h3>
    <h3 className="Skills-title">PROFESSIONAL SKILLS</h3>
    <div className='SkillBars'>
      {Skill("javascript & typescript", SkillPercentage.JavascriptAndTypescript)}
      {Skill("react", SkillPercentage.React)}
      {Skill("html & css", SkillPercentage.HtmlAndCss)}
      {Skill("c#", SkillPercentage.CSharp)}
      {Skill("sql", SkillPercentage.Sql)}
      {Skill(".net", SkillPercentage.DotNet)}
    </div>
    <div className="SkillCircles">
    <div className="SkillCircle" aria-label="agile - scrum & kanban">
      <h4 className="Skill-name">AGILE - SCRUM & KANBAN</h4>
      <CircularProgressbar value={+SkillPercentage.Agile} text={`${SkillPercentage.Agile}%`} />
    </div>
    <div className="SkillCircle" aria-label="pair/mob programming">
      <h4 className="Skill-name">PAIR/MOB PROGRAMMING</h4>
      <CircularProgressbar value={+SkillPercentage.Programming} text={`${SkillPercentage.Programming}%`} />
    </div>
    </div>
  </div>;
}