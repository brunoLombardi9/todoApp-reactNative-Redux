import { Provider } from "react-redux";
import { AppContainer, InputField, TasksContainer } from "./components";
import store from "./store";

export default function App() {
  return (
    <AppContainer>
      <Provider store={store}>
      <InputField />
      <TasksContainer/>
      </Provider>
    </AppContainer>
  );
}
