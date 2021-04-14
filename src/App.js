import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import UpdateProfile from './components/UpdateProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Route path="/dang-nhap">
          <Login />
        </Route>
        <Route path="/dang-ky">
          <Register />
        </Route>
        <Route path="/thong-tin-ca-nhan">
          <UpdateProfile />
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
