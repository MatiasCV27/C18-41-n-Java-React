import { BellDot, Zap } from 'lucide-react';
import DropdownUserContainer from '../DropdownUser/DropdownUser.container';
import UserHomeSearchContainer from '../UserHomeSearch/UserHomeSearch.container';

const DashboardHeaderView = () => {
    return (
        <>
            <div className="w-full flex justify-between items-center py-5 px-6">
                <h1 className="text-2xl grow-0 font-bold tracking-wide bg-transparent ">
                    <span className="text-accent">Swap</span> It Up
                </h1>
                <div className="grow mx-16">
                    <UserHomeSearchContainer />
                </div>
                <div className="flex grow-0 items-center justify-between">
                    <div className="flex-1 flex items-center justify-end space-x-6">
                        <div className="flex space-x-0.5 rounded-2xl bg-secondary px-3 py-3 items-center">
                            <span className="text-black font-medium text-xl">
                                1
                            </span>
                            <div className="bg-accent rounded-full p-1 border-[1.5px] border-black">
                                <Zap
                                    size={12}
                                    strokeWidth={2}
                                    color="black"
                                    fill="white"
                                />
                            </div>
                        </div>
                        <div className='rounded-2xl bg-white p-3'>
                            <BellDot size={30} color="black" />
                        </div>

                        <DropdownUserContainer />
                    </div>
                </div>
            </div>
        </>
    );
};
export default DashboardHeaderView;
