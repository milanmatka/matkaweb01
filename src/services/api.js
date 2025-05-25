const API_URL = 'https://mtka-api-production.up.railway.app';

export const getStarlineResults = async (gameId) => {
    try {
        const response = await fetch(`${API_URL}/api/starline/result/getAllResults?gameId=${gameId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Starline results:', error);
        return { success: false, error: error.message };
    }
};
