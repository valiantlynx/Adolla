
import db from "../db";

export const iconNames = {
	"main-on-white": "White",
	"white-on-gold": "Gold",
	"white-on-blue": "Ocean",
	"white-on-dark": "Night",
	"white-on-green": "Forest",
	"white-on-red": "Crimson",
	"white-on-black": "Black"
}
export const iconNamesReversed = Object.fromEntries(Object.entries(iconNames).map(v => v.reverse()));

export default function getIconSrc() {
	let selectedName = db.get("settings.icon");
	return `/icons/${iconNamesReversed[selectedName] || "main-on-white"}.png`
}