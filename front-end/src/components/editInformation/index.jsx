import { useState } from "react";
import { userEditProfile } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import './style.scss'
import { setUser } from "../../redux/actions/userActions";

function EditInfo ({setStartEdit}) {
    
    const [username, getUsernameChange] = useState('');
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token)
    const nameUser = useSelector((state) => state.user.dataUser.userName)
    const firstName = useSelector((state) => state.user.dataUser.firstName)
    const lastName = useSelector((state) => state.user.dataUser.lastName)

    async function onSave(e) {
        e.preventDefault();
        console.log(token)
        try {
            const response = await userEditProfile(
                 token,
                 username,
            )
            console.log(response);
            if (response.status === 200) {
                dispatch(setUser(response.body))
                setStartEdit(false);
                console.log(username)
            }
        }
        catch(error) {
            console.log(error)
        }
    }
    function cancel(e) {
        e.preventDefault();
        setStartEdit(false);
    }

    return (
        <form className="form-edit"> 
            <h2>Edit user info</h2>
            <div className="input-edit">
                <label htmlFor="username">User name :</label>
                <input type="text" id="username" onChange={(e) => getUsernameChange(e.target.value)} required placeholder={nameUser}/>
            </div>
            <div className="input-edit">
                <label htmlFor="firstname">First name :</label>
                <input type="text" id="firstname" disabled placeholder={firstName}/>
            </div>
            <div className="input-edit">
                <label htmlFor="lastname">Last name :</label>
                <input type="text" id="lastname" disabled placeholder={lastName}/>
            </div>
            <div className="btn-edit">
                <button onClick={onSave}>Save</button>
                <button onClick={cancel}>Cancel</button>
            </div>
            
        </form>
    )
}

export default EditInfo;