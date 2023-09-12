import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/argentBankLogo.png"
import "./style.scss"
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setToken, setUser } from "../../redux/actions/userActions";


function Header() {

    const isLogged = useSelector((state) => state.user.isLogin)
    let logOption = null;
    const dispatch = useDispatch();
    const navigate = useNavigate();

     const logout = () => {
        dispatch(setLogin(false));
        dispatch(setToken(null));
        dispatch(setUser(null));
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
            <button className="main-nav-item btn-logout" onClick={logout}>
                <i className="fa fa-user-circle"></i>
                    Logout
            </button>
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