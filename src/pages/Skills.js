// Skills, languages...

import './Skills.scss';
import {data} from '../common/data';
import {SkillCard, IconSkillCard} from '../widgets/SkillCard';

function Skills() {
  return (
    <div className="Skills" id="skills">
      {/* {data.skills.map((skill, i) => <SkillCard key={i} skill={skill} />)} */}
      {/* TODO : Update data.js */}
      <SkillCard skill={data.skills[1]} />
      <SkillCard skill={data.skills[2]} />
      <IconSkillCard />
    </div>
  );
}

export default Skills;
