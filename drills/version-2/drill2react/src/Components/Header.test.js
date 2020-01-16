import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Header from './Header';
import logoImage from '../assets/g-dino.png';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("<Header />", () => {
    it('renders an image', () => {
        const header = shallow(<Header />);

        expect(header.find('img').prop('src')).toEqual(logoImage);
    })
})
