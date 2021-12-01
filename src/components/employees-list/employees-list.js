import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onIncrease, onRise}) => {
    return (
        <ul className="app-list list-group">
            {data.map(item => {
                const {id, ...itemProps} = item
                return (
                    <EmployeesListItem 
                        key={id} 
                        onDelete={() => onDelete(id)} 
                        onIncrease={() => onIncrease(id)}
                        onRise={() => onRise(id)} 
                        {...itemProps} 
                    />
                )
            })}
        </ul>
    )
}

export default EmployeesList;