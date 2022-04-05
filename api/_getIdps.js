import { ApiError } from './_common';

const getIdps = async (id, client) => {
	try {
		const url = `api/v1/users/${id}/idps`;

		const response = await client.fetch({ url });

		if (!response.ok) {
			throw new ApiError({
				statusCode: response?.statusCode,
				message: "Unable to fetch user's Idps",
				json: await response.json(),
			});
		}

		const idps = (await response.json()) || [];

		const providers = [];

		for (let i = 0; i < idps.length; i++) {
			providers.push(idps[i]?.name?.toLowerCase());
		}

		return providers;
	} catch (error) {
		console.error(error);
		throw new ApiError({ statusCode: error?.statusCode, message: error?.message });
	}
};

export default getIdps;
