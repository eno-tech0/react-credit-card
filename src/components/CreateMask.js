function createMask(mask, value) {
	let matrix = mask,
		def = matrix.replace(/\D/g, ''),
		val = value.replace(/\D/g, ''),
		i = 0;

	if (def.length >= val.length) {
		val = def;
	}
	value = matrix.replace(/./g, function(a) {
		return /[X\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
	})

	return value;
}

export default createMask;