import { useEffect, useRef, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ServicesPage from "./pages/services";
import RecentService from "./pages/recentservice";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import ScrollToTop from "./components/ScrollToTop";

const Layout = () => {
	const [isVisible, setIsVisible] = useState(false);
	const navbarRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (navbarRef.current) {
				setIsVisible(navbarRef.current.getBoundingClientRect().bottom <= 0);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="text-black dark:text-white dark:bg-black bg-white flex flex-col h-screen relative">
			<ScrollToTop />
			<NavBar ref={navbarRef} />
			<Outlet />
			<ScrollToTopBtn scrollToTop={scrollToTop} isVisible={isVisible} />
			<Footer />
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "/about", element: <AboutPage /> },
			{ path: "/contact", element: <ContactPage /> },
			{ path: "/services", element: <ServicesPage /> },
			{ path: "/services/:name", element: <RecentService /> },
			// {path: "*", element: <NotFoundPage/>},
		],
	},
]);

function App() {
	return (
		<HelmetProvider>
			<RouterProvider router={router} />;
		</HelmetProvider>
	);
}

export default App;
