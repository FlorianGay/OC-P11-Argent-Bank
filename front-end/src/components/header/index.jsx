import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/argentBankLogo.webp"
import "./style.scss"
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setToken, setUser } from "../../redux/actions/userActions";


function Header() {

    const isLogged = useSelector((state) => state.user.isLogin)
    const nameUser = useSelector((state) => state.user.dataUser.userName)
    let logOption = null;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

     const logout = () => {
        dispatch(setLogin(false));
        dispatch(setToken(null));
        dispatch(setUser(''));
        navigate("/");
    }

    if (isLogged === false ) {
        logOption = 
            <Link to="/login" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                    Sign In 
            </Link>
    }

    if (isLogged === true) {
        logOption =
            <div>
                <Link to="/userLog" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    <span className="main-nav-name">{nameUser}</span>
                </Link>
                <Link to="/">
                    <button className="main-nav-item btn-logout" onClick={logout}>
                        <i class="fa fa-sign-out"></i>
                        Logout
                    </button>
                </Link>
                
            </div>
    }

    return (
        <header>
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo">
                    <img src={Logo} alt="Argent Bank Logo" className="main-nav-logo-image" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                    {logOption}
            </nav>
        </header>
    )
}

export default Header;