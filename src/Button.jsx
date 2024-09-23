import { useEffect, useState } from "react";

function Button() {
  const [countLike, setCountLike] = useState(0);
  const [countDisLike, setCountDisLike] = useState(0);
  useEffect(() => {
    console.log(`wadidaw like ${countLike} | dislike ${countDisLike}`)
}, [countLike, countDisLike]);
  return (
    <>
      <button onClick={() => setCountLike(countLike + 1)}>
        {countLike} Like 👍
      </button>
      <button onClick={() => setCountDisLike(countDisLike + 1)}>
        {countDisLike} Dislike 👎
      </button>
    </>
  );
}

export default Button;
