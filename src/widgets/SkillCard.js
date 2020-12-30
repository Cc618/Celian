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

// langIcon, langHint, ratio, ratioColor, softIcon, softHint, skill
function IconSkillRow(props) {
  return (
    <tr className="row">
      <td className="item-center hint">
        <img src={props.langIcon} alt="" />
        <div>
          <div className="hint-card">
            <p>{props.langHint}</p>
          </div>
        </div>
      </td>
      {/* TODO : Hint */}
      {/* TODO : Ratio color */}
      <td className="item-center">
        <div className="ratio">
          <div className="bar" style={{width: `${props.ratio * 100}%`, backgroundColor: props.ratioColor}} />
        </div>
      </td>
      <td className="item-center hint">
        <img src={props.softIcon} alt="" />
        <div>
          <div className="hint-card">
            <p>{props.softHint}</p>
          </div>
        </div>
      </td>
      <td><p>{props.skill}</p></td>
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
          {/* TODO : tbody error */}
          <table>
            <IconSkillRow langIcon={python} langHint="Python" ratio={1}
              ratioColor="#F44336" softIcon={linux} softHint="Linux"
              skill={data.icon_skills.oop} />
            <IconSkillRow langIcon={cpp} langHint="C++" ratio={1}
              ratioColor="#9C27B0" softIcon={vim} softHint="Vim"
              skill={data.icon_skills.func_prog} />
            <IconSkillRow langIcon={flutter} langHint="Dart / Flutter" ratio={6 / 10}
              ratioColor="#2196F3" softIcon={vscode} softHint="VS Code"
              skill={data.icon_skills.data_struct} />
            <IconSkillRow langIcon={julia} langHint="Julia" ratio={5 / 10}
              ratioColor="#4CAF50" softIcon={git} softHint="Git"
              skill={data.icon_skills.proj_manag} />
          </table>
        </div>
      </div>
    </div>
  );
}

export {SkillCard, IconSkillCard};
