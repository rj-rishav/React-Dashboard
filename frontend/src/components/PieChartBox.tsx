import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
];

function PieChartBox() {
    return (
        <div className="flex flex-col">
            <h1 className="text-xl font-extrabold">Leads by Source</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={300}>
                    <PieChart>
                        <Tooltip
                            contentStyle={{
                                background: "white",
                                borderRadius: "5px",
                            }}
                        />
                        <Pie
                            data={data}
                            innerRadius={"70%"}
                            outerRadius={"90%"}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="flex gap-6">
                {data.map((item, index) => (
                    <div className="flex gap-2 items-center" key={index}>
                        <div className="title">
                            <div
                                className={`h-2 w-2 rounded-full bg-[${item.color}]`}
                            />
                        </div>
                        <div className="flex flex-col">
                            <span>{item.name}</span>
                            <span>{item.value}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PieChartBox;
