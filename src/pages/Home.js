// Contact + menu

import './Home.scss';
import {data} from '../common/data';
import picture from '../res/picture.jpg';

// Icon buttons within the header
function IconButton(props) {
  return (
    <div class="icon-button">
      <button class="icon-card" onClick={props.onClick}>
        <i class="material-icons idle">{props.icon}</i>
        <i class="material-icons onhover">{props.iconHover}</i>
        {/* <div class="hint"> */}
        {/* TODO : Hint can be null */}
        {/* </div> */}
      </button>
      {props.hint !== undefined && <p class="hint">{props.hint}</p>}
    </div>
  );
}

function Home(props) {
  // TODO : Lang
  return (
    <div className="Home">
      <header>
          {/* TODO : Clicks */}
          {/* TODO : Github, Linkedin... */}
          <IconButton icon="translate"
            iconHover="translate"
            hint={data.translate_lang}
            onClick={props.onChangeLang} />
          <IconButton icon="call" hint={data.phone}
            iconHover="content_copy"
            onClick={() => console.log("call")} />
          <IconButton icon="mail" hint={data.mail}
            iconHover="content_copy"
            onClick={() => console.log("mail")} />
            {/* TODO : Display next language */}
      </header>

      <div class="content">
        <div class="picture-card">
          <img alt="" class="picture" src={picture} />
        </div>

        <h1>Célian Raimbault</h1>
        <h2>{data.job}</h2>
      </div>

      <nav>
        {/* TODO : Use p not a, button clickable */}
        <div>
          <div class="nav-button">
            <a href="#skills">{data.career}</a>

          </div>

          <div class="arrow-down"></div>
        </div>

        <div class="nav-button">
          <a href="#projects">{data.projects}</a>
        </div>
      </nav>
    </div>
  );
}

export default Home;
