import { useState } from "react";
export default function Counter({ ime }) {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h1>Pozdrav {ime}!</h1>
      <button onClick={() => setCount(count + 1)}>KLIKAJ BROJAC{count}</button>
      <p>
        {ime} je kliknuo {count} puta!
      </p>
    </div>
  );
}
