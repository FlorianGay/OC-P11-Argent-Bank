import "./style.scss"
import EditInfo from "../editInformation";
import { useState } from "react";
import { useSelector } from "react-redux";

function Welcome() {

    const [startEdit, setStartEdit] = useState(false);
    const nameUser = useSelector((state) => state.user.dataUser.userName)


    return (
        <div className="header">
            {startEdit ? (
                <EditInfo setStartEdit={setStartEdit} />
            ) : (
                <>
                    <h1>Welcome back <br />{nameUser}</h1>
                    <button className="edit-button" onClick={() => setStartEdit(true)}>Edit Name</button>
                </>
            )}
        </div>
    )
}

export default Welcome;