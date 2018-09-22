import React from 'react';
import styled from 'styled-components';

const StyledAtomAudio = styled.span.attrs({
  className: ' ',
})``;

const AtomAudio = (props) => (
  <StyledAtomAudio className={props.classes} lang={props.lang}>
		{(props.intro===1) ? "Audio: " : ""}
		{(props.forExport===1) ? "{{audio}}" : "▶"}
  </StyledAtomAudio>
);

export default AtomAudio;
