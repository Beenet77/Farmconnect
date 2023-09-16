import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
