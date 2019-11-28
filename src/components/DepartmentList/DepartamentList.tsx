import React, { Component } from 'react';
import { IDepartment } from '../../models/department';
import './DepartmentList.css';

interface IListProps {
    departments: IDepartment[],
    loadDepartmentInfo?: (department: IDepartment) => void;
}

interface IListState {
   departmentActive?: IDepartment
}

export default class DepartamentList extends Component<IListProps, IListState> {
    
    constructor(props: IListProps) {
        super(props);

        this.state = { 
            departmentActive: undefined
        };

    }

    setDepartmentActive(department: IDepartment): void {
        this.setState({ departmentActive: department });

        if (this.props.loadDepartmentInfo) {
            this.props.loadDepartmentInfo(department);
        }

    }

    render() {

        const { departments } = this.props;
        const { departmentActive } = this.state;

        return (
            <div>
                <ul className='list-group'>
                    <li className='list-group-item list-group-item-primary'>Departaments</li>
                    {
                        departments.map(department => (
                            <li 
                            key={department.id}
                            className={ (departmentActive === department) ? 'list-group-item active' : 'list-group-item' } 
                            onClick={() => this.setDepartmentActive(department)}>{ department.name }</li>
                        ))
                    }    
                </ul>                
            </div>
        );
    }
}