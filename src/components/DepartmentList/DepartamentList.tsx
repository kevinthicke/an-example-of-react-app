import React from 'react';
import { DepartmentModel } from '../../models/department';
import InputForm from '../inputForm/InputForm';
import DepartmentListElement from './DepartmentListElement';

interface IDepartmentListProps {
    departments: DepartmentModel[],
    activeDepartment: DepartmentModel,
    onChangeInputForm: (departmentName: string) => void;
    selectDepartment: (department: DepartmentModel) => void;
}

const DepartmentList: React.SFC<IDepartmentListProps> = props => {

    const { 
        departments, activeDepartment,  
        onChangeInputForm, selectDepartment 
    } = props;
    
    return (
        <ul className='list-group'>
            <InputForm
                label='Departments'
                placeholder='Search for department'
                onChange={(e) => onChangeInputForm(e)} />
            {
                departments.map(department => (
                    <DepartmentListElement
                    key={department.id}
                    department={department}
                    departmentActiveId={activeDepartment.id}
                    selectMe={() => selectDepartment(department)} />
                ))
            }
        </ul>
    );
}

export default DepartmentList;