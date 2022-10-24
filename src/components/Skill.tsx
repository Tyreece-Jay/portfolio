import React from 'react';
import { ProgressBar } from './progressbar';
import { SkillPercentage } from './SkillPercentage';

export function Skill(name: string, percentage: SkillPercentage) {
  return <div className="Skill">
    <h4>{name.toUpperCase()}</h4>
    <div className='Progress' aria-label={name}>
      <ProgressBar completed={percentage} />
    </div>
  </div>;
}
