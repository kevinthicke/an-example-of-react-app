import { DepartmentModel } from '../../models/department';

interface Action {
    type: string
}

export interface ISetDepartmentActiveAction extends Action {
    payload: DepartmentModel
}

type DepartmentActionType = ISetDepartmentActiveAction;

export default DepartmentActionType;