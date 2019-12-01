import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { INavBarItem } from '../../models/navBarItem';
import './NavBar.css';

interface INavBarState {
    navBarItems: INavBarItem[],
    navBarItemActive?: INavBarItem
}

export default class NavBar extends Component<any, INavBarState> {
    
    constructor(props: any) {
        super(props);

        this.state = {
            navBarItems: [ 
                { id: 0, name: 'Home', path: '/' },
                { id: 1, name: 'Departments', path: '/departments' },
                { id: 2, name: 'Employees', path: '/employees' }
            ],
            navBarItemActive: undefined 
        }

        this.setNavBarItemActive = this.setNavBarItemActive.bind(this);

    }

    setNavBarItemActive(navBarItem: INavBarItem): void {
        this.setState({
            navBarItemActive: navBarItem
        });
    }

    getNavLinkClassName(navBarItem: INavBarItem): string {
        const { navBarItemActive } = this.state;
        
        return (navBarItem === navBarItemActive) ? 'nav-link active' : 'nav-link';
    }

    render() {

        const { navBarItems } = this.state;

        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
                <div className='navbar-brand'>Organize Your's Employees</div>
                <ul className='navbar-nav ml-auto'>
                    { 
                        navBarItems.map(navBarItem => (
                            <li 
                            className='nav-item' key={navBarItem.id} 
                            onClick={() => this.setNavBarItemActive(navBarItem)}>
                                <Link 
                                to='/departments'
                                className={this.getNavLinkClassName(navBarItem)}>{ navBarItem.name }</Link>
                            </li>
                        )) 
                    }
                </ul>
            </nav>
        );
    }
}

