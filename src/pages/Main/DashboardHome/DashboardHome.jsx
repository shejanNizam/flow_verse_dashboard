import { FaUsers } from "react-icons/fa6";
import { StatCard } from "../../../utils/utils";

export default function DashboardHome() {
  // const [year, setYear] = useState(dayjs().year());
  // const { data } = useGetAllStatsQuery(year);
  // console.log(data?.data);

  // const totalParents = data?.data?.totalParents || "N/A";
  // const totalTutors = data?.data?.totalTutors || "N/A";
  // const totalSessions = data?.data?.totalSessions || "N/A";
  // const monthlySessions = data?.data?.monthlySessions || [];

  const totalParents = "1320";
  const totalTutors = "8";

  return (
    <div className="space-y-6 p-2 md:p-4">
      <div className="border border-gray-200 rounded-xl shadow-sm p-4">
        <h3>Hi, Good Morning</h3>
        <h2 className="text-2xl font-semibold">Mini Roy</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Users"
          value={totalParents}
          icon={FaUsers}
          colorClass="bg-blue-100 text-blue-600"
        />

        <StatCard
          title="Todays New User's"
          value={totalTutors}
          icon={FaUsers}
          colorClass="bg-green-100 text-green-600"
        />
      </div>

      {/* <div>
        <DashboardChart
          monthlySessions={monthlySessions}
          year={year}
          setYear={setYear}
        />
      </div> */}
    </div>
  );
}
