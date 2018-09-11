import React from 'react';
import styled from 'styled-components';

const StyledAtomPrompt = styled.span.attrs({
  className: '',
})``;

const AtomPrompt = (props) => (
  <StyledAtomPrompt className={props.classes} lang={props.lang}>
    {props.prompt}
  </StyledAtomPrompt>
);

export default AtomPrompt;
