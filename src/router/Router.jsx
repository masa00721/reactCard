import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Top } from "../components/atoms/pages/Top";
import { Users } from "../components/atoms/pages/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
