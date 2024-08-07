import { Alert } from "react-native";

const LoadItems = async () => {
    try {
        const response = await fetch('https://run.mocky.io/v3/35f4b213-d217-47ca-94ae-4271086f02f3');

        if (!response.ok) {
            throw new Error('An error occurred while loading items.');
        }
        const data = await response.json();

        return data;
    } catch (error) {
        Alert.alert('Error', 'An error occurred while loading items.');
        console.error(error);
    }
};

export default LoadItems;
