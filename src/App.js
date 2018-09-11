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

const STYLE_L = " absolute bottom-0 right-0 pa2 f4 "; //styleLabel style
const STYLE_D = " absolute bottom-0 left-0 pa2 f4 "; //dataLabel style
const STLYE_G = " relative overflow-y-hidden "; //global style
const STYLE_B = " "; //body style
const STYLE_C = " lh-solid f1 absolute top-0 right-0 pa2 z-999 "; //clickable style
const STYLE_GO = " absolute top-0 right-0 w-100 h-100 z-9999 "; //global overal

const pictures = {
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
		blackboard: {
			photo: AU,
			flag: AU_FLAG,
		}
	},
	library: {},
	crab: {},
	sushi: {},
};

const themes = {
	blackBoard: {
		name: "Blackboard",
    global: " bg-blackboard cover white flex flex-column justify-center items-center " + STLYE_G,
		body: " flex flex-column justify-center items-center ph3 " + STYLE_B,
    important: " ",
    unimportant: " ",
    primary: " yellow ",
    secondary: " white ",
    tertiary: " light-blue ",
		quaternary: " light-pink ",
		quintary: " light-green ",
    first: " ",
    followingFirst: " h2 db w-100 lh-solid pv1 flex items-center justify-center ",
    clickable: " " + STYLE_C,
		jpnPrimary: " f1 sawarabi-mincho ",
		jpnSecondary: " f2 sawarabi-mincho ",
		latinPrimary: " f3 chalkduster ",
		latinSecondary: " f3 chalkduster ",
		prompt: " ",
		styleLabel: " chalkduster " + STYLE_L,
		dataLabel: " chalkduster " + STYLE_D,
		imgSection: " pt1 h4 db flex justify-center ",
		photo: " h4 of-contain lighten ",
		flag: " h4 of-contain lighten ",
		imgSet: "blackboard",
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
    first: ` pl3 pv3 bb b--red db lh-solid flex justify-start items-center `,
    followingFirst: ` pl3 h2 bb b--blue db lh-solid pv2 flex items-center `,
    clickable: " stroke-black white " + STYLE_C,
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
    first: " ",
    followingFirst: " ",
    clickable: " zb-pale-yellow " + STYLE_C,
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
    first: ` pl3 bg-zen-beige zen-black db h4 pv2 flex justify-start items-end `,
    followingFirst: " pl3 zen-beige bg-zen-black db ",
		clickable: " zen-black " + STYLE_C,
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
		imgOverlay: " bg-zen-beige hue saturation ",
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
    first: " white neon-glow-green  ",
    followingFirst: " b normal matrix-green ",
    clickable: " white neon-glow-green " + STYLE_C,
		jpnPrimary: " f1 ",
		jpnSecondary: " f2 b ",
		latinPrimary: " ",
		latinSecondary: " bpdots ",
		prompt: " ",
		styleLabel: " white bpdots z-9999 absolute  " + STYLE_L,
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
    first: " b f1 white neon-glow-cyan tron-outline ",
    followingFirst: " f2 camingocode ",
    clickable: " white neon-glow-cyan " + STYLE_C,
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
    first: " f1 ",
    followingFirst: " f2 ",
    clickable: " " + STYLE_C,
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
    first: " f1 sawarabi-mincho ",
    followingFirst: " f3 ",
    clickable: " " + STYLE_C,
		jpnPrimary: " sawarabi-mincho ",
		jpnSecondary: " sawarabi-mincho ",
		latinPrimary: " ringbearer ",
		latinSecondary: " noto-sans ",
		prompt: " ",
		styleLabel: " z-9999 absolute " + STYLE_L,
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
    first: " f1 ",
    followingFirst: " ",
    clickable: " f1 " + STYLE_C,
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
    first: " f1 lh-solid flex items-center justify-center ",
    followingFirst: " db w-100 lh-solid pv1 flex items-center justify-center ",
    clickable: " " + STYLE_C,
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
		body: " absolute z-9999 flex flex-column justify-start pl3 pt3  " + STYLE_B,
    important: " ",
    unimportant: " ",
    primary: "  ",
    secondary: "  ",
    tertiary: "  ",
    quaternary: " ",
    first: " f-subheadline lh-solid ",
    followingFirst: " f2 lh-title ",
    clickable: " " + STYLE_C,
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
    first: " f-subheadline lh-solid ",
    followingFirst: " f2 lh-solid ",
    clickable: " text-wooden cover stroke-wooden " + STYLE_C,
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
	5B. convertWrite = converting from transliteration in l1 to l2 written form (RECOMMENDED COMPROMISE BETWEEN 5A & 5C)
	5C. hearWrite = dictation, combining listening & writing (ADVANCED LEARNERS ONLY)

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
	convertWrite: {
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
const TYPE_SET = [ "hearKnow", "lookSpeak", "recall", "readSpeak", "convertWrite"];

const PROMPT_SET = [ prompts.hearKnow, prompts.lookSpeak, prompts.recall,
	prompts.readSpeak, prompts.convertWrite ]; //PRIMARY VECTORS
//const PROMPT_SET2 = [ prompts.egDescribe, prompts.egMCD, prompts.soundKaruta,
//	prompts.QandA, prompts.opposites]; //SECONDARY VECTORS

const THEME_INDEX = 0;

const MASTER_THEME_SET = [ themes.blackBoard, themes.fullPhoto,
	themes.rpgSketch, themes.indexCard, themes.retroConsole, themes.matrix,
	themes.glowUI, themes.highFantasy, themes.zenBurnTachyons, themes.zenBurnTrue,
	themes.woodOnWood, themes.zenMenu
];

const WORD_INDEX = 1; //0==all diff, 1==kanji & kana, 2==kana only, 3==short, 4==long ,
const WORD_SET = [
	[words.crab, words.australia, words.library, words.asoko],
	[words.library, words.library, words.library, words.library],
	[words.crab, words.crab, words.crab, words.crab],
	[words.australia, words.australia, words.australia, words.australia]
];

const PHOTO_INDEX = 1;
const PHOTO_SET = [
	[pictures.crab, pictures.australia, pictures.library, pictures.asoko],
	[pictures.library, pictures.library, pictures.library, pictures.library],
	[pictures.crab, pictures.crab, pictures.crab, pictures.crab],
	[pictures.australia, pictures.australia, pictures.australia, pictures.australia]
];

class CardTesterDouble extends Component {
	constructor(props) {
		super(props);
		this.state = {
			i1: THEME_INDEX,
			i2: THEME_INDEX,
		};
	}

	updateIndex = (i) => {
		const THEME_CNT = MASTER_THEME_SET.length;
		if(i < THEME_CNT - 1) {
			return i+1;
		}	else {
			return 0;
		}
	};

	handleClick1 = (event) => { this.setState({i1: this.updateIndex(this.state.i1)}) };
	handleClick2 = (event) => { this.setState({i2: this.updateIndex(this.state.i2)}) };

	render() {
		return (
			<div className="flex flex-wrap w-100 vh-100">
				<div onClick={this.handleClick1} className="w-50 h-100 bg-purple">
					<OrganismCardFront l1="en" l2="ja"
						type={TYPE_SET[TYPE_INDEX]}
						prompt={PROMPT_SET[TYPE_INDEX]}
						images={PHOTO_SET[PHOTO_INDEX][0][MASTER_THEME_SET[this.state.i1].imgSet]}
						word={WORD_SET[WORD_INDEX][0]}
						theme={MASTER_THEME_SET[this.state.i1]}
						/>
				</div>
				<div onClick={this.handleClick2} className="w-50 h-100 bg-blue">
					<OrganismCardBack l1="en" l2="ja"
						type={TYPE_SET[TYPE_INDEX]}
						images={PHOTO_SET[PHOTO_INDEX][0][MASTER_THEME_SET[this.state.i1].imgSet]}
						word={WORD_SET[WORD_INDEX][0]}
						theme={MASTER_THEME_SET[this.state.i2]} />
				</div>
			</div>
		);
	}
}

class CardTesterQuarter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			i1: THEME_INDEX + 0,
			i2: THEME_INDEX + 1,
			i3: THEME_INDEX + 2,
			i4: THEME_INDEX + 3,
		};
	}

	updateIndex = (i) => {
		const THEME_CNT = MASTER_THEME_SET.length;
		if(i < THEME_CNT - 1) {
			return i+1;
		}	else {
			return 0;
		}
	};

	handleClick1 = (event) => { this.setState({i1: this.updateIndex(this.state.i1)}) };
	handleClick2 = (event) => { this.setState({i2: this.updateIndex(this.state.i2)}) };
	handleClick3 = (event) => { this.setState({i3: this.updateIndex(this.state.i3)}) };
	handleClick4 = (event) => { this.setState({i4: this.updateIndex(this.state.i4)}) };

	render() {
		return (
			<div className="flex flex-wrap w-100 vh-100">
				<div onClick={this.handleClick1} className="w-50 h-50 bg-purple">
					{/*console.log(PHOTO_SET[PHOTO_INDEX][0])*/}
					{/*console.log(MASTER_THEME_SET[this.state.i1].imgSet)*/}
					<OrganismCardBack l1="en" l2="ja"
						images={PHOTO_SET[PHOTO_INDEX][0][MASTER_THEME_SET[this.state.i1].imgSet]}
						word={WORD_SET[WORD_INDEX][0]}
						theme={MASTER_THEME_SET[this.state.i1]}
						/>
				</div>
				<div onClick={this.handleClick2} className="w-50 h-50 bg-blue">
					<OrganismCardBack l1="en" l2="ja"
						images={PHOTO_SET[PHOTO_INDEX][1][MASTER_THEME_SET[this.state.i2].imgSet]}
						word={WORD_SET[WORD_INDEX][1]}
						theme={MASTER_THEME_SET[this.state.i2]} />
				</div>
				<div onClick={this.handleClick3} className="w-50 h-50 bg-green">
					<OrganismCardBack l1="en" l2="ja"
						images={PHOTO_SET[PHOTO_INDEX][2][MASTER_THEME_SET[this.state.i3].imgSet]}
						word={WORD_SET[WORD_INDEX][2]}
						theme={MASTER_THEME_SET[this.state.i3]} />
				</div>
				<div onClick={this.handleClick4} className="w-50 h-50 bg-red">
					<OrganismCardBack l1="en" l2="ja"
						images={PHOTO_SET[PHOTO_INDEX][3][MASTER_THEME_SET[this.state.i4].imgSet]}
						word={WORD_SET[WORD_INDEX][3]}
						theme={MASTER_THEME_SET[this.state.i4]} />
				</div>
			</div>
		);
	}
}

class CardTesterEighth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			i1: THEME_INDEX + 0,
			i2: THEME_INDEX + 1,
			i3: THEME_INDEX + 2,
			i4: THEME_INDEX + 3,
			i5: THEME_INDEX + 4,
			i6: THEME_INDEX + 5,
			i7: THEME_INDEX + 6,
			i8: THEME_INDEX + 7,
		};
	}

	updateIndex = (i) => {
		const THEME_CNT = MASTER_THEME_SET.length;
		if(i < THEME_CNT - 1) {
			return i+1;
		}	else {
			return 0;
		}
	};

	handleClick1 = (event) => { this.setState({i1: this.updateIndex(this.state.i1)}) };
	handleClick2 = (event) => { this.setState({i2: this.updateIndex(this.state.i2)}) };
	handleClick3 = (event) => { this.setState({i3: this.updateIndex(this.state.i3)}) };
	handleClick4 = (event) => { this.setState({i4: this.updateIndex(this.state.i4)}) };
	handleClick5 = (event) => { this.setState({i5: this.updateIndex(this.state.i5)}) };
	handleClick6 = (event) => { this.setState({i6: this.updateIndex(this.state.i6)}) };
	handleClick7 = (event) => { this.setState({i7: this.updateIndex(this.state.i7)}) };
	handleClick8 = (event) => { this.setState({i8: this.updateIndex(this.state.i8)}) };

	render() {
		return (
			<div className="flex flex-wrap w-100 vh-100">
				<div onClick={this.handleClick1} className="w-25 h-50 bg-purple">
					<OrganismCardBack word={WORD_SET[WORD_INDEX][0]} theme={MASTER_THEME_SET[this.state.i1]} />
				</div>
				<div onClick={this.handleClick2} className="w-25 h-50 bg-blue">
					<OrganismCardBack word={WORD_SET[WORD_INDEX][1]}  theme={MASTER_THEME_SET[this.state.i2]} />
				</div>
				<div onClick={this.handleClick3} className="w-25 h-50 bg-green">
					<OrganismCardBack word={WORD_SET[WORD_INDEX][2]}  theme={MASTER_THEME_SET[this.state.i3]} />
				</div>
				<div onClick={this.handleClick4} className="w-25 h-50 bg-red">
					<OrganismCardBack word={WORD_SET[WORD_INDEX][3]}  theme={MASTER_THEME_SET[this.state.i4]} />
				</div>
				<div onClick={this.handleClick5} className="w-25 h-50 bg-purple">
					<OrganismCardBack word={WORD_SET[WORD_INDEX][0]} theme={MASTER_THEME_SET[this.state.i5]} />
				</div>
				<div onClick={this.handleClick6} className="w-25 h-50 bg-blue">
					<OrganismCardBack word={WORD_SET[WORD_INDEX][1]}  theme={MASTER_THEME_SET[this.state.i6]} />
				</div>
				<div onClick={this.handleClick7} className="w-25 h-50 bg-green">
					<OrganismCardBack word={WORD_SET[WORD_INDEX][2]}  theme={MASTER_THEME_SET[this.state.i7]} />
				</div>
				<div onClick={this.handleClick8} className="w-25 h-50 bg-red">
					<OrganismCardBack word={WORD_SET[WORD_INDEX][3]}  theme={MASTER_THEME_SET[this.state.i8]} />
				</div>
			</div>
		);
	}
}

class App extends Component {
  render() {
    return (
      <main className="bg-yellow red w-100 vh-100">
        <CardTesterDouble />
      </main>
    );
  }
}

export default App;
