import {useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";

const Create = () => {
    const {data: subdivisions} = useFetch('/api/subdivisions')
    const {data: positions} = useFetch('/api/positions')

    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [subdivisionId, setSubdivisionId] = useState('');
    const [positionId, setPositionId] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [submitName, setSubmitName] = useState('Создать')
    const [submitMethod, setSubmitMethod] = useState('POST')
    const [employeeId, setEmployeeId] = useState(null);
    const [isSubmit, setIsSubmit] = useState(false);
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        if (id) {
            const abortCont = new AbortController();
            fetch('/api/employees/' + id, {signal: abortCont.signal})
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setLastName(data.last_name)
                    setFirstName(data.first_name)
                    setMiddleName(data.middle_name)
                    setSubdivisionId(data.subdivision_id)
                    setPositionId(data.position_id)
                    setPhoneNum(data.phone_num)
                    setSubmitName('Редактировать')
                    setSubmitMethod('PUT')
                    setEmployeeId(id)
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch aborted')
                    } else {
                        console.log(err.message);
                    }
                })
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const employee = {lastName, firstName, middleName, subdivisionId, positionId, phoneNum, employeeId};
        fetch('/api/employees/', {
            method: submitMethod,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(employee)
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="container mw-50">
            <div className="my-4 my-md-5 row align-items-center">
                <div className="col-11">
                    <h1>Создание пользователя</h1>
                </div>
                <div className="col-1">
                    <Link to="/" type="button" className="btn-close float-end" aria-label="Close"></Link>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Фамилия</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className={"form-control " + (isSubmit && !lastName && "is-invalid")}
                            required
                            value={lastName}
                            placeholder="Иванов"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Имя</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className={"form-control " + (isSubmit && !firstName && "is-invalid")}
                            required
                            value={firstName}
                            placeholder="Иван"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Отчество</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            value={middleName}
                            placeholder="Ивановович"
                            onChange={(e) => setMiddleName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Должность</label>
                    <div className="col-sm-10">
                        <select
                            className={"form-control " + (isSubmit && !positionId && "is-invalid")}
                            onChange={(e) => setPositionId(e.target.value)}
                            required
                            value={positionId}
                            id="position">
                            <option value='' disabled> Выберите должность</option>
                            {positions && positions.map(position => (
                                <option key={'pos' + position.id} value={position.id}>{position.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Отдел</label>
                    <div className="col-sm-10">
                        <select
                            className={"form-control " + (isSubmit && !subdivisionId && "is-invalid")}
                            onChange={(e) => setSubdivisionId(e.target.value)}
                            required
                            value={subdivisionId}
                            id="subdivision">
                            <option value='' disabled> Выберите отдел</option>
                            {subdivisions && subdivisions.map(subdivision => (
                                <option key={'sub' + subdivision.id} value={subdivision.id}>{subdivision.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Телефон</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="+7 712 345 67 89"
                            value={phoneNum}
                            onChange={(e) => setPhoneNum(e.target.value)}
                        />
                    </div>
                </div>
                <div className="py-3 my-md-4 row">
                    <div className="col-12 col-md-3 col-lg-2">
                        <button onClick={() => {
                            setIsSubmit(true)
                        }} className="btn btn-primary w-100">{submitName}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Create;