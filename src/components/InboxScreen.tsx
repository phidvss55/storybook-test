import React, { useEffect } from "react";
import TaskList from "./TaskList";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchTasks } from "../common/helpers";
import InputList from "./InputList";

const InboxScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.taskbox);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <p className="title-message">Oh no!</p>
          <p className="subtitle-message">Something went wrong</p>
        </div>
      </div>
    );
  }
  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">Taskbox</h1>
      </nav>
      <InputList />
      <TaskList />
    </div>
  );
};

export default InboxScreen;
