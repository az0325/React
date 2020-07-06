import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import history from '../../history'

class Navigation extends Component {

    btnClick = (tabName) => {
        //url 이동
        history.push(`/${tabName}`)

        if (tabName === "link") {
            window.shell.openExternal("https://www.naver.com/")
        } else {
            window.ipcRenderer.send("dialog", tabName === "dialog" ? true : false)
        }
    }

    render() {
        return (
            <div>
                <Button color="default" onClick={() => this.btnClick("home")}>
                    HOME
                </Button>
                <Button color="primary" onClick={() => this.btnClick("starbucks")}>
                    STARBUCKS
                </Button>
                <Button color="secondary" onClick={() => this.btnClick("dialog")}>
                    DIALOG
                </Button>
                <Button color="default" onClick={() => this.btnClick("link")}>
                    LINK
                </Button>
            </div>
        );
    }
}

export default Navigation;