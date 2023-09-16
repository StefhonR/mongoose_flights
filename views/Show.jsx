const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

class Show extends React.Component {
    render() {
        const { flight } = this.props
        return(
            <div>
                <h1 style={myStyle}>Flight Info</h1>
                <h2>Flight #{flight.flightNum}</h2>
                <h3>Airline: {flight.airline}</h3>
                <h3>Departure Airport: {flight.airport}</h3>
                <h3>Departure Date & Time: {flight.departs.toLocaleString()}</h3>
                <nav>
                    <a href='/flights'>back</a> &emsp; <a href={`/flights/${flight._id}/edit`}>EDIT DESTINATION</a>
                </nav> 
            </div>
            )
    }
}

module.exports = Show