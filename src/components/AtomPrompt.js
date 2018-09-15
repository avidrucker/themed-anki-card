import React from 'react';
import styled from 'styled-components';

const StyledAtomPrompt = styled.span.attrs({
  className: ' ',
})``;

//prompt, instructions, guidance
const AtomPrompt = (props) => (
  <StyledAtomPrompt className={props.classes} lang={props.lang}>
    {props.text}
  </StyledAtomPrompt>
);

export default AtomPrompt;
