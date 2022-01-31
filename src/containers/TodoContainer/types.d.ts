interface TasksState {
  tasksData: TaskData[] | null;
  inputVal: string;
  loading: boolean;
  error: boolean;
}
interface TaskData {
  _id: string;
  text: string;
}

interface Action {
  type: string;
  payload?: any;
}
