import './Fetch.css';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

type Customer = {
    id: string,
    name: string,
    address: string
}

function Fetch() {
    const [customerList, setCustomerList] = useState<Customer[]>([]);
    const navigate = useNavigate();

    useEffect(() => {

        async function getAllCustomers(){
            const response = await
                fetch('http://localhost:8080/app/customers');
            setCustomerList(await response.json());
        }

        getAllCustomers();

    }, []);

    return (
        <div className='p-2 text-center'>
            <h1>Fetch in Action</h1>
            <table className='table table-hover table-bordered'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>ADDRESS</th>
                </tr>
                </thead>
                <tbody>
                {customerList.map(c => (<tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.name}</td>
                    <td>{c.address}</td>
                </tr>))}
                </tbody>
                {!customerList.length &&
                    (<tfoot>
                    <tr>
                        <td colSpan={3}>No customers found</td>
                    </tr>
                    </tfoot>)
                }
            </table>
            <button onClick={()=>navigate('/main')}>Go Back</button>
        </div>
    );
}

export default Fetch;
