import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    return (
        <div>
            <div className="card bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">{name} (ID : {id})</h2>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <div className="card-actions justify-end">
                        {/* <button className="btn">Buy Now</button> */}
                        <Link to={`/user/${id}`}>Show Details</Link >
                    </div>
                </div>
            </div>
        </div >
    );
};
User.propTypes = {
    user: PropTypes.object
};
export default User;