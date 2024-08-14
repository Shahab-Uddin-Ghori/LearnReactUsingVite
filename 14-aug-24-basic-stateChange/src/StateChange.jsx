import React, { useState } from "react";
import UpdateData from "./UpdateData";

function StateChange() {
  let [a, b] = useState(1);
  return (
    <div className="w-full h-60 bg-zinc-900 text-white p-6">
      <h1>{a}</h1>
      <button
        onClick={() => b(a + 1)}
        className="px-6 py-2 bg-green-400 rounded-md "
      >
        click
      </button>
      <UpdateData data={[a, b]} />
    </div>
  );
}
export default StateChange;
