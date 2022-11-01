import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { SkillPercentage } from './skillpercentage';

export default function SkillCircle(name: string, percentage: SkillPercentage) {
  return <div className="SkillCircle" aria-label={name}>
  <h4 className="Skill-name">{name.toUpperCase()}</h4>
  <CircularProgressbar value={+percentage} text={`${percentage}%`} />
</div>
}
