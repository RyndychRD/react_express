import Table from "./Table";
import useFetch from "./useFetch";
import {useState} from "react";

const Home = () => {
    const [trigger, setTrigger] = useState('');
    const {error, isPending, data: employees} = useFetch('/api/employees/', trigger)
    const updatePage = id => {
        setTrigger(id)
    }
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {employees && <Table employees={employees} updatePage={updatePage}/>}
        </div>
    );
}

export default Home;
