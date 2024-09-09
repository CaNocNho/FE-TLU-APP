import { useAuthContext } from '../contexts/AuthContext';
import { handlePostApiService } from '../axios/apiService';
import { PATH_API } from '../constants/pathApi';
const useAuth = () => {
    const { setToken } = useAuthContext();
    const login = async (username, password, rememberMe) => {
        try {
            const response = await handlePostApiService(PATH_API.TOKEN, {
                method: 'POST',
                client_id: 'education_client',
                grant_type: 'password',
                username,
                password,
                client_secret: 'password',
            });
            if (response?.statusCode === 200) {
                const token = response.access_token;
                setToken(token);
                // Gọi hàm login trong context để xử lý việc ghi nhớ
                if (rememberMe) {
                    localStorage.setItem('token', token);
                }
                return token;
            }
            throw new Error('Đăng nhập không thành công');
        }
        catch (error) {
            throw error;
        }
    };
    return { login };
};
export default useAuth;
