import { BellDot, Zap } from 'lucide-react';
import DropdownUserContainer from '../DropdownUser/DropdownUser.container';
import UserHomeSearchContainer from '../UserHomeSearch/UserHomeSearch.container';

const DashboardHeaderView = () => {
    return (
        <>
            <div className="w-full flex justify-between items-center py-5 px-6">
                <h1 className="text-2xl font-bold tracking-wide bg-transparent ">
                    <span className="text-accent">Swap</span> It Up
                </h1>
                <UserHomeSearchContainer />
                <div className="flex items-center justify-between  ">
                    <div className="flex-1 flex items-center justify-end space-x-6">
                        <div className="flex space-x-2">
                            <span className="text-black font-medium text-xl">
                                1
                            </span>
                            <div className="bg-accent rounded-full p-1 border border-black">
                                <Zap
                                    size={25}
                                    strokeWidth={2}
                                    color="black"
                                    fill="yellow"
                                />
                            </div>
                        </div>
                        <BellDot size={30} color="black" />

                        <DropdownUserContainer />
                    </div>
                </div>
            </div>
        </>
    );
};
export default DashboardHeaderView;
