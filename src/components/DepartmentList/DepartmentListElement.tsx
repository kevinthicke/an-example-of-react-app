import React from 'react';
import { DepartmentModel } from '../../models/department';
import './styles/departmentListElement.css';

interface IDepartmentListElementProps {
    department: DepartmentModel,
    departmentActiveId?: number,
    selectMe: (department: DepartmentModel) => void;
}

const DepartmentListElement: React.SFC<IDepartmentListElementProps> = ({ department, departmentActiveId, selectMe }) => {

    const { id, name } = department;
    const className = (departmentActiveId === id) ? 'list-group-item active' : 'list-group-item'
    
    return (
        <li
        className={className} 
        onClick={() => selectMe(department)}>
            { department.name }
        </li>
    );

}

export default DepartmentListElement;