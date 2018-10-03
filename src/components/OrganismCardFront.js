import React, {Fragment} from 'react';
import PropTypes from "prop-types";
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
import AtomImagePlaceholder from './AtomImagePlaceholder';

const STYLE_C = " link grow "; //clickable style (the audio button)
const STYLE_DL = " z-9999 absolute bottom-0 left-0 w-100 flex flex-row-ns flex-column items-center justify-between-ns justify-center " //devLabels style
const STYLE_L = " order-2 "; //styleLabel style
const STYLE_D = " order-1 "; //dataLabel style
const STL_GLOBAL_GENERAL = " relative overflow-y-hidden "; //global style
const STL_GLOBAL_OVERLAY = " disabled-link absolute top-0 right-0 w-100 h-100 z-999 "; //global overlay


const StyledOrganismCardFront = styled.div.attrs({
  className: `h-100 w-100`,
})``;

const Header = (props) => {
	const themeGlobalOverlay = props.theme.globalOverlay || "";		
	return (
		<span className={props.theme.globalOverLay + STL_GLOBAL_OVERLAY}></span>
	);		
}

Header.propTypes = { theme: PropTypes.string };
Header.defaultProps = {	theme: " blah " };

const GlobalOverlay = (props) => (
	!!props.theme.globalOverlay &&
	<span className={props.theme.globalOverlay + STL_GLOBAL_OVERLAY}></span>
);

GlobalOverlay.propTypes = {
	globalOverlay: PropTypes.string,
};

const OrganismCardFront = (props) => (
  <StyledOrganismCardFront className={props.theme.global + STL_GLOBAL_GENERAL}>

		<GlobalOverlay />

		<div className={props.theme.devLabels + STYLE_DL}>
			<AtomStyleLabel
				lang={props.l1}
				text={`style: ${props.theme.name}`}
				classes={props.theme.styleLabel + STYLE_L}
			/>
			<label className={props.theme.dataLabel + STYLE_D}>
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
									forExport={props.forExport}
									classes={STYLE_C + props.theme.audioBtn}
									lang={props.l2}
								/>
							</div>
							<div className={props.theme.cardBody + props.theme.bodyFront}>
								{/*latinSecondary must change to jpnSecondary etc. when prompt lang changes:
								ie. should props.theme.latinSecondary be added or props.theme.prompt be split
								into promptEng, promptJap, promptTok, etc.? */}
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
								{/*+ (!props.word.reading ? " tracked-tight " : " tracked-mega ")*/}
								<AtomTerm
									text={props.word.term}
									forExport={props.forExport}
									classes={props.theme.primary + props.theme.first + props.theme.jpnPrimary}
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
								{props.forExport === 0 && 
									<AtomImage
										src={props.images.photo}
										alt={props.images.alt}
										lang={props.l1}
										classes={props.theme.photo}
										overlay={props.theme.imgOverlay}
									/>
								}
								{
									props.forExport === 1 &&
									<AtomImagePlaceholder
										text="photo"
										lang={props.l1}
										classes={props.theme.photo}
										overlay={props.theme.imgOverlay}
									/>
								}
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
									text={props.word.translat}
									forExport={props.forExport}
									classes={props.theme.latinPrimary+ props.theme.tertiary}
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
									forExport={props.forExport}
									text={props.word.translit}
									classes={props.theme.latinPrimary + props.theme.quaternary}
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


const FragmentConvertWriteTranslit = (props) => {
	return  (
				<Fragment>
					{
						!!props.prompt && !!props.word.reading && !!props.word.translit &&
						<Fragment>
							<div className={props.theme.cardHead + props.theme.headFront}>
								<AtomTranslit
									forExport={props.forExport}
									text={props.word.translit}
									classes={props.theme.latinPrimary + props.theme.quaternary}
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
	)
}


// This would be in the render method for OrganismCardFront

// function render() {
// 	// header stuff
// 	if (prop.type == "convertWriteTranslit") {
// 		<FragmentConvertWriteTranslit props={...props} /> // Something like this should work
// 	}
// }