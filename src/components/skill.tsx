import React from 'react';
import { ProgressBar } from './progressbar';
import { SkillPercentage } from './skillpercentage';

export default function Skill(name: string, percentage: SkillPercentage) {
  return <div className="Skill">
    <h4 className="Skill-name">{name.toUpperCase()}</h4>
    <h4 className="Skill-percentage">{percentage}%</h4>
    <div className="Skill-progressbar" aria-label={name}>
      <ProgressBar progress={percentage} />
    </div>
  </div>;
}
