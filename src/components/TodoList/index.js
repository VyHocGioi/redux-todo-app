import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoRemaining } from "../../redux/selector";
import todoListSlice from "./TodoSlice";
export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("High");
  const dispatch = useDispatch();
  const todoList = useSelector(todoRemaining);
  // const searchText = useSelector(searchFilterSelector);
  console.log({ todoList });

  const handleAddButtonClick = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setTodoName("");
    setPriority("High");
  };
  const handleOnchangInput = (e) => {
    setTodoName(e.target.value);
    console.log(todoName);
  };
  const handleOnChangeSelect = (value) => {
    setPriority(value);
    console.log(value);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col
        span={24}
        style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo
          name="Learn React"
          prioriry="High"
        />
        <Todo
          name="Learn Redux"
          prioriry="Medium"
        />
        <Todo
          name="Learn JavaScript"
          prioriry="Low"
        /> */}
        {todoList.map((todo) => (
          <Todo
            name={todo.name}
            priority={todo.priority}
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group
          style={{ display: "flex" }}
          compact>
          <Input
            value={todoName}
            onChange={handleOnchangInput}
          />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleOnChangeSelect}>
            <Select.Option
              value="High"
              label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option
              value="Medium"
              label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option
              value="Low"
              label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button
            type="primary"
            onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
