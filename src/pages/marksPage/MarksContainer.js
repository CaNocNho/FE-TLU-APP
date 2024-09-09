import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// containers/MarksContainer.tsx
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import useApi from '../../hooks/useApi';
import { toast } from 'react-toastify';
import { PATH_API } from '../../constants/pathApi';
import MarksPage from './MarksPage';
import LoadingOverlay from '../../@core/components/loading/LoadingOverlay';
const convertToGPA4 = (mark) => {
    if (mark >= 8.5)
        return 4.0;
    if (mark >= 7.0)
        return 3.0;
    if (mark >= 5.5)
        return 2.0;
    if (mark >= 4.0)
        return 1.0;
    return 0.0;
};
const MarksContainer = () => {
    const [marks, setMarks] = useState([]);
    const [gpa10, setGpa10] = useState(0);
    const [gpa4, setGpa4] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { fetchData } = useApi();
    const { token } = useAuthContext();
    useEffect(() => {
        const fetchMarks = async () => {
            if (!token) {
                toast.error('Token không tồn tại. Vui lòng đăng nhập lại.');
                return;
            }
            setLoading(true);
            setError(null);
            try {
                const options = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                };
                const marksData = await fetchData(PATH_API.MARKS, options);
                if (marksData) {
                    let totalCredits = 0;
                    let totalWeightedMarks = 0;
                    let totalWeightedGPA4 = 0;
                    const processedMarks = marksData.map((item) => {
                        const processMark = item.details.find(detail => detail.subjectExam.code === 'DQT')?.mark || 0;
                        const examMark = item.details.find(detail => detail.subjectExam.code === 'THI')?.mark || 0;
                        const credits = item.subject.numberOfCredit || 0;
                        totalCredits += credits;
                        totalWeightedMarks += item.mark * credits;
                        totalWeightedGPA4 += convertToGPA4(item.mark) * credits;
                        return {
                            ...item,
                            processMark,
                            examMark
                        };
                    });
                    const gpa10Value = totalWeightedMarks / totalCredits || 0;
                    const gpa4Value = totalWeightedGPA4 / totalCredits || 0;
                    setMarks(processedMarks);
                    setGpa10(gpa10Value);
                    setGpa4(gpa4Value);
                }
                else {
                    toast.error('Không thể lấy dữ liệu điểm.');
                }
            }
            catch (err) {
                setError('Đã xảy ra lỗi khi lấy dữ liệu.');
            }
            finally {
                setLoading(false);
            }
        };
        fetchMarks();
    }, [fetchData, token]);
    return (_jsxs(_Fragment, { children: [loading && _jsx(LoadingOverlay, {}), _jsx(MarksPage, { marks: marks, gpa10: gpa10, gpa4: gpa4, loading: loading, error: error })] }));
};
export default MarksContainer;
