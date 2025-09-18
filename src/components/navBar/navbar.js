import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min.js';
import { ChangeTheme } from '../../Redux/Actions/ThemeAction.js';
import { changeLang } from '../../Redux/Actions/LangAction.js';

function NavBar(props) {
    const history = useHistory()
    let moviesList = useSelector((state)=>state.heartReducer.movies)
    const lang = useSelector((state)=>state.LangReducer.lang)
    const theme = useSelector((state)=>state.ThemeReducer.theme)
    const themeDispatch = useDispatch()
    const langDispatch = useDispatch()
    function changeTheme()
    {
        themeDispatch(theme ==="light" ? ChangeTheme("Dark") : ChangeTheme("light"))
    }

    function changeLangEvent()
    {
        langDispatch(lang ==="EN" ? changeLang("AR") : changeLang("EN"))
    }
    console.log(history)
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand onClick={() => {
                        history.push("/home")
                    }
                    }>Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => {
                            history.push("/home")
                        }
                        }>Home</Nav.Link>
                        <Nav.Link onClick={() => {
                            history.push("/login")
                        }
                        }>Login</Nav.Link>
                        <Nav.Link onClick={() => {
                            history.push("/signup")
                        }
                        }>Register</Nav.Link>


                        <Nav.Link onClick={() => {
                            history.push("/watchlist")
                        }}>
                            Favorites
                            {moviesList.length > 0 && (
                                <Badge bg="danger" className="ms-1">
                                    {moviesList.length}
                                </Badge>
                            )}
                        </Nav.Link>

                        <Nav.Link onClick={() => {
                            changeTheme()
                        }
                        }>{theme}</Nav.Link>

                        <Nav.Link onClick={() => {
                            changeLangEvent()
                        }
                        }>{lang}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;