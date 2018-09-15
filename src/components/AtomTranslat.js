import React from 'react';
import styled from 'styled-components';

const StyledAtomTranslat = styled.span.attrs({
  className: ' ',
})``;

const AtomTranslat = (props) => (
  <StyledAtomTranslat className={props.classes} lang={props.lang}>
    {(props.intro===0) ? "Translation: " : ""}{props.translat}
  </StyledAtomTranslat>
);

export default AtomTranslat;
