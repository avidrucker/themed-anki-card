import React from 'react';
import styled from 'styled-components';

const StyledAtomTranslat = styled.span.attrs({
  className: ' ',
})``;

const AtomTranslat = (props) => (
  <StyledAtomTranslat className={props.classes}>
    {props.translat}
  </StyledAtomTranslat>
);

export default AtomTranslat;
