// TODO : Stateful
// TODO : Language skill card

import './SkillCard.scss';
import {data} from '../common/data';
import python from '../res/python.png';
import cpp from '../res/cpp.png';
import flutter from '../res/flutter.png';
import julia from '../res/julia.png';
import linux from '../res/linux.png';
import vim from '../res/vim.png';
import vscode from '../res/vscode.png';
import git from '../res/git.png';

function SkillCard(props) {
  let skill = props.skill;

  return (
    <div className="SkillCard">
      <div className="skill-card">
        <div className="decoration" />
        <div className="content">
          <h4>{skill.title}</h4>
          <ul>
            { skill.items.map((s, i) => ( <li key={i} dangerouslySetInnerHTML={{__html: s}}></li> )) }
          </ul>
        </div>
      </div>
    </div>
  );
}

// langIcon, hint, ratio, softIcon, skill
function IconSkillRow(props) {
  return (
    <tr className="row">
      <th><img src={props.langIcon} alt="" /></th>
      {/* TODO : Hint */}
      {/* TODO : Ratio */}
      <th><img src={props.softIcon} alt="" /></th>
      <th><p>{props.skill}</p></th>
    </tr>
  );
}

// Bottom right card
function IconSkillCard(props) {
  return (
    <div className="SkillCard">
      <div className="skill-card">
        <div className="decoration" />
        <div className="content">
          <h4>{data.icon_skills.title}</h4>
          <table>
            <IconSkillRow langIcon={python} hint="Python" ratio={1} softIcon={linux} skill={data.icon_skills.oop} />
            <IconSkillRow langIcon={cpp} hint="C++" ratio={1} softIcon={vim} skill={data.icon_skills.func_prog} />
            <IconSkillRow langIcon={flutter} hint="Dart / Flutter" ratio={6 / 10} softIcon={vscode} skill={data.icon_skills.data_struct} />
            <IconSkillRow langIcon={julia} hint="Julia" ratio={5 / 10} softIcon={git} skill={data.icon_skills.proj_manag} />
          </table>
        </div>
      </div>
    </div>
  );
}

export {SkillCard, IconSkillCard};
