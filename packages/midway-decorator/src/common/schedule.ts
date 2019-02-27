import { saveClassMetaData, saveModule, scope, ScopeEnum } from 'injection';
import { SCHEDULE_KEY } from '../constant';

export interface SchedueOpts {
  type: string;
  cron?: string;
  interval?: number | string;
  immediate?: boolean;
  disable?: boolean;
  env?: [string];
  cronOptions?: {
    currentDate: string,
    endDate: string,
  };
}

export function schedule(scheduleOpts: SchedueOpts | string) {
  return function (target: any): void {
    saveModule(SCHEDULE_KEY, target);
    saveClassMetaData(SCHEDULE_KEY, scheduleOpts, target);
    scope(ScopeEnum.Request)(target);
  };
}