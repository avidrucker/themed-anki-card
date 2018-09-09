import React from 'react';
import styled from 'styled-components';

import MoleculeTags from './MoleculeTags';
import AtomAudio from './AtomAudio';
import AtomTerm from './AtomTerm';
import AtomTranslat from './AtomTranslat';
import AtomTranslit from './AtomTranslit';
import AtomReading from './AtomReading';
import AtomStyleLabel from './AtomStyleLabel';

const StyledOrganismCard = styled.div.attrs({
  className: `h-100 w-100`,
})``;

const OrganismCard = (props) => (
  <StyledOrganismCard className={props.theme.global}>
		<AtomStyleLabel
			lang={props.l1}
			text={`style: ${props.theme.name}`}
			classes={props.theme.styleLabel}
		/>
		<AtomAudio audio={props.word.audio}
			classes={props.theme.clickable}
			lang={props.l2}
		/>
		<main className={props.theme.body}>
			<AtomTerm
				term={props.word.term}
				classes={props.theme.primary + props.theme.first + props.theme.jpnPrimary}
				lang={props.l2}
			/>
			<AtomReading
				reading={props.word.reading}
				classes={props.theme.secondary + props.theme.followingFirst + props.theme.jpnSecondary}
				lang={props.l2}
			/>
			<AtomTranslat
				translat={props.word.translat}
				classes={props.theme.tertiary + props.theme.followingFirst  + props.theme.latinSecondary}
				lang={props.l1}
			/>
			<AtomTranslit
				translit={props.word.translit}
				classes={props.theme.quaternary + props.theme.followingFirst + props.theme.latinSecondary}
				lang={props.l1}
			/>
			<MoleculeTags
				tags={props.word.tags} 
				classes={props.theme.tertiary + props.theme.followingFirst + props.theme.latinSecondary}
				lang={props.l1}
			/>
		</main>
  </StyledOrganismCard>
);

export default OrganismCard;
