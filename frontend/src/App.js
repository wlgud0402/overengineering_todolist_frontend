import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        {/* 로그인 유저 처리를 위한 프라이빗 라우트 */}
        {/* <PrivateRoute exact path="/rooms" component={RoomListPage} /> */}
        <Route path="/header" component={Header} />

        {/* 위에 주소 어디와도 일치하지 않는다면 홈으로 리다이렉트 */}
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
