function ResponseHandler(
	res,
	status,
	message,
	data,
	extra_properties,
	meta,
	code,

) {
	res.json({
		status: status,
		message: message,
		data: data ?? {},
		...extra_properties,
		meta: meta ?? {},
		code: code || 200,
	});
}

module.exports = ResponseHandler