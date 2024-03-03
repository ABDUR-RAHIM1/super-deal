import Spinner from 'react-bootstrap/Spinner';
import './Spinner.css'

function Loading() {

    return (
        <div className='spinnerContainer'>
            <Spinner animation="border text-danger" role="status" >
                <span className="visually-hidden ">Loading...</span>
            </Spinner>
        </div>

    );
}

export default Loading;