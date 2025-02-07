export interface ServicesTypeProp {
	name: string;
	variety: string[];
	images: string[];
}

export interface CarouselProps {
	children: React.ReactElement[];
	autoSlide: boolean;
	autoSlideInterval: number;
}

export interface RecentServicesTypeProp {
	id: string;
	name: string;
	linkImage: string;
	images: string[];
}
