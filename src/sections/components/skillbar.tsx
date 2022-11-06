import React from 'react';
import { ProgressBar } from './progressbar';
import { SkillPercentage } from './skillpercentage';

export default function SkillBar(name: string, percentage: SkillPercentage) {
  return <div className="skill">
    <h4 className="skill-name">{name.toUpperCase()}</h4>
    <h4 className="skill-percentage">{percentage}%</h4>
    <div className="skill-progressbar" aria-label={name}>
      <ProgressBar progress={percentage} />
    </div>
  </div>;
}
