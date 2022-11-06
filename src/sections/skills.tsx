import React from 'react';
import { SkillPercentage } from './components/skillpercentage';
import SkillBar from './components/skillbar';
import SkillCircle from './components/skillcircle';

export default function Skills() {
  return <div className="Skills">
    <h3 className="Skills-headline">Knowledge Is Everything</h3>
    <h3 className="Skills-title">PROFESSIONAL SKILLS</h3>
    <div className='SkillBars'>
      {SkillBar("javascript & typescript", SkillPercentage.JavascriptAndTypescript)}
      {SkillBar("react", SkillPercentage.React)}
      {SkillBar("html & css", SkillPercentage.HtmlAndCss)}
      {SkillBar("c#", SkillPercentage.CSharp)}
      {SkillBar("sql", SkillPercentage.Sql)}
      {SkillBar(".net", SkillPercentage.DotNet)}
    </div>
    <div className="SkillCircles">
      {SkillCircle("agile - scrum & kanban", SkillPercentage.Agile)}
      {SkillCircle("pair/mob programming", SkillPercentage.Programming)}
      {SkillCircle("test-driven development", SkillPercentage.Tdd)}
      {SkillCircle("domain-driven development", SkillPercentage.Ddd)}
    </div>
  </div>;
}