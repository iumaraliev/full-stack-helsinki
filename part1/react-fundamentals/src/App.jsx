const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function HandleClick() {
  alert("You clicked me");
}

function App() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
    >
      {product.title}
    </li>
  ));
  return (
    <>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        className="avatar"
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: 100,
        }}
      />
      <ul>{listItems}</ul>
      <button onClick={HandleClick}>Click Me</button>
    </>
  );
}

export default App;
