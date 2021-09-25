export declare const WEEK_DAYS: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    0: string;
};
export declare type WeekDays = keyof typeof WEEK_DAYS;
export declare type CalendaricDay = {
    day: number;
    weekDayName: string;
    weekDay: WeekDays;
    month: number;
    year: number;
};
export declare type CalendaricWeek = {
    [key in WeekDays]: CalendaricDay | null;
};
export declare type MonthDaysGeneratorProps = {
    month: number;
    year: number;
    asMap?: boolean;
    asWeeksArray?: boolean;
};
export declare function calendaricOfMonth({ month, year }: MonthDaysGeneratorProps): {
    calendaricDaysMap: Map<0 | 1 | 2 | 3 | 4 | 5 | 6, CalendaricDay[]>;
    calendaricWeeks: CalendaricWeek[];
};
