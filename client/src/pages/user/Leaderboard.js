import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLeaderboard } from "../../apicalls/reports";
import { Table, message } from "antd";

function Leaderboard() {
  const { id } = useParams(); // examId
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await getLeaderboard(id);
    if (response.success) {
      setData(response.data);
    } else {
      message.error("Failed to fetch leaderboard");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: "Rank",
      dataIndex: "rank",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: ["user", "name"],
    },
    {
      title: "Email",
      dataIndex: ["user", "email"],
    },
    {
      title: "Marks Scored",
      dataIndex: "Marks",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      <Table columns={columns} dataSource={data} rowKey="_id" pagination={false} />
    </div>
  );
}

export default Leaderboard;
