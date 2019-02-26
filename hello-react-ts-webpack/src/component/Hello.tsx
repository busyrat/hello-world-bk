import * as React from 'react';

export default class Hello extends React.Component<IProps, any>{
    render() {
        return <div>hello {this.props.name}</div>
    }
}

interface IProps {
    name: string;
}