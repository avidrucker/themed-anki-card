import React from 'react';
import styled from 'styled-components';

const StyledAtomTranslat = styled.span.attrs({
  className: ' ',
})``;

const AtomTranslat = (props) => (
  <StyledAtomTranslat className={props.classes} lang={props.lang}>
		{(props.intro===1) ? <span className="o-50">{`Translation: `}</span> : ""}
		{(props.forExport===1) ? "{{translat}}" : props.text}
  </StyledAtomTranslat>
);

export default AtomTranslat;
