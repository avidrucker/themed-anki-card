import React from 'react';
import styled from 'styled-components';

const StyledMoleculeTags = styled.span.attrs({
  className: ' ',
})``;

//categories, tags, metadata
const MoleculeTags = (props) => (
  <StyledMoleculeTags className={props.classes} lang={props.lang}>
		{(props.intro===1) ? "Categories: " : ""}
		{(props.forExport===1) ? "{{Tags}}" : props.text}
  </StyledMoleculeTags>
);

export default MoleculeTags;
