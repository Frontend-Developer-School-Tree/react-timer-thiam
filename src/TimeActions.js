import React from 'react'

class TimeAction extends React.Component{
    render() {
        return (
            <button className="TimeAction" onClick={this.props.onClick}>
                {this.props.label}
            </button>
        )
    }
}
class TimeActions extends React.Component{
    
    render() {
        return(
            <div className="TimeActions">
                <button className="Conta" onClick={this.props.conta}>
                SALVA
                </button>
                {this.props.showStart && <TimeAction label="START" onClick={this.props.start} />}
                {this.props.showPause && <TimeAction label="STOP" onClick={this.props.pause} />}
                <TimeAction label="RESET" onClick={this.props.reset} />
            </div>
        )
    }
}

export default TimeActions