import React from 'react';
import styled from 'styled-components';

const StyledAtomTranslit = styled.span.attrs({
  className: ' ',
})``;

const AtomTranslit = (props) => (
  <StyledAtomTranslit className={props.classes} lang={props.lang}>
		{(props.intro===1) ? <span className="o-50">{`Transliteration: `}</span> : ""}
		{(props.forExport===1) ? "{{translit}}" : props.text}
  </StyledAtomTranslit>
);

export default AtomTranslit;