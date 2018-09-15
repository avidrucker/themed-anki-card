import React from 'react';
import styled from 'styled-components';

const StyledAtomMeaning = styled.span.attrs({
  className: ' ',
})``;

const AtomMeaning = (props) => (
  <StyledAtomMeaning className={props.classes} lang={props.lang}>
    {(props.intro===0) ? "Meaning: " : ""}{props.meaning}
  </StyledAtomMeaning>
);

export default AtomMeaning;
