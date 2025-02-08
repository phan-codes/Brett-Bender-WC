import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<section>
			<title>404 Error | Page Not Found | Brett Bender Wall Covering</title>
			<meta property="og:title" content="Recent Services | Brett Bender Wall Covering" />
			<meta property="og:description" content="Page Not Found" />
			<div className="flex flex-col justify-center items-center h-screen gap-3 px-5 dark:bg-gray-950">
				<h1 className="text-7xl md:text-9xl tracking-wider font-bold font-Noto">404</h1>
				<p className="text-gray-700 font-semibold">Oops, Page Not Found!</p>
				<p className="text-sm text-gray-500">The requested link is not found.</p>
				<Link
					to="/"
					className="shadow-lg px-4 py-2 outline-none border-none text-gray-300 rounded-md bg-[#052DB9] hover:bg-[#1f368a]">
					Back to Home
				</Link>
			</div>
		</section>
	);
};

export default NotFoundPage;
