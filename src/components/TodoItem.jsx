import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

export function TodoItem({ item, onRemove }) {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    let timer;
    if (disabled) {
      timer = setTimeout(() => {
        onRemove(item.id);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [disabled, item.id, onRemove]);

  return (
    <Paper elevation={3} className="todoItem">
      <Checkbox
        disabled={disabled}
        onChange={() => setDisabled(!disabled)}
        color="primary"
      />
      <Typography className={`todoText ${disabled ? "completed" : ""}`}>
        {item.name}
      </Typography>
    </Paper>
  );
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
};
