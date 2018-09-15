import React, {Fragment} from 'react';
import styled from 'styled-components';

const StyledAtomReading = styled.span.attrs({
  className: ' ',
})``;

//reading, pronunciation, phonetic writing
const AtomReading = (props) => (
	<Fragment>
	{ !!props.reading &&
		<StyledAtomReading className={props.classes} lang={props.lang}>
    {(props.intro===0) ? "Reading: " : ""}{props.reading}
	</StyledAtomReading>
	}
	{
		!props.reading &&
		<Fragment>
		</Fragment>
	}
	</Fragment>
);

export default AtomReading;
