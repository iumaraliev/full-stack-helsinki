// Objects are not valid React Child
// Application tries to render Objects, fails
// Individual things that needs to be rendered must be primitive data types

const Hello = () => {
  return (
    <div>
      <p>Hello React.js</p>
    </div>
  );
};

const Greet = (props) => {
  return (
    <div>
      <p>
        Hello I am {props.name} and I am {props.age}
      </p>
    </div>
  );
};

const App = function () {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);

  const name = "Peter";
  const age = 20;

  const friends = [
    { name: "Peter", age: 20 },
    { name: "Maya", age: 21 },
  ];

  return (
    <>
      <p>Hello World! It is {now.toString()}</p>
      <p>
        {a} + {b} = {a + b}
      </p>
      <Hello />
      <Greet name="Ilkhom" age="23" />
      <Greet name={name} age={age} />

      <p>
        {friends[0].name} {friends[0].age}
      </p>
      <p>
        {friends[1].name} {friends[1].age}
      </p>
    </>
  );
};

export default App;
