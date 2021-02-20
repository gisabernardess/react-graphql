import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};
