import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './../../../Utils';
import Login from './index';

const setUp = (props={}) => {
    const component = shallow(<Login />); 
    return component;
};

describe('Login Component', () => {

    //The shallow render is stored in component.
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors.', () => {
        const wrapper = findByTestAttr(component, 'loginComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo.', () => {
        const wrapper = findByTestAttr(component, 'loginLogo');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a email.', () => {
        const wrapper = findByTestAttr(component, 'loginEmail');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a password.', () => {
        const wrapper = findByTestAttr(component, 'loginPassword');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a submit button.', () => {
        const wrapper = findByTestAttr(component, 'loginSubmit');
        expect(wrapper.length).toBe(1);
    });
});