import React, {Fragment} from 'react';
import styled from 'styled-components';

import AtomAudio from './AtomAudio';
import AtomTerm from './AtomTerm';
import AtomTranslat from './AtomTranslat';
import AtomTranslit from './AtomTranslit';
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
		<div className={props.theme.devLabels}>
			<AtomStyleLabel
				lang={props.l1}
				text={`style: ${props.theme.name}`}
				classes={props.theme.styleLabel}
			/>
			<label className={props.theme.dataLabel}>
				<AtomLanguage text={props.l2} />{`:`}<AtomType text={props.type} />{`:`}<AtomSide text="front" />
			</label>
		</div>
		<main className={props.theme.cardContent}>
			{
				(props.type === "hearKnow") &&
				<Fragment>
					{
						(!!props.prompt && !!props.word.audio) &&
						<Fragment>
							<div className={props.theme.cardHead + props.theme.headFront}>
								<AtomAudio
									audio={props.word.audio}
									classes={props.theme.clickable + props.theme.audioBtn}
									lang={props.l2}
								/>
							</div>
							<div className={props.theme.cardBody + props.theme.bodyFront}>
								<AtomPrompt
									text={props.prompt.ja.l1}
									classes={props.theme.prompt}
								/>
							</div>
						</Fragment>
					}
				</Fragment>
			}
			{
				(props.type === "readSpeak") &&
				<Fragment>
					{
						(!!props.prompt && !!props.word.reading) &&
						<Fragment>
							<div className={props.theme.cardHead + props.theme.headFront}>
								<AtomTerm
									term={props.word.term}
									classes={props.theme.primary + props.theme.first + props.theme.jpnPrimary + (!props.word.reading ? " tracked-tight " : " tracked-mega ")}
									lang={props.l2}
								/>
							</div>
							<div className={props.theme.cardBody + props.theme.bodyFront}>
								<AtomPrompt
									text={props.prompt.ja.l1}
									classes={props.theme.prompt}
								/>
							</div>
						</Fragment>
					}
				</Fragment>
			}
			{
				(props.type === "lookSpeak") &&
				<Fragment>
					{
						(!!props.prompt && !!props.images && !!props.images.photo) &&
						<Fragment>
							<div className={props.theme.cardHead + props.theme.headFront}>
								<section className={props.theme.imgSection}>
									<AtomImage
										src={props.images.photo}
										alt={props.images.alt}
										lang={props.l1}
										classes={props.theme.photo}
										overlay={props.theme.imgOverlay}
									/>
								</section>
							</div>
							<div className={props.theme.cardBody + props.theme.bodyFront}>
								<AtomPrompt
									text={props.prompt.ja.l1}
									classes={props.theme.prompt}
								/>
							</div>
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
							<div className={props.theme.cardHead + props.theme.headFront}>
								<AtomTranslat
									translat={props.word.translat}
									classes={props.theme.latinPrimary}
									lang={props.l1}
								/>
							</div>
							<div className={props.theme.cardBody + props.theme.bodyFront}>
								<AtomPrompt
									text={props.prompt.ja.l1}
									classes={props.theme.prompt}
								/>
							</div>
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
							<div className={props.theme.cardHead + props.theme.headFront}>
								<AtomTranslit
									translit={props.word.translit}
									classes={props.theme.latinPrimary}
									lang={props.l1}
								/>
							</div>
							<div className={props.theme.cardBody + props.theme.bodyFront}>
								<AtomPrompt
									text={props.prompt.ja.l1}
									classes={props.theme.prompt}
								/>
							</div>
						</Fragment>
					}
				</Fragment>
			}
		</main>
  </StyledOrganismCardFront>
);

export default OrganismCardFront;
