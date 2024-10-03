import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    chartData: object[];
};

function ChartBox(props: Props) {
    return (
        <div className="flex justify-between">
            <div className=" flex flex-col justify-around">
                <div className="">
                    <span className="font-extrabold text-xl mb-4">
                        {props.title}
                    </span>
                </div>
                <h1 className="font-extrabold text-3xl">{props.number}</h1>
                <Link to="/" style={{ color: props.color }}>
                    View all
                </Link>
            </div>
            <div className="">
                <div className="h-28 w-auto">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={props.chartData}>
                            <Tooltip
                                contentStyle={{
                                    background: "transparent",
                                    border: "none",
                                }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 70 }}
                            />
                            <Line
                                type="monotone"
                                dataKey={props.dataKey}
                                stroke={props.color}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex flex-col items-end">
                    <span
                        className={
                            props.percentage < 0
                                ? "text-red-600"
                                : "text-green-600"
                        }
                    >
                        {props.percentage}%
                    </span>
                    <span className="">This Month</span>
                </div>
            </div>
        </div>
    );
}

export default ChartBox;
