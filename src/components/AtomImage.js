import React, {Fragment} from 'react';
import styled from 'styled-components';

const StyledAtomImage = styled.img.attrs({
  className: ' ',
})``;

const AtomImage = (props) => (
	<Fragment>
		{
			!props.src &&
			<Fragment>hi</Fragment>
		}
		{!!props.src && !!props.overlay &&
		<span className="relative dib w-100 overflow-y-hidden">
			<span className={" absolute z-9999 top-0 left-0 h-100 w-100 dib " + props.overlay}></span>
			<StyledAtomImage
				className={props.classes + " relative "}
				lang={props.lang}
				src={props.src}
				alt={props.alt}
			/>
		</span>
		}
		{!!props.src && !props.overlay &&
		<StyledAtomImage
				className={props.classes}
				lang={props.lang}
				src={props.src}
				alt={props.alt}
			/>
		}
	</Fragment>
);

//src={require(`../${props.src}`)}

export default AtomImage;
