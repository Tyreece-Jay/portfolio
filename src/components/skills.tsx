import React from 'react';
import { SkillPercentage } from './skillpercentage';
import Skill from './skill';

export default function Skills() {
  return <div className="Skills">
    <h3 className="Skills-title">PROFESSIONAL SKILLS</h3>
    {Skill("javascript & typescript", SkillPercentage.JavascriptAndTypescript)}
    {Skill("react", SkillPercentage.React)}
    {Skill("html & css", SkillPercentage.HtmlAndCss)}
    {Skill("c#", SkillPercentage.CSharp)}
    {Skill("sql", SkillPercentage.Sql)}
    {Skill(".net", SkillPercentage.DotNet)}
  </div>;
}


