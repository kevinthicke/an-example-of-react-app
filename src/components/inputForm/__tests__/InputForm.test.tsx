import * as React from 'react';
import { shallow } from 'enzyme';
import InputForm from '../InputForm';

describe('InputForm', () => {
    describe('render', () => {
        test('Should render an input tag', () => {
            const wrapper = shallow(<InputForm />);
            expect(wrapper.find('input')).toBeTruthy();
        }),
        test('Should render a props.placeholder in placeholder attribute', () => {
            const wrapper = shallow(<InputForm placeholder='placeholder' />);
            expect(wrapper.find('input').props().placeholder).toBe('placeholder');
        }),
        test('Should render an label tag', () => {
            const wrapper = shallow(<InputForm />);
            expect(wrapper.find('label')).toBeTruthy();
        }),
        test('Should render props.label in label tag', () => {
            const labelPropMocked = 'label'

            const wrapper = shallow(<InputForm label={labelPropMocked}/>);
            expect(wrapper.find('label').text()).toBe(labelPropMocked);
        })
    }),
    describe('events', () => {
        test('Should call props.onChange() when input value changes', () => {
            
            const spyFn = jest.fn();
            const event = {
                target: { 
                    value: 'input test'
                },
                
            } 

            const wrapper = shallow(<InputForm onChange={spyFn} />);
            wrapper.find('input').simulate('change', event);
            
            expect(spyFn).toBeCalledWith(event.target.value);
        })
    })
})