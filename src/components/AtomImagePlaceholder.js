import React from 'react';
import styled from 'styled-components';

const StyledAtomImagePlaceholder = styled.span.attrs({
  className: ' ',
})``;

//prompt, instructions, guidance
const AtomImagePlaceholder = (props) => (
  <StyledAtomImagePlaceholder className={props.classes} lang={props.lang}>
		{`{{${props.text}}}`}
  </StyledAtomImagePlaceholder>
);

export default AtomImagePlaceholder;
