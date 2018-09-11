import React, {Fragment} from 'react';
import styled from 'styled-components';

import AtomAudio from './AtomAudio';
import AtomTerm from './AtomTerm';
import AtomTranslat from './AtomTranslat';
import AtomTranslit from './AtomTranslit';
import AtomReading from './AtomReading';
import AtomStyleLabel from './AtomStyleLabel';
import AtomImage from './AtomImage';
import AtomType from './AtomType';
import AtomSide from './AtomSide';
import AtomLanguage from './AtomLanguage';
import AtomPrompt from './AtomPrompt';

const StyledOrganismCardFront = styled.div.attrs({
  className: `h-100 w-100`,
})``;

const OrganismCardFront = (props) => (
  <StyledOrganismCardFront className={props.theme.global}>
		{
			!!props.theme.globalOverlay &&
			<span className={props.theme.globalOverlay}></span>
		}
		<AtomStyleLabel
			lang={props.l1}
			text={`style: ${props.theme.name}`}
			classes={props.theme.styleLabel}
		/>
		<span className={props.theme.dataLabel}>
			<AtomLanguage text={props.l2} />{`:`}<AtomType text={props.type} />{`:`}<AtomSide text="front" />
		</span>
		
		<main className={props.theme.body}>
			{
				(props.type === "hearKnow") &&
				<Fragment>
					<AtomPrompt
						text={props.prompt.ja.l1}
						classes={props.theme.prompt}
					/>
					<AtomAudio
						audio={props.word.audio}
						classes={props.theme.clickable}
						lang={props.l2}
					/>
				</Fragment>
			}
			{
				(props.type !== "hearKnow") &&
				<Fragment>
					{
						!!props.prompt &&
						<AtomPrompt
							text={props.prompt.ja.l1}
							classes={props.theme.prompt}
						/>
					}
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
				</Fragment>
			}
		</main>
		<Fragment>
		{
			!!props.images && !!props.images.photo &&
			<section className={props.theme.imgSection}>
					<AtomImage
						src={props.images.photo}
						alt={props.images.alt}
						lang={props.l1}
						classes={props.theme.photo}
						overlay={props.theme.imgOverlay}
					/>
					<AtomImage
						src={props.images.flag}
						alt={props.images.altFlag}
						lang={props.l1}
						classes={props.theme.flag}
						overlay={props.theme.imgOverlay}
					/>
			</section>
		}
		</Fragment>
  </StyledOrganismCardFront>
);

export default OrganismCardFront;
