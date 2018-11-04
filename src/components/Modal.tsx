import * as React from "react";

/*
* Modal props contain the content type and the modal title
* In order to populate the modal you must pass
*/

interface ModalProps {
    title: string;
    modalClass: string;
}

// interface ModalState {

// }

class Modal extends React.Component<ModalProps> {

    constructor(props: ModalProps) {
        super(props);
    }

    render() {
        let children = React.Children.map(this.props.children, function(child: React.ReactChild) {
            return(<li>{child}</li>);
        });
        return (
            <div className={this.props.modalClass}>
                <h1>{this.props.title}</h1>
                <ul>{children}</ul>
            </div>
        );
    }
}

export default Modal;
