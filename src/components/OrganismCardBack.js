import React, {Fragment} from 'react';
import styled from 'styled-components';

import MoleculeTags from './MoleculeTags';
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
import AtomMeaning from './AtomMeaning';

const StyledOrganismCardBack = styled.div.attrs({
  className: `h-100 w-100`,
})``;

const OrganismCardBack = (props) => (
  <StyledOrganismCardBack className={props.theme.global}>
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
			<span className={props.theme.dataLabel}>
				<AtomLanguage text={props.l2} />{`:`}<AtomType text={props.type} />{`:`}<AtomSide text="back" />
			</span>
		</div>
		<AtomAudio audio={props.word.audio}
			classes={props.theme.clickable + props.theme.backAudio}
			lang={props.l2}
		/>
		<main className={props.theme.cardContent}>
			<div className={props.theme.cardHead + props.theme.headBack}>
				<AtomTerm
					intro={props.intro}
					term={props.word.term}
					classes={props.theme.primary + props.theme.first + props.theme.jpnPrimary + (!props.word.reading ? " tracked-tight " : " tracked-mega ")}
					lang={props.l2}
				/>
			</div>
			<div className={props.theme.cardBody + props.theme.bodyBack}>
				<AtomReading
					intro={props.intro}
					reading={props.word.reading}
					classes={props.theme.secondary + props.theme.followingFirst + props.theme.jpnSecondary}
					lang={props.l2}
				/>
				<div className={props.theme.tertiary + props.theme.followingFirst + props.theme.latinSecondary}>
					<div className="">
						<AtomTranslat
							intro={props.intro}
							translat={props.word.translat}
							lang={props.l1}
						/>
						{
							!!props.word.meaning &&
							<Fragment>
								{":  "}<AtomMeaning meaning={props.word.meaning} lang={props.l1} />
							</Fragment>
						}
					</div>
				</div>
				<AtomTranslit
					intro={props.intro}
					translit={props.word.translit}
					classes={props.theme.quaternary + props.theme.followingFirst + props.theme.latinSecondary}
					lang={props.l1}
				/>
				<MoleculeTags
					intro={props.intro}
					tags={props.word.tags} 
					classes={props.theme.quintary + props.theme.followingFirst + props.theme.latinSecondary}
					lang={props.l1}
				/>
			</div>
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
					{
						!!props.images.flag &&
						<AtomImage
							src={props.images.flag}
							alt={props.images.altFlag}
							lang={props.l1}
							classes={props.theme.flag}
							overlay={props.theme.imgOverlay}
						/>
					}
			</section>
		}
		</Fragment>
  </StyledOrganismCardBack>
);

export default OrganismCardBack;
