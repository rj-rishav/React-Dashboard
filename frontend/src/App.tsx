import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Users from "./pages/User";
import Products from "./pages/Products";
function App() {
    const Layout = () => {
        return (
            <div id="main" className="px-4 py-2 min-h-screen bg-gray-900">
                <Nav />
                <div className="flex mt-6">
                    <div className="mr-4 pr-2 border-r-2 border-r-zinc-600">
                        <Menu />
                    </div>
                    <div className="contentcontainer">
                        <Outlet />
                    </div>
                </div>
                <div className="relative bottom-0 left-0">
                    <Footer />
                </div>
            </div>
        );
    };
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "users",
                    element: <Users />,
                },
                {
                    path: "products",
                    element: <Products />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
