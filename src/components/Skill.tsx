import React from 'react';
import { ProgressBar } from './progressbar';
import { SkillPercentage } from './SkillPercentage';

const JavaScriptAndTypeScript = require('../images/javascript-typescript.png'); 

export function Skill(name: string, percentage: SkillPercentage) {
  return <div className="Skill">
    <img src={JavaScriptAndTypeScript} alt={name} />
    <h4>{name.toUpperCase()}</h4>
    <div className='Progress' aria-label={name}>
      <h6>0%</h6>
      <ProgressBar completed={percentage} />
      <h6>100%</h6>
    </div>
  </div>;
}
