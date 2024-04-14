function Header(props) {
  console.log(props);
  return <h3>{props.course}</h3>;
}

function Content(props) {
  console.log(props);
  return <></>;
}

function Total(props) {
  const totalExercises = props.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return (
    <>
      <p>Total exercises: {totalExercises}</p>
    </>
  );
}

function App() {
  const course = "Half Stack Application Development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },

    {
      name: "Using props to pass data",
      exercises: 7,
    },

    {
      name: "State component",
      exercises: 14,
    },
  ];

  return (
    <>
      <Header course={course} />;
      <Content parts={parts} />
    </>
  );
}

export default App;
