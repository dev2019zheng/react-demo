import * as React from "react";

interface IProps {
    name: string
}

interface IState {
    value: string
}

class App extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            value: 'test'
        }
    }
    render() {
        const {
            name
        } = this.props
        const {
            value
        } = this.state
        return (
            <div>
                {name}
                <br/>
                {value}
                <br/>
                <input value={this.state.value} onChange={(e) => {
                    this.setState({
                        value: e.target.value
                    })
                }}/>
                <br/>
                <button onClick={(e) => {
                    alert('hello')
                }} >点击我</button>
            </div>
        )
    }

    public componentDidMount(): void {
        console.log('mounted...')
    }
}

export default App
