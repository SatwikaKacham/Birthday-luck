import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var sum = 0;
  var [lucky, setlucky] = useState(0);
  var [date, setDate] = useState("");
  var [print, setPrint] = useState("");

  console.log(lucky);
  console.log(date);
  var dateArray = date.split("-");
  var intDate = dateArray.map((i) => Number(i));
  for (var i = 0; i < 3; i++) {
    sum += intDate[i];
  }
  // const truth=(sum % lucky === 0;
  // const ans=truth? "hey!! your birth Day is lucky💓✨":"Your birth Day is unlucky"
  // setDate(ans);

  // if (sum % lucky === 0) {
  //   setPrint("hey!! your birth Day is lucky💓✨");
  // } else {
  //   setPrint("Your birth Day is unlucky");
  // }
  console.log(print);
  return (
    <div className="App">
      <div className="total">
        <h1 className="header">Enter your birthday date and number </h1>
        <h2>Pick ur birthday date:</h2>
        <input
          type="date"
          className="inputDate"
          onChange={(event) => setDate(event.target.value)}
        />
        <h2>Enter your lucky number:</h2>
        <input
          type="number"
          className="inputLucky"
          onChange={(event) => setlucky(event.target.value)}
        />
        {/* <div>{date}</div> */}
        <div>{print}</div>
      </div>
    </div>
  );
}
