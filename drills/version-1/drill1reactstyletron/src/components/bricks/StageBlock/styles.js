// Styles for StageBlock
import { styled } from 'styletron-react';

export const Container = styled('div', ({ $flexCenter, $injectStyles, $marginBottom, $marginTop }) => {
    const flexCenter = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    };

    return {
        marginBottom: `${$marginBottom}px`,
        marginTop: `${$marginTop}px`,
        ...$flexCenter ? flexCenter : {},
        ...$injectStyles || {},
    };
});

export default {
    Container,
};
