import { shallow } from 'enzyme';
import * as React from 'react';
import DepartamentList from '../DepartamentList';
import { IDepartment } from '../../../models/department';

const departmentsMocked: IDepartment[] = [
    {
        id: 1,
        name: "Test Department - 1"
    },
    {
        id: 2,
        name: "Test Department - 2"
    }
]

describe('DepartmentList', () => {
    describe('render', () => {
        test('Should render an <ul>', () => {
            const wrapper = shallow(<DepartamentList departments={departmentsMocked} />);
            expect(wrapper.find('ul')).toBeTruthy()
        }),
        // Este test no funciona porque estoy testeando el DOM virtual en vez de el DOM?
        /*  test('First <ul> child must be a <li>', () => {
            const wrapper = shallow(<DepartamentList departments={departmentsMocked} />);
            expect(wrapper.find('ul').children()).('li');
        }), */
        test('<ul> children must has length props.department.length + 1', () => {
            const wrapper = shallow(<DepartamentList departments={departmentsMocked} />);
            expect(wrapper.find('ul').children()).toHaveLength(departmentsMocked.length +1);
        })
    }),
    describe('events', () => {
        test('Should call "loadDepartmentInfo" when department is clicked with value departmentsMocked[0]', () => {
            const spyFn= jest.fn();
            //Deberíamos hacer un bucle aquí ?
            const wrapper = shallow(<DepartamentList departments={departmentsMocked} loadDepartmentInfo={spyFn} />);
            wrapper.find('li').at(1).simulate('click');

            expect(spyFn).toBeCalledWith(departmentsMocked[0]); 
        })
    })
});