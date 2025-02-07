import React from "react";
import Companies from "../components/Companies";
import GetStarted from "../components/GetStarted";
import Hero from "../components/Hero";
import HomeContacts from "../components/HomeContacts";
import Services from "../components/Services";
import { Helmet } from "react-helmet-async";

export default function Home() {
	return (
		<div>
			<Helmet>
				<title>Home | Brett Bender Wall Covering</title>
				<meta name="description" content="This is the official Website Of The Brett Bender Wall Covering" />
				<meta property="og:title" content="Home | Brett Bender Wall Covering" />
				<meta property="og:description" content="This is the official Website Of The Brett Bender Wall Covering" />
			</Helmet>
			<Hero />
			<Companies />
			<Services />
			<GetStarted />
			<HomeContacts />
		</div>
	);
}
