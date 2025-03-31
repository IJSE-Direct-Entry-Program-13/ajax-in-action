import './JqueryAjax.css';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import $ from 'jquery';

type Customer = {
    id: string,
    name: string,
    address: string
}

function JqueryAjax() {
    const [customerList, setCustomerList] = useState<Customer[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getAllCustomers() {
            setCustomerList(await $.ajax('http://localhost:8080/app/customers'));
        }

        getAllCustomers();
    }, []);

    async function deleteCustomer(id: string) {
        try {
            await $.ajax(`http://localhost:8080/app/customers/${+id.replace('C', '')}`, {method: 'DELETE'});
            setCustomerList(customerList.filter(c => c.id !== id));
        }catch(e){
            alert("Failed to delete the customer");
            console.log(e);
        }
    }

    return (
        <div className='p-2 text-center'>
            <h1>jQuery Ajax in Action</h1>
            <table className='table table-hover table-bordered'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>ADDRESS</th>
                    <th>DELETE</th>
                </tr>
                </thead>
                <tbody>
                {customerList.map(c => (<tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.name}</td>
                    <td>{c.address}</td>
                    <td><i onClick={() => deleteCustomer(c.id)} className='bi bi-trash fs-3'></i></td>
                </tr>))}
                </tbody>
                {!customerList.length &&
                    (<tfoot>
                    <tr>
                        <td colSpan={4}>No customers found</td>
                    </tr>
                    </tfoot>)
                }
            </table>
            <button onClick={() => navigate('/main')}>Go Back</button>
        </div>
    );
}

export default JqueryAjax;
