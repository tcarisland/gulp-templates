import React from 'react';
import MainMenu from './MainMenu';
import { MainMenuProps } from './MainMenu';
import MainMenuOption from '../enums/MainMenuOption';

export interface AdminWindowProps {
}

export interface AdminWindowState {
    currentView: MainMenuOption
}

class AdminWindow extends React.Component<AdminWindowProps, AdminWindowState> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            currentView: MainMenuOption.UPLOAD
        }
    }
    handleOnMainMenuSwitch(newCurrentView: MainMenuOption) {
        console.log("handleOnMainMenuSwitch called : " + MainMenuOption[newCurrentView]);
        this.setState({currentView: newCurrentView});
    }
    render() {
        return (<div>
            <MainMenu onMainMenuSwitch={this.handleOnMainMenuSwitch}>
            </MainMenu>
            <p>
                { MainMenuOption[this.state.currentView] }
            </p>
        </div>);
    }
}

export default AdminWindow;