const React = require("react")

class NewDest extends React.Component {
  render() {

    const date = new Date();
    const futureDate = date.getDate() + 365;
    date.setDate(futureDate);
    const defaultValue = date.toLocaleDateString('en-US');
    const { flight } = this.props

    return(
      <div>
        <h1>EDIT DESTINATION</h1>

        <form action={`/flights/${flight._id}`} method="POST" id="destinationForm">
          <label htmlFor="airport">Choose an airport: </label>
            <select id="airport" name="airport" form="destinationForm">
              <option value="SAN">SAN</option>
              <option value="AUS">AUS</option>
              <option value="DAL">DAL</option>
              <option value="LAX">LAX</option>
              <option value="SEA">SEA</option>
            </select> <br />
            Arrival: <input type="datetime-locale" name="arrival" defaultValue={defaultValue} /> <br />
            <input type="submit" value="Add Destination" />
        </form>
        <nav>
          <a href={`/flights/:id/edit`}>Back</a>
        </nav>
      </div>
    )
  }
}

module.exports = NewDest