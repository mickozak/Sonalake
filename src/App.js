import React from 'react';

import {Provider} from 'react-redux';
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from './components/AppNavbar';
import UsersList from './components/UserList';

import FormTaskComplete from './tasks/form-task/FormTaskComplete/FormTaskComplete';
import store from './store';
//import FormTask from './tasks/form-task/FormTask';

const App = () => {
    return (
        <Provider store={store}>
            <AppNavbar/>
            <Container>
                <UsersList/>
                <FormTaskComplete />
            </Container>
            {/* <FormTask/> */}
        </Provider>
    );
}

export default App;
