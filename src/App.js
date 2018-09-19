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

const STYLE_DL = " z-9999 absolute bottom-0 left-0 w-100 flex flex-row-ns flex-column items-center justify-between-ns justify-center " //devLabels style
const STYLE_L = " order-2 "; //styleLabel style
const STYLE_D = " order-1 "; //dataLabel style
const STYLE_G = " relative overflow-y-hidden "; //global style
const STYLE_B = " "; //body style
const STYLE_C = " link grow "; //clickable style (the audio button)
const STYLE_GO = " disabled-link absolute top-0 right-0 w-100 h-100 z-999 "; //global overlay
const STYLE_CH = " "; //card head
const STYLE_CB  = " "; //card body
const STYLE_TB = " absolute pb4 ph2 mb3 z-9999 "//toolbar style
const STYLE_TBB = " dib pa1 ph1 ph2-ns ma1 "//toolbar btn style

const fonts = ["architects-daughter", "camingocode", "caveat", "caveat-brush", "cinzel", "dearest", "exo-2", "fredericka", "indie-flower", "muli", "papyrus", "patrick-hand", "play", "playtime", "press-start-2p", "schoolbell", "source-code-pro", "tron-outline", "unifraktur-cook", "unifraktur-maguntia", "vt323","bpdots","chalkduster","ringbearer"];

const fonts_ja = ["jackeyfont","jpn-test","m-plus-rounded-1c","noto-sans","noto-serif","otsutome","pixel-m-plus12","sawarabi-mincho","stroke-order"];

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

//zenMenu imgSection: h4 absolute top-0 right-0 pt2 pr5 flex flex-row items-start
const themes = {
	inkOnRicePaper: {
		name: "Ink on Rice Paper",
    global: " otsutome black bg-rice-paper flex flex-column justify-center items-center tc " + STYLE_G,
		cardContent: " " + STYLE_B,
		cardHead: " " + STYLE_CH,
		cardBody: " " + STYLE_CB,
    primary: " ",
    secondary: " ",
    tertiary: " ",
    quaternary: " ",
		quintary: " ",
    first: ` `,
    followingFirst: " ",
		clickable: " lh-solid f-subheadline " + STYLE_C,
		audioBtn: " ",
		headFront: " f2 ",
		headBack: " f-subheadline ",
		bodyFront: " f2 ",
		bodyBack: " f2 ",
		jpnPrimary: " ",
		jpnSecondary: " ",
		latinPrimary: " db ",
		latinSecondary: " db ",
		prompt: " ",
		devLabels: " f4 pa1 " + STYLE_DL,
		styleLabel: " " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " ",
		photo: " ",
		flag: " ",
		imgSet: " ",
		imgOverlay: " ",
		toolBarBtn: " black otsutome f4 " + STYLE_TBB,
	},
	zenLight: {
		name: "Zen Light",
    global: " " + STYLE_G,
		cardContent: " " + STYLE_B,
		cardHead: " " + STYLE_CH,
		cardBody: " " + STYLE_CB,
    primary: " ",
    secondary: " ",
    tertiary: " ",
    quaternary: " ",
		quintary: " ",
    first: ` `,
    followingFirst: " ",
		clickable: " lh-solid f-subheadline " + STYLE_C,
		audioBtn: " ",
		headFront: " ",
		headBack: " ",
		bodyFront: " ",
		bodyBack: " ",
		jpnPrimary: " ",
		jpnSecondary: " ",
		latinPrimary: " ",
		latinSecondary: " ",
		prompt: " ",
		devLabels: " f5 pa1 " + STYLE_DL,
		styleLabel: " " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " ",
		photo: " ",
		flag: " ",
		imgSet: " ",
		imgOverlay: " ",
		toolBarBtn: " " + STYLE_TBB,
	},
	mondrian: {
		name: "Mondrian Homage",
    global: " " + STYLE_G,
		cardContent: " " + STYLE_B,
		cardHead: " " + STYLE_CH,
		cardBody: " " + STYLE_CB,
    primary: " ",
    secondary: " ",
    tertiary: " ",
    quaternary: " ",
		quintary: " ",
    first: ` `,
    followingFirst: " ",
		clickable: " lh-solid f-subheadline " + STYLE_C,
		audioBtn: " ",
		headFront: " ",
		headBack: " ",
		bodyFront: " ",
		bodyBack: " ",
		jpnPrimary: " ",
		jpnSecondary: " ",
		latinPrimary: " ",
		latinSecondary: " ",
		prompt: " ",
		devLabels: " f5 pa1 " + STYLE_DL,
		styleLabel: " " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " ",
		photo: " ",
		flag: " ",
		imgSet: " ",
		imgOverlay: " ",
		toolBarBtn: " underline " + STYLE_TBB,
  },
	illumManus: {
		name: "Illuminated Manuscript",
    global: " " + STYLE_G,
		cardContent: " " + STYLE_B,
		cardHead: " " + STYLE_CH,
		cardBody: " " + STYLE_CB,
    primary: " ",
    secondary: " ",
    tertiary: " ",
    quaternary: " ",
		quintary: " ",
    first: ` `,
    followingFirst: " ",
		clickable: " lh-solid f-subheadline " + STYLE_C,
		audioBtn: " ",
		headFront: " ",
		headBack: " ",
		bodyFront: " ",
		bodyBack: " ",
		jpnPrimary: " ",
		jpnSecondary: " ",
		latinPrimary: " ",
		latinSecondary: " ",
		prompt: " ",
		devLabels: " f5 pa1 " + STYLE_DL,
		styleLabel: " " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " ",
		photo: " ",
		flag: " ",
		imgSet: " ",
		imgOverlay: " ",
		toolBarBtn: " underline " + STYLE_TBB,
  },
	zenMenu: {
		name: "Zen Menu",
    global: " zen-beige bg-zen-black relative h-100 " + STYLE_G,
		cardContent: " h-100 vh-100 flex flex-column " + STYLE_B,
		cardHead: " ph3 pb2 flex-1 bg-zen-beige zen-black " + STYLE_CH,
		cardBody: " ph3 pt2 flex-2 zen-beige bg-zen-black noto-sans " + STYLE_CB,
    primary: " f1 ",
    secondary: " f2 ",
    tertiary: " f3 ",
    quaternary: " f3 ",
		quintary: " ",
    first: ` db flex justify-start h-100 items-end `,
    followingFirst: " db ",
		clickable: " zen-black lh-solid " + STYLE_C,
		audioBtn: " f-subheadline ",
		headFront: " f-subheadline flex justify-start items-end ",
		headBack: " ",
		bodyFront: " ",
		bodyBack: " ",
		jpnPrimary: " noto-sans lh-title ",
		jpnSecondary: " noto-sans lh-title ",
		latinPrimary: " muli lh-solid ",
		latinSecondary: " muli lh-copy ",
		prompt: " f3 muli lh-copy ",
		devLabels: " f5 pa2 " + STYLE_DL,
		styleLabel: " bg-zen-black zen-beige muli " + STYLE_L,
		dataLabel: " muli " + STYLE_D,
		imgSection: " dn ",
		photo: " dn ",
		flag: " dn ",
		imgSet: " dn ",
		imgOverlay: " dn ",
		toolBarBtn: " b--white ba br-pill white bg-zen-black muli " + STYLE_TBB,
  },
	blackBoard: {
		name: "Blackboard",
    global: " relative bg-blackboard cover white flex flex-column justify-center items-center " + STYLE_G,
		cardContent: " relative flex flex-column justify-center items-center ph3 " + STYLE_B,
		cardHead: " " + STYLE_CH,
		cardBody: " " + STYLE_CB,
    primary: " yellow ",
    secondary: " white ",
    tertiary: " light-blue ",
		quaternary: " light-pink ",
		quintary: " light-green ",
    first: " ",
    followingFirst: " ",
		clickable: " " + STYLE_C,
		audioBtn: "f-subheadline ",
		headFront: " f-subheadline ",
		headBack: " ",
		bodyFront: " lh-title ",
		bodyBack: " flex flex-column justify-center items-center tc ",
		jpnPrimary: " f1 sawarabi-mincho ",
		jpnSecondary: " f2 sawarabi-mincho",
		latinPrimary: " f3 chalkduster lh-title ",
		latinSecondary: " f3 chalkduster lh-title ",
		prompt: " pa2 f3 chalkduster white tc lh-copy ",
		devLabels: " pa2 f5 chalkduster " + STYLE_DL,
		styleLabel: " " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " pa2 h4 db flex justify-center ",
		photo: " h4 of-contain lighten ",
		flag: " h4 of-contain lighten ",
		imgSet: "std",
		globalOverlay: " bg-blackboard cover darken o-20 " + STYLE_GO,
		toolBarBtn: " f5 chalkduster white underline " + STYLE_TBB,
	},
	fullPhoto: {
		name: "Full Photo",
    global: ` relative white noto-sans flex flex-column ` + STYLE_G,
		cardContent: " f2 absolute left-0 z-9 flex flex-column justify-start " + STYLE_B,
		cardHead: " " + STYLE_CH,
		cardBody: " " + STYLE_CB,
    primary: "  ",
    secondary: "  ",
    tertiary: "  ",
    quaternary: " ",
		quintary: " ",
    first: " ",
    followingFirst: " db lh-title ",
    clickable: " " + STYLE_C,
		audioBtn: " f-subheadline ",
		headFront: " ",
		headBack: " pl3 pt3 ",
		bodyFront: " absolute z-9999 left-1 top-1 ",
		bodyBack: " pl3 ",
		jpnPrimary: " f-subheadline lh-solid ",
		jpnSecondary: " ",
		latinPrimary: " ",
		latinSecondary: " f3 ",
		prompt: " ",
		devLabels: " pa2 f5 " + STYLE_DL,
		styleLabel: " " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " vh-100 ",
		photo: " of-cover h-100 w-100 ",
		flag: " dn ",
		imgSet: "std",
		toolBarBtn: " f5 underline white link noto-sans " + STYLE_TBB,
	},
	indexCard: {
		name: "Index Card",
		global: " bg-light-gray pa3 black " + STYLE_G,
		cardContent: " shadow-5 vh-75 bg-white " + STYLE_B,
		cardHead: " " + STYLE_CH,
		cardBody: " " + STYLE_CB,
    primary: " ",
    secondary: " ",
    tertiary: " ",
    quaternary: " ",
		quintary: " ",
    first: ` pl3 pv3 bb b--red db lh-solid flex justify-start items-center `,
    followingFirst: ` pl3 bb b--blue db lh-solid pv2 flex items-center `,
    clickable: " stroke-black white " + STYLE_C,
		audioBtn: " f-subheadline ",
		headFront: " ",
		jpnPrimary: " f1 stroke-order ",
		jpnSecondary: " f2 stroke-order ",
		latinPrimary: " f3 schoolbell ",
		latinSecondary: " f3 schoolbell ",
		prompt: " ",
		devLabels: " schoolbell f3 " + STYLE_DL,
		styleLabel: " " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " absolute h-100 pv4 top-0 right-0 w-50 flex flex-column items-center justify-between ",
		photo: " colorless w-two-thirds of-contain multiply ",
		flag: " w-two-thirds of-contain ",
		imgSet: "sketch",
		toolBarBtn: " underline schoolbell " + STYLE_TBB,
	},
	zenBurnTrue: {
		name: "Zenburn True",
    global: ` bg-zb-1 zb-default flex flex-column justify-center items-center ` + STYLE_G,
		cardContent: " flex flex-column justify-center items-center " + STYLE_B,
    primary: " zb-bright-yellow ",
    secondary: " zb-cyan ",
    tertiary: " zb-muted-green ",
    quaternary: " zb-salmon ",
		quintary: " ",
    first: " ",
    followingFirst: " ",
    clickable: " zb-pale-yellow " + STYLE_C,
		audioBtn: " ",
		headFront: " ",
		jpnPrimary: " f1 noto-serif lh-solid ",
		jpnSecondary: " f1 noto-serif lh-solid ",
		latinPrimary: " f3 ",
		latinSecondary: " f3 ",
		prompt: " ",
		devLabels: " " + STYLE_DL,
		styleLabel: " " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " h4 pv2 ph4 ",
		photo: " w-50 of-scale-down di ",
		flag: " w-50 of-scale-down di ",
		imgSet: "std",
		toolBarBtn: " " + STYLE_TBB,
	},
  matrix: {
		name: "Code Matrix",
    global: " bg-matrix-black " + STYLE_G,
		cardContent: " flex flex-column justify-center items-center pa3 " + STYLE_B,
    primary: " ",
    secondary: " noto-sans ",
    tertiary: " f3 ",
    quaternary: " f3 ",
		quintary: " ",
    first: " white neon-glow-green  ",
    followingFirst: " b normal matrix-green ",
    clickable: " white neon-glow-green " + STYLE_C,
		audioBtn: " ",
		headFront: " ",
		jpnPrimary: " f1 ",
		jpnSecondary: " f2 b ",
		latinPrimary: " ",
		latinSecondary: " bpdots ",
		prompt: " ",
		devLabels: " " + STYLE_DL,
		styleLabel: " white bpdots z-999 absolute  " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " flex flex-row ",
		photo: " dib ",
		flag: " dib ",
		imgSet: "std",
		imgOverlay: " o-30 bg-code-rain cover luminosity darken ",
		globalOverlay: " o-50 hue bg-matrix-green " + STYLE_GO,
		toolBarBtn: " " + STYLE_TBB,
  },
  futuristic: {
		name: "Futuristic",
    global: " bg-black light-blue " + STYLE_G,
		cardContent: " pa3 flex flex-column " + STYLE_B,
    primary: " ",
    secondary: " ",
    tertiary: " ",
		quaternary: " ",
		quintary: " ",
    first: " b f1 white neon-glow-cyan tron-outline ",
    followingFirst: " f2 camingocode ",
    clickable: " white neon-glow-cyan " + STYLE_C,
		audioBtn: " ",
		headFront: " ",
		jpnPrimary: " ",
		jpnSecondary: " ",
		latinPrimary: " ",
		latinSecondary: " ",
		prompt: " ",
		devLabels: " " + STYLE_DL,
		styleLabel: " " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " absolute h-100 pv4 top-0 right-0 w-50 flex flex-column items-center justify-between ",
		photo: " dib w-two-thirds of-contain ",
		flag: " dib w-two-thirds of-contain ",
		imgSet: "std",
		imgOverlay: " multiply bg-light-blue ",
		toolBarBtn: " " + STYLE_TBB,
	},
	zenBurnTachyons: {
		name: "Zenburn Tachyons",
    global: ` bg-gray white flex flex-row ` + STYLE_G,
		cardContent: " w-50 flex flex-column justify-center items-center " + STYLE_B,
    primary: " yellow ",
    secondary: " light-blue ",
    tertiary: " light-green ",
    quaternary: " light-pink ",
		quintary: " ",
    first: " f1 ",
    followingFirst: " f2 ",
    clickable: " " + STYLE_C,
		audioBtn: " ",
		headFront: " ",
		jpnPrimary: " noto-sans ",
		jpnSecondary: " noto-sans ",
		latinPrimary: " ",
		latinSecondary: " ",
		prompt: " ",
		devLabels: " " + STYLE_DL,
		styleLabel: " " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " w-50 h-100 flex flex-column justify-start items-start bg-black ",
		photo: " of-contain h-50 ",
		flag: " of-contain h-50 ",
		imgSet: "std",
		toolBarBtn: " " + STYLE_TBB,
	},
  highFantasy: {
		name: "High Fantasy",
    global: " bg-dark-green flex flex-row yellow " + STYLE_G,
		cardContent: " w-50 flex flex-column justify-center items-center " + STYLE_B,
    primary: " ",
    secondary: " ",
    tertiary: " ",
    quaternary: " ",
		quintary: " ",
    first: " f1 sawarabi-mincho ",
    followingFirst: " f3 ",
    clickable: " " + STYLE_C,
		audioBtn: " ",
		headFront: " ",
		jpnPrimary: " sawarabi-mincho ",
		jpnSecondary: " sawarabi-mincho ",
		latinPrimary: " ringbearer ",
		latinSecondary: " noto-sans ",
		prompt: " ",
		devLabels: " " + STYLE_DL,
		styleLabel: " " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: "  w-50 h-100 flex flex-column justify-start items-start ",
		photo: " sepia of-cover h-50 tc center ",
		flag: " sepia of-cover h-50 tc center ",
		imgSet: "std",
		toolBarBtn: " " + STYLE_TBB,
  },
  retroConsole: {
		name: "8-Bit Retro",
    global: ` pl3 pixel-m-plus12 retro-green-darker bg-retro-green-lighter ` + STYLE_G,
		cardContent: " pt3 flex flex-column " + STYLE_B,
    primary: " ",
    secondary: " ",
    tertiary: " f2 ",
    quaternary: " f2 ",
		quintary: " f3 ",
    first: " ",
    followingFirst: " ",
    clickable: " " + STYLE_C,
		audioBtn: " f-subheadline ",
		headFront: " retro-green-dark ",
		headBack: " lh-title ",
		bodyFront: " retro-green-dark ",
		bodyBack: " lh-copy flex flex-column ",
		jpnPrimary: " f-subheadline lh-title ",
		jpnSecondary: " f1 lh-title ",
		latinPrimary: " f1 lh-title ",
		latinSecondary: " lh-title ",
		prompt: " f2 pixel-m-plus12 ",
		devLabels: " pa1 f4 retro-green-dark pixel-m-plus12 " + STYLE_DL,
		styleLabel: " " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " db pt2 ",
		photo: " h4 di of-contain ",
		flag: " pt2 pt0-ns pl2-ns h4 di of-contain ",
		imgSet: "retro",
		toolBarBtn: " f4 retro-green-dark pixel-m-plus12 " + STYLE_TBB,
  },
  rpgSketch: {
		name: "RPG Sketch",
    global: " bg-parchment relative cover manuscript-brown flex flex-column justify-center items-center " + STYLE_G,
		cardContent: " " + STYLE_B,
    primary: " ",
    secondary: " ",
    tertiary: " ",
    quaternary: " ",
		quintary: " ",
    first: " ",
    followingFirst: " db ",
    clickable: " " + STYLE_C,
		audioBtn: " ",
		headFront: " ",
		headBack: " flex items-center justify-center ",
		bodyFront: " ",
		bodyBack: " flex flex-column items-center justify-center pv1",
		jpnPrimary: " f1 noto-serif ",
		jpnSecondary: " f2 noto-serif ",
		latinPrimary: " f3 noto-serif ",
		latinSecondary: " f3 noto-serif ",
		prompt: " f3 noto-serif ",
		devLabels: " " + STYLE_DL,
		styleLabel: " " + STYLE_L,
		dataLabel: " " + STYLE_D,
		imgSection: " absolute w-100 flex flex-row items-center justify-between ",
		photo: " sepia multiply w-50 of-contain ",
		flag: " sepia multiply w-50 of-contain ",
		imgSet: "sketch",
		toolBarBtn: " f5 noto-serif manuscript-brown underline link " + STYLE_TBB,
  },
	woodOnWood: {
		name: "Wood Inlay",
    global: " bg-wood cover b flex flex-column justify-center items-center " + STYLE_G,
		cardContent: " text-wooden cover stroke-wooden flex flex-column justify-center items-center ",
    primary: " ",
    secondary: " ",
    tertiary: " ",
    quaternary: " ",
		quintary: " ",
    first: " f-subheadline lh-solid ",
    followingFirst: " f2 lh-solid ",
    clickable: " text-wooden cover stroke-wooden " + STYLE_C,
		audioBtn: " ",
		headFront: " ",
		jpnPrimary: " ",
		jpnSecondary: " ",
		latinPrimary: " ",
		latinSecondary: " ",
		prompt: " ",
		devLabels: " text-wooden cover stroke-wooden " + STYLE_DL,
		styleLabel: " " + STYLE_L,
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
    tags: "noun food animals",
  },
  library: {
    term: "図書館",
    reading: "としょかん",
    translat: "library",
    translit: "to-SHO-kan",
    audio: "toshokan.mp3",
    tags: "noun places books",
  },
  australia: {
    term: "オーストラリア",
    reading: "",
    translat: "Australia",
    translit: "OOsutoraria",
    audio: "oosutoraria.mp3",
		tags: "properNoun places countries",
  },
  asoko: {
    term: "あそこ",
    reading: "",
		translat: "over there",
		meaning: "Refers to a place distant from both speaker & listener.",
    translit: "a-SO-KO",
    audio: "asoko.mp3",
    tags: "noun pronoun location grammarPoint",
	},
	sushi: {
    term: "寿司",
    reading: "すし",
		translat: "sushi",
		meaning: "A Japanese cuisine typically made of raw fish & vinegar rice.",
    translit: "su-SHI",
    audio: "sushi.mp3",
    tags: "noun food culture",
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
	1C. hearDistinguish = dubbed "sound karuta" by AD, this is for telling two similar sounding
			words apart, such as a "A-me" rain and "a-ME" candy (which vary only in intonation).

	VISUAL
	2A. lookSpeak = visual identification (RECOMMENDED)
	
	TRANSLATION
	3A. recall = l1 to l2 translation (RECOMMENDED)

	READING
	4A. readKnow = reading comprehnsion (HELPFUL, BUT NOT SUPER EFFECTIVE)
	4B. readSpeak = reading comprehension + speaking practice (BETTER THAN ABOVE)
	4C. readPhonetic = pronunciation practice & phonetic character recognition (THIS IS A STEP 0 ITEM, SKIPPABLE AT A COST)
	
	WRITING
	5A. copyWrite = writing skills & attention to detail
			(SQUARE 0: BEST NOT TO SKIP, BUT DON'T STAY HERE FOR LONG)
	5B. convertWriteTranslit = converting from transliteration in l1 to l2 transliteration
			(ie. romanji to kana) (RECOMMENDED COMPROMISE BETWEEN 5A & 5C)
	5C. hearWrite = dictation, combining listening & writing (ADVANCED LEARNERS ONLY)
	
	MISC
	6. mnemonicRecall

	*/}
const prompts = {
	hearSpeak: {
		ja: {
			l1: "Repeat in Japanese",
			l2: "日本語で言い替えしなさい",
		},
		tp: {
			l1: "Repeat in toki pona",
			l2: "o kute. o toki e ni"
		},
	},
	hearKnow: {
		ja: {
			l1: "Translate into English",
			l2: "英語に訳しなさい",
		},
		tp: {
			l1: "Translate into English",
			l2: "o kute. o ante tawa toki Inli"
		},
	},

	lookSpeak: {
		ja: {
			l1: "Say out loud",
			l2: "見たものを言いなさい",
		},
		tp: {
			l1: "Say out loud",
			l2: "o toki e ni kepeken uta kalama sina"
		},
	},

	recall: {
		ja: {
			l1: "Translate to Japanese",
			l2: "日本語に訳しなさい",
		},
		tp: {
			l1: "Translate to toki pona",
			l2: "o ante tawa toki pona"
		},
	},

	readKnow: {
		ja: {
			l1: "Translate to English",
			l2: "英語に訳しなさい",
		},
		tp: {
			l1: "Translate to English",
			l2: "o ante tawa toki Inli",
		},
	},
	readSpeak: {
		ja: {
			l1: "Read this out loud",
			l2: "読み上げなさい",
		},
		tp: {
			l1: "Read this out loud",
			l2: "o toki kepeken uta kalama sina",
		},
	},
	
	copyWrite: {
		ja: {
			l1: "copy (rewrite) this",
			l2: "書き写しなさい",
		},
		tp: {
			l1: "copy (rewrite) this",
			l2: "o sitelen sin e ni",
		},
	},
	convertWriteTranslit: {
		ja: {
			l1: "Write this using Hiragana",
			l2: "ひらがなでかきなさい",
		},
		tp: {
			l1: "Write this using sitelen pona",
			l2: "o sitelen kepeken sitelen pona",
		},
	},
	hearWrite: {
		ja: {
			l1: "Write in Japanese",
			l2: "聴いた言葉を書きなさい",
		},
		tp: {
			l1: "Write in 'sitelen pona'",
			l2: "o sitelen kepeken sitelen pona",
		},
	},

	mnemonicSpeak: {
		ja: {
			l1: "Say aloud the mnemonic word",
			l2: "記憶術を使って、適切な言葉を言いなさい",
		},
		tp: {
			l1: "Say aloud the mnemonic word",
			l2: "o toki e nimi ni lon toki pona",
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

const MASTER_THEME_SET = [ themes.retroConsole, themes.inkOnRicePaper,
	themes.zenMenu, themes.illumManus, themes.blackBoard,
	themes.fullPhoto, themes.rpgSketch, themes.indexCard
];

const ICEBOX_THEME_SET = [themes.zenBurnTachyons, themes.zenBurnTrue, themes.woodOnWood, themes.mondrian,
	themes.matrix, themes.futuristic, themes.highFantasy];

const WORD_INDEX = 0; //crab==1 kanji, australia==long, library==many kanji, asoko==kana only, sushi==even kanji to kana ratio
const MASTER_WORD_SET = [words.crab, words.australia, words.library, words.asoko, words.sushi];
const MASTER_PHOTO_SET = [pictures.crab, pictures.australia, pictures.library, pictures.asoko, pictures.sushi];

const SIDE_FLAG = 1; //0 represents front, 1 represents back
const INTRO_FLAG = 1; //0 represents intro, 1 represents non-intro

const TOOLBAR_INDEX = 0;
const TOOLBAR_STYLE_SET = [" bottom-0 left-0 w-100 tc center ", " top-0 left-0 w-100 tc center ",
	" top-0 left-0 ", " top-0 right-0 ", " bottom-0 left-0 ", " bottom-0 right-0 "];

const CardDevToolBar = (props) => (
	<aside className={STYLE_TB + props.tbStyle}>
		<a onClick={props.handleClick1} className={props.btnStyle}>Flip Card</a>
		<a onClick={props.handleClick2} className={props.btnStyle}>Change Theme</a>
		<a onClick={props.handleClick3} className={props.btnStyle}>Change Type</a>
		<a onClick={props.handleClick4} className={props.btnStyle}>Change Word</a>
		<a onClick={props.handleClick5} className={props.btnStyle}>Toggle Intro</a>
		<a onClick={props.handleClick6} className={props.btnStyle}>Move Buttons</a>
	</aside>
);

class CardTester extends Component {
	constructor(props) {
		super(props);
		this.state = {
			th: THEME_INDEX,
			w: WORD_INDEX,
			p: WORD_INDEX,
			ty: TYPE_INDEX,
			s: SIDE_FLAG,
			tb: TOOLBAR_INDEX,
			in: INTRO_FLAG,
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
	handleClick5 = (event) => { this.setState({in: this.toggleBinary(this.state.in)}) };
	handleClick6 = (event) => { this.setState({tb: this.updateIndex(this.state.tb, TOOLBAR_STYLE_SET)}) };

	render() {
		return (
			<div className="relative flex flex-wrap w-100 vh-100">
				<Fragment>
				{
					this.state.s === 0 &&
					<div className="bg-purple w-100">
						<OrganismCardFront
							l1="en" l2="ja"
							intro={this.state.in}
							prompt={PROMPT_SET[this.state.ty]}
							type={TYPE_SET[this.state.ty]}
							images={MASTER_PHOTO_SET[this.state.p][MASTER_THEME_SET[this.state.th].imgSet]}
							word={MASTER_WORD_SET[this.state.w]}
							theme={MASTER_THEME_SET[this.state.th]}
						/>
						<CardDevToolBar
							btnStyle={MASTER_THEME_SET[this.state.th].toolBarBtn}
							tbStyle={TOOLBAR_STYLE_SET[this.state.tb]}
							handleClick1={this.handleClick1}
							handleClick2={this.handleClick2}
							handleClick3={this.handleClick3}
							handleClick4={this.handleClick4}
							handleClick5={this.handleClick5}
							handleClick6={this.handleClick6}
						/>
					</div>
				}
				{
					this.state.s === 1 &&
					<div className="bg-blue w-100">
						<OrganismCardBack
							l1="en" l2="ja"
							intro={this.state.in}
							type={TYPE_SET[this.state.ty]}
							images={MASTER_PHOTO_SET[this.state.p][MASTER_THEME_SET[this.state.th].imgSet]}
							word={MASTER_WORD_SET[this.state.w]}
							theme={MASTER_THEME_SET[this.state.th]}
						/>
						<CardDevToolBar
							btnStyle={MASTER_THEME_SET[this.state.th].toolBarBtn}
							tbStyle={TOOLBAR_STYLE_SET[this.state.tb]}
							handleClick1={this.handleClick1}
							handleClick2={this.handleClick2}
							handleClick3={this.handleClick3}
							handleClick4={this.handleClick4}
							handleClick5={this.handleClick5}
							handleClick6={this.handleClick6}
						/>
					</div>
				}
				</Fragment>
			</div>
		);
	}
}

const FontTest = (props) => (
	<div className={props.classes + " pa3 dib f2 ba b--red "}>{props.text + ": あア亜 A a"}</div>
);

//fonts
class FontTester1 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const listItems = fonts.map((font, i) =>
			<FontTest classes={font} text={font} />
		);

		return (<section className={this.props.classes}>{listItems}</section>);
	}
}

class FontTester2 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const listItems = fonts_ja.map((font, i) =>
			<FontTest classes={font} text={font} />
    );

		return (<section className={this.props.classes}>{listItems}</section>);
	}
}
/* <FontTester1 classes=" purple " /><FontTester2 classes=" green " /> */
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
