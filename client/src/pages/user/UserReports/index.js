import React from "react";
import PageTitle from "../../../components/PageTitle";
import { message, Modal, Table, Button } from "antd";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import { getAllReportsByUser, getLeaderboard } from "../../../apicalls/reports";

import { useEffect } from "react";
import moment from "moment";

function UserReports() {
  const [reportsData, setReportsData] = React.useState([]);
  const [leaderboard, setLeaderboard] = React.useState([]);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Exam Name",
      dataIndex: "examName",
      render: (text, record) => <>{record.exam.name}</>,
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (text, record) => (
        <>{moment(record.createdAt).format("DD-MM-YYYY hh:mm:ss")}</>
      ),
    },
    {
      title: "Total Marks",
      dataIndex: "totalQuestions",
      render: (text, record) => <>{record.exam.totalMarks}</>,
    },
    {
      title: "Passing Marks",
      dataIndex: "correctAnswers",
      render: (text, record) => <>{record.exam.passingMarks}</>,
    },
    {
      title: "Obtained Marks",
      dataIndex: "correctAnswers",
      render: (text, record) => <>{record.result.correctAnswers.length}</>,
    },
    {
      title: "Verdict",
      dataIndex: "verdict",
      render: (text, record) => <>{record.result.verdict}</>,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <Button type="link" onClick={() => showLeaderboard(record.exam._id)}>
          View ScoreBoard
        </Button>
      ),
    },
  ];

  const leaderboardColumns = [
    {
      title: "Rank",
      render: (text, record, index) => <>{index + 1}</>,
    },
    {
      title: "User Name",
      dataIndex: "user",
      render: (text, record) => <>{record.user.name}</>,
    },
    {
      title: "Email",
      dataIndex: "user",
      render: (text, record) => <>{record.user.email}</>,
    },
    {
      title: "Marks Obtained",
      dataIndex: "totalMarks",
      render: (text, record) => <>{record.result.correctAnswers.length}</>,
    },
  ];

  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await getAllReportsByUser();
      if (response.success) {
        setReportsData(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const showLeaderboard = async (examId) => {
    try {
      dispatch(ShowLoading());
      const response = await getLeaderboard(examId);
      if (response.success) {
        setLeaderboard(response.data);
        setIsModalVisible(true);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <PageTitle title="Reports" />
      <div className="divider"></div>
      <Table columns={columns} dataSource={reportsData} rowKey="_id" />

      <Modal
        title="Leaderboard"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={700}
      >
        <Table
          columns={leaderboardColumns}
          dataSource={leaderboard}
          pagination={false}
          rowKey="_id"
        />
      </Modal>
    </div>
  );
}

export default UserReports;
