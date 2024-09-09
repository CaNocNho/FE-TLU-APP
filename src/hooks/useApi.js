// hooks/useApi.ts
import { useState, useCallback } from 'react';
import { handleGetApiService } from '../axios/apiService';
const useApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchData = useCallback(async (path, options = {}) => {
        setLoading(true);
        setError(null);
        try {
            const response = await handleGetApiService(path, options, (error) => {
                setError(error.message);
            });
            setLoading(false);
            if (response && response.statusCode === 200) {
                return response.data;
            }
            else {
                setError('Failed to fetch data');
                return null;
            }
        }
        catch (error) {
            setLoading(false);
            setError('Failed to fetch data');
            return null;
        }
    }, []);
    return { loading, error, fetchData };
};
export default useApi;
