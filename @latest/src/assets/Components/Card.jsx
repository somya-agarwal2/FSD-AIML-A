const Card = ({ image, title, price }) => {
  return (
    <div className="w-60 h-80 bg-white shadow-md rounded-xl p-4 m-4 flex flex-col items-center justify-between transition-transform hover:scale-105 hover:shadow-lg">
      <img
        src={image}
        alt="product"
        className="h-36 object-contain mb-2"
      />
      <div className="text-center">
        <h1 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
          {title}
        </h1>
        <h2 className="text-lg font-bold text-green-600">${price}</h2>
      </div>
      <button className="mt-2 w-full border border-gray-300 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 font-medium transition">
        Add to Cart
      </button>
    </div>
  );
};

export default Card;