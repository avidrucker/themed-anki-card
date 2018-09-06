import React from 'react';
import styled from 'styled-components';

const StyledMoleculeTags = styled.span.attrs({
  className: ' ',
})``;

const MoleculeTags = (props) => (
  <StyledMoleculeTags className={props.classes}>
    {props.tags}
  </StyledMoleculeTags>
);

export default MoleculeTags;
