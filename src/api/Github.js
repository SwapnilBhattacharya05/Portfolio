export const fetchData = async () => {
    try {
        const apiUrl = import.meta.env.VITE_REACT_GITHUB;
        if (!apiUrl) {
            throw new Error("VITE_REACT_GITHUB environment variable is not defined");
        }

        const response = await fetch(`https://${apiUrl}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error in fetchData:", error);
    }
};
