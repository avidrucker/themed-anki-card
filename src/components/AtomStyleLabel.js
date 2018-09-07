import React from 'react';
import styled from 'styled-components';

const StyledAtomStyleLabel = styled.span.attrs({
  className: '',
})``;

const AtomStyleLabel = (props) => (
  <StyledAtomStyleLabel className={props.classes} lang="en">
    {props.text}
  </StyledAtomStyleLabel>
);

export default AtomStyleLabel;
