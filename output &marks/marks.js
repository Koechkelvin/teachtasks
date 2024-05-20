function checkGrade(totalMarks, examType) {
    if (examType === 'Final') {
        if (totalMarks >= 90) {
            return "Excellent job, you got an A+.";
        }
    } else {
        if (totalMarks >= 89) {
            return "Excellent job, you got an A+.";
        }
    }

    if (totalMarks >= 80) {
        return "Good job, you got an A.";
    } else if (totalMarks >= 75) {
        return "Well done, you got a B+.";
    } else if (totalMarks >= 70) {
        return "Nice work, you got a B.";
    } else if (totalMarks >= 60) {
        return "You got a C.";
    } else {
        return "You need to improve.";
    }
}