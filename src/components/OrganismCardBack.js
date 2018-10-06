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
import AtomImagePlaceholder from './AtomImagePlaceholder';

const STY_AUD_BACK = " absolute z-9999 ";
const STY_CLKBL = " link grow ";
const STY_LBL_DEV = " z-9999 absolute bottom-0 left-0 w-100 flex flex-row-ns flex-column items-center justify-between-ns justify-center ";
const STY_LBL_STY = " order-2 ";
const STY_LBL_DATA = " order-1 ";
const STL_GLOBAL_GENERAL = " relative overflow-y-hidden ";
const STL_GLOBAL_OVERLAY = " disabled-link absolute top-0 right-0 w-100 h-100 z-999 ";

const StyledOrganismCardBack = styled.div.attrs({
  className: `h-100 w-100`,
})``;

const OrganismCardBack = (props) => (
  <StyledOrganismCardBack className={props.theme.global + STL_GLOBAL_GENERAL}>
		{
			!!props.theme.globalOverlay &&
			<span className={props.theme.globalOverlay + STL_GLOBAL_OVERLAY}></span>
		}
		<div className={props.theme.devLabels + STY_LBL_DEV}>
			<AtomStyleLabel
				lang={props.l1}
				text={`style: ${props.theme.name}`}
				classes={props.theme.styleLabel + STY_LBL_STY}
			/>
			<span className={props.theme.dataLabel + STY_LBL_DATA}>
				<AtomLanguage text={props.l2} />{`:`}<AtomType forExport={props.forExport} text={props.type} />{`:`}<AtomSide forExport={props.forExport} text="back" />
			</span>
		</div>
		<AtomAudio audio={props.word.audio}
			forExport={props.forExport}
			classes={props.theme.audioBack + STY_CLKBL + props.theme.audioBtn + STY_AUD_BACK}
			lang={props.l2}
		/>
		<main className={props.theme.cardContent}>
			<div className={props.theme.cardHead + props.theme.headBack}>
				{/*+ (!props.word.reading ? " tracked-tight " : " tracked-mega ")*/}
				<AtomTerm
					intro={props.intro}
					text={props.word.term}
					forExport={props.forExport}
					classes={props.theme.primary + props.theme.first + props.theme.jpnPrimary}
					lang={props.l2}
				/>
			</div>
			<div className={props.theme.cardBody + props.theme.bodyBack}>
				{
					!!props.word.reading && (props.forExport === 0) &&
					<AtomReading
						intro={props.intro}
						forExport={props.forExport}
						text={props.word.reading}
						classes={props.theme.secondary + props.theme.followingFirst + props.theme.jpnSecondary}
						lang={props.l2}
					/>
				}
				{
					!props.word.reading && (props.forExport === 1) &&
					<AtomReading
						intro={props.intro}
						forExport={props.forExport}
						text={props.word.reading}
						classes={props.theme.secondary + props.theme.followingFirst + props.theme.jpnSecondary}
						lang={props.l2}
					/>
				}
				<div className={props.theme.tertiary + props.theme.followingFirst + props.theme.latinSecondary}>
					<div className="">
						<AtomTranslat
							immersion={props.immersion}
							intro={props.intro}
							forExport={props.forExport}
							text={props.word.translat}
							lang={props.l1}
						/>
						{
							!!props.word.meaning &&
							<Fragment>
								{":  "}
								<AtomMeaning
									immersion={props.immersion}
									forExport={props.forExport}
									text={props.word.meaning}
									lang={props.l1}
								/>
							</Fragment>
						}
					</div>
				</div>
				<AtomTranslit
					intro={props.intro}
					immersion={props.immersion}
					text={props.word.translit}
					forExport={props.forExport}
					classes={props.theme.quaternary + props.theme.followingFirst + props.theme.latinSecondary}
					lang={props.l1}
				/>
				<MoleculeTags
					intro={props.intro}
					immersion={props.immersion}
					text={props.word.tags}
					forExport={props.forExport}
					classes={props.theme.quintary + props.theme.followingFirst + props.theme.latinSecondary}
					lang={props.l1}
				/>
			</div>
		</main>
		<Fragment>
		{
			(props.forExport === 0) && !!props.images && !!props.images.photo &&
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
		{
			(props.forExport === 1) &&
			<section className={props.theme.imgSection}>
				<AtomImagePlaceholder
					text="photo" lang={props.l1}
					classes={props.theme.photo}
					overlay={props.theme.imgOverlay}
				/>
				<AtomImagePlaceholder
					text="flag" lang={props.l1}
					classes={props.theme.flag}
					overlay={props.theme.imgOverlay}
				/>
			</section>
		}
		</Fragment>
  </StyledOrganismCardBack>
);

export default OrganismCardBack;
