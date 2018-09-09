import React from 'react';
import styled from 'styled-components';

const StyledAtomTranslit = styled.span.attrs({
  className: ' ',
})``;

const AtomTranslit = (props) => (
  <StyledAtomTranslit className={props.classes} lang={props.lang}>
    {`"${props.translit}"`}
  </StyledAtomTranslit>
);

export default AtomTranslit;
