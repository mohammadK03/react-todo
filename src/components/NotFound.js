import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='d-flex flex-column not-found'>
            <h4>Are you lost?</h4>
            <Link to="/">Home</Link>
        </div>
    );
}
 
export default NotFound;