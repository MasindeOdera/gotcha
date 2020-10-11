import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './../../../Utils';
import Header from './index';

const setUp = (props={}) => {
    const component = shallow(<Header />); 
    return component;
};

// const setUp = (initialState={}) => {
//     const store = testStore(initialState);
//     const component = shallow(<Header store={store} />).childAt(0).dive();
//     return component;
// };

describe('Header Component', () => {

    //The shallow render is stored in component.
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors.', () => {
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo.', () => {
        const wrapper = findByTestAttr(component, 'headerLogo');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a email.', () => {
        const wrapper = findByTestAttr(component, 'headerCompanyName');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a password.', () => {
        const wrapper = findByTestAttr(component, 'logout');
        expect(wrapper.length).toBe(1);
    });

});