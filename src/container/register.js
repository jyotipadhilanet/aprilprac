import React,{Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

 class Register extends Component {
    state = {open: false,};
    handleOpen = () => {this.setState({open: true});};
    handleClose = () => {this.setState({open: false});};
    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onClick={this.props.close}
            />,
        ];
        return (
            <div>
                <Dialog
                    title="Dialog With Date Picker"
                    actions={actions}
                    modal={false}
                    open={this.props.open}
                    onRequestClose={this.props.close}
                >
                    Open a Date Picker dialog from within a dialog.
                    <DatePicker hintText="Date Picker" />
                </Dialog>
            </div>
        );
    }
}
export default Register