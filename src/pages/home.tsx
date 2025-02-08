import React from "react";
import Companies from "../components/Companies";
import GetStarted from "../components/GetStarted";
import Hero from "../components/Hero";
import HomeContacts from "../components/HomeContacts";
import Services from "../components/Services";

export default function Home() {
	return (
		<section>
			<title>Home | Brett Bender Wall Covering</title>
			<meta name="description" content="This is the official Website Of The Brett Bender Wall Covering" />
			<meta property="og:title" content="Home | Brett Bender Wall Covering" />
			<meta property="og:description" content="This is the official Website Of The Brett Bender Wall Covering" />
			<Hero />
			<Companies />
			<Services />
			<GetStarted />
			<HomeContacts />
		</section>
	);
}
