import React from 'react';
import styled from 'styled-components';

const StyledMoleculeTags = styled.span.attrs({
  className: ' ',
})``;

//categories, tags, metadata
const MoleculeTags = (props) => (
  <StyledMoleculeTags className={props.classes} lang={props.lang}>
    {(props.intro===0) ? "Categories: " : ""}{props.tags}
  </StyledMoleculeTags>
);

export default MoleculeTags;
