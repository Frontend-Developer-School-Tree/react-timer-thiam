import React from 'react'

class TimeViewer extends React.Component{

    getMinutes() {
        return Math.floor(this.props.value / 60)
    }
    
    getSeconds() {
        return this.props.value % 60 //setta 1 minuti quando i secondi sono multiplo di 60
    }
    
    render() {

        const seconds = this.getSeconds()
        const minutes = this.getMinutes()

        return(
            <div className="TimeViewer">
                <h1 className="TimeViewerValue" style={{ fontSize: this.props.small ? 20 : 50}}>
                    {minutes}m - {seconds}s
                </h1>
            </div>
        )
    }
}

export default TimeViewer