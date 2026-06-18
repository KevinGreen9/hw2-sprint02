import {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistsType = {
  id: string
  title: string
  filter: FilterValuesType
}

export type TaskStateType = {
  [todolistId: string]: TaskType[]
}

export const App = () => {

  let todolistID1 = v1();
  let todolistID2 = v1();

  let [todolists, setTodolists] = useState<Array<TodolistsType>>([
    {id: todolistID1, title: 'What to learn', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
  ])

  let [tasks, setTasks] = useState({
    [todolistID1]: [
      {id: v1(), title: "HTML&CSS", isDone: true},
      {id: v1(), title: "JS", isDone: true},
      {id: v1(), title: "ReactJS", isDone: false},
      {id: v1(), title: "Rest API", isDone: false},
      {id: v1(), title: "GraphQL", isDone: false},
    ],
    [todolistID2]: [
      {id: v1(), title: "HTML&CSS2", isDone: true},
      {id: v1(), title: "JS2", isDone: true},
      {id: v1(), title: "ReactJS2", isDone: false},
      {id: v1(), title: "Rest API2", isDone: false},
      {id: v1(), title: "GraphQL2", isDone: false},
    ]
  });

  function removeTask(id: string, todolistId: TodolistsType['id']) {
    setTasks({...tasks, [todolistId]: tasks[todolistId].filter(t => t.id !== id)})
  }

  function addTask(title: string, todolistId: TodolistsType['id']) {
    let task = {id: v1(), title: title, isDone: false};
    setTasks({...tasks, [todolistId]: [...tasks[todolistId], task]});
  }

  function changeStatus(taskId: string, isDone: boolean, todolistId: TodolistsType['id']) {
    setTasks({
      ...tasks,
      [todolistId]: tasks[todolistId].map(t =>
          t.id === taskId ? {...t, isDone: isDone} : t
      )
    })
  }

  function changeFilter(value: FilterValuesType, todolistId: TodolistsType['id']) {
    setTodolists(todolists.map(tl =>
        tl.id === todolistId ? {...tl, filter: value} : tl
    ))
  }

  function getFilteredTasks(tasks: TaskType[], filter: FilterValuesType) {
    switch (filter) {
      case 'active':
        return tasks.filter(t => !t.isDone);
      case 'completed':
        return tasks.filter(t => t.isDone);
      case 'all':
      default:
        return tasks;
    }
  }

  const todolistComponents = todolists.map(tl => {
    const filteredTasks = getFilteredTasks(tasks[tl.id], tl.filter)
    return (
        <Todolist
            key={tl.id}
            id={tl.id}
            title={tl.title}
            tasks={filteredTasks}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeStatus}
            filter={tl.filter}
        />
    )
  })

  return (
      <div className="App">
        {todolistComponents}
      </div>
  );
}