import "./TopCustomers.scss";
import {users} from "../../assets/dummyData";
function TopCustomers() {
    return <div className="topCustomers">
        <h3 className="topCustomers_title">Top Customers</h3>
        <div className="userList">
            {users.map((user, key)=> {
                return (
                    <div key={key}>
                    <div className="user">
                        <div className="user_info">
                        <img src={user.avatar_url} alt="user_avatar" />
                        <div className="username_email">
                            <span>{user.username}</span>
                            <span>{user.email}</span>
                        </div>
                        </div>
                        <div className="amount">$&nbsp;{user.amount}</div>
                    </div>
                    </div>
                )
            })}
        </div>
    </div>
}

export default TopCustomers;