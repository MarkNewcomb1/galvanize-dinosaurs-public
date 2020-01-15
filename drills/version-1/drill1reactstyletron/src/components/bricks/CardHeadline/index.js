import React from 'react';
import { Headline } from './styles';

function CardHeadline({ children, primaryColor, injectStyles, ...props }) {
    return (
        <Headline
            $primaryColor={primaryColor}
            $injectStyles={injectStyles}
            {...props}
        >
            {children}
        </Headline>
    );
}

export default CardHeadline;
