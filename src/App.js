import React, { Component } from 'react';
import OrganismCard from './components/OrganismCard';

//
const themes = {
  zen: {
    global: " bg-black white relative h-100 ",
    important: " b ",
    unimportant: " o-80 ",
    primary: " f1 ",
    secondary: " f2 ",
    tertiary: " f3 ",
    quaternary: " f3 ",
    first: ` pl3 b bg-white black db tc pt5 flex justify-start items-end `,
    followingFirst: " pl3 lh-copy ",
    clickable: "  ",
  },
  blackBoard: {
    global: " bg-dark-gray white justify-center items-center ",
    important: " b ",
    unimportant: " ",
    primary: " yellow ",
    secondary: " f2 light-blue ",
    tertiary: " f3 light-pink ",
    quaternary: " f3 light-purple ",
    first: " f1 ",
    followingFirst: " ",
    clickable: "  ",
  },
  zenBurnTachyons: {
    global: ` bg-gray white justify-center items-center `,
    important: " b ",
    unimportant: " ",
    primary: " f-subheadline yellow ",
    secondary: " f1 light-blue ",
    tertiary: " f2 light-green ",
    quaternary: " f2 light-pink ",
    first: " ",
    followingFirst: " ",
    clickable: "  ",
  },
  indexCard: {
    global: " bg-white black ",
    important: " b ",
    unimportant: " ",
    primary: " ",
    secondary: " ",
    tertiary: " ",
    quaternary: " ",
    first: ` ph2 f1 h4 bb b--red db w-100 lh-solid flex justify-start items-center`,
    followingFirst: ` ph2 f3 h2 bb b--blue db w-100 lh-solid pv2 flex items-center `,
    clickable: "  ",
  },
  matrix: {
    global: " bg-black flex flex-column ",
    important: " b ",
    unimportant: " ",
    primary: " f1 ",
    secondary: " b noto-sans f2 green ",
    tertiary: " f3 green ",
    quaternary: " f3 green ",
    first: " white neon-glow-green  ",
    followingFirst: " normal bpdots  ",
    clickable: " f2 white neon-glow-green ",
  },
  glowUI: {
    global: " bg-black light-blue flex flex-column ",
    important: " b ",
    unimportant: " ",
    primary: " f1 ",
    secondary: " f2 ",
    tertiary: " f3 ",
    quaternary: " f3 ",
    first: " b white neon-glow-cyan tron-outline ",
    followingFirst: " camingocode ",
    clickable: " f2 white neon-glow-cyan ",
  },
  highFantasy: {
    global: " bg-mid-gray light-yellow flex flex-column ",
    important: " b ",
    unimportant: " ",
    primary: " f1 ",
    secondary: " f2 ",
    tertiary: " f3 ",
    quaternary: " f3 ",
    first: " noto-sans ringbearer sawarabi-mincho ",
    followingFirst: " ",
    clickable: " f2  ",
  },
  retroConsole: {
    global: ` retro-green-darker bg-retro-green-lighter
    flex flex-column jackeyfont `,
    important: " b ",
    unimportant: " ",
    primary: " ",
    secondary: " f3 ",
    tertiary: " f3 ",
    quaternary: " f3 ",
    first: " f1 ",
    followingFirst: " ",
    clickable: " f2  ",
  },
  rpgSketch: {
    global: " bg-white dark-red ",
    important: " b ",
    unimportant: " ",
    primary: " f1 ",
    secondary: " f2 ",
    tertiary: " f3 ",
    quaternary: " f3 ",
    first: " ",
    followingFirst: " ",
    clickable: "  ",
  },
  zenBurn: {
    global: ` bg-zb-1 zb-default justify-center items-center `,
    important: " b ",
    unimportant: " ",
    primary: " f-subheadline zb-bright-yellow ",
    secondary: " f1 zb-cyan ",
    tertiary: " f2 zb-muted-green ",
    quaternary: " f2 zb-salmon ",
    first: " ",
    followingFirst: " ",
    clickable: " zb-pale-yellow ",
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

const THEME_INDEX = 1;
const THEME_SET = [[themes.indexCard, themes.blackBoard, themes.zenBurnTachyons, themes.zen],
  [themes.matrix, themes.glowUI, themes.highFantasy, themes.retroConsole],
[themes.rpgSketch, themes.zenBurnTachyons, themes.zenBurn, themes.beautifulPhoto]];

class App extends Component {
  render() {
    return (
      <div className="flex flex-wrap bg-blue white w-100 vh-100">
        <div className="w-50 h-50 bg-purple">
          <OrganismCard word={words.sushi} theme={THEME_SET[THEME_INDEX][0]} />
        </div>
        <div className="w-50 h-50 bg-blue">
          <OrganismCard word={words.australia}  theme={THEME_SET[THEME_INDEX][1]} />
        </div>
        <div className="w-50 h-50 bg-green">
          <OrganismCard word={words.library}  theme={THEME_SET[THEME_INDEX][2]} />
        </div>
        <div className="w-50 h-50 bg-red">
          <OrganismCard word={words.asoko}  theme={THEME_SET[THEME_INDEX][3]} />
        </div>
      </div>
    );
  }
}

export default App;
