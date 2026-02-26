import type { Gif } from "../../mock-data/gift.mock";

interface Props {
  gif: Gif[];
}

export const GifList = ({ gif }: Props) => {
  return (
    <div className="gifs-container">
      {gif.map((gif) => (
        <div className="gif-card" key={gif.id}>
          <img src={gif.url} alt={gif.title} />
          <h3>{gif.title}</h3>
          <p>
            {gif.width} x {gif.height} (1.5mb)
          </p>
        </div>
      ))}
    </div>
  );
};
