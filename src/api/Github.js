export const fetchData = async () => {
    try {
        const response = await fetch(`https://${import.meta.env.VITE_REACT_GITHUB}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
}