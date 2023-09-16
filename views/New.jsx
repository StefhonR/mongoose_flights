const React = require("react")

class New extends React.Component {
  render() {

    const date = new Date();
    const futureDate = date.getDate() + 365;
    date.setDate(futureDate);
    const defaultValue = date.toLocaleDateString('en-US');

    return (
      <div>
        <h1>ADD FLIGHT</h1>
        

        <form action="/flights" method="POST" id="flightForm">
          Airline: <input type="text"  name="airline" /> <br />
          Flight Number: <input type="text" name="flightNum" /> <br />
          Departure: <input type="datetime-locale" name="departs" defaultValue={defaultValue} /> <br />
          <label htmlFor="airport">Choose an airport: </label>
          <select id="airport" name="airport" form="flightForm">
            <option value="SAN">SAN</option>
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SEA">SEA</option>
          </select> <br />
          <input type="submit" value="Add Flight" />
        </form>
        <nav>
          <a href="/flights">Back</a>
        </nav>
      </div>
    )
  }
}

module.exports = New