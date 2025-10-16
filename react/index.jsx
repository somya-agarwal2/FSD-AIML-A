function Book() {
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/250"
        width="250"
        height="250"
        alt="Physics Book"
      />
      <h4>Title: Physics</h4>
      <h3>Price: ₹324/-</h3>
      <button>Add To Cart</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
