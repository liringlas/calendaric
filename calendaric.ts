export const WEEK_DAYS = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  0: "Sunday",
};

export type WeekDays = keyof typeof WEEK_DAYS;

export type CalendaricDay = {
  day: number;
  weekDayName: string;
  weekDay: WeekDays;
  month: number;
  year: number;
};

export type CalendaricWeek = {
  [key in WeekDays]: CalendaricDay | null;
};

// Utility functions
let incrementOneDay = (date: Date): Date => {
  date.setDate(date.getDate() + 1);
  return date;
};

let getWeekDayName = (date: Date): string =>
  WEEK_DAYS[date.getDay() as WeekDays];

let populateWeeks = (
  weeksArray: CalendaricWeek[],
  day: CalendaricDay,
  isLastDayOfMonth: boolean
) => {
  // Add first week
  if (weeksArray.length === 0) {
    weeksArray.push({
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
    });
  }

  let lastIterableWeek = weeksArray[weeksArray.length - 1];
  lastIterableWeek[day.weekDay] = day;

  let isSunday = day.weekDay === 0;

  // It's sunday but not the last day of month
  if (isSunday && !isLastDayOfMonth) {
    weeksArray.push({
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
    });
  }

  return weeksArray;
};

export type MonthDaysGeneratorProps = {
  month: number;
  year: number;
  asMap?: boolean;
  asWeeksArray?: boolean;
};

// Notice that months range is from 0 to 11
export function calendaricOfMonth({ month, year }: MonthDaysGeneratorProps) {
  let initial = new Date(year, month);
  let initial_month = initial.getMonth();
  let iterated = initial;

  let weekDays = Object.keys(WEEK_DAYS).map(Number) as WeekDays[];

  let calendaricDaysMap = new Map<WeekDays, CalendaricDay[]>(
    weekDays.map((week_day: WeekDays) => [week_day, []])
  );
  let calendaricWeeks: CalendaricWeek[] = [];

  // Is it still the same month we're iterating?
  while (iterated.getMonth() === initial_month) {
    let weekDay = iterated.getDay() as WeekDays;
    let day = iterated.getDate();
    let weekDayName = getWeekDayName(iterated);

    let calendaricDay: CalendaricDay = {
      day,
      weekDayName,
      weekDay,
      month,
      year,
    };

    // Mutate to next day
    iterated = incrementOneDay(iterated);

    // Check if iterated day belongs to the next month
    let isLastDayOfMonth = iterated.getMonth() !== initial_month;

    calendaricDaysMap.set(weekDay, [
      ...(calendaricDaysMap.get(weekDay) || []),
      calendaricDay,
    ]);
    calendaricWeeks = populateWeeks(
      calendaricWeeks,
      calendaricDay,
      isLastDayOfMonth
    );
  }

  return { calendaricDaysMap, calendaricWeeks };
}
