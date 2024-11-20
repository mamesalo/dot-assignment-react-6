import React, { useState } from "react";
import UserCard from "./components/UserCard";

const App = () => {
  const [values, setvalues] = useState([
    {
      id: 1,
      name: "Penny C. Danner",
      age: 28,
    },
    {
      id: 2,
      name: "James S. Allen",
      age: 22,
    },
    {
      id: 3,
      name: "Marcella R. Russell",
      age: 19,
    },
    {
      id: 4,
      name: "Brooke M. Goforth",
      age: 30,
    },
    {
      id: 5,
      name: "Robert M. Sweeney",
      age: 20,
    },
    {
      id: 6,
      name: "Ann J. Stanfield",
      age: 34,
    },
  ]);
  const handleChange = (name, age, id) => {
    const editedObject = { id, name, age };
    let newArray = [];
    values.forEach((item) => {
      if (item.id == id) {
        newArray.push(editedObject);
      } else {
        newArray.push(item);
      }
    });
    setvalues(newArray);
    console.log(newArray);
  };
  console.log(values);

  return (
    <div className="flex flex-wrap items-center justify-center p-4 gap-3 text-slate-900">
      {values.map((item) => (
        <UserCard
          key={item.id}
          id={item.id}
          name={item.name}
          age={item.age}
          onSave={handleChange}
        />
      ))}
    </div>
  );
};

export default App;
