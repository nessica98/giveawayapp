import React , {Component} from 'react';
import PropTypes from 'prop-types';

class ModalB extends Component {
    constructor(props){
        super(props)
        this.state = {show:this.props.show ,data:this.props.data}
    }
    
    render() {
        console.log(this.state.data)
        if(!this.props.show){
            return null;
        }
        // The gray background
        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0)',
            padding: 50
        };
    
        // The modal "window"
        const modalStyle = {
            
            backgroundColor: '#ddd',
            borderRadius: 5,
            maxWidth: 500,
            minHeight: 300,
            margin: '0 auto',
            padding: 30
        };
    console.log(this.state.data)
        return (<div>
                <div style = {backdropStyle} >
                    <div style = {modalStyle}>
                        <p>{this.state.data.giveawayname}</p>
                    </div>
                </div>
            </div>
        );
    }
}
/*
Modal.PropTypes = {
    show: PropTypes.bool,
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired
};*/

export default ModalB
