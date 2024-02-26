import { createSlice } from "@reduxjs/toolkit";
import { TaskType } from "../common/types";
import { fetchTasks } from "../common/helpers";

const defaultTasks: TaskType[] = [
  // { id: "1", title: "Something", state: "TASK_INBOX" },
  // { id: "2", title: "Something more", state: "TASK_INBOX" },
  // { id: "3", title: "Something else", state: "TASK_INBOX" },
  // { id: "4", title: "Something again", state: "TASK_INBOX" },
];

type IntialState = {
  tasks: TaskType[];
  status: "loading" | "idle" | "succeeded" | "failed";
  error: string | null;
};

const TaskBoxData: IntialState = {
  tasks: defaultTasks,
  status: "idle",
  error: "",
};

const TasksSlice = createSlice({
  name: "taskbox",
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      const task = state.tasks.findIndex((task) => task.id === id);
      if (task >= 0) {
        state.tasks[task].state = newTaskState;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.tasks = [];
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        // Add any fetched tasks to the array
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = "failed";
        state.error = "Something went wrong";
        state.tasks = [];
      });
  },
});

export const { updateTaskState } = TasksSlice.actions;

export default TasksSlice.reducer;
