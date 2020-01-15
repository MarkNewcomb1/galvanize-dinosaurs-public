import { styled } from 'styletron-react';

const primaryStyles = {
    color: 'darkblue',
};

export const Headline = styled('h3', ({ $injectStyles, $primaryColor }) => ({
    ...$primaryColor ? primaryStyles : {},
    ...$injectStyles || {},
}));

export default {
    Headline,
};
