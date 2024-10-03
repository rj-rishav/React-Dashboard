import { topDealUsers } from "../data";

function TopBox() {
    return (
        <div className="mx-2 ">
            <h1 className="font-extrabold text-xl mb-4">Top Deals</h1>
            <div className="list">
                {topDealUsers.map((user) => (
                    <div className="flex items-center justify-between py-1" key={user.id}>
                        <div className="flex gap-4">
                            <img className="h-8 w-8 rounded-full" src={user.img} alt="" />
                            <div className="flex flex-col">
                                <span className="username">
                                    {user.username}
                                </span>
                                <span className="email">{user.email}</span>
                            </div>
                        </div>
                        <span className="amount">${user.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopBox;
