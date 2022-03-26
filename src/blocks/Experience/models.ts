import { TLangRecord } from '../../models';

export interface IExperience {
    company:TLangRecord;
    grade:TLangRecord;
    startDate:Date;
    endDate?:Date;
    duties:TLangRecord[];
    achievements:TLangRecord[];
}
