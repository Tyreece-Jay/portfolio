import React from 'react';
import { SkillPercentage } from './skillpercentage';
import Skill from './skill';
import './skills.styles.css'

export default function Skills() {
  return <div className="skills">
    <h4 className="skills-headline">Constantly Curious</h4>
    <h3 className="skills-title">PROFESSIONAL SKILLS</h3>
    <div className='frontend-skills'>
      {Skill("javascript & typescript", SkillPercentage.JavascriptAndTypescript)}
      {Skill("react", SkillPercentage.React)}
      {Skill("html & css", SkillPercentage.HtmlAndCss)}
    </div>
    <div className='backend-skills'>
      {Skill("c#", SkillPercentage.CSharp)}
      {Skill("sql", SkillPercentage.Sql)}
      {Skill(".net", SkillPercentage.DotNet)}
    </div>
  </div>;
}