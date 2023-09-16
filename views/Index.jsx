const React = require('react')

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
  }

class Index extends React.Component {
  render() {
    const { flights } = this.props
    return(
      <div>
        <h1 style={myStyle}>Flight List</h1>
        <nav>
          <a href="/flights/new">Add a Flight</a>
        </nav>
        <ul>
        {
          flights.map((flight, i) => {
            return (
              <li key={i}>
                {flight.airline.charAt(0).toUpperCase() + flight.airline.slice(1)} #{flight.flightNum} {" "}
                <a href={`/flights/${flight._id}`}>
                  details
                </a>
                <p>
                {flight.departs.toLocaleString()}
                </p>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}

module.exports = Index