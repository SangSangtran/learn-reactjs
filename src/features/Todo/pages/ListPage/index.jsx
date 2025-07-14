import queryString from 'query-string';
import React, { useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoList/TodoForm';

const ListPage = () => {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || 'all');
  }, [location.search]);

  const handleTodoClick = (todo, idx) => {
    // clone currrent array to the new one
    const newTodoList = [...todoList];
    console.log(todo, idx);
    // toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };

    // update todo list
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    // setFilteredStatus("all");
    const queryParams = { status: 'all' };
    navigate({
      pathname: '/todos',
      search: `?${queryString.stringify(queryParams)}`,
    });
  };

  const handleShowCompletedClick = () => {
    // setFilteredStatus("completed");
    const queryParams = { status: 'completed' };
    navigate({
      pathname: '/todos',
      search: `?${queryString.stringify(queryParams)}`,
    });
  };

  const handleShowNewClick = () => {
    // setFilteredStatus("new");
    const queryParams = { status: 'new' };
    navigate({
      pathname: '/todos',
      search: `?${queryString.stringify(queryParams)}`,
    });
  };

  const renderedTodoList = useMemo(() => {
    return todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  }, [todoList, filteredStatus]);
  // console.log(renderedTodoList);

  const handleTodoFormSubmit = (values) => {
    console.log('Form submit: ', values);
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    };

    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
};

ListPage.propTypes = {};

export default ListPage;
