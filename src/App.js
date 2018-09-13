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

const STYLE_L = " absolute bottom-0 right-0 pa2 f4 "; //styleLabel style
const STYLE_D = " absolute bottom-0 left-0 pa2 f4 "; //dataLabel style
const STLYE_G = " relative overflow-y-hidden "; //global style
const STYLE_B = " "; //body style
const STYLE_C = " f1 "; //clickable style
const STYLE_GO = " disabled-link absolute top-0 right-0 w-100 h-100 z-999 "; //global overlay
const STYLE_F = " "; //front style
const STYLE_BA = " lh-solid f1 absolute top-0 right-0 pa2 z-99 "; //back audio style

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

const themes = {
	blackBoard: {
		name: "Blackboard",
    global: " relative bg-blackboard cover white flex flex-column justify-center items-center " + STLYE_G,
		body: " relative flex flex-column justify-center items-center ph3 " + STYLE_B,
    important: " ",
		unimportant: " ",
    primary: " yellow ",
    secondary: " white ",
    tertiary: " light-blue ",
		quaternary: " light-pink ",
		quintary: " light-green ",
    first: " ",
    followingFirst: " w-100 lh-solid flex items-center justify-center ",
		clickable: " " + STYLE_C,
		backAudio: " " + STYLE_BA,
		front: " ",
		jpnPrimary: " f1 sawarabi-mincho ",
		jpnSecondary: " f2 sawarabi-mincho ",
		latinPrimary: " f3 chalkduster ",
		latinSecondary: " f3 chalkduster ",
		prompt: " f3 chalkduster white tc ",
		styleLabel: " chalkduster " + STYLE_L,
		dataLabel: " chalkduster " + STYLE_D,
		imgSection: " pt1 h4 db flex justify-center ",
		photo: " h4 of-contain lighten ",
		flag: " h4 of-contain lighten ",
		imgSet: "std",
		globalOverlay: " bg-blackboard cover darken o-20 " + STYLE_GO,
	},
	indexCard: {
		name: "Index Card",
		global: " bg-white black " + STLYE_G,
		body: " " + STYLE_B,
    important: " ",
    unimportant: " ",
    primary: " ",
    secondary: " ",
    tertiary: " ",
    quaternary: " ",
		quintary: " ",
    first: ` pl3 pv3 bb b--red db lh-solid flex justify-start items-center `,
    followingFirst: ` pl3 h2 bb b--blue db lh-solid pv2 flex items-center `,
    clickable: " stroke-black white " + STYLE_C,
		backAudio: " " + STYLE_BA,
		front: " ",
		jpnPrimary: " f1 stroke-order ",
		jpnSecondary: " f2 stroke-order ",
		latinPrimary: " f3 schoolbell ",
		latinSecondary: " f3 schoolbell ",
		prompt: " ",
		styleLabel: " schoolbell f3 " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " absolute h-100 pv4 top-0 right-0 w-50 flex flex-column items-center justify-between ",
		photo: " colorless w-two-thirds of-contain multiply ",
		flag: " colorless w-two-thirds of-contain multiply ",
		imgSet: "sketch",
	},
	zenBurnTrue: {
		name: "Zenburn True",
    global: ` bg-zb-1 zb-default flex flex-column justify-center items-center ` + STLYE_G,
		body: " flex flex-column justify-center items-center " + STYLE_B,
    important: " b ",
    unimportant: " ",
    primary: " zb-bright-yellow ",
    secondary: " zb-cyan ",
    tertiary: " zb-muted-green ",
    quaternary: " zb-salmon ",
		quintary: " ",
    first: " ",
    followingFirst: " ",
    clickable: " zb-pale-yellow " + STYLE_C,
		backAudio: " " + STYLE_BA,
		front: " ",
		jpnPrimary: " f1 noto-serif lh-solid ",
		jpnSecondary: " f1 noto-serif lh-solid ",
		latinPrimary: " f3 ",
		latinSecondary: " f3 ",
		prompt: " ",
		styleLabel: " " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " h4 pv2 ph4 ",
		photo: " w-50 of-scale-down di ",
		flag: " w-50 of-scale-down di ",
		imgSet: "std",
	},
  zenMenu: {
		name: "Zen Menu",
    global: " zen-beige bg-zen-black relative h-100 " + STLYE_G,
		body: " " + STYLE_B,
    important: " ",
    unimportant: " o-80 ",
    primary: " f1 ",
    secondary: " f2 ",
    tertiary: " f3 ",
    quaternary: " f3 ",
		quintary: " ",
    first: ` pl3 bg-zen-beige zen-black db h4 pv2 flex justify-start items-end `,
    followingFirst: " pl3 zen-beige bg-zen-black db ",
		clickable: " zen-black " + STYLE_C,
		backAudio: " " + STYLE_BA,
		front: " ",
		jpnPrimary: " noto-sans lh-title ",
		jpnSecondary: " noto-sans lh-title ",
		latinPrimary: " muli lh-copy ",
		latinSecondary: " muli lh-copy ",
		prompt: " ",
		styleLabel: " bg-zen-black zen-beige muli " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " h4 absolute top-0 right-0 pt2 pr5 flex flex-row items-start ",
		photo: " w4 ",
		flag: " w4 ",
		imgSet: "std",
		imgOverlay: " bg-zen-beige saturation z-999 ",
  },
  matrix: {
		name: "Code Matrix",
    global: " bg-matrix-black " + STLYE_G,
		body: " flex flex-column justify-center items-center pa3 " + STYLE_B,
    important: " b ",
    unimportant: " ",
    primary: " ",
    secondary: " noto-sans ",
    tertiary: " f3 ",
    quaternary: " f3 ",
		quintary: " ",
    first: " white neon-glow-green  ",
    followingFirst: " b normal matrix-green ",
    clickable: " white neon-glow-green " + STYLE_C,
		backAudio: " " + STYLE_BA,
		front: " ",
		jpnPrimary: " f1 ",
		jpnSecondary: " f2 b ",
		latinPrimary: " ",
		latinSecondary: " bpdots ",
		prompt: " ",
		styleLabel: " white bpdots z-999 absolute  " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " flex flex-row ",
		photo: " dib ",
		flag: " dib ",
		imgSet: "std",
		imgOverlay: " o-30 bg-code-rain cover luminosity darken ",
		globalOverlay: " o-50 hue bg-matrix-green " + STYLE_GO,
  },
  glowUI: {
		name: "Glowing UI",
    global: " bg-black light-blue " + STLYE_G,
		body: " pa3 flex flex-column " + STYLE_B,
    important: " ",
    unimportant: " ",
    primary: " ",
    secondary: " ",
    tertiary: " ",
		quaternary: " ",
		quintary: " ",
    first: " b f1 white neon-glow-cyan tron-outline ",
    followingFirst: " f2 camingocode ",
    clickable: " white neon-glow-cyan " + STYLE_C,
		backAudio: " " + STYLE_BA,
		front: " ",
		jpnPrimary: " ",
		jpnSecondary: " ",
		latinPrimary: " ",
		latinSecondary: " ",
		prompt: " ",
		styleLabel: " " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " absolute h-100 pv4 top-0 right-0 w-50 flex flex-column items-center justify-between ",
		photo: " dib w-two-thirds of-contain ",
		flag: " dib w-two-thirds of-contain ",
		imgSet: "std",
		imgOverlay: " multiply bg-light-blue ",
	},
	zenBurnTachyons: {
		name: "Zenburn Tachyons",
    global: ` bg-gray white flex flex-row ` + STLYE_G,
		body: " w-50 flex flex-column justify-center items-center " + STYLE_B,
    important: " b ",
    unimportant: " ",
    primary: " yellow ",
    secondary: " light-blue ",
    tertiary: " light-green ",
    quaternary: " light-pink ",
		quintary: " ",
    first: " f1 ",
    followingFirst: " f2 ",
    clickable: " " + STYLE_C,
		backAudio: " " + STYLE_BA,
		front: " ",
		jpnPrimary: " noto-sans ",
		jpnSecondary: " noto-sans ",
		latinPrimary: " ",
		latinSecondary: " ",
		prompt: " ",
		styleLabel: " " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " w-50 h-100 flex flex-column justify-start items-start bg-black ",
		photo: " of-contain h-50 ",
		flag: " of-contain h-50 ",
		imgSet: "std",
	},
  highFantasy: {
		name: "High Fantasy",
    global: " bg-dark-green flex flex-row yellow " + STLYE_G,
		body: " w-50 flex flex-column justify-center items-center " + STYLE_B,
    important: " b ",
    unimportant: " ",
    primary: " ",
    secondary: " ",
    tertiary: " ",
    quaternary: " ",
		quintary: " ",
    first: " f1 sawarabi-mincho ",
    followingFirst: " f3 ",
    clickable: " " + STYLE_C,
		backAudio: " " + STYLE_BA,
		front: " ",
		jpnPrimary: " sawarabi-mincho ",
		jpnSecondary: " sawarabi-mincho ",
		latinPrimary: " ringbearer ",
		latinSecondary: " noto-sans ",
		prompt: " ",
		styleLabel: " z-999 absolute " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: "  w-50 h-100 flex flex-column justify-start items-start ",
		photo: " sepia of-cover h-50 tc center ",
		flag: " sepia of-cover h-50 tc center ",
		imgSet: "std",
  },
  retroConsole: {
		name: "8-Bit Retro",
    global: ` retro-green-darker bg-retro-green-lighter ` + STLYE_G,
		body: " pl3 pt3 flex flex-column " + STYLE_B,
    important: " ",
    unimportant: " ",
    primary: " ",
    secondary: " ",
    tertiary: " retro-green-dark ",
    quaternary: " retro-green-dark ",
		quintary: " ",
    first: " f1 ",
    followingFirst: " ",
    clickable: " " + STYLE_C,
		backAudio: " " + STYLE_BA,
		front: " ",
		jpnPrimary: " jackeyfont ",
		jpnSecondary: " f2 jackeyfont ",
		latinPrimary: " f2 vt323 ",
		latinSecondary: " f2 vt323 ",
		prompt: " ",
		styleLabel: " vt323 " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " db pl3 pt2 ",
		photo: " h4 di of-contain ",
		flag: " pl3 h4 di of-contain ",
		imgSet: "retro",
  },
  rpgSketch: {
		name: "RPG Sketch",
    global: " bg-parchment relative cover black flex flex-column justify-center items-center " + STLYE_G,
		body: " " + STYLE_B,
    important: " b ",
    unimportant: " ",
    primary: " ",
    secondary: " ",
    tertiary: " ",
    quaternary: " ",
		quintary: " ",
    first: " f1 lh-solid flex items-center justify-center ",
    followingFirst: " db w-100 lh-solid pv1 flex items-center justify-center ",
    clickable: " " + STYLE_C,
		backAudio: " " + STYLE_BA,
		front: " ",
		jpnPrimary: " noto-serif ",
		jpnSecondary: " f1 noto-serif ",
		latinPrimary: " f3 ",
		latinSecondary: " f3 ",
		prompt: " ",
		styleLabel: " " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " absolute w-100 flex flex-row items-center justify-between ",
		photo: " sepia multiply w-50 of-contain ",
		flag: " sepia multiply w-50 of-contain ",
		imgSet: "sketch",
  },
	fullPhoto: {
		name: "Full Photo",
    global: ` relative white noto-sans flex flex-column ` + STLYE_G,
		body: " absolute z-9 flex flex-column justify-start pl3 pt3  " + STYLE_B,
    important: " ",
    unimportant: " ",
    primary: "  ",
    secondary: "  ",
    tertiary: "  ",
    quaternary: " ",
		quintary: " ",
    first: " f-subheadline lh-solid ",
    followingFirst: " f2 lh-title ",
    clickable: " " + STYLE_C,
		backAudio: " " + STYLE_BA,
		front: " ",
		jpnPrimary: " ",
		jpnSecondary: " ",
		latinPrimary: " ",
		latinSecondary: " ",
		prompt: " ",
		styleLabel: " " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " ",
		photo: " ",
		flag: " dn ",
		imgSet: "std",
	},
	woodOnWood: {
		name: "Wood Inlay",
    global: " bg-wood cover b flex flex-column justify-center items-center " + STLYE_G,
		body: " text-wooden cover stroke-wooden flex flex-column justify-center items-center ",
    important: " ",
    unimportant: " ",
    primary: " ",
    secondary: " ",
    tertiary: " ",
    quaternary: " ",
		quintary: " ",
    first: " f-subheadline lh-solid ",
    followingFirst: " f2 lh-solid ",
    clickable: " text-wooden cover stroke-wooden " + STYLE_C,
		backAudio: " " + STYLE_BA,
		front: " ",
		jpnPrimary: " ",
		jpnSecondary: " ",
		latinPrimary: " ",
		latinSecondary: " ",
		prompt: " ",
		styleLabel: " text-wooden cover stroke-wooden " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " absolute top-0 left-0 w-100 ",
		photo: " dn multiply o-70 ",
		flag: " multiply o-70 ",
		imgSet: "std",
	},
}

const words = {
  crab: {
    term: "蟹",
    reading: "かに",
    translat: "crab",
    translit: "ka-NI",
    audio: "kani.mp3",
    tags: "food animals",
  },
  library: {
    term: "図書館",
    reading: "としょかん",
    translat: "library",
    translit: "to-SHO-kan",
    audio: "toshokan.mp3",
    tags: "places books",
  },
  australia: {
    term: "オーストラリア",
    reading: "",
    translat: "Australia",
    translit: "OOsutoraria",
    audio: "oosutoraria.mp3",
		tags: "places countries",
		photo: " ",
		flag: " ",
		flagEightBit: " ",
		flagSketch: " ",
  },
  asoko: {
    term: "あそこ",
    reading: "",
    translat: "over there: Refers to a place distant from both speaker & listener.",
    translit: "a-SO-KO",
    audio: "asoko.mp3",
    tags: "location grammarPoint",
	},
	sushi: {
    term: "寿司",
    reading: "すし",
    translat: "sushi: A Japanese cuisine typically made of raw fish & vinegar rice.",
    translit: "su-SHI",
    audio: "sushi.mp3",
    tags: "food culture",
  },
};

{/*
	Prompts seem like tricky business, however they are actually simple.
	
	Prompts exist to test one capability at a time, using one method.
	For example, one could test your ability to understand the word "arigatou"
	in Japanese via audio (your ability to hear to hear it is key here).
	Therefore, there are two knowledge "vectors" being engaged at any time.
	Vectors include reading, writing, speaking & listening, but could also
	include visual comprehension, cultural comprehension, or another foundational
	skill such as alphabets or awareness of (not just the ability to hear) tonal
	information/encoding, etc..

	As these learning modules are meant to be used individually, the prompts
	need to be clear, concrete, to the point, and not be open to subjectivity.
	The ability of the learner to answer prompts should clearly fall into either
	success or failure (no partials!). For example, either the learner reads
	"arigatou" and says "thank you" or "thanks" (this term has two acceptable
	translations), or they don't.

	KEY:
	
	AUDITORY
	1A. hearSpeak = repeat (SHALLOW, MAY BE USEFUL FOR BEGINNERS)
	1B. hearKnow = listening comprehension (RECOMMENDED)
	
	VISUAL
	2A. lookSpeak = visual identification (RECOMMENDED)
	
	TRANSLATION
	3A. recall = l1 to l2 translation (RECOMMENDED)

	READING
	4A. readKnow = reading comprehnsion (HELPFUL, BUT NOT SUPER EFFECTIVE)
	4B. readSpeak = reading comprehension + speaking practice (BETTER THAN ABOVE)
	
	WRITING
	5A. copyWrite = writing skills & attention to detail (SQUARE 0: BEST NOT TO SKIP, BUT DON'T STAY HERE FOR LONG)
	5B. convertWriteTranslit = converting from transliteration in l1 to l2 transliteration (ie. romanji to kana) (RECOMMENDED COMPROMISE BETWEEN 5A & 5C)
	5C. hearWrite = dictation, combining listening & writing (ADVANCED LEARNERS ONLY)
	
	MISC
	6. mnemonicRecall

	*/}
const prompts = {
	hearSpeak: {
		ja: {
			l1: "Repeat in Japanese:",
			l2: "日本語で言い替えしなさい：",
		},
		tp: {
			l1: "Repeat in toki pona:",
			l2: "o kute. o toki e ni:"
		},
	},
	hearKnow: {
		ja: {
			l1: "Translate into English:",
			l2: "英語に訳しなさい：",
		},
		tp: {
			l1: "Translate into English:",
			l2: "o kute. o ante tawa toki Inli:"
		},
	},

	lookSpeak: {
		ja: {
			l1: "Say out loud:",
			l2: "見たものを言いなさい：",
		},
		tp: {
			l1: "Say out loud:",
			l2: "o toki e ni kepeken uta kalama sina:"
		},
	},

	recall: {
		ja: {
			l1: "Translate to Japanese:",
			l2: "日本語に訳しなさい：",
		},
		tp: {
			l1: "Translate to toki pona:",
			l2: "o ante tawa toki pona:"
		},
	},

	readKnow: {
		ja: {
			l1: "Translate to English:",
			l2: "英語に訳しなさい：",
		},
		tp: {
			l1: "Translate to English:",
			l2: "o ante tawa toki Inli:",
		},
	},
	readSpeak: {
		ja: {
			l1: "Read this out loud:",
			l2: "読み上げなさい：",
		},
		tp: {
			l1: "Read this out loud:",
			l2: "o toki kepeken uta kalama sina:",
		},
	},
	
	copyWrite: {
		ja: {
			l1: "copy (rewrite) this:",
			l2: "書き写しなさい：",
		},
		tp: {
			l1: "copy (rewrite) this:",
			l2: "o sitelen sin e ni",
		},
	},
	convertWriteTranslit: {
		ja: {
			l1: "Write this using Hiragana:",
			l2: "ひらがなでかきなさい：",
		},
		tp: {
			l1: "Write this using sitelen pona:",
			l2: "o sitelen kepeken sitelen pona",
		},
	},
	hearWrite: {
		ja: {
			l1: "Write in Japanese:",
			l2: "聴いた言葉を書きなさい",
		},
		tp: {
			l1: "Write in 'sitelen pona':",
			l2: "o sitelen kepeken sitelen pona:",
		},
	},

	mnemonicSpeak: {
		ja: {
			l1: "Say aloud the mnemonic word:",
			l2:"記憶術を使って、適切な言葉を言いなさい：",
		},
		tp: {
			l1: "Say aloud the mnemonic word:",
			l2: "o toki e nimi ni lon toki pona:",
		},
	},
};

const TYPE_INDEX = 0;
const TYPE_SET = [ "hearKnow", "lookSpeak", "recall", "readSpeak", "convertWriteTranslit"];

const PROMPT_SET = [ prompts.hearKnow, prompts.lookSpeak, prompts.recall,
	prompts.readSpeak, prompts.convertWriteTranslit ]; //PRIMARY VECTORS
//const PROMPT_SET2 = [ prompts.egDescribe, prompts.egMCD, prompts.soundKaruta,
//	prompts.QandA, prompts.opposites]; //SECONDARY VECTORS //todo: implement V2
// prompts.identifyCountryByFlag //TERTIARY VECTORS //todo: implement V3

const THEME_INDEX = 0;

const MASTER_THEME_SET = [ themes.blackBoard, themes.fullPhoto,
	themes.rpgSketch, themes.indexCard, themes.retroConsole, themes.matrix,
	themes.glowUI, themes.highFantasy, themes.zenBurnTachyons, themes.zenBurnTrue,
	themes.woodOnWood, themes.zenMenu
];

const WORD_INDEX = 1; //crab==1 kanji, australia==long, library==many kanji, asoko==kana only, sushi==even kanji to kana ratio
const MASTER_WORD_SET = [words.crab, words.australia, words.library, words.asoko, words.sushi];

const PHOTO_INDEX = 1;
const MASTER_PHOTO_SET = [pictures.crab, pictures.australia, pictures.library, pictures.asoko, pictures.sushi];

const SIDE_INDEX = 1; //0 represents front, 1 represents back

const CardDevToolBar = (props) => (
	<aside className="absolute z-9999 top-0 left-0">
		<button onClick={props.handleClick1} className="">Flip Card</button>
		<button onClick={props.handleClick2} className="">Change Theme</button>
		<button onClick={props.handleClick3} className="">Change Type</button>
		<button onClick={props.handleClick4} className="">Change Word</button>
	</aside>
);

class CardTester extends Component {
	constructor(props) {
		super(props);
		this.state = {
			th: THEME_INDEX,
			w: WORD_INDEX,
			p: PHOTO_INDEX,
			ty: TYPE_INDEX,
			s: SIDE_INDEX,
		};
	}

	updateIndex = (i, set) => {
		const CNT = set.length;
		if(i < CNT - 1) {
			return i+1;
		}	else {
			return 0;
		}
	};

	toggleBinary = (i) => {
		return (i === 0 ? 1 : 0);
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

	render() {
		return (
			<div className="relative flex flex-wrap w-100 vh-100">
				<CardDevToolBar
					handleClick1={this.handleClick1}
					handleClick2={this.handleClick2}
					handleClick3={this.handleClick3}
					handleClick4={this.handleClick4}
				/>
				<Fragment>
				{
					this.state.s === 0 &&
					<div className="bg-purple w-100">
						<OrganismCardFront
							l1="en" l2="ja"
							prompt={PROMPT_SET[this.state.ty]}
							type={TYPE_SET[this.state.ty]}
							images={MASTER_PHOTO_SET[this.state.p][MASTER_THEME_SET[this.state.th].imgSet]}
							word={MASTER_WORD_SET[this.state.w]}
							theme={MASTER_THEME_SET[this.state.th]}
						/>
					</div>
				}
				{
					this.state.s === 1 &&
					<div className="bg-blue w-100">
						<OrganismCardBack
							l1="en" l2="ja"
							type={TYPE_SET[this.state.ty]}
							images={MASTER_PHOTO_SET[this.state.p][MASTER_THEME_SET[this.state.th].imgSet]}
							word={MASTER_WORD_SET[this.state.w]}
							theme={MASTER_THEME_SET[this.state.th]}
						/>
					</div>
				}
				</Fragment>
			</div>
		);
	}
}

class App extends Component {
  render() {
    return (
      <main className="bg-yellow red w-100 vh-100">
        <CardTester />
      </main>
    );
  }
}

export default App;
