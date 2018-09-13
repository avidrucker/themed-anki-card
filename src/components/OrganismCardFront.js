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
		<label className={props.theme.dataLabel}>
			<AtomLanguage text={props.l2} />{`:`}<AtomType text={props.type} />{`:`}<AtomSide text="front" />
		</label>
		
		<main className={props.theme.body}>
			{
				(props.type === "hearKnow") &&
				<Fragment>
					{
						!!props.prompt && !!props.word.audio &&
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
				</Fragment>
			}
			{
				(props.type === "readSpeak") &&
				<Fragment>
					{
						!!props.prompt && !!props.word.reading &&
						<Fragment>
							<AtomPrompt
								text={props.prompt.ja.l1}
								classes={props.theme.prompt}
							/>
							<AtomTerm
								term={props.word.term}
								classes={props.theme.primary + props.theme.first + props.theme.jpnPrimary}
								lang={props.l2}
							/>
						</Fragment>
					}
				</Fragment>
			}
			{
				(props.type === "lookSpeak") &&
				<Fragment>
					{
						!!props.prompt && !!props.images && !!props.images.photo &&
						<Fragment>
							<AtomPrompt
								text={props.prompt.ja.l1}
								classes={props.theme.prompt}
							/>
							<section className={props.theme.imgSection}>
							<AtomImage
								src={props.images.photo}
								alt={props.images.alt}
								lang={props.l1}
								classes={props.theme.photo}
								overlay={props.theme.imgOverlay}
							/>
					</section>
						</Fragment>
					}
				</Fragment>
			}
			{
				(props.type === "recall") &&
				<Fragment>
					{
						!!props.prompt && !!props.word.translat &&
						<Fragment>
							<AtomPrompt
								text={props.prompt.ja.l1}
								classes={props.theme.prompt}
							/>
							<AtomTranslat
								translat={props.word.translat}
								classes={props.theme.tertiary + props.theme.followingFirst  + props.theme.latinSecondary}
								lang={props.l1}
							/>
						</Fragment>
					}
				</Fragment>
			}
			{
				(props.type === "convertWriteTranslit") &&
				<Fragment>
					{
						!!props.prompt && !!props.word.reading && !!props.word.translit &&
						<Fragment>
							<AtomPrompt
								text={props.prompt.ja.l1}
								classes={props.theme.prompt}
							/>
							<AtomTranslat
								translat={props.word.translat}
								classes={props.theme.tertiary + props.theme.followingFirst  + props.theme.latinSecondary}
								lang={props.l1}
							/>
						</Fragment>
					}
				</Fragment>
			}
		</main>
  </StyledOrganismCardFront>
);

export default OrganismCardFront;
