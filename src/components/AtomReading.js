import React from 'react';
import styled from 'styled-components';

const StyledAtomReading = styled.span.attrs({
  className: ' ',
})``;

//reading, pronunciation, phonetic writing
const AtomReading = (props) => (
	<StyledAtomReading className={props.classes} lang={props.lang}>
		{(props.intro===1) ? "Reading: " : ""}{(props.forExport===1) ? "{{reading}}" : props.text}
	</StyledAtomReading>
);

export default AtomReading;
