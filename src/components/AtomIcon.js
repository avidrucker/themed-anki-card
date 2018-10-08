import React from 'react';
import styled from 'styled-components';

const StyledAtomIcon = styled.span.attrs({
  className: ' ',
})``;

const AtomIcon = (props) => (
  <StyledAtomIcon className={props.classes} lang={props.lang}>
		<i className={props.iconName} aria-hidden="true"></i>
  </StyledAtomIcon>
);

export default AtomIcon;
