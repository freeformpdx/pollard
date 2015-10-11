export default function mergeStyles(...styles) {
	let ret = {};
	styles.forEach((style) => 
		Object.assign(ret, style)
	);
	return ret;
}
