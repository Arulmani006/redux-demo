import React, { useReducer } from 'react';
import GithubUser from "./components/UserData/GithubUser";
import UserData from './components/UserData/UserData'

const App = () => {
  const initialTasks = [];
  const tasksReducer =(tasks, action) =>{
    switch (action.type) {
      case 'added': {
        return tasks.concat(action.data)
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  };

  const [githubUserData, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  const handleAddTask = (datas) => {
    dispatch({
      type: 'added',
      data: datas,
    });
  }

  return (
    <div >
      <GithubUser onSubmit={handleAddTask}/>
      <UserData Repos={githubUserData}/>
    </div>
  );
}

export default App;
