import React from "react";
import { recents } from "../../utils/services";
import { Carousel } from "../components/Carousel";
import { RecentServicesTypeProp } from "../../types";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const RecentDisplayPage = ({ params }: { params: Promise<{ id: number }> }) => {
	const { name } = useParams();

	const recent = recents.find((recent) => recent?.name === name) as RecentServicesTypeProp;

	return (
		<>
			<Helmet>
				<title>Recent Services | Brett Bender Wall Covering</title>
				<meta name="description" content="Explore the recent services of Brett Bender Wall Covering" />
				<meta property="og:title" content="Recent Services | Brett Bender Wall Covering" />
				<meta property="og:description" content="Explore the recent services of Brett Bender Wall Covering" />
			</Helmet>
			<div className="flex flex-col justify-center items-center py-16 dark:bg-black">
				<p className="px-7 py-5 text-3xl font-bold font-Noto tracking-wider uppercase text-gray-400 text-center">
					{recent?.name}
				</p>
				<div className="max-w-lg px-7">
					<Carousel autoSlide={true} autoSlideInterval={5000}>
						{recent?.images.map((src, index) => (
							<img key={index} src={src} alt={recent?.name} width={900} height={600} className="rounded-md" />
						))}
					</Carousel>
				</div>
			</div>
		</>
	);
};

export default RecentDisplayPage;
