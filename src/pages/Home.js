// Contact + menu

import './Home.scss';
import {data} from '../common/data';
import picture from '../res/picture.jpg';

function IconButton(props) {
  return (
    <button class="icon-card" onClick={props.onClick}>
      <i class="material-icons">{props.icon}</i>
      {/* <div class="hint"> */}
      {/* TODO : Hint can be null */}
        <p class="hint">{props.hint}</p>
      {/* </div> */}
    </button>
  );
}

function Home(props) {
  // TODO : Lang
  return (
    <div className="Home">
      <header>
          {/* TODO : Clicks + hints */}
          {/* TODO : Github, Linkedin... + Make class */}
          <IconButton icon="call" hint="06 06 06 06 06"
            onClick={() => console.log("call")} />
          {/* <IconButton icon="mail" onClick={() => console.log("mail")} /> */}
      </header>

      <div class="content">
        <div class="picture-card">
          <img alt="" class="picture" src={picture} />
        </div>

        <h1>Célian Raimbault</h1>
        <h2>{data.job}</h2>
      </div>
    </div>
  );
}

export default Home;
