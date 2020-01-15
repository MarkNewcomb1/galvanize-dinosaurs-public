// Component for StageBlock
import React from 'react';
import { Container } from './styles';

function StageBlock({ children, flexCenter, injectStyles, marginBottom, marginTop, ...props }) {
    return (
        <Container
            $injectStyles={injectStyles}
            $marginTop={marginTop}
            $marginBottom={marginBottom}
            $flexCenter={flexCenter}
            {...props}
        >
            {children}
        </Container>
    );
}

StageBlock.defaultProps = {
    marginBottom: 10,
    marginTop: 15,
};

export default StageBlock;
