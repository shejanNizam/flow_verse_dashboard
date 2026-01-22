import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Select, Table } from "antd";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Administrators() {
  const [form] = Form.useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Modal Visibility States
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  // Data Selection States
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [adminToDelete, setAdminToDelete] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // --- DUMMY DATA ---
  const [admins, setAdmins] = useState([
    {
      key: "1",
      slNo: "1233",
      name: "Devon Lane",
      email: "bockely@att.com",
      contact: "(201) 555-0124",
      access: "Admin",
    },
    {
      key: "2",
      slNo: "1233",
      name: "Foysal Rahman",
      email: "csilvers@rizon.com",
      contact: "(219) 555-0114",
      access: "Admin",
    },
    {
      key: "3",
      slNo: "1233",
      name: "Hari Danang",
      email: "qamaho@mail.com",
      contact: "(316) 555-0116",
      access: "Admin",
    },
  ]);

  // --- MODAL HANDLERS ---

  // Handle Add Click
  const handleAddClick = () => {
    setEditMode(false);
    setSelectedAdmin(null);
    form.resetFields();
    setIsFormModalOpen(true);
  };

  // Handle Edit Click
  const handleEditClick = (record) => {
    setEditMode(true);
    setSelectedAdmin(record);
    // Map table fields to form fields
    form.setFieldsValue({
      name: record.name,
      email: record.email,
      phone: record.contact,
      role: record.access,
    });
    setIsFormModalOpen(true);
  };

  const handleFormSubmit = (values) => {
    if (editMode) {
      setAdmins((prev) =>
        prev.map((item) =>
          item.key === selectedAdmin.key
            ? { ...item, ...values, contact: values.phone, access: values.role }
            : item,
        ),
      );
    } else {
      const newAdmin = {
        key: Date.now().toString(),
        slNo: "1233",
        name: values.name,
        email: values.email,
        contact: values.phone,
        access: values.role,
      };
      setAdmins([...admins, newAdmin]);
    }
    setIsFormModalOpen(false);
  };

  const confirmDelete = () => {
    setAdmins((prev) => prev.filter((item) => item.key !== adminToDelete.key));
    setIsDeleteModalOpen(false);
  };

  const columns = [
    {
      title: "SL no.",
      dataIndex: "slNo",
      key: "slNo",
      render: (text) => <span className="text-gray-500">#{text}</span>,
    },
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <span
          className="text-gray-700 cursor-pointer hover:text-blue-500"
          onClick={() => {
            setSelectedAdmin(record);
            setIsViewModalOpen(true);
          }}
        >
          {text}
        </span>
      ),
    },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Contact Number", dataIndex: "contact", key: "contact" },
    { title: "Has Access to", dataIndex: "access", key: "access" },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <div className="flex justify-center gap-2">
          <Button
            icon={<FiEdit />}
            onClick={() => handleEditClick(record)}
            className="bg-[#6B9E43] text-white border-none flex items-center justify-center hover:!bg-[#5a8a36]"
            style={{ width: "32px", height: "32px" }}
          />
          <Button
            danger
            type="primary"
            icon={<RiDeleteBin6Line />}
            onClick={() => {
              setAdminToDelete(record);
              setIsDeleteModalOpen(true);
            }}
            className="bg-[#D90404] border-none flex items-center justify-center"
            style={{ width: "32px", height: "32px" }}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="mb-6">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAddClick}
          className="bg-black border-none hover:!bg-gray-800 h-10 px-6 font-medium"
        >
          New Administrators Profile Create
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={admins}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          onChange: (page) => setCurrentPage(page),
          showSizeChanger: false,
          position: ["bottomCenter"],
        }}
      />

      {/* REUSABLE ADD + EDIT MODAL */}
      <Modal
        title={null} // Using custom title inside for specific design
        open={isFormModalOpen}
        onCancel={() => setIsFormModalOpen(false)}
        footer={null}
        width={450}
        centered
      >
        <div className="text-center mb-6">
          <h2 className="text-[#3F2B6E] text-xl font-bold">
            {editMode
              ? "Edit Administrator"
              : "New Administrator Profile Create"}
          </h2>
        </div>

        <Form
          form={form}
          layout="horizontal"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          onFinish={handleFormSubmit}
          colon={false}
          requiredMark={false}
        >
          <Form.Item
            label={<span className="font-semibold">Name</span>}
            name="name"
          >
            <Input className="rounded-md" />
          </Form.Item>

          <Form.Item
            label={<span className="font-semibold">Email</span>}
            name="email"
          >
            <Input className="rounded-md" />
          </Form.Item>

          <Form.Item
            label={<span className="font-semibold">Phone</span>}
            name="phone"
          >
            <Input className="rounded-md" />
          </Form.Item>

          <Form.Item
            label={<span className="font-semibold">Role</span>}
            name="role"
          >
            <Select className="rounded-md w-full">
              <Select.Option value="Admin">Admin</Select.Option>
              <Select.Option value="Super Admin">Super Admin</Select.Option>
            </Select>
          </Form.Item>

          <div className="flex justify-between gap-4 mt-8">
            <Button
              onClick={() => setIsFormModalOpen(false)}
              className="w-1/2 h-10 border-gray-300 font-medium"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="w-1/2 h-10 bg-black border-none font-medium hover:!bg-gray-800"
            >
              {editMode ? "Save" : "Create"}
            </Button>
          </div>
        </Form>
      </Modal>

      {/* VIEW MODAL */}
      <Modal
        title="Details"
        open={isViewModalOpen}
        onCancel={() => setIsViewModalOpen(false)}
        footer={[
          <Button key="close" onClick={() => setIsViewModalOpen(false)}>
            Close
          </Button>,
        ]}
      >
        {selectedAdmin && (
          <div className="py-4 space-y-4 text-gray-700">
            <div className="flex border-b pb-2">
              <p className="w-1/3 font-bold">Name:</p>
              <p>{selectedAdmin.name}</p>
            </div>
            <div className="flex border-b pb-2">
              <p className="w-1/3 font-bold">Email:</p>
              <p>{selectedAdmin.email}</p>
            </div>
            <div className="flex border-b pb-2">
              <p className="w-1/3 font-bold">Phone:</p>
              <p>{selectedAdmin.contact}</p>
            </div>
            <div className="flex">
              <p className="w-1/3 font-bold">Access:</p>
              <p>{selectedAdmin.access}</p>
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
        okButtonProps={{ danger: true, className: "bg-red-600" }}
      >
        <p className="py-4">
          Are you sure you want to delete this administrator?
        </p>
      </Modal>

      <style jsx global>{`
        .ant-modal-content {
          border-radius: 12px;
          padding: 24px !important;
        }
        .ant-table-thead > tr > th {
          background: transparent !important;
        }
        .ant-pagination-item-active {
          background-color: black !important;
          border-color: black !important;
        }
        .ant-pagination-item-active a {
          color: white !important;
        }
      `}</style>
    </div>
  );
}
