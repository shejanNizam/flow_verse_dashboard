import { Button, Modal, Form, Input, Select, message } from "antd";
import { useState } from "react";
import {
  CopyOutlined,
  EditOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";

export default function ApiKey() {
  const [form] = Form.useForm();

  // State for API Key data
  const [apiKeyData, setApiKeyData] = useState({
    key: "sk_live_51P2uJpS...", // The real key
    status: "Active",
    createdAt: "Jan 10, 2026",
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Function to copy text to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(apiKeyData.key);
    message.success("API Key copied to clipboard!");
  };

  // Open modal and pre-fill data
  const openEditModal = () => {
    form.setFieldsValue({
      key: apiKeyData.key,
      status: apiKeyData.status,
    });
    setIsEditModalOpen(true);
  };

  // Save updated data
  const handleSave = (values) => {
    setApiKeyData((prev) => ({
      ...prev,
      key: values.key,
      status: values.status,
    }));
    setIsEditModalOpen(false);
    message.success("API key updated successfully");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h3 className="text-xl font-bold text-[#001529] mb-6">Your API Keys</h3>

      {/* Main Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden max-w-5xl">
        {/* Header Section */}
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/30">
          <span className="font-semibold text-gray-700">API key</span>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-4">
            {/* Left: Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-500 font-medium">API key :</span>
                <span className="text-gray-800 tracking-widest font-mono">
                  **********
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 font-medium">Status :</span>
                <span
                  className={
                    apiKeyData.status === "Active"
                      ? "text-green-500 font-medium"
                      : "text-red-500 font-medium"
                  }
                >
                  {apiKeyData.status}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 font-medium">Created :</span>
                <span className="text-gray-800">{apiKeyData.createdAt}</span>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              <Button
                icon={<CopyOutlined />}
                onClick={handleCopy}
                className="flex items-center gap-2 border-gray-200 text-gray-600 hover:text-blue-500"
              >
                Copy
              </Button>
              <Button
                icon={<EditOutlined />}
                onClick={openEditModal}
                className="flex items-center gap-2 border-gray-200 text-gray-600 hover:text-blue-500"
              >
                Edit
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Warning Section */}
        <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex justify-center items-center gap-2 text-[#003a8c]">
          <ExclamationCircleFilled className="text-orange-500" />
          <p className="text-sm font-medium">
            Keep your API key secret. Do not share it publicly or commit it to
            source control
          </p>
        </div>
      </div>

      {/* EDIT MODAL */}
      <Modal
        title={
          <div className="text-center font-bold text-[#3F2B6E] text-xl">
            Update API Key
          </div>
        }
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        footer={null}
        width={450}
        centered
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSave}
          className="mt-6"
        >
          <Form.Item
            label={<span className="font-semibold text-gray-600">API Key</span>}
            name="key"
            rules={[{ required: true, message: "Please enter the API key" }]}
          >
            <Input className="h-10 rounded-md" placeholder="Enter your key" />
          </Form.Item>

          <Form.Item
            label={<span className="font-semibold text-gray-600">Status</span>}
            name="status"
          >
            <Select className="h-10">
              <Select.Option value="Active">Active</Select.Option>
              <Select.Option value="Inactive">Inactive</Select.Option>
            </Select>
          </Form.Item>

          <div className="flex justify-between gap-4 mt-8">
            <Button
              onClick={() => setIsEditModalOpen(false)}
              className="w-1/2 h-10 border-gray-300 font-medium rounded-md"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="w-1/2 h-10 bg-black border-none font-medium hover:!bg-gray-800 rounded-md"
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}
