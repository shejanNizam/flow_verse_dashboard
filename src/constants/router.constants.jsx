import { CiSettings, CiUser } from "react-icons/ci";
import { RiDashboardHorizontalLine } from "react-icons/ri";

import { FaRegClock } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import Notifications from "../components/Notifications";
import Administrators from "../pages/Main/Administrators/Administrators";
import ApiKey from "../pages/Main/ApiKey/ApiKey";
import DashboardHome from "../pages/Main/DashboardHome/DashboardHome";
import Plans from "../pages/Main/Plans/Plans";
import Users from "../pages/Main/Users/Users";
import EditMyProfile from "../pages/Settings/EditMyProfile";
import MyProfile from "../pages/Settings/MyProfile";

export const dashboardItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: RiDashboardHorizontalLine,
    element: <DashboardHome />,
  },
  {
    path: "notifications",
    element: <Notifications />,
  },
  {
    name: "User Management",
    path: "users",
    icon: FaRegClock,
    // element: <Sessions />,
    element: <Users />,
  },
  {
    name: "Administrators",
    path: "administrators",
    icon: LuUsers,
    // element: <Parents />,
    element: <Administrators />,
  },
  {
    name: "API key",
    path: "api-key",
    icon: LuUsers,
    element: <ApiKey />,
  },
  {
    name: "Plans",
    path: "plans",
    icon: LuUsers,
    element: <Plans />,
  },
  // {
  //   path: "parents/assigned-professional/:id",
  //   icon: LuUsers,
  //   element: <AssignedProfessional />,
  // },
  // {
  //   name: "Professionals",
  //   path: "professionals",
  //   icon: LuBookUser,
  //   element: <Professionals />,
  // },
  // {
  //   name: "Resources",
  //   path: "resources",
  //   icon: GrResources,
  //   element: <Resources />,
  // },
  // {
  //   path: "resources/subject/:id",
  //   element: <Subjects />,
  // },
  // {
  //   path: "resources/materials/:id",
  //   element: <Materials />,
  // },
  // {
  //   name: "Calendar",
  //   path: "calendar",
  //   icon: MdOutlineEditCalendar,
  //   element: <Calendar />,
  // },
  // {
  //   name: "Message",
  //   path: "message",
  //   icon: FaRegMessage,
  //   element: <TabbedMessage />,
  // },
  {
    name: "Settings",
    rootPath: "settings",
    icon: CiSettings,
    children: [
      {
        name: "Profile",
        path: "settings/profile",
        icon: CiUser,
        element: <MyProfile />,
      },
      {
        path: "settings/profile/edit",
        element: <EditMyProfile />,
      },
      // {
      //   name: "About Us",
      //   icon: FaServicestack,
      //   path: "settings/about",
      //   element: <About />,
      // },
      // {
      //   path: "settings/about/edit",
      //   element: <EditAbout />,
      // },
      // {
      //   name: "Terms & Services",
      //   icon: TbAirConditioning,
      //   path: "settings/terms",
      //   element: <TermsConditions />,
      // },
      // {
      //   path: "settings/terms/edit",
      //   element: <EditTermsConditions />,
      // },
      // {
      //   name: "Privacy Policy",
      //   icon: MdOutlineSecurityUpdateWarning,
      //   path: "settings/privacy",
      //   element: <PrivacyPolicy />,
      // },
      // {
      //   path: "settings/privacy/edit",
      //   element: <EditPrivacyPolicy />,
      // },
    ],
  },
];
