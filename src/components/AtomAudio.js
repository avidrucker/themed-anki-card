import React from 'react';
import styled from 'styled-components';

const StyledAtomAudio = styled.span.attrs({
  className: ' ',
})``;

const AtomAudio = (props) => (
  <StyledAtomAudio className={props.classes} lang={props.lang}>
    {(props.intro===0) ? "Audio: " : ""}{`▶`}
  </StyledAtomAudio>
);

export default AtomAudio;
