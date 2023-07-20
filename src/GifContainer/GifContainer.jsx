import "./GifContainer.css";

export default function GifContainer({ search, apiObj }) {
  return (
    <div className="gif-container">
      <img src={apiObj.data[0].images.fixed_height.url} alt={search} />
    </div>
  );
}
