import React from 'react';
import { SkillPercentage } from '../types/skillpercentage';
import SkillBar from './components/skillbar';
import './styles/skills.styles.css'

export default function Skills() {
  return <div className="skills">
    <h4 className="skills-headline">Constantly Curious</h4>
    <h3 className="skills-title">PROFESSIONAL SKILLS</h3>
    <div className='frontend-skills'>
      {SkillBar("javascript & typescript", SkillPercentage.JavascriptAndTypescript)}
      {SkillBar("react", SkillPercentage.React)}
      {SkillBar("html & css", SkillPercentage.HtmlAndCss)}
    </div>
    <div className='backend-skills'>
      {SkillBar("c#", SkillPercentage.CSharp)}
      {SkillBar("sql", SkillPercentage.Sql)}
      {SkillBar(".net", SkillPercentage.DotNet)}
    </div>
  </div>;
}