import React from 'react'

class Title extends React.Component{
    
    render() {
        return(
            <div className="Title">
                <h2 className="TItleMain">{this.props.main}</h2>
            </div>
        )
    }
}

export default Title