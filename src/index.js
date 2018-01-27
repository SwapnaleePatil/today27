import React from 'react';
import ReactDom from 'react-dom';
import Modal from 'react-modal';
class Hello extends React.Component
{
    constructor(){
        super();
        this.state=({
            isActive:false
        })

    }
    componentWillMount(){
        Modal.setAppElement('body');
    }
    toggleModal=()=> {
        this.setState({
            isActive:!this.state.isActive
        })
    }
    render(){

        return(
            <section>
                <button onClick={this.toggleModal} >Add</button>
                <Modal
                isOpen={this.state.isActive}
                onRequestClose={this.toggleModal}
                >Hello From Modal
                    <button onClick={this.toggleModal} >Hide</button>
                </Modal>

            </section>

        )
    }
}
ReactDom.render(<Hello/>,document.getElementById('root'));