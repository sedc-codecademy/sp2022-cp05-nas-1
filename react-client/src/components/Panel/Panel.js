import React from 'react';

import { Container } from './Panel.styles';

function Panel({ children }) {
	return <Container>{children}</Container>;
}

export default Panel;
