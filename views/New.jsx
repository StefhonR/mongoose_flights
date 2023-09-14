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
        

        <form action="/flights" method="POST">
          Airline: <input type="text"  name="airline" /> <br />
          Flight Number: <input type="text" name="flightNum" /> <br />
          Departure: <input type="datetime-locale" name="departs" defaultValue={defaultValue} />
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