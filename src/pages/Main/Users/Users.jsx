import { Button, Modal, Switch, Table } from "antd";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;

  // Modal States
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Data States
  const [selectedUser, setSelectedUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);

  // --- DUMMY DATA ---
  const [users, setUsers] = useState([
    {
      key: "1",
      slNo: "1233",
      name: "Kathryn Murp",
      email: "bockely@att.com",
      phone: "(201) 555-0124",
      status: "Approved",
    },
    {
      key: "2",
      slNo: "1233",
      name: "Devon Lane",
      email: "csilvers@rizon.com",
      phone: "(219) 555-0114",
      status: "Cancelled",
    },
    {
      key: "3",
      slNo: "1233",
      name: "Foysal Rahman",
      email: "qamaho@mail.com",
      phone: "(316) 555-0116",
      status: "Approved",
    },
    {
      key: "4",
      slNo: "1233",
      name: "Hari Danang",
      email: "xterris@gmail.com",
      phone: "(907) 555-0101",
      status: "Approved",
    },
    {
      key: "5",
      slNo: "1233",
      name: "Floyd Miles",
      email: "xterris@gmail.com",
      phone: "(505) 555-0125",
      status: "Approved",
    },
    {
      key: "6",
      slNo: "1233",
      name: "Eleanor Pena",
      email: "xterris@gmail.com",
      phone: "(704) 555-0127",
      status: "Approved",
    },
    {
      key: "7",
      slNo: "1233",
      name: "Devon Lane",
      email: "xterris@gmail.com",
      phone: "(219) 555-0114",
      status: "Approved",
    },
    {
      key: "8",
      slNo: "1233",
      name: "Hari Danang",
      email: "xterris@gmail.com",
      phone: "(270) 555-0117",
      status: "Approved",
    },
    {
      key: "9",
      slNo: "1233",
      name: "Devon Lane",
      email: "xterris@gmail.com",
      phone: "(207) 555-0119",
      status: "Approved",
    },
    {
      key: "10",
      slNo: "1233",
      name: "Hari Danang",
      email: "xterris@gmail.com",
      phone: "(225) 555-0118",
      status: "Approved",
    },
  ]);

  // --- HANDLERS ---
  const openViewModal = (record) => {
    setSelectedUser(record);
    setIsViewModalOpen(true);
  };

  const openDeleteModal = (record) => {
    setUserToDelete(record);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setUsers((prev) => prev.filter((user) => user.key !== userToDelete.key));
    setIsDeleteModalOpen(false);
    setUserToDelete(null);
  };

  const columns = [
    {
      title: "SL no.",
      dataIndex: "slNo",
      key: "slNo",
      render: (text) => (
        <span className="text-gray-500 font-medium">#{text}</span>
      ),
    },
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={status === "Cancelled" ? "text-gray-400" : "text-red-400"}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Switch",
      key: "switch",
      render: (_, record) => (
        <Switch
          size="small"
          checked={record.status !== "Cancelled"}
          style={{
            backgroundColor: record.status === "Cancelled" ? "#bfbfbf" : "#000",
          }}
        />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            onClick={() => openViewModal(record)}
            className="bg-cyan-50 text-cyan-500 border-none font-semibold hover:bg-cyan-100"
            size="small"
            style={{ width: "80px", height: "32px" }}
          >
            View
          </Button>
          <Button
            danger
            type="primary"
            icon={<RiDeleteBin6Line />}
            onClick={() => openDeleteModal(record)}
            className="bg-red-600 hover:bg-red-500 border-none"
            style={{
              height: "32px",
              width: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-white min-h-screen">
      <Table
        columns={columns}
        dataSource={users}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: users.length,
          onChange: (page) => setCurrentPage(page),
          showSizeChanger: false,
          position: ["bottomCenter"],
        }}
        className="border-none"
      />

      {/* VIEW MODAL */}
      <Modal
        centered
        title="User Information"
        open={isViewModalOpen}
        onCancel={() => setIsViewModalOpen(false)}
        footer={[
          <Button key="close" onClick={() => setIsViewModalOpen(false)}>
            Close
          </Button>,
        ]}
      >
        {selectedUser && (
          <div className="space-y-3 py-4">
            <div className="flex border-b pb-2">
              <p className="w-1/3 font-bold text-gray-600">Serial No:</p>
              <p className="w-2/3">#{selectedUser.slNo}</p>
            </div>
            <div className="flex border-b pb-2">
              <p className="w-1/3 font-bold text-gray-600">Name:</p>
              <p className="w-2/3">{selectedUser.name}</p>
            </div>
            <div className="flex border-b pb-2">
              <p className="w-1/3 font-bold text-gray-600">Email:</p>
              <p className="w-2/3">{selectedUser.email}</p>
            </div>
            <div className="flex border-b pb-2">
              <p className="w-1/3 font-bold text-gray-600">Phone:</p>
              <p className="w-2/3">{selectedUser.phone}</p>
            </div>
            <div className="flex pb-2">
              <p className="w-1/3 font-bold text-gray-600">Status:</p>
              <p
                className={`w-2/3 ${selectedUser.status === "Cancelled" ? "text-gray-400" : "text-red-400"}`}
              >
                {selectedUser.status}
              </p>
            </div>
          </div>
        )}
      </Modal>

      {/* DELETE MODAL */}
      <Modal
        title="Confirm Deletion"
        open={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(false)}
        onOk={confirmDelete}
        okText="Delete"
        okButtonProps={{ danger: true }}
        cancelText="Cancel"
        centered
      >
        <div className="py-4">
          <p className="text-lg text-gray-800">
            Are you sure you want to delete this user?
          </p>
          <p className="text-sm text-gray-500 mt-2">
            This action will permanently remove{" "}
            <strong>{userToDelete?.name}</strong> from the records.
          </p>
        </div>
      </Modal>
    </div>
  );
}
