/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";

export interface ITempertureProps {
    scale: string,
    temperture: string,
    onTempertureChange: any,
}

export interface ITempertureStates {
}

const scaleNames = {
    c: 'Celsius', // 攝氏
    f: 'Fahrenheit' // 華氏
}

export class TempertureInput extends React.Component<ITempertureProps, ITempertureStates>{
    constructor(props: ITempertureProps) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
        }
    }

    handleChange(e: any) {
        this.props.onTempertureChange(e.target.value)
    }

    render(): React.ReactNode {
        const { temperture } = this.props
        const scale = this.props.scale === 'c' ? scaleNames.c : scaleNames.f;

        return (
            <fieldset>
                <legend>Enter temperture in {scale}:</legend>
                <input value={temperture}
                    onChange={this.handleChange} />
            </fieldset>
        )
    }
}