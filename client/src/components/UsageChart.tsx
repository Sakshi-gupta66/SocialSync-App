import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { AppUsage } from "../data/screenTimeData";

export default function UsageChart({ data }: { data: AppUsage[] }) {
  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="app" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="minutes" fill="#1890ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
