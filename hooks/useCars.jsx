import axios from "axios";
import { useEffect, useState } from "react";

const useCars = () => {
    const [cars, setCars] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/DanInDev/mobile-software-development-exercises/main/cars.json")
            .then((response) => {
                setCars(response.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { cars, error, loading };
};

export default useCars;