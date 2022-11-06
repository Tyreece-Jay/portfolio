import React from 'react';
import { SkillPercentage } from './components/skillpercentage';
import SkillBar from './components/skillbar';

export default function Skills() {
  return <div className="skills">
    <h4 className="skills-headline">Knowledge Is Everything</h4>
    <h3 className="skills-title">PROFESSIONAL SKILLS</h3>
    <div className='skill-bars'>
      {SkillBar("javascript & typescript", SkillPercentage.JavascriptAndTypescript)}
      {SkillBar("react", SkillPercentage.React)}
      {SkillBar("html & css", SkillPercentage.HtmlAndCss)}
      {SkillBar("c#", SkillPercentage.CSharp)}
      {SkillBar("sql", SkillPercentage.Sql)}
      {SkillBar(".net", SkillPercentage.DotNet)}
    </div>
  </div>;
}