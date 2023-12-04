import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

export function TodoList({ items, onRemove }) {
  return (
    <>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onRemove={onRemove}
          className="todoItem"
        />
      ))}
    </>
  );
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};
