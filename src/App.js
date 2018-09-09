import React, { Component, Fragment } from 'react';
import OrganismCard from './components/OrganismCard';

const STYLE_L = " absolute top-0 right-0 pa2 f4 o-70 "; //styleLabel style
const STLYE_G = " relative "; //global style

const themes = {
	indexCard: {
		name: "Index Card",
    global: " bg-white black " + STLYE_G,
    important: " ",
    unimportant: " ",
    primary: " ",
    secondary: " ",
    tertiary: " ",
    quaternary: " ",
    first: ` ph2 h4 bb b--red db w-100 lh-solid flex justify-start items-center `,
    followingFirst: ` ph2 h2 bb b--blue db w-100 lh-solid pv2 flex items-center `,
    clickable: " f2 ",
		jpnPrimary: " f1 stroke-order lh-solid ",
		jpnSecondary: " f2 stroke-order lh-solid ",
		latinPrimary: " f4 schoolbell ",
		latinSecondary: " f4 schoolbell ",
		styleLabel: " schoolbell " + STYLE_L,
	},
	blackBoard: {
		name: "Blackboard",
    global: " bg-img-blackboard cover white justify-center items-center ph3 " + STLYE_G,
    important: " ",
    unimportant: " ",
    primary: " yellow ",
    secondary: " light-blue ",
    tertiary: " light-green ",
    quaternary: " light-pink ",
    first: " ",
    followingFirst: " ",
    clickable: " f2 ",
		jpnPrimary: " f1 sawarabi-mincho lh-title ",
		jpnSecondary: " f2 sawarabi-mincho lh-title ",
		latinPrimary: " f3 fredericka ",
		latinSecondary: " f3 fredericka ",
		styleLabel: " fredericka " + STYLE_L,
	},
	zenBurnTrue: {
		name: "Zenburn True",
    global: ` bg-zb-1 zb-default justify-center items-center ` + STLYE_G,
    important: " b ",
    unimportant: " ",
    primary: " zb-bright-yellow ",
    secondary: " zb-cyan ",
    tertiary: " zb-muted-green ",
    quaternary: " zb-salmon ",
    first: " ",
    followingFirst: " ",
    clickable: " f2 zb-pale-yellow lh-solid ",
		jpnPrimary: " f1 noto-serif lh-solid ",
		jpnSecondary: " f1 noto-serif lh-solid ",
		latinPrimary: " f3 ",
		latinSecondary: " f3 ",
		styleLabel: " " + STYLE_L,
	},
  zen: {
		name: "Zen",
    global: " zen-beige bg-zen-black relative h-100 " + STLYE_G,
    important: " ",
    unimportant: " o-80 ",
    primary: " f1 ",
    secondary: " f2 ",
    tertiary: " f3 ",
    quaternary: " f3 ",
    first: ` pl3 bg-zen-beige zen-black db tc pt5 flex justify-start items-end `,
    followingFirst: " pl3 zen-beige bg-zen-black ",
		clickable: " f2 lh-solid ",
		jpnPrimary: " noto-sans lh-title ",
		jpnSecondary: " noto-sans lh-title ",
		latinPrimary: " muli lh-copy ",
		latinSecondary: " muli lh-copy ",
		styleLabel: " bg-zen-black zen-beige muli " + STYLE_L,
  },
  matrix: {
		name: "Code Matrix",
    global: " bg-black flex flex-column green pa3 " + STLYE_G,
    important: " b ",
    unimportant: " ",
    primary: " ",
    secondary: " noto-sans ",
    tertiary: " f3 ",
    quaternary: " f3 ",
    first: " white neon-glow-green  ",
    followingFirst: " normal  ",
    clickable: " f2 white neon-glow-green ",
		jpnPrimary: " f1 ",
		jpnSecondary: " f2 b",
		latinPrimary: " ",
		latinSecondary: " bpdots ",
		styleLabel: " white bpdots " + STYLE_L,
  },
  glowUI: {
		name: "Glowing UI",
    global: " bg-black light-blue flex flex-column " + STLYE_G,
    important: " ",
    unimportant: " ",
    primary: " f1 ",
    secondary: " f2 ",
    tertiary: " f3 ",
    quaternary: " f3 ",
    first: " b white neon-glow-cyan tron-outline ",
    followingFirst: " camingocode ",
    clickable: " f2 white neon-glow-cyan ",
		jpnPrimary: " ",
		jpnSecondary: " ",
		latinPrimary: " ",
		latinSecondary: " ",
		styleLabel: " " + STYLE_L,
  },
  highFantasy: {
		name: "High Fantasy",
    global: " bg-mid-gray light-yellow flex flex-column " + STLYE_G,
    important: " b ",
    unimportant: " ",
    primary: " ",
    secondary: " ",
    tertiary: " f3 ",
    quaternary: " f4 ",
    first: " f1 sawarabi-mincho ",
    followingFirst: " ",
    clickable: " f2 ",
		jpnPrimary: " sawarabi-mincho ",
		jpnSecondary: " sawarabi-mincho f2 ",
		latinPrimary: " ringbearer ",
		latinSecondary: " noto-sans f4 ",
		styleLabel: " " + STYLE_L,
  },
  retroConsole: {
		name: "8-Bit Retro",
    global: ` retro-green-darker bg-retro-green-lighter
    flex flex-column ` + STLYE_G,
    important: " ",
    unimportant: " ",
    primary: " ",
    secondary: " ",
    tertiary: " ",
    quaternary: " ",
    first: " f1 ",
    followingFirst: " ",
    clickable: " f2 noto-sans ",
		jpnPrimary: " jackeyfont ",
		jpnSecondary: " f2 jackeyfont ",
		latinPrimary: " f2 vt323 ",
		latinSecondary: " f3 vt323 ",
		styleLabel: " " + STYLE_L,
  },
  rpgSketch: {
		name: "RPG Sketch",
    global: " bg-white dark-red " + STLYE_G,
    important: " b ",
    unimportant: " ",
    primary: " f1 ",
    secondary: " f2 ",
    tertiary: " f3 ",
    quaternary: " f3 ",
    first: " ",
    followingFirst: " ",
    clickable: "  ",
		jpnPrimary: " ",
		jpnSecondary: " ",
		latinPrimary: " ",
		latinSecondary: " ",
		styleLabel: " " + STYLE_L,
  },
	zenBurnTachyons: {
		name: "Zenburn Tachyons",
    global: ` bg-gray white justify-center items-center ` + STLYE_G,
    important: " b ",
    unimportant: " ",
    primary: " f-subheadline yellow ",
    secondary: " f1 light-blue ",
    tertiary: " f2 light-green ",
    quaternary: " f2 light-pink ",
    first: " ",
    followingFirst: " ",
    clickable: "  ",
		jpnPrimary: " noto-sans ",
		jpnSecondary: " ",
		latinPrimary: " ",
		latinSecondary: " ",
		styleLabel: " " + STYLE_L,
	},
	fullPhoto: {
		name: "Full Photo",
    global: ` black ` + STLYE_G,
    important: " ",
    unimportant: " ",
    primary: "  ",
    secondary: "  ",
    tertiary: "  ",
    quaternary: " f2 ",
    first: " f-subheadline ",
    followingFirst: " f2 ",
    clickable: "  ",
		jpnPrimary: " noto-sans ",
		jpnSecondary: " ",
		latinPrimary: " ",
		latinSecondary: " ",
		styleLabel: " " + STYLE_L,
	},
}

const words = {
  sushi: {
    term: "寿司",
    reading: "すし",
    translat: "sushi: A Japanese cuisine typically made of raw fish & vinegar rice.",
    translit: "su-SHI",
    audio: "sushi.mp3",
    tags: "food culture",
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
  },
  asoko: {
    term: "あそこ",
    reading: "",
    translat: "over there: Refers to a place distant from both speaker & listener.",
    translit: "a-SO-KO",
    audio: "asoko.mp3",
    tags: "location grammarPoint",
  },
};

const THEME_INDEX = 0;
const THEME_SET = [
	[themes.indexCard, themes.blackBoard, themes.zenBurnTrue, themes.zen],
  [themes.matrix, themes.glowUI, themes.highFantasy, themes.retroConsole],
	[themes.rpgSketch, themes.zenBurnTachyons, themes.zenBurnTrue, themes.fullPhoto]
];
const MASTER_THEME_SET = [ themes.indexCard, themes.blackBoard,
	themes.zen, themes.fullPhoto, themes.matrix, themes.glowUI, themes.highFantasy,
	themes.retroConsole, themes.rpgSketch, themes.zenBurnTachyons, themes.zenBurnTrue 
];

const WORD_INDEX = 0; //0==all diff, 1==kanji & kana, 2==kana only, 3==short, 4==long ,
const WORD_SET = [
	[words.sushi, words.australia, words.library, words.asoko],
	[words.library ,words.library, words.library, words.library]
];

class CardTester1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			i1: 0,
			i2: 1,
			i3: 2,
			i4: 3,
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
					<OrganismCard word={WORD_SET[WORD_INDEX][0]} theme={MASTER_THEME_SET[this.state.i1]} />
				</div>
				<div onClick={this.handleClick2} className="w-50 h-50 bg-blue">
					<OrganismCard word={WORD_SET[WORD_INDEX][1]}  theme={MASTER_THEME_SET[this.state.i2]} />
				</div>
				<div onClick={this.handleClick3} className="w-50 h-50 bg-green">
					<OrganismCard word={WORD_SET[WORD_INDEX][2]}  theme={MASTER_THEME_SET[this.state.i3]} />
				</div>
				<div onClick={this.handleClick4} className="w-50 h-50 bg-red">
					<OrganismCard word={WORD_SET[WORD_INDEX][3]}  theme={MASTER_THEME_SET[this.state.i4]} />
				</div>
			</div>
		);
	}
}

class CardTester2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			i1: 0,
			i2: 1,
			i3: 2,
			i4: 3,
			i5: 4,
			i6: 5,
			i7: 6,
			i8: 7,
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
					<OrganismCard word={WORD_SET[WORD_INDEX][0]} theme={MASTER_THEME_SET[this.state.i1]} />
				</div>
				<div onClick={this.handleClick2} className="w-25 h-50 bg-blue">
					<OrganismCard word={WORD_SET[WORD_INDEX][1]}  theme={MASTER_THEME_SET[this.state.i2]} />
				</div>
				<div onClick={this.handleClick3} className="w-25 h-50 bg-green">
					<OrganismCard word={WORD_SET[WORD_INDEX][2]}  theme={MASTER_THEME_SET[this.state.i3]} />
				</div>
				<div onClick={this.handleClick4} className="w-25 h-50 bg-red">
					<OrganismCard word={WORD_SET[WORD_INDEX][3]}  theme={MASTER_THEME_SET[this.state.i4]} />
				</div>
				<div onClick={this.handleClick5} className="w-25 h-50 bg-purple">
					<OrganismCard word={WORD_SET[WORD_INDEX][0]} theme={MASTER_THEME_SET[this.state.i5]} />
				</div>
				<div onClick={this.handleClick6} className="w-25 h-50 bg-blue">
					<OrganismCard word={WORD_SET[WORD_INDEX][1]}  theme={MASTER_THEME_SET[this.state.i6]} />
				</div>
				<div onClick={this.handleClick7} className="w-25 h-50 bg-green">
					<OrganismCard word={WORD_SET[WORD_INDEX][2]}  theme={MASTER_THEME_SET[this.state.i7]} />
				</div>
				<div onClick={this.handleClick8} className="w-25 h-50 bg-red">
					<OrganismCard word={WORD_SET[WORD_INDEX][3]}  theme={MASTER_THEME_SET[this.state.i8]} />
				</div>
			</div>
		);
	}
}

class App extends Component {
  render() {
    return (
      <main className="bg-yellow red w-100 vh-100">
        <CardTester2 />
      </main>
    );
  }
}

export default App;
