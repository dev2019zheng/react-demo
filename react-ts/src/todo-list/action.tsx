import * as React from "react";

interface onAdd {
    (value: string): void
}

interface IProps {
    value: string,
    onAdd: onAdd,
    onChange: onChange
}

interface onChange {
    (index: string): void
}

class Action extends React.Component<IProps, Object>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {
            value,
            onAdd,
            onChange
        } = this.props;
        return (
            <div>
                <input value={value} onChange={(e) => {
                    onChange(e.target.value)
                }}/>
                <button onClick={(e) => {
                    onAdd(value)
                }}>add</button>
            </div>
        )
    }
}


export default Action
