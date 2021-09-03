const MyFunctionComponent = () => {
  // setting the state hooks

  const [name, setName] = useState("Arya Stark");
  return (
    <div>
      <p>hello my name is {name}</p>
    </div>
  );
};

export default MyFunctionComponent;
