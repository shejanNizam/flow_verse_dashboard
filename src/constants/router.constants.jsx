import { CiSettings, CiUser } from "react-icons/ci";
import { RiDashboardHorizontalLine } from "react-icons/ri";

import { FaRegClock, FaServicestack } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import { LuBookUser, LuUsers } from "react-icons/lu";
import {
  MdOutlineEditCalendar,
  MdOutlineSecurityUpdateWarning,
} from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import Notifications from "../components/Notifications";
import Calendar from "../pages/Main/Calendar/Calendar";
import DashboardHome from "../pages/Main/DashboardHome/DashboardHome";
import TabbedMessage from "../pages/Main/Message/TabbedMessage";
import AssignedProfessional from "../pages/Main/Parents/AssignedProfessional";
import Parents from "../pages/Main/Parents/Parents";
import Professionals from "../pages/Main/Professionals/Professionals";
import Materials from "../pages/Main/Resources/Materials";
import Resources from "../pages/Main/Resources/Resources";
import Subjects from "../pages/Main/Resources/Subjects";
import Sessions from "../pages/Main/Sessions/Sessions";
import About from "../pages/Settings/About";
import EditAbout from "../pages/Settings/EditAbout";
import EditMyProfile from "../pages/Settings/EditMyProfile";
import EditPrivacyPolicy from "../pages/Settings/EditPrivacyPolicy";
import EditTermsConditions from "../pages/Settings/EditTermsConditions";
import MyProfile from "../pages/Settings/MyProfile";
import PrivacyPolicy from "../pages/Settings/PrivacyPolicy";
import TermsConditions from "../pages/Settings/TermsConditions";

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
    name: "Sessions",
    path: "sessions",
    icon: FaRegClock,
    element: <Sessions />,
  },
  {
    name: "Parents",
    path: "parents",
    icon: LuUsers,
    element: <Parents />,
  },
  {
    path: "parents/assigned-professional/:id",
    icon: LuUsers,
    element: <AssignedProfessional />,
  },
  {
    name: "Professionals",
    path: "professionals",
    icon: LuBookUser,
    element: <Professionals />,
  },
  {
    name: "Resources",
    path: "resources",
    icon: GrResources,
    element: <Resources />,
  },
  {
    path: "resources/subject/:id",
    element: <Subjects />,
  },
  {
    path: "resources/materials/:id",
    element: <Materials />,
  },
  {
    name: "Calendar",
    path: "calendar",
    icon: MdOutlineEditCalendar,
    element: <Calendar />,
  },
  {
    name: "Message",
    path: "message",
    icon: FaRegMessage,
    element: <TabbedMessage />,
  },
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
      {
        name: "About Us",
        icon: FaServicestack,
        path: "settings/about",
        element: <About />,
      },
      {
        path: "settings/about/edit",
        element: <EditAbout />,
      },
      {
        name: "Terms & Services",
        icon: TbAirConditioning,
        path: "settings/terms",
        element: <TermsConditions />,
      },
      {
        path: "settings/terms/edit",
        element: <EditTermsConditions />,
      },
      {
        name: "Privacy Policy",
        icon: MdOutlineSecurityUpdateWarning,
        path: "settings/privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "settings/privacy/edit",
        element: <EditPrivacyPolicy />,
      },
    ],
  },
];
