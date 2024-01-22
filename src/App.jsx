import { useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Root from "./components/Root";
import Mercury from "./pages/Mercury";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Mars from "./pages/mars";
import Jupeter from "./pages/Jupeter";
import Saturan from "./pages/Saturan";
import Urans from "./pages/Urans";
import Neptune from "./pages/Neptune";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Root />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Mercury />,
      },
      {
        path: "/venus",
        element: <Venus />,
      },
      {
        path: "/earth",
        element: <Earth />,
      },
      {
        path: "/mars",
        element: <Mars />,
      },
      {
        path: "/jupeter",
        element: <Jupeter />,
      },
      {
        path: "/saturan",
        element: <Saturan />,
      },
      {
        path: "/urans",
        element: <Urans />,
      },
      {
        path: "/neptune",
        element: <Neptune />,
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

// import { useState } from "react";
// import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

// import Navbar from "./components/Navbar";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Navbar />
//         <Outlet />
//       </>
//     ),
//     children: [
//       {
//         path: "/",
//         element: "",
//       },
//       {
//         path: "/about",
//         element: "",
//       },
//       {
//         path: "/contact",
//         element: "",
//       },
//     ],
//   },
// ]);

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="content">
//       <RouterProvider router={router}></RouterProvider>
//     </div>
//   );
// }

// export default App;
