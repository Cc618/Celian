// Experiences, skills, languages...

import './Skills.scss';
import {data} from '../common/data';
import {SkillCard, IconSkillCard} from '../widgets/SkillCard';

function Skills() {
  return (
    <div className="Skills" id="skills">
      <div className="wrapper">
        {data.skills.map((skill, i) => <SkillCard key={i} skill={skill} />)}
        <IconSkillCard />
      </div>
    </div>
  );
}

export default Skills;
