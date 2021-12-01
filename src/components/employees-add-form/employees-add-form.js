import { useState } from 'react'
import './employees-add-form.css';

const EmployeesAddForm = ({onAdd}) => {

    const [name, setName] = useState('')
    const [salary, setSalary] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(name, salary);
        setName('')
        setSalary('')
    }
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                onSubmit={onSubmit}
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" 
                    onChange={(e) => setName(e.target.value)}
                    name='name'
                    value={name}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" 
                    onChange={(e) => setSalary(e.target.value)}
                    name='salary'
                    value={salary}/>

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;