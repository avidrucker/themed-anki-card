import React from 'react';
import styled from 'styled-components';

const StyledAtomAudio = styled.span.attrs({
  className: ' f1 ',
})``;

const AtomAudio = (props) => (
  <StyledAtomAudio className={props.classes}>
    {`▶`}
  </StyledAtomAudio>
);

export default AtomAudio;
