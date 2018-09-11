import React from 'react';
import styled from 'styled-components';

const StyledAtomLanguage = styled.span.attrs({
  className: '',
})``;

const AtomLanguage = (props) => (
  <StyledAtomLanguage className={props.classes} lang={props.lang} >
    {props.text}
  </StyledAtomLanguage>
);

export default AtomLanguage;
