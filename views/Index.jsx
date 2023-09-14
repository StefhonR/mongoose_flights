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
            console.dir(flight.departs)
            return (
              <li key={i}>
                <a href={`/flights/${flight._id}`}>
                  {flight.airline.charAt(0).toUpperCase() + flight.airline.slice(1)}#{flight.flightNum}
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