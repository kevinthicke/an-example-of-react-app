import { DepartmentModel } from '../../models/department';
import { ISetDepartmentActiveAction } from './index';
import { SET_DEPARTMENT_ACTIVE } from '../types/departmentActionTypes';

export const setActiveDepartmentAction = (payload: DepartmentModel): ISetDepartmentActiveAction => {
    console.log(payload);
    return ({
    type: SET_DEPARTMENT_ACTIVE,
    payload
    });
}