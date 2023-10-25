export const generateTags = async (description: string): Promise<Array<string>> => {
	const response = await fetch('https://api.openai.com/v1/chat/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer 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`,
		},
		body: JSON.stringify({
			model: 'gpt-3.5-turbo',
			messages: [
				{
					role: 'system',
					content:
						'You are an assistant that has to plan my day down to the minute. You will receive further details in the description. Reply with a structured answer by putting each item of the day plan into a javascript array. Return the array directly.',
				},
				{
					role: 'user',
					content: `${description}`,
				},
			],
		}),
	});

	console.log(response.status);

	const json = await response.json();

	console.log(json.choices[0].message);

	if (!response.ok) {
		// handle the graphql errors
		return Promise.reject('error');
	}

	const message = JSON.stringify(json.choices[0].message.content);

	const cleaned = message.replace(/\n/g, ' ');

	return Array(cleaned)
	// return cleaned;
};