import React from "react";

export interface IBoilingVerdictProps {
    celsius: number // 攝氏溫度
}

export interface IBoilingVerdictStates {

}

export class BoilingVerdict extends React.Component<IBoilingVerdictProps, IBoilingVerdictStates>{
    constructor(props: IBoilingVerdictProps) {
        super(props)
        this.state = {

        }
    }

    render(): React.ReactNode {
        return (
            <div>
                {this.props.celsius >= 100 ?
                    <p>The water would boil.</p> :
                    <p>The water would not boil.</p>}
            </div>
        )
    }
}