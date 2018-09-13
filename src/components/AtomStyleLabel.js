import React from 'react';
import styled from 'styled-components';

const StyledAtomStyleLabel = styled.label.attrs({
  className: '',
})``;

const AtomStyleLabel = (props) => (
  <StyledAtomStyleLabel className={props.classes} lang={props.lang} >
    {props.text}
  </StyledAtomStyleLabel>
);

export default AtomStyleLabel;
