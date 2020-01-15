// Component for Card
import React from 'react';
import { Container, CardTop, CardBottom } from './styles';

function Card({
                  children,
                  bottomContent,
                  bottomBorderTop,
                  bottomFlexRow,
                  bottomFlexWrap,
                  enableHover,
                  noSidePadding,
                  shaded,
                  ...props
              }) {
    return (
        <Container
            $enableHover={enableHover}
            $bottomContent={bottomContent}
            $shaded={shaded}
            $noSidePadding={noSidePadding}
            {...props}
        >
            <CardTop>
                {children}
            </CardTop>
            <CardBottom
                $bottomFlexRow={bottomFlexRow}
                $bottomFlexWrap={bottomFlexWrap}
                $bottomBorderTop={bottomBorderTop}
            >
                {bottomContent}
            </CardBottom>
        </Container>
    );
}

export default Card;
