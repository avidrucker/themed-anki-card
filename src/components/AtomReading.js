import React from 'react';
import styled from 'styled-components';

const StyledAtomReading = styled.span.attrs({
  className: ' ',
})``;

//reading, pronunciation, phonetic writing
const AtomReading = (props) => (
	<StyledAtomReading className={props.classes} lang={props.lang}>
		{(props.intro===1) ? <span className="o-50">{`Reading: `}</span> : ""}
		{(props.forExport===1) ? "{{reading}}" : props.text}
	</StyledAtomReading>
);

export default AtomReading;
