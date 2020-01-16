import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Header from './Header';
import logoImage from '../assets/g-dino.png';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("<Header />", () => {
    it('renders an image', () => {
        const header = shallow(<Header />);
        // shallow is returning an object, which you’re assigning to the var header.
        // the methods on that object like find and prop come from shallow(),
        // which comes in from enzyme
        // Enzyme shallow methods: https://airbnb.io/enzyme/docs/api/shallow.html
        expect(header.find('img').prop('src')).toEqual(logoImage);
    })
})
