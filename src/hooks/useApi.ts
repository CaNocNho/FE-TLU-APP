// hooks/useApi.ts
import { useState, useCallback } from 'react';
import { handleGetApiService } from '../axios/apiService';

interface UseApiReturn {
  loading: boolean;
  error: string | null;
  fetchData: (path: string, options?: any) => Promise<any>;
}

const useApi = (): UseApiReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (path: string, options: any = {}): Promise<any> => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await handleGetApiService(path, options, (error: any) => {
          setError(error.message);
        });

        setLoading(false);

        if (response && response.statusCode === 200) {
          return response.data;
        } else {
          setError('Failed to fetch data');
          return null;
        }
      } catch (error) {
        setLoading(false);
        setError('Failed to fetch data');
        return null;
      }
    },
    []
  );

  return { loading, error, fetchData };
};

export default useApi;
