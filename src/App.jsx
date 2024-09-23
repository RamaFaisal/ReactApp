import { useMemo } from "react";
import { useState } from "react";

function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  const [subsCounter, setSubsCounter] = useState(0);

  function pesanLike() {
    console.log(`Pesan like rendered`);
    return likeCounter < 10
      ? "Like Kurang dari 10"
      : "Mantap! Like Lebih dari 10";
  }

  const displayPesanLike = useMemo(() => pesanLike(), [likeCounter]);
  return (
    <>
      <p>
        <button onClick={() => setLikeCounter(likeCounter + 1)}>
          {likeCounter} Like 👍
        </button>{" "}
        {displayPesanLike}
      </p>
      <p>
        <button onClick={() => setSubsCounter(subsCounter + 1)}>
          {subsCounter} Subscribe 🔔
        </button>
      </p>
    </>
  );
}

export default App;
