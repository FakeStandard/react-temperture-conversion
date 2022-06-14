import React from "react";
import { BoilingVerdict } from "./BoilingVerdict";
import { TempertureInput } from "./TempertureInput";
import './Calculator.css';

export interface ICalculatorProps {
}

export interface ICalculatorStates {
    temperture: string,
    scale: string,
}

function toCelsius(fahrenheit: any) {
    return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius: any) {
    return (celsius * 9 / 5) + 32
}

function tryConvert(temperture: any, convert: any) {
    const input = parseFloat(temperture)
    if (Number(isNaN(input)))
        return ''

    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000

    return rounded.toString()
}

export class Calculator extends React.Component<ICalculatorProps, ICalculatorStates>{
    constructor(props: ICalculatorProps) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
        this.state = {
            temperture: '',
            scale: '',
        }
    }

    handleCelsiusChange(temperture: any) {
        this.setState({ scale: 'c', temperture })
    }

    handleFahrenheitChange(temperture: any) {
        this.setState({ scale: 'f', temperture })
    }

    render(): React.ReactNode {
        const { scale, temperture } = this.state;

        const celsius = scale === 'f' ? tryConvert(temperture, toCelsius) : temperture
        const fahrenheit = scale === 'c' ? tryConvert(temperture, toFahrenheit) : temperture

        return (
            <div className="Calculator">
                <div>
                    <TempertureInput
                        scale="c"
                        temperture={celsius}
                        onTempertureChange={this.handleCelsiusChange} />
                    <TempertureInput
                        scale="f"
                        temperture={fahrenheit}
                        onTempertureChange={this.handleFahrenheitChange} />
                    <BoilingVerdict celsius={parseFloat(celsius)} />
                </div>
            </div>
        )
    }
}