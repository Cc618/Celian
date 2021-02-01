import './SkillCard.scss';
import {data, resources} from '../common/data';
import Bar from '../widgets/Bar';

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

// title, ratio, items, textContent, greyBg
function IconSkillRow(props) {
  let isGrey = props.greyBg;
  let greyBgClass = isGrey ? " grey-bg" : "";

  return (
    <div className={"icon-card-row" + greyBgClass}>
      {!props.textContent && <div className="icon-card-prefix">
        <p>{props.title}</p>
        <div className="ratio">
          <Bar ratio={props.ratio} color={isGrey ? "#FF6E40" : "#64B5F6"}
            bgColor={isGrey ? "#EEEEEE" : "#FAFAFA"} />
        </div>
      </div>}
      <div className={"icon-card-list" + (props.textContent ? " icon-card-list-text" : " icon-card-list-icons")}>
         {props.textContent ?
           props.items.map((v, i) => <div key={i} className="icon-card-text-wrapper">
             <p>{v}</p>
            </div>) :
           props.items.map((v, i) =>
             <div key={i} className="icon-wrapper hint">
               <img src={resources[v.src]} alt="" />
               <div className="hint-wrapper">
                <div className="hint-card">
                  <p>{v.title}</p>
                </div>
              </div>
             </div>)
         }
       </div>
     </div>
  );

  // return (
  //   <div className="icon-card-row">
  //     <div className="icon-card-title">
  //       <div className="wrapper">
  //         <p>{props.title}</p>
  //       </div>
  //     </div>
  //     {/* TODO : Animation */}
  //     <div className="icon-card-list">
  //       {props.textContent ?
  //         props.items.map((v) => <p>{v}</p>) :
  //         props.items.map((v) =>
  //           <div className="icon-wrapper hint">
  //             <img src={resources[v.src]} alt="" />
  //             <div className="hint-wrapper">
  //              <div className="hint-card">
  //                <p>{v.title}</p>
  //              </div>
  //            </div>
  //           </div>)
  //       }
  //     </div>
  //   </div>
  // );
}

// Bottom right card
function IconSkillCard(props) {
  let content = data.icon_skills;

  return (
    <div className="SkillCard">
      <div className="skill-card">
        <div className="decoration" />
        <div className="content">
          <h4>{data.icon_skills.title}</h4>
          <div className="icon-card-content">
            {content.map((v, i) => <IconSkillRow key={i} title={v.title}
              textContent={v.text_content} items={v.items} ratio={v.ratio}
              greyBg={i % 2 === 0} />)}
          </div>
        </div>
      </div>
    </div>);

  // return (
  //   <div className="SkillCard">
  //     <div className="skill-card icon-skill-card">
  //       <div className="content icon-skill-card">
  //         <div className="icon-card-content">
  //           {content.map((v) => <IconSkillRow title={v.title}
  //             textContent={v.text_content} items={v.items} />)}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export {SkillCard, IconSkillCard};
