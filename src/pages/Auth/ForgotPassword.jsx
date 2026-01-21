// import { Button, Form, Input } from "antd";
// import { MdOutlineAlternateEmail } from "react-icons/md";
// import { useNavigate } from "react-router";
// import { useForgotPasswordMutation } from "../../redux/features/auth/authApi";
// import { ErrorSwal, SuccessSwal } from "../../utils/allSwalFire";

// const ForgotPassword = () => {
//   const [form] = Form.useForm();
//   const navigate = useNavigate();
//   const [mutation, { isLoading }] = useForgotPasswordMutation();

//   const onFinish = async (values) => {
//     const { email } = values;

//     try {
//       const response = await mutation(values).unwrap();
//       // console.log(response);
//       // localStorage.setItem("token", response?.data?.resetPasswordToken);

//       SuccessSwal({
//         title: "Success",
//         text: response.data.message || response.message || "Success",
//       });

//       navigate(`/auth/verify-email/${email}`);
//     } catch (error) {
//       const err = error;
//       ErrorSwal({
//         title: "",
//         text: err?.data?.message || err?.message || "Something went wrong!",
//       });
//     }
//   };

//   return (
//     <div className="w-full">
//       <h3 className="text-2xl xl:text-3xl mb-3 font-medium text-center">
//         {/* <ClientButton>
//           <ArrowLeftIcon className="w-5 xl:w-6" />
//         </ClientButton>{" "} */}
//         Forget Password
//       </h3>
//       <p className="text-brand/500 mb-8 text-center">
//         Please provide your email address to receive a verification code for
//         resetting your password.
//       </p>
//       <Form
//         form={form}
//         name={"normal_forgot_password"}
//         layout="vertical"
//         onFinish={onFinish}
//         requiredMark={false}
//         className="w-full"
//       >
//         <Form.Item
//           label={"User Email"}
//           name="email"
//           rules={[
//             {
//               type: "email",
//               message: "Input a valid email!",
//             },
//             {
//               required: true,
//               message: "Email is required!",
//             },
//           ]}
//         >
//           <Input
//             size="large"
//             placeholder="E-mail"
//             prefix={<MdOutlineAlternateEmail className="w-5 mr-1" />}
//           />
//         </Form.Item>
//         <div className="w-full flex justify-center pt-1">
//           <Button
//             loading={isLoading}
//             type="primary"
//             size="large"
//             htmlType="submit"
//             className="px-2 w-full"
//           >
//             Send OTP
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default ForgotPassword;

import { Button, Form, Input } from "antd";
import { IoArrowBack } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useNavigate } from "react-router";
// import { useForgotPasswordMutation } from "../../redux/features/auth/authApi";
// import { ErrorSwal, SuccessSwal } from "../../utils/allSwalFire";

const ForgotPassword = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // Static state for UI design
  const isLoading = false;

  /* // API Hook (Commented out)
  const [mutation, { isLoading }] = useForgotPasswordMutation(); 
  */

  const onFinish = async (values) => {
    const { email } = values;
    console.log("Forgot Password Email:", email);

    // Static Navigation Test:
    // Uncomment the line below if you want to test the transition to the verify screen
    // navigate(`/auth/verify-email/${email}`);

    /* // API Logic (Commented out)
    try {
      const response = await mutation(values).unwrap();
      SuccessSwal({
        title: "Success",
        text: response.data.message || response.message || "Success",
      });
      navigate(`/auth/verify-email/${email}`);
    } catch (error) {
      const err = error;
      ErrorSwal({
        title: "",
        text: err?.data?.message || err?.message || "Something went wrong!",
      });
    }
    */

    navigate(`/auth/verify-email/${email}`);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-2 mb-3">
        <IoArrowBack
          onClick={() => navigate(-1)}
          className="w-6 h-6 text-gray-700 cursor-pointer hover:text-primary transition-colors"
        />
        <h3 className="text-2xl xl:text-3xl font-medium text-center">
          Forget Password
        </h3>
      </div>
      <p className="text-brand/500 mb-8 text-center">
        Please provide your email address to receive a verification code for
        resetting your password.
      </p>
      <Form
        form={form}
        name={"normal_forgot_password"}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
        className="w-full"
      >
        <Form.Item
          label={"User Email"}
          name="email"
          rules={[
            {
              type: "email",
              message: "Input a valid email!",
            },
            {
              required: true,
              message: "Email is required!",
            },
          ]}
        >
          <Input
            size="large"
            placeholder="E-mail"
            prefix={<MdOutlineAlternateEmail className="w-5 mr-1" />}
          />
        </Form.Item>
        <div className="w-full flex justify-center pt-1">
          <Button
            loading={isLoading} // Currently set to false
            type="primary"
            size="large"
            htmlType="submit"
            className="px-2 w-full"
          >
            Send OTP
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ForgotPassword;
