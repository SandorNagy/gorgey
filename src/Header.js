import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarToggler,
    Collapse,
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <header>
                <Navbar light expand="md">
                    <NavbarBrand className='brand' href="/">Görgey Artúr Akadémia</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link className='menu-link nav-link' onClick={() => this.props.handleScrollLinkClick('home')} to='/'>
                                    Kezdőlap
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className='menu-link nav-link scroll-link' onClick={() => this.props.handleScrollLinkClick('forus')} to='/'>
                                    Rólunk
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className='menu-link nav-link scroll-link' onClick={() => this.props.handleScrollLinkClick('references')} to='/'>
                                    Referenciák
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className='menu-link nav-link scroll-link' onClick={() => this.props.handleScrollLinkClick('tasks')} to='/'>
                                    Feladatok
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}

export default Header