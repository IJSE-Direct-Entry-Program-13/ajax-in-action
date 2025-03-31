import './Main.css';
import {Link} from "react-router";

function Main() {
    return (
        <div className='text-center'>
        <h1 className='p-2'>Ajax in Action</h1>
            <ul className='list-unstyled'>
                <li className='p-2'><Link to='/xhr'>XmlHttpRequest (XHR) Api</Link></li>
                <li className='p-2'>Fetch Api</li>
                <li className='p-2'>jQuery Ajax Api</li>
                <li className='p-2'>Axios Api</li>
            </ul>
        </div>
    );
}

export default Main;