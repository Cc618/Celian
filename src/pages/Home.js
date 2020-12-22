// Contact + menu

import './Home.scss';
import {data, lang} from '../common/data';
import picture from '../res/picture.jpg';
import github from '../res/github.png';
import linkedin from '../res/linkedin.png';
import en from '../res/en.png';
import fr from '../res/fr.png';

// Icon buttons within the header
function IconButton(props) {
  return (
    <div class="icon-button">
      <button class="icon-card" onClick={props.onClick}>
        {props.icon !== undefined && <i class="material-icons idle">{props.icon}</i>}
        {props.iconHover !== undefined && <i class="material-icons onhover">{props.iconHover}</i>}
        {props.image !== undefined && <img src={props.image} />}
      </button>
      {props.hint !== undefined && <p class="hint">{props.hint}</p>}
    </div>
  );
}

// Buttons at the bottom for the navigation
// - title
// - link
function NavButton(props) {
  return (
    <div class="nav-button-wrapper">
      <div class="nav-button"
        onClick={() => document.querySelector(props.link).scrollIntoView({behavior: 'smooth'})}>
        <p>{props.title}</p>
      </div>

      <div class="arrow-down-wrapper">
        <div class="arrow-down"></div>
      </div>
    </div>
  );
}

function Home(props) {
  return (
    <div className="Home">
      <header>
          <IconButton image={lang == "en" ? fr : en}
            hint={data.translate}
            onClick={props.onChangeLang} />
          <div style={{flex: 1}} />
          <IconButton icon="mail" hint={data.mail}
            iconHover="content_copy"
            onClick={() => console.log("mail")} />
            {/* TODO : Copy + snack bar */}
          <IconButton icon="call" hint={data.phone}
            iconHover="content_copy"
            onClick={() => console.log("call")} />
          <IconButton image={github}
            hint="GitHub"
            onClick={() => window.open(data.url_github)} />
          <IconButton image={linkedin}
            hint="LinkedIn"
            onClick={() => window.open(data.url_linkedin)} />
      </header>

      <div class="content">
        <div class="picture-card">
          <img alt="" class="picture" src={picture} />
        </div>

        <h1>Célian Raimbault</h1>
        <h2>{data.job}</h2>
      </div>

      <nav>
        <NavButton title={data.career} link="#skills" />
        <NavButton title={data.projects} link="#projects" />
      </nav>
    </div>
  );
}

export default Home;
