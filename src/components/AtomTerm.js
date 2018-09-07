import React from 'react';
import styled from 'styled-components';

const StyledAtomTerm = styled.span.attrs({
  className: '',
})``;

const AtomTerm = (props) => (
  <StyledAtomTerm className={props.classes} lang={props.lang}>
    {props.term}
  </StyledAtomTerm>
);

export default AtomTerm;