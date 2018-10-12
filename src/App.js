import React, { Component, Fragment } from 'react';
import OrganismCardBack from './components/OrganismCardBack';
import OrganismCardFront from './components/OrganismCardFront';

import AU from './images/australia_render1_opt.jpg';
import AU_8BIT from './images/australia_render_8bit.png';
import AU_BB from './images/australia_render_blackboard_opt.jpg';
import AU_SKETCH from './images/australia_sketch_opt.jpg';
import AU_SKETCH2 from './images/australia_render_sketch2_opt.jpg';
import AU_ZB from './images/australia_render_zenburn_opt.jpg';

import AU_FLAG from './images/flag_australia_original.png';
import AU_FLAG_8BIT from './images/flag_australia_8bit.png';
import AU_FLAG_SKETCH from './images/flag_australia_sketch.png';

import CRAB from './images/crab_l.jpg';
import CRAB_8BIT from './images/crab_l.jpg';
import CRAB_SKETCH from './images/crab_sketch2.jpg';

import WORDS from './data/words.json';
import THEMES from './data/themes.json';
import FONTS from './data/fonts.json';
import PROMPTS from './data/prompts.json';

const blackletter = ["rm-albion","dearest","unifraktur-cook","unifraktur-maguntia"];
const handwritten = ["architects-daughter","caveat","indie-flower","patrick-hand","chalkduster"];
const fonts = ["camingocode","caveat-brush", "cinzel", "domine", "exo-2", "fredericka", "muli", "papyrus", "play",
	"playtime", "press-start-2p", "schoolbell", "source-code-pro", "tron-outline", "vt323",
	"bpdots","ringbearer"];
const fonts_ja = ["jackeyfont","jpn-test","jpn-test-2","m-plus-rounded-1c","noto-sans","noto-serif","otsutome",
	"pixel-m-plus12","sawarabi-mincho","stroke-order"];

const pictures = {
	crab: {
		alt: "Crab on the beach",
		std: { photo: CRAB },
		retro: { photo: CRAB_8BIT },
		sketch: { photo: CRAB_SKETCH}
	},
	library: {},
	australia: {
		alt: "Australia from Satellite",
		altFlag: "Australian Flag",
		std: {
			photo: AU,
			flag: AU_FLAG,
		},
		retro: {
			photo: AU_8BIT,
			flag: AU_FLAG_8BIT,
		},
		sketch: {
			photo: AU_SKETCH,
			flag: AU_FLAG_SKETCH,
		},
	},
	asoko: {},
	sushi: {},
};

const TYPE_INDEX = 4;
const TYPE_SET = [ "hearKnow", "lookSpeak", "recall", "readSpeak", "convertWriteTranslit"];

const PROMPT_SET = [ PROMPTS.hearKnow, PROMPTS.lookSpeak, PROMPTS.recall,
	PROMPTS.readSpeak, PROMPTS.convertWriteTranslit ]; //PRIMARY VECTORS
//const PROMPT_SET2 = [ prompts.egDescribe, prompts.egMCD, prompts.soundKaruta,
//	prompts.QandA, prompts.opposites]; //SECONDARY VECTORS //todo: implement V2
// prompts.identifyCountryByFlag //TERTIARY VECTORS //todo: implement V3

const THEME_INDEX = 0;

const MASTER_THEME_SET = [ THEMES.zenMenu, THEMES.blackBoard, THEMES.momentumSpace, THEMES.inkOnRicePaper,
		THEMES.fullPhotoBeautiful, THEMES.zenBurnOriginal,  THEMES.retroConsole
];

const ICEBOX_THEME_SET = [THEMES.woodOnWood,
	THEMES.matrix, THEMES.futuristic, THEMES.highFantasy, THEMES.illumManus, THEMES.quiltedFiber, THEMES.mondrian, THEMES.rpgSketch, THEMES.indexCard, THEMES.zenBurnTachyons ];

const WORD_INDEX = 0; //crab==1 kanji, australia==long, library==many kanji, asoko==kana only, sushi==even kanji to kana ratio
const MASTER_WORD_SET = [WORDS.crab, WORDS.australia, WORDS.library, WORDS.asoko, WORDS.sushi];
const MASTER_PHOTO_SET = [pictures.crab, pictures.australia, pictures.library, pictures.asoko, pictures.sushi];

const SIDE_FLAG = 1; //0 represents front, 1 represents back
const INTRO_FLAG = 0; //0 represents intro, 1 represents non-intro
const EXPORT_FLAG = 0; //0 represents demo, 1 represents export

const IMMERSION_INDEX = 0;
const IMMERSION_SET = ["none","semi","total"];


const TOOLBAR_INDEX = 0;
const TOOLBAR_POS = [" bottom-0 left-0 w-100 tc center ", " top-0 left-0 w-100 tc center ",
	" top-0 left-0 ", " top-0 right-0 ", " bottom-0 left-0 ", " bottom-0 right-0 "];

const STY_CNTNR_TOOLBAR = " test-bg-purple db absolute w-100 pb3 mb4 z-9999 ";
const STY_TOOLBAR = " dib ph3 test-bg-blue center tc ";
const STY_BTN_TOOLBAR = " dib test-bg-red pa1 ma1 link grow ";

const CardDevToolBar = (props) => (
	<section className={props.tbCntnrStyle}>
		<aside className={props.tbStyle}>
			<a onClick={props.handleClick1} className={props.btnStyle}>Flip</a>
			<a onClick={props.handleClick2} className={props.btnStyle}>Theme</a>
			<a onClick={props.handleClick3} className={props.btnStyle}>Vector</a>
			<a onClick={props.handleClick4} className={props.btnStyle}>Word</a>
			<a onClick={props.handleClick5} className={props.btnStyle}>Preface</a>
			{/* <a onClick={props.handleClick6} className={props.btnStyle}>Move Btns</a> */}
			<a onClick={props.handleClick7} className={props.btnStyle}>Export</a>
			<a onClick={props.handleClick8} className={props.btnStyle}>Immerse</a>{/*no immersion, semi-immersion, full immersion*/}
		</aside>
	</section>
);

class CardDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			w: WORD_INDEX,
			p: WORD_INDEX,
			th: THEME_INDEX,
			tb: TOOLBAR_INDEX,
			ty: TYPE_INDEX,
			i: IMMERSION_INDEX,
			s: SIDE_FLAG,
			in: INTRO_FLAG,
			e: EXPORT_FLAG,
		};
	}

	toggleBinary = (i) => {
		return (i === 0 ? 1 : 0);
	};

	updateIndex = (i, set) => {
		const CNT = set.length;
		if(i < CNT - 1) {
			return i+1;
		}	else {
			return 0;
		}
	};

	handleClick1 = (event) => { this.setState({s: this.toggleBinary(this.state.s)}) };
	handleClick2 = (event) => { this.setState({th: this.updateIndex(this.state.th, MASTER_THEME_SET)}) };
	handleClick3 = (event) => { this.setState({ty: this.updateIndex(this.state.ty, TYPE_SET)}) };
	handleClick4 = (event) => {
		this.setState({
			w: this.updateIndex(this.state.w, MASTER_WORD_SET),
			p: this.updateIndex(this.state.p, MASTER_WORD_SET)
		})
	};
	handleClick5 = (event) => { this.setState({in: this.toggleBinary(this.state.in)}) };
	handleClick6 = (event) => { this.setState({tb: this.updateIndex(this.state.tb, TOOLBAR_POS)}) };
	handleClick7 = (event) => { this.setState({e: this.toggleBinary(this.state.e)}) };
	handleClick8 = (event) => { this.setState({m: this.updateIndex(this.state.i, IMMERSION_SET)}) };

	render() {
		return (
			<div className="relative flex flex-wrap w-100 vh-100">
				<Fragment>
				{
					this.state.s === 0 &&
					<div className="bg-purple w-100">
						<OrganismCardFront
							l1="en-us" l2="ja-jp"
							forExport={this.state.e}
							intro={this.state.in}
							immersion={IMMERSION_SET[this.state.i]}
							type={TYPE_SET[this.state.ty]}
							images={MASTER_PHOTO_SET[this.state.p][MASTER_THEME_SET[this.state.th].imgSet]}
							word={MASTER_WORD_SET[this.state.w]}
							theme={MASTER_THEME_SET[this.state.th]}
							prompt={PROMPT_SET[this.state.ty]}
						/>
						<CardDevToolBar
							tbCntnrStyle={TOOLBAR_POS[this.state.tb] + STY_CNTNR_TOOLBAR}
							btnStyle={MASTER_THEME_SET[this.state.th].toolBarBtn + STY_BTN_TOOLBAR}
							tbStyle={STY_TOOLBAR}
							handleClick1={this.handleClick1}
							handleClick2={this.handleClick2}
							handleClick3={this.handleClick3}
							handleClick4={this.handleClick4}
							handleClick5={this.handleClick5}
							handleClick6={this.handleClick6}
							handleClick7={this.handleClick7}
							handleClick8={this.handleClick8}
						/>
					</div>
				}
				{
					this.state.s === 1 &&
					<div className="bg-blue w-100">
						<OrganismCardBack
							l1="en-us" l2="ja-jp"
							forExport={this.state.e}
							intro={this.state.in}
							immersion={IMMERSION_SET[this.state.i]}
							type={TYPE_SET[this.state.ty]}
							images={MASTER_PHOTO_SET[this.state.p][MASTER_THEME_SET[this.state.th].imgSet]}
							word={MASTER_WORD_SET[this.state.w]}
							theme={MASTER_THEME_SET[this.state.th]}
						/>
						<CardDevToolBar
							tbCntnrStyle={TOOLBAR_POS[this.state.tb] + STY_CNTNR_TOOLBAR}
							btnStyle={MASTER_THEME_SET[this.state.th].toolBarBtn + STY_BTN_TOOLBAR}
							tbStyle={STY_TOOLBAR}
							handleClick1={this.handleClick1}
							handleClick2={this.handleClick2}
							handleClick3={this.handleClick3}
							handleClick4={this.handleClick4}
							handleClick5={this.handleClick5}
							handleClick6={this.handleClick6}
							handleClick7={this.handleClick7}
							handleClick8={this.handleClick8}
						/>
					</div>
				}
				</Fragment>
			</div>
		);
	}
}

const FontTest = (props) => (
	<div className={props.classes + " pa3 dib f2 ba b--red "}>
		<span>{props.text + ": "}</span>
		<span>日本語　ひらがな　カタカナ あア亜</span>
		<span>ABC abc Abc</span>
	</div>
);

class FontMassDemo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const listItems = this.props.fontList.map((font, i) =>
			<FontTest classes={font} text={font} />
    );

		return (<section className={this.props.classes}>{listItems}</section>);
	}
}
/* <FontMassDemo fontList={blackletter} classes=" green " />
				<FontMassDemo fontList={handwritten} classes=" blue " />
        <FontMassDemo fontList={fonts} classes=" red " />
				<FontMassDemo fontList={fonts_ja} classes=" purple " /> */
class App extends Component {
  render() {
    return (
      <main className="bg-silver-gray black w-100 h-100">
				<CardDashboard />
      </main>
    );
  }
}

export default App;
