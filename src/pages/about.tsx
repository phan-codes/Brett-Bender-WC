import React from "react";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
	return (
		<>
			<Helmet>
				<title>About | Brett Bender Wall Covering</title>
				<meta
					name="description"
					content="About Mr. Brett Bender, CEO Of Brett Bender Wall Covering and How it Was Founded"
				/>
				<meta property="og:title" content="About | Brett Bender Wall Covering" />
				<meta
					property="og:description"
					content="About Mr. Brett Bender, CEO Of Brett Bender Wall Covering and How it Was Founded"
				/>
			</Helmet>
			<section className="flex flex-col justify-center items-center w-full h-screen text-center dark:bg-black">
				<Reveal>
					<div className="flex flex-col justify-center items-center w-full">
						<h1 className="py-5 w-44 font-bold font-Noto tracking-wider text-lg dark:text-gray-300">
							ABOUT US
							<hr className="h-1 border-b-solid border-[2px] border-[#e8bc37] outline-none w-20 my-2 rounded-full translate-x-12 " />
						</h1>
					</div>
				</Reveal>
				<div className="flex flex-col justify-center items-center lg:flex-row lg:items-start">
					<div className="basis-[50%] py-10">
						<Reveal>
							<h1 className="font-bold font-Noto tracking-wider py-3 dark:text-gray-300">Our Team</h1>
						</Reveal>
						<Reveal>
							<article className="text-sm text-gray-600 px-7 leading-8 lg:px-24">
								Our wallcovering business can look back on many years of experience and many successfully completed
								projects. Satisfied customers are our motivation to perform our work with reliability, punctuality and
								trustworthiness. Our highly trained and versatile team of professionals put quality and reputation
								first. Having served the area for over 25 years, we have worked on a wide range of commercial and
								institutional projects from Universities and hospital buildings to major hotels as well as historic
								restorations. We install all types of wallcovering and wall protection and we are fully insured and
								bonded. Would you like to learn more about us? Simply contact us at{" "}
								<Link to="tel:+19094663733" className="text-[#e8bc37] hover:underline">
									(909) 466-3733
								</Link>{" "}
								We look forward to hearing from you!
							</article>
						</Reveal>
					</div>

					<div className="basis-[50%] flex flex-col justify-center items-center py-10 gap-y-2">
						<Reveal>
							<div className=" rounded-full border-[#052DB9] border-[3px] border-solid bg-[#052DB9] shadow-lg">
								<img src="/BrettBender.jpg" alt="Brett" width={100} height={100} className="rounded-full" />
							</div>
						</Reveal>
						<Reveal>
							<h2 className="font-bold font-Noto dark:text-gray-300">Brett Bender</h2>
							<h3 className="text-sm dark:text-gray-400">President</h3>
						</Reveal>
						<Reveal>
							<div>
								<p className="text-sm text-gray-600 px-7 leading-8 lg:px-24">
									Brett took over the reins of Brett Bender Wallcovering from his father in 1990. Since that time Brett
									as overseen the growth of the business year over year. This is largely due to the fact that Brett
									Bender Wallcovering continues to expand its returning customer base.
								</p>
							</div>
						</Reveal>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutPage;
