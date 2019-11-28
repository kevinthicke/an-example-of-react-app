import React, { Component } from 'react';

interface IInputFormProps {
    label?: string,
    onChange?: (value: string) => void
}

export default class InputForm extends Component <IInputFormProps, {}> {

    constructor(props: IInputFormProps) {
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);
    }
 
    handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {

        if (this.props.onChange) {
            this.props.onChange(event.target.value);            
        }

    }

    render() {

        const { label } = this.props;

        return (
            <div>
                <label id='input'>{ label }</label>
                <input type='text' onChange={this.handleOnChange}/>
            </div>
        );
    }
}