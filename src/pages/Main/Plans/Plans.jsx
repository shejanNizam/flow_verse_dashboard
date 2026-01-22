import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Select, Table, Tag } from "antd";
import { useState } from "react";

export default function Plans() {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);

  // Static Dummy Data based on image design
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      planName: "Monthly",
      price: "1.99",
      currency: "$",
      activeUsers: 40,
      status: "Visible",
    },
    {
      key: "2",
      planName: "Half-Yearly",
      price: "3.99",
      currency: "$",
      activeUsers: 40,
      status: "Visible",
    },
    {
      key: "3",
      planName: "Yearly",
      price: "19.99",
      currency: "$",
      activeUsers: 40,
      status: "Hidden",
    },
  ]);

  const handleEdit = (record) => {
    setEditingPlan(record);
    form.setFieldsValue({
      price: record.price,
      status: record.status,
    });
    setIsModalOpen(true);
  };

  const handleSave = (values) => {
    const newData = dataSource.map((item) =>
      item.key === editingPlan.key ? { ...item, ...values } : item,
    );
    setDataSource(newData);
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Plan name",
      dataIndex: "planName",
      key: "planName",
      sorter: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price}`,
    },
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
    },
    {
      title: "Number of active users",
      dataIndex: "activeUsers",
      key: "activeUsers",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          color={status === "Visible" ? "green" : "error"}
          className="px-4 py-1 rounded-md border-none"
          style={{
            backgroundColor: status === "Visible" ? "#E6F9ED" : "#FFECEC",
            color: status === "Visible" ? "#00A242" : "#D90404",
          }}
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => handleEdit(record)}
          className="bg-[#0095FF] border-none flex items-center justify-center rounded-md"
          style={{ width: "32px", height: "32px" }}
        />
      ),
    },
  ];

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Plans</h3>
      </div>

      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        className="custom-table"
      />

      <Modal
        title={
          <div className="text-center font-bold text-[#3F2B6E]">Edit Plan</div>
        }
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={400}
        centered
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSave}
          className="mt-6"
        >
          <Form.Item label="Price" name="price" className="font-semibold">
            <Input prefix="$" className="rounded-md h-10" />
          </Form.Item>

          <Form.Item label="Status" name="status" className="font-semibold">
            <Select className="h-10">
              <Select.Option value="Visible">Visible</Select.Option>
              <Select.Option value="Hidden">Hidden</Select.Option>
            </Select>
          </Form.Item>

          <div className="flex justify-between gap-4 mt-8">
            <Button
              onClick={() => setIsModalOpen(false)}
              className="w-1/2 h-10 border-gray-300 font-medium rounded-md"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="w-1/2 h-10 bg-black border-none font-medium hover:!bg-gray-800 rounded-md"
            >
              Save
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}
