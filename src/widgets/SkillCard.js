import './SkillCard.scss';
import {data, resources} from '../common/data';

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

// title, items, textContent
function IconSkillRow(props) {
  return (
    <div className="icon-card-row">
      <div className="icon-card-title">
        <div className="wrapper">
          <p>{props.title}</p>
        </div>
      </div>
      <div className="icon-card-list">
        {props.textContent ?
          props.items.map((v) => <p>{v}</p>) :
          // TODO : Hint
          props.items.map((v) =>
            <div className="icon-wrapper hint">
              <img src={resources[v.src]} alt="" />

              <div className="hint-wrapper">
               <div className="hint-card">
                 <p>{v.title}</p>
               </div>
             </div>
              {/* <div className="icon-card-hint-wrapper">
                <div className="icon-card-hint">
                  <p>{v.title}</p>
                </div>
              </div> */}
            </div>)
        }
      </div>
    </div>
  );

  // return (
  //   <div className="row">
  //     <div className="item-center hint">
  //       <img src={props.langIcon} alt="" />
  //       <div className="hint-wrapper">
  //         <div className="hint-card">
  //           <p>{props.langHint}</p>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="item-start ratio-wrapper">
  //       <div className="ratio">
  //         <Bar ratio={props.ratio} color={props.ratioColor} />
  //       </div>
  //     </div>
  //     <div className="item-center hint">
  //       <img src={props.softIcon} alt="" />
  //       <div className="hint-wrapper">
  //         <div className="hint-card">
  //           <p>{props.softHint}</p>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="skill-layout"><p className="skill-text">{props.skill}</p></div>
  //   </div>
  // );
}

// Bottom right card
function IconSkillCard(props) {
  // TODO : Translate
  // TODO : Add pytorch etc...
  let content = [
    {
      title: "Performant",
      items: [
        {
          title: "C / C++",
          src: "cpp"
        },
        {
          title: "Python",
          src: "python"
        }
      ],
      text_content: false
    },
    {
      title: "A l'aise",
      items: [
        {
          title: "Dart / Flutter",
          src: "dart"
        },
        {
          title: "Julia",
          src: "julia"
        },
        {
          title: "Git",
          src: "git"
        },
      ],
      text_content: false
    },
    {
      title: "Compétences",
      items: [
        "Oriented Object Programming",
        "Functional Programming",
        "Data Structures",
        "Project Management"
      ],
      text_content: true
    }
  ];

  return (
    <div className="SkillCard">
      <div className="skill-card icon-skill-card">
        <div className="content icon-skill-card">
          {/* TODO : Remove ? */}
          {/* <h4>{data.icon_skills.title}</h4> */}
          <div className="icon-card-content">
            {content.map((v) => <IconSkillRow title={v.title}
              textContent={v.text_content} items={v.items} />)}
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="SkillCard">
  //     <div className="skill-card">
  //       <div className="decoration" />
  //       <div className="content">
  //         <h4>{data.icon_skills.title}</h4>
  //         <div className="table">
  //             <IconSkillRow langIcon={python} langHint="Python" ratio={1}
  //               ratioColor="#F44336" softIcon={linux} softHint="Linux"
  //               skill={data.icon_skills.oop} />
  //             <IconSkillRow langIcon={cpp} langHint="C / C++" ratio={1}
  //               ratioColor="#9C27B0" softIcon={vim} softHint="Vim"
  //               skill={data.icon_skills.func_prog} />
  //             <IconSkillRow langIcon={flutter} langHint="Dart / Flutter" ratio={6 / 10}
  //               ratioColor="#2196F3" softIcon={vscode} softHint="VS Code"
  //               skill={data.icon_skills.data_struct} />
  //             <IconSkillRow langIcon={julia} langHint="Julia" ratio={5 / 10}
  //               ratioColor="#4CAF50" softIcon={git} softHint="Git"
  //               skill={data.icon_skills.proj_manag} />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export {SkillCard, IconSkillCard};
