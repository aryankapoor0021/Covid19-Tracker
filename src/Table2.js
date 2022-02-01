import React from "react";
import "./Table2.css";
import numeral from "numeral";

function Table2({ countries}) {
  return (
    <div className="table">
      {countries.map((country) => (
        <tr>
          <td>{country.country}</td>
          <td>
            <strong>{numeral(country.deaths).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table2;