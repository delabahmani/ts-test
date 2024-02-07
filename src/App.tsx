import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  const personName = {
    first: "Cat",
    last: "woman",
  };

  const nameList = [
    {
      first: "The",
      last: "Joker",
    },
    {
      first: "Alfred",
      last: "Pennyworth",
    },
    {
      first: "Bruce",
      last: "Pennyworth",
    },
  ];

  return (
    <div className="App">
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>And the Oscar goes to.... Bruce Wayne!</Heading>
      </Oscar>
      <Greet name="Dela" isLoggedIn={false} />
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input value="" handleChange={event => console.log(event)} />
    </div>
  );
}

export default App;
