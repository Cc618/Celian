// Contact + menu

import './Home.scss';
import {data, lang, printData} from '../common/data';
import picture from '../res/picture.jpg';
import github from '../res/github.png';
import linkedin from '../res/linkedin.png';
import en from '../res/en.png';
import fr from '../res/fr.png';
import App from './App';

// Icon buttons within the header
function IconButton(props) {
  return (
    <div className={"icon-button" + (props.printHide === undefined ? "" : " print-hide")}>
      <button className="icon-card" onClick={props.onClick}>
        {props.icon !== undefined && <i className="material-icons idle">{props.icon}</i>}
        {props.iconHover !== undefined && <i className="material-icons onhover">{props.iconHover}</i>}
        {props.image !== undefined && <img alt="" src={props.image} />}
        {props.text !== undefined && <div className="icon-button-text idle"><p>{props.text}</p></div>}
      </button>
      {props.hint !== undefined && <p className={"hint" + (props.isOdd !== undefined ?
        " hint-odd" : "")}>{props.hint}</p>}
      {props.canCopy !== undefined && <p className="copied">{data.copied}</p>}
    </div>
  );
}

// Buttons at the bottom for the navigation
// - title
// - link
function NavButton(props) {
  return (
    <div className={"nav-button-wrapper print-hide" + (props.canHide ? " phone-hide" : "")}>
      <div className="nav-button"
        onClick={() => document.querySelector(props.link).scrollIntoView({behavior: 'smooth'})}>
        <p>{props.title}</p>
      </div>

      <div className="arrow-down-wrapper">
        <div className="arrow-down"></div>
      </div>
    </div>
  );
}

function Home(props) {
  return (
    <div className="Home">
      <header>
          <IconButton image={lang === "en" ? fr : en}
            hint={data.translate}
            onClick={props.onChangeLang}
            printHide={true} />
          <IconButton text={data.print_pdf} hint={data.print_pdf}
            iconHover="download"
            onClick={downloadPrintableVersion}
            printHide={true} />
          <div className="spacer print-hide" />
          <IconButton icon="mail" hint={data.mail}
            iconHover="content_copy"
            canCopy="true"
            onClick={() => clipCopy(data.mail)} />
          <IconButton icon="call" hint={data.phone}
            iconHover="content_copy"
            canCopy="true"
            isOdd="true"
            onClick={() => clipCopy(data.phone)} />
          <IconButton image={github}
            hint={App.printMode ?
              <a href={data.url_github}>GitHub</a>
              : "GitHub"}
            onClick={() => window.open(data.url_github)} />
          <IconButton image={linkedin}
            hint={App.printMode ?
              <a href={data.url_linkedin}>LinkedIn</a>
              : "LinkedIn"}
            onClick={() => window.open(data.url_linkedin)} />
      </header>

      <div className="content">
        <div className="picture-wrapper">
          <div className="picture-card">
            <img alt="" className="picture" src={picture} />
          </div>
        </div>

        <div className="title-wrapper">
          <h1>Célian Raimbault</h1>
        </div>
        <div className="subtitle-wrapper">
          <h2>{data.job}</h2>
        </div>
      </div>

      <nav>
        <NavButton title={data.experiences} link="#experiences" />
        <NavButton title={data.background} link="#skills" canHide={true} />
        <NavButton title={data.projects} link="#projects" />
      </nav>
    </div>
  );
}

// Copy to clipboard
function clipCopy(text) {
  navigator.clipboard.writeText(text);
}

function downloadPrintableVersion() {
  window.open(printData[lang]);
}

export default Home;
