function Header(props) {
  return <h3>{props.name}</h3>;
}

function Content() {
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <>
      <p>
        {part1} has {exercises1} exercises
      </p>
      <p>
        {part2} has {exercises2} exercises
      </p>
      <p>
        {part3} has {exercises3} exercises
      </p>
    </>
  );
}

function Total() {
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  const average = exercises1 + exercises2 + exercises3;

  return (
    <>
      <p>Overall: {average} exercises</p>
    </>
  );
}

function App() {
  return (
    <>
      <Header name="Half Stack Application Development" />
      <Content />
      <Total />
    </>
  );
}

export default App;
