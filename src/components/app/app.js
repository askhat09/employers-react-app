import {useState} from 'react'

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

  const data = [
    {id: 1, name: 'John', salary: 1000, increase: true, rise: false},
    {id: 2, name: 'Holand', salary: 3000, increase: false, rise: true},
    {id: 3, name: 'Smith', salary: 2000, increase: false, rise: false}
  ];

  const [key, setKey] = useState(4)

  const [listData, setListData] = useState(data)

  const onDelete = (id) => {
    setListData(listData.filter(item => item.id !== id))
  }

  const onIncrease = (id) => {
    setListData(listData.map(item => {
      if (item.id === id) {
        return {...item, increase: !item.increase}
      }
      return item
    }))
  }

  const onRise = (id) => {
    setListData(listData.map(item => {
      if (item.id === id) {
        return {...item, rise: !item.rise}
      }
      return item
    }))
  }

  const onAdd = (name, salary) => {
    const newEmployer = {
      name: name,
      salary: salary,
      increase: false,
      rise: false,
      id: key
    }

    setKey(key+1)

    setListData([...listData, newEmployer])
  }

  return (
    <div className="app">
        <AppInfo data={listData}/>

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList 
          data={listData} 
          onDelete={onDelete}
          onIncrease={onIncrease}
          onRise={onRise}
        />
        <EmployeesAddForm onAdd={onAdd}/>
    </div>
  );
}

export default App;
