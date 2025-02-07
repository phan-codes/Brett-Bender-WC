import { RecentServicesTypeProp, ServicesTypeProp } from "../types";
import vinyl1 from "/src/assets/vinyl1.jpg";
import vinyl2 from "/src/assets/vinyl2.jpg";
import vinyl3 from "/src/assets/vinyl3.jpg";
import rolledgoods from "/src/assets/rolledgoods.jpg";
import rolledgoods2 from "/src/assets/rolledgoods2.jpg";
import digitalmurals from "/src/assets/digitalmurals.jpg";
import digitalmurals2 from "/src/assets/digitalmurals2.jpg";
import wallprotection from "/src/assets/wallprotection1.jpg";
import wallprotection2 from "/src/assets/wallprotection2.jpg";
import panels from "/src/assets/panels.jpg";
import panels2 from "/src/assets/panels2.jpg";
import specialtyProd from "/src/assets/specialtyprod.jpg";
import specialtyProd2 from "/src/assets/specialtyprod2.jpg";

import jc from "/src/assets/jc.jpg";
import hollywood from "/src/assets/hollywood.jpg";
import hollywood2 from "/src/assets/hollywood2.jpg";
import victoria from "/src/assets/victoria.jpg";
import victoria2 from "/src/assets/victoria2.jpg";
import pasea from "/src/assets/pasea.jpg";
import pasea2 from "/src/assets/pasea2.jpg";
import pasea3 from "/src/assets/pasea3.jpg";

export const services: ServicesTypeProp[] = [
	{
		name: "Vinyl Wallcoverings",
		variety: ["Solid Vinyl", "Paper backed Vinyl", "Fabric backed", "Magnetic and non-magnetic dry erase"],
		images: [vinyl1, vinyl2, vinyl3],
	},
	{
		name: "Rolled Goods",
		variety: ["Vinyl Coated", "Flocked", "Grasscloth", "Foil"],
		images: [rolledgoods, rolledgoods2],
	},
	{
		name: "Digital Murals",
		variety: ["Customized large format digital murals on vinyl.", "Peel and stick self adhesive wall murals."],
		images: [digitalmurals, digitalmurals2],
	},
	{
		name: "Wall Protection",
		variety: ["Rigid vinyl wall protection", "FRP"],
		images: [wallprotection, wallprotection2],
	},
	{
		name: "Panels",
		variety: ["Acoustic wall panels", "Tackable wall panels", "Vinyl covered", "Fabric covered"],
		images: [panels, panels2],
	},

	{
		name: "Other Specialty Products",
		variety: ["Crash rail", "Corner guards", "Marker boards"],
		images: [specialtyProd, specialtyProd2],
	},
];

export const recents: RecentServicesTypeProp[] = [
	{
		id: "1",
		name: "J.C. Penney",
		linkImage: jc,
		images: [jc, jc],
	},
	{
		id: "2",
		name: "Hollywood Park Casino",
		linkImage: hollywood,
		images: [hollywood, hollywood2],
	},
	{
		id: "3",
		name: "Victoria’s Secret",
		linkImage: victoria,
		images: [victoria, victoria2],
	},
	{
		id: "4",
		name: "Pasea Hotel and Spa",
		linkImage: pasea,
		images: [pasea, pasea2, pasea3],
	},
];
