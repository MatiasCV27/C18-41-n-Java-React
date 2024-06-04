import {
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { FormControl } from '../ui';

interface Props {
    selectIsActive: boolean;
    // recive field.onChange
}
//Este componete es para ser usado dentro del formItem
export const TimeZoneSelectView: React.FC<Props> = ({ selectIsActive }) => {
    return (
        <>
            <FormControl>
                <SelectTrigger disabled={selectIsActive} className="w-[280px]  disabled:border-0 disabeled:tex-zinc-800 disabled:bg-background  rounded border px-1 text-gray-700 border-gray-400 h-10 text-base font-medium placeholder:text-gray-400">
                    <SelectValue placeholder="Selecciona una zona horaria" />
                </SelectTrigger>
            </FormControl>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">
                        Eastern Standard Time (EST)
                    </SelectItem>
                    <SelectItem value="cst">
                        Central Standard Time (CST)
                    </SelectItem>
                    <SelectItem value="mst">
                        Mountain Standard Time (MST)
                    </SelectItem>
                    <SelectItem value="pst">
                        Pacific Standard Time (PST)
                    </SelectItem>
                    <SelectItem value="akst">
                        Alaska Standard Time (AKST)
                    </SelectItem>
                    <SelectItem value="hst">
                        Hawaii Standard Time (HST)
                    </SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Europe & Africa</SelectLabel>
                    <SelectItem value="gmt">
                        Greenwich Mean Time (GMT)
                    </SelectItem>
                    <SelectItem value="cet">
                        Central European Time (CET)
                    </SelectItem>
                    <SelectItem value="eet">
                        Eastern European Time (EET)
                    </SelectItem>
                    <SelectItem value="west">
                        Western European Summer Time (WEST)
                    </SelectItem>
                    <SelectItem value="cat">
                        Central Africa Time (CAT)
                    </SelectItem>
                    <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Asia</SelectLabel>
                    <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                    <SelectItem value="ist">
                        India Standard Time (IST)
                    </SelectItem>
                    <SelectItem value="cst_china">
                        China Standard Time (CST)
                    </SelectItem>
                    <SelectItem value="jst">
                        Japan Standard Time (JST)
                    </SelectItem>
                    <SelectItem value="kst">
                        Korea Standard Time (KST)
                    </SelectItem>
                    <SelectItem value="ist_indonesia">
                        Indonesia Central Standard Time (WITA)
                    </SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Australia & Pacific</SelectLabel>
                    <SelectItem value="awst">
                        Australian Western Standard Time (AWST)
                    </SelectItem>
                    <SelectItem value="acst">
                        Australian Central Standard Time (ACST)
                    </SelectItem>
                    <SelectItem value="aest">
                        Australian Eastern Standard Time (AEST)
                    </SelectItem>
                    <SelectItem value="nzst">
                        New Zealand Standard Time (NZST)
                    </SelectItem>
                    <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>South America</SelectLabel>
                    <SelectItem value="art">Argentina Time (ART)</SelectItem>
                    <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                    <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                    <SelectItem value="clt">
                        Chile Standard Time (CLT)
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </>
    );
};
