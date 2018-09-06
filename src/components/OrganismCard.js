import React, { Fragment } from 'react';
import styled from 'styled-components';

import MoleculeTags from './MoleculeTags';
import AtomAudio from './AtomAudio';
import AtomTerm from './AtomTerm';
import AtomTranslat from './AtomTranslat';
import AtomTranslit from './AtomTranslit';
import AtomReading from './AtomReading';

const StyledOrganismCard = styled.div.attrs({
  className: `flex flex-column h-100 w-100`,
})``;

const OrganismCard = (props) => (
  <StyledOrganismCard className={props.theme.global}>
    <AtomTerm term={props.word.term} classes={props.theme.primary + props.theme.first} />
    <AtomReading reading={props.word.reading} classes={props.theme.secondary + props.theme.followingFirst} />
    <AtomTranslat translat={props.word.translat} classes={props.theme.tertiary + props.theme.followingFirst} />
    <AtomTranslit translit={props.word.translit} classes={props.theme.quaternary + props.theme.followingFirst} />
    <AtomAudio audio={props.word.audio} classes={props.theme.clickable + props.theme.followingFirst}/>
    <MoleculeTags tags={props.word.tags}  classes={props.theme.tertiary + props.theme.followingFirst} />
  </StyledOrganismCard>
);

export default OrganismCard;
