import * as React from "react";

/*
* Modal props contain the content type and the modal title
* In order to populate the modal you must pass 
*/

interface ModalProps {
    title: string;
    modalClass: string;
    listClass: string;
    titleClass: string;
}

interface ModalState {

}

class Modal extends React.Component<ModalProps, ModalState> {

    Render() {
        let children = React.Children.map(this.props.children, function(child: React.ReactChild) {
            return(<li>{child}</li>);
        });
        return (
            <div className={this.props.modalClass}>
                <h1 className={this.props.titleClass}>{this.props.title}</h1>
                <ul className={this.props.listClass}>{children}</ul>
            </div>
        );
    }
}

export default Modal;