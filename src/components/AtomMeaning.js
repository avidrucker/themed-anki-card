import React from 'react';
import styled from 'styled-components';

const StyledAtomMeaning = styled.span.attrs({
  className: ' ',
})``;

const AtomMeaning = (props) => (
  <StyledAtomMeaning className={props.classes} lang={props.lang}>
		{(props.intro===1) ? "Meaning: " : ""}
		{(props.forExport===1) ? "{{meaning}}" : props.text}
  </StyledAtomMeaning>
);

export default AtomMeaning;
