import React from 'react';
import styled from 'styled-components';

const StyledAtomReading = styled.span.attrs({
  className: ' f2 ',
})``;

const AtomReading = (props) => (
  <StyledAtomReading className={props.classes}>
    {props.reading}
  </StyledAtomReading>
);

export default AtomReading;
