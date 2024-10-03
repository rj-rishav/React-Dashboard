import {
    barChartBoxRevenue,
    barChartBoxVisit,
    chartBoxConversion,
    chartBoxProduct,
    chartBoxRevenue,
    chartBoxUser,
} from "../data";
import ChartBox from "../components/ChartBox";
import BarChartBox from "../components/BarChartBox";
import BigChartBox from "../components/BigChartBox";
import TopBox from "../components/TopBox";
import PieChartBox from "../components/PieChartBox";

function Home() {
    return (
        <div id="home" className="container">
            <div className="text-white grid gap-4 grid-cols-4 grid-rows-auto grid-auto-flow-dense">
                <div className="border-2 border-gray-400 p-2 col-span-1 row-span-3">
                    <TopBox />
                </div>
                <div className="border-2 border-gray-400 p-2">
                    <ChartBox {...chartBoxUser} />
                </div>
                <div className="border-2 border-gray-400 p-2">
                    <ChartBox {...chartBoxProduct} />
                </div>
                <div className="border-2 border-gray-400 p-2 col-span-1 row-span-3">
                    <PieChartBox />
                </div>
                <div className="border-2 border-gray-400 p-2">
                    <ChartBox {...chartBoxConversion} />
                </div>
                <div className="border-2 border-gray-400 p-2">
                    <ChartBox {...chartBoxRevenue} />
                </div>

                <div className="border-2 border-gray-400 p-2 col-span-2 row-span-2">
                    <BigChartBox />
                </div>
                <div className="border-2 border-gray-400 p-2 ">
                    <BarChartBox {...barChartBoxVisit} />
                </div>
                <div className="border-2 border-gray-400 p-2 col-span-1 row-span-2">
                    <BarChartBox {...barChartBoxRevenue} />
                </div>
            </div>
        </div>
    );
}

export default Home;
