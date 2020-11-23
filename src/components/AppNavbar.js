import React from 'react';
import{
    Navbar,
    NavbarBrand,
    Container
} from 'reactstrap';

const AppNavbar = () => {
        return(
        <div>
            <Navbar color="primary" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">
                        SONALAKE - USER FORM
                    </NavbarBrand>
                </Container>
            </Navbar>
        </div>
        );
}

export default AppNavbar;