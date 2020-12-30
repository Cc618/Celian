// Experiences, skills, languages...

import './Skills.scss';
import {data} from '../common/data';
import {SkillCard, IconSkillCard} from '../widgets/SkillCard';

function Skills() {
  return (
    <div className="Skills" id="skills">
      <div className="wrapper">
        {/* <div className="tst left top"><div className="tst-1"></div></div>
        <div className="tst right top"><div className="tst-2"></div></div>
        <div className="tst left bottom"><div className="tst-2"></div></div>
        <div className="tst right bottom"><div className="tst-1"></div></div> */}
        {data.skills.map((skill, i) => <SkillCard key={i} skill={skill} />)}
        <IconSkillCard />
      </div>
    </div>

    // <div className="tst">
    //   <div className="tst-content">
    //     <div className="red" />
    //     <div className="blue" />
    //     <div className="blue" />
    //     <div className="red" />
    //     {/* <div className="tst left top"><div className="tst-1"></div></div>
    //     <div className="tst right top"><div className="tst-2"></div></div>
    //     <div className="tst left bottom"><div className="tst-2"></div></div>
    //     <div className="tst right bottom"><div className="tst-1"></div></div> */}
    //   </div>
    // </div>
  );
}

export default Skills;
