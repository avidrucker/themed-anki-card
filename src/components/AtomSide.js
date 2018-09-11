import React from 'react';
import styled from 'styled-components';

const StyledAtomSide = styled.span.attrs({
  className: '',
})``;

const AtomSide = (props) => (
  <StyledAtomSide className={props.classes} lang={props.lang} >
    {props.text}
  </StyledAtomSide>
);

export default AtomSide;