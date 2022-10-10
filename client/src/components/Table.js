import {Link} from 'react-router-dom';

const Table = ({employees,updatePage}) => {
    const handleDelete = (id) => {
        fetch('/api/employees/'+id, {
            method: 'DELETE',
        }).then(() => {
            updatePage(id)
        })
    }

    return (
        <div className="container">
            <div className="py-4 d-flex justify-content-between align-items-center sticky-top bg-white">
                <h1>Список пользователей</h1>
            </div>

            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                    <tr className="bg-lightgray font-size-16">
                        <td>ID</td>
                        <td>Фамилия</td>
                        <td>Имя</td>
                        <td>Отчество</td>
                        <td>Отдел</td>
                        <td>Должность</td>
                        <td>Телефон</td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody>
                    {employees && employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.last_name}</td>
                            <td>{employee.first_name}</td>
                            <td>{employee.middle_name}</td>
                            <td>{employee.subdivision_name}</td>
                            <td>{employee.position_name}</td>
                            <td>{employee.phone_num}</td>
                            <td className="w-0">
                                <div className="d-inline-flex">
                                    <Link className="btn btn-sm btn-success mx-1" to={'/edit/'+employee.id}>
                                        Редактировать
                                    </Link>
                                    <button type="button" onClick={() => {
                                        handleDelete(employee.id)
                                    }} className="btn btn-sm btn-danger mx-1">Удалить
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;