import * as React from "react";
import { Flip } from "./Flip";
import { Flipr } from "./Flipr";
import { Flippen } from "./Flippen";
import { Spacer } from "./Spacer";
import { Newline } from "./Newline";
import { FlipDate } from "./FlipDate";
import { WorkingFlipDate } from "./WorkingFlipDate";

function App() {
  const [num, setNum] = React.useState(36);
  return (
    <div>
      <h1>
        <Flip value={num} />
      </h1>

      <Newline n={1} />

      <h1>
        <Flipr value={num} />
      </h1>

      <Newline n={1} />

      <h1>
        <Flippen value={num} />
      </h1>

      <Newline n={1} />

      <h1>
        <FlipDate value={"70"} />
      </h1>

      <Newline n={1} />

      <h1>
        <WorkingFlipDate value={"2021"} />
      </h1>

      <Newline n={2} />

      <button className="danger" onClick={() => setNum(num - 1)}>
        Decrease by 1
      </button>

      <Spacer />

      <button onClick={() => setNum(num + 1)}>Increase by 1</button>

      <Spacer />

      <button className="danger" onClick={() => setNum(num - 10)}>
        Decrease by 10
      </button>

      <Spacer />

      <button onClick={() => setNum(num + 10)}>Increase by 10</button>
    </div>
  );
}

export default App;
