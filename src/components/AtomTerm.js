import React from 'react';
import styled from 'styled-components';

const StyledAtomTerm = styled.span.attrs({
  className: '',
})``;

const AtomTerm = (props) => (
  <StyledAtomTerm className={props.classes} lang={props.lang}>
		{/*{(props.intro===1) ? "Term: " : ""}*/}
		{(props.forExport===1) ? "{{term}}" : props.text}
  </StyledAtomTerm>
);

export default AtomTerm;
