import { TimeZoneSelectView } from './TimeZoneSelect.view';

interface Props {
    selectIsActive: boolean;
}
const TimeZoneSelectContainer: React.FC<Props> = ({ selectIsActive }) => {
    return <TimeZoneSelectView selectIsActive={selectIsActive} />;
};

export default TimeZoneSelectContainer;
