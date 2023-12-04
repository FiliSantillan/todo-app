import { useState } from "react";
import Box from "@mui/material/Box";
import { TodoList } from "./components/TodoList";
import { Header } from "./components/Header";
import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputText.trim() !== "") {
      setItems([...items, { id: Date.now(), name: inputText }]);
      setInputText("");
    }
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Box className="container">
      <Header
        inputText={inputText}
        setInputText={setInputText}
        onAdd={addItem}
      />
      <TodoList items={items} onRemove={removeItem} />
    </Box>
  );
};

export default App;
