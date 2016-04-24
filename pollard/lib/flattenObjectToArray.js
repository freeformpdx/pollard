export default function flattenObjectToArray(ob) {
	var toReturn = [];

	for (var i in ob) {
		if (!ob.hasOwnProperty(i)) continue;

		toReturn.push([i, ob[i]]);
	}

	return toReturn;
};
