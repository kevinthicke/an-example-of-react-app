import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { DepartmentModel } from '../../models/department';
import { setActiveDepartmentAction } from '../../store/actions/departmentAction';
import DepartmentActionType from '../../store/actions/index';
import { AppState } from '../../store/states/index';
import InputForm from '../inputForm/InputForm';
import DepartmentListElement from './DepartmentListElement';


interface IDepartmentListProps {
    departments: DepartmentModel[],
    departmentActive: DepartmentModel,
    setActiveDepartment: (department: DepartmentModel) => void;
}


class DepartmentList extends React.Component <IDepartmentListProps, {}> {

    constructor(props: IDepartmentListProps) {
        super(props);

        this.state = { }

        this.handleSelectDepartment = this.handleSelectDepartment.bind(this);
    } 
    
    handleSelectDepartment(department: DepartmentModel): void {
        this.props.setActiveDepartment(department);
    }
    
    render(): JSX.Element {

        const { departments, departmentActive } = this.props;

        return (
            <ul className='list-group'>
                <InputForm label='Departments' />
                {
                    departments.map(department => (
                        <DepartmentListElement
                        key={department.id}
                        department={department} 
                        departmentActiveId={departmentActive.id}
                        selectMe={this.handleSelectDepartment}/>
                    ))
                }    
           </ul>
        );
    }
}

const mapStateToProps = ({ department }: AppState) => ({ 
    departments: department.departaments,
    departmentActive: department.departmentActive
});

const mapDispatchToProps = (dispatch: Dispatch<DepartmentActionType>) => ({
    setActiveDepartment: (department: DepartmentModel) => dispatch(setActiveDepartmentAction(department))
});

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentList);