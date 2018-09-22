import React from 'react';
import styled from 'styled-components';

const StyledAtomType = styled.span.attrs({
  className: '',
})``;

const AtomType = (props) => (
  <StyledAtomType className={props.classes} lang={props.lang} >
		{(props.forExport===1) ? "{{Type}}" : props.text}
  </StyledAtomType>
);

export default AtomType;
