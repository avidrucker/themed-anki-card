import React from 'react';
import styled from 'styled-components';

const StyledAtomTranslit = styled.span.attrs({
  className: ' i ',
})``;

const AtomTranslit = (props) => (
  <StyledAtomTranslit className={props.classes}>
    {`"${props.translit}"`}
  </StyledAtomTranslit>
);

export default AtomTranslit;
