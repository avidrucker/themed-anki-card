import React from 'react';
import styled from 'styled-components';

const StyledAtomReading = styled.span.attrs({
  className: ' ',
})``;

const AtomReading = (props) => (
  <StyledAtomReading className={props.classes}>
    {props.reading}
  </StyledAtomReading>
);

export default AtomReading;
