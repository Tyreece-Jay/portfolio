import React from 'react';
import { SkillPercentage } from './SkillPercentage';
import { Skill } from './Skill';

export default function Skills() {
  return <div>
    <h3 className="Skills-header">PROFESSIONAL SKILLS</h3>
    <div className="Skills">
      {Skill("javascript & typescript", SkillPercentage.JavascriptAndTypescript)}
      {Skill("react", SkillPercentage.React)}
      {Skill("html & css", SkillPercentage.HtmlAndCss)}
    </div>
  </div>;
}


