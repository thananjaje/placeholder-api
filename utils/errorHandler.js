export const handleError = (res, error, context) => {
    context = 'Internal Server Error';
    console.log(`${context}:`, error.message || error);

    // Axios errror shows as external API error
    if (error.response) {
        const status = error.response.status || 500;
        const message = error.response.data?.error || error.response.statusText || 'External API error';
        return res.status(status).json({ error: message });
    }

    // db errror other unexpected errors
    return res.status(500).json({ error: context });
};