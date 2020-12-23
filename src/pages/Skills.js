// Experiences, skills, languages...

import './Skills.scss';
import {data} from '../common/data';
import SkillCard from '../widgets/SkillCard';

function Skills() {
  return (
    <div className="Skills" id="skills">
      {data.skills.map((skill, i) => <SkillCard key={i} skill={skill} />)}
      {/* TODO : Icon skills card */}
      <SkillCard skill={{title: "WIP", items: ["wip..."]}} />
    </div>
  );
}

export default Skills;
