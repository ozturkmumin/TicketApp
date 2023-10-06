import React from "react";

function Deperture({
  placeofdeparture,
  cityfirst,
  citysecond,
}: {
  placeofdeparture: string;
  cityfirst: string;
  citysecond: string;
}) {
  return (
    <div>
      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          {placeofdeparture}
        </option>
        <option>{cityfirst}</option>
        <option>{citysecond}</option>
      </select>
    </div>
  );
}

export default Deperture;
