import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function Header({ inputText, setInputText, onAdd }) {
  return (
    <header className="header">
      <TextField
        label="Escribe tu tarea"
        variant="outlined"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="todoText"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={onAdd}
        className="todoButton"
      >
        Agregar
      </Button>
    </header>
  );
}

Header.propTypes = {
  inputText: PropTypes.string.isRequired,
  setInputText: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};
