import React from 'react';
import { Nav } from 'react-bootstrap';
import "../App.css";
import MainMenuOption from '../enums/MainMenuOption';

export interface MainMenuProps {
    onMainMenuSwitch: Function
}

class MainMenu extends React.Component<MainMenuProps> {
    onSwitchMenu(menuOption: MainMenuOption) {
        this.props.onMainMenuSwitch(menuOption);
    }
    render() {
        return (
            <div>
                <Nav className="navbar-inverse" justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item onClick={() => this.onSwitchMenu(MainMenuOption.EDIT)}>
                    Edit
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => this.onSwitchMenu(MainMenuOption.LIST)}>List</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => this.onSwitchMenu(MainMenuOption.REMOVE)}>Remove</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => this.onSwitchMenu(MainMenuOption.UPLOAD)}> Upload </Nav.Link>
                </Nav.Item>
                </Nav>
            </div>
        );
    }
}

export default MainMenu;