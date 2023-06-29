import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/exercise/:id",
    element: <ExerciseDetail />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
