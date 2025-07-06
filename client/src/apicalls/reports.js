const { default: axiosInstance } = require(".");

// add report
export const addReport = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/reports/add-report", payload);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// get all reports
export const getAllReports = async (filters) => {
    try {
        const response = await axiosInstance.post("/api/reports/get-all-reports" , filters);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
} 

// get all reports by user
export const getAllReportsByUser = async () => {
    try {
        const response = await axiosInstance.post("/api/reports/get-all-reports-by-user");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

//get users by exam
export const getLeaderboard = async (examId) => {
  try {
    const response = await axiosInstance.get(`/api/reports/leaderboard/${examId}`);
    return response.data;
  } catch (error) {
    return { success: false, message: error.message };
  }
};
