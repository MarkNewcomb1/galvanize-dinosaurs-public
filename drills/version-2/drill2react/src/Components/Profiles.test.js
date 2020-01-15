import React from 'react';
import Profiles from "./Profiles";
import Enzyme, {render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('There are three profiles', () => {
    const component = render(
        <Profiles
        profiles={[{"name": "T-Rex", "image": "./assets/dino-1.png", "skills": ["stepping on things", "musing on life", "MS Office"]},{"name": "Utahraptor", "image": "./assets/dino3.png", "skills": ["being contrary"]},{"name": "Dromiceiomimus", "image": "./assets/dino-2.png", "skills": ["Java", "Ninja", "MongoDB", "Git and Github", "Agile"]}]
        }
        showSkills={false}
        toggleVisibility={"T-Rex"}
        />
    );

    expect(component).toHaveLength(3);
});
