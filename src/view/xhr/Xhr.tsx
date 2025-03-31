import './Xhr.css';
import {useEffect, useState} from "react";

type Customer = {
    id: string,
    name: string,
    address: string
}

function Xhr() {
    const [customerList, setCustomerList] = useState<Customer[]>([])

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('loadend', () => {
            if (xhr.status === 200) {
                setCustomerList(JSON.parse(xhr.responseText));
            }
        });
        xhr.open('GET', 'http://localhost:8080/app/customers', true);
        xhr.send();
    }, []);

    return (
        <div className='p-2 text-center'>
            <h1>Xhr in Action</h1>
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
        </div>
    );
}

export default Xhr;
