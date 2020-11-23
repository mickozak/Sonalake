import React from 'react';

import {Provider} from 'react-redux';
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from './components/AppNavbar';
import UsersList from './components/UserList';

import FormTask from './tasks/form-task/FormTask';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <AppNavbar/>
            <Container>
                <UsersList/>
                <FormTask />
            </Container>
        </Provider>
    );
}

export default App;
