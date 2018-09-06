import React from 'react';
import styled from 'styled-components';

const StyledAtomTranslat = styled.span.attrs({
  className: 'f2',
})``;

const AtomTranslat = (props) => (
  <StyledAtomTranslat className={props.classes}>
    {props.translat}
  </StyledAtomTranslat>
);

export default AtomTranslat;
