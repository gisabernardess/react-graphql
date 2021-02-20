import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { InitialView } from './pages/initial/InitialView';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={InitialView} />
      </Switch>
    </BrowserRouter>
  );
};
