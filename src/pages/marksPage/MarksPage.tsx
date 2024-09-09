import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Box,
  Alert,
} from '@mui/material';
import { MarkItem } from '../../utils/faker';

interface MarksPageProps {
  marks: MarkItem[];
  gpa10: number;
  gpa4: number;
  loading: boolean;
  error: string | null;
}

const MarksPage: React.FC<MarksPageProps> = ({ marks, gpa10, gpa4, loading, error }) => {
  return (
    <Box sx={{ padding: 2 }}>
      {error && <Alert severity="error">{error}</Alert>}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        </Box>
      ) : (
        !error && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="marks table">
              <TableHead>
                <TableRow>
                  <TableCell>Mã môn học</TableCell>
                  <TableCell>Tên môn học</TableCell>
                  <TableCell>Số tín chỉ</TableCell>
                  <TableCell>Điểm quá trình</TableCell>
                  <TableCell>Điểm thi</TableCell>
                  <TableCell>Điểm kết thúc học phần</TableCell>
                  <TableCell>Điểm chữ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {marks.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.subject.subjectCode}</TableCell>
                    <TableCell>{item.subject.subjectName}</TableCell>
                    <TableCell>{item.subject.numberOfCredit}</TableCell>
                    <TableCell>{item.processMark !== undefined ? item.processMark : 'N/A'}</TableCell>
                    <TableCell>{item.examMark !== undefined ? item.examMark : 'N/A'}</TableCell>
                    <TableCell>{item.mark}</TableCell>
                    <TableCell>{item.charMark}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={5}>GPA hệ 10:</TableCell>
                  <TableCell>{gpa10.toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={5}>GPA hệ 4:</TableCell>
                  <TableCell>{gpa4.toFixed(2)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )
      )}
    </Box>
  );
};

export default MarksPage;
