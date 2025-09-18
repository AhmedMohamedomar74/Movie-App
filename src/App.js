import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js';
import Home from './components/home/home.js';
import EmailFormCompnent from './components/login/login.js';
import RegisterFormCompnent from './components/register/register.js';
import NavBar from './components/navBar/navbar.js';
import MovieDetails from './components/movieDetails/movieDetails.js';
import { Provider, useSelector } from 'react-redux';
import { myStore } from './Redux/store.js';
import WatchList from './components/watchlist/home.js';
function App() {
  const lang = useSelector((state) => state.LangReducer.lang)
  const theme = useSelector((state) => state.ThemeReducer.theme)
  return (
    <>


      <div dir={lang == "EN" ? "ltr" : "rtl"}
        className={`${theme == "light" ? "bg-light text-dark" : "bg-dark text-light"} min-vh-100`}>
        <BrowserRouter>
          <NavBar></NavBar>
          <Switch>
            <Route path="/home" component={Home} exact></Route>
            <Route path="/watchlist" component={WatchList} exact></Route>
            <Route path="/login" component={EmailFormCompnent} exact></Route>
            <Route path="/signup" component={RegisterFormCompnent} exact></Route>
            <Route path="/movie-details/:id" component={MovieDetails} exact></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;


// import React, { useState } from 'react';
// import PaginationComponent from './components/pagination/pagination.js';

// const App = () => {
//   const [activePage, setActivePage] = useState(2);

//   const handlePageChange = (pageNumber) => {
//     setActivePage(pageNumber);
//   };

//   return (
//     <div>
//       <h1>Sample Page Content</h1>
//       <p>This is a sample page to demonstrate pagination.</p>
//       <PaginationComponent
//         totalPages={5}
//         activePage={activePage}
//         onPageChange={handlePageChange}
//         size="md"
//       />
//       {/* <br />
//       <PaginationComponent
//         totalPages={5}
//         activePage={activePage}
//         onPageChange={handlePageChange}
//         size="lg"
//       />
//       <br />
//       <PaginationComponent
//         totalPages={5}
//         activePage={activePage}
//         onPageChange={handlePageChange}
//         size="sm"
//       /> */}
//     </div>
//   );
// };

// export default App;