// Styles for Card
import { styled } from 'styletron-react';

const flexStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 'none',
};

export const CardTop = styled('div', () => ({
    padding: '15px',
}));

const topBorder = {
    borderTop: `1px solid gray`,
};

const flexRow = {
    display: 'flex',
    flexDirection: 'row',
};

const wrap = {
    ...flexRow,
    flexWrap: 'wrap',
};

const shaded = {
    backgroundColor: 'lightgray',
};

export const CardBottom = styled('div', ({ $bottomBorderTop, $bottomFlexRow, $bottomFlexWrap }) => ({
    ...$bottomBorderTop ? topBorder : {},
    ...$bottomFlexRow ? flexRow : {},
    ...$bottomFlexWrap ? wrap : {},
}));

const noSidePaddingValues = `15 0 15 0`;

export const Container = styled('div', ({ $enableHover, $bottomContent, $shaded, $noSidePadding }) => ({
    border: `1px solid gray`,
    backgroundColor: 'white',
    minWidth: '288px',
    width: '80%',
    padding: $noSidePadding ? noSidePaddingValues : '15px',
    borderRadius: '4px',
    minHeight: '100px',
    ...$bottomContent ? flexStyles : {},
    ...$shaded ? shaded : {},
    ...($enableHover
            ? {
                ':hover': {
                    boxShadow: '0 5px 15px 0 rgba(99,115,129,0.35)',
                    cursor: 'pointer',
                },
            }
            : {}
    ),
}));

export default {
    Container,
    CardTop,
    CardBottom,
};
