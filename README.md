# calendaric

### If lib size is matter for you
[Compiled JS file is just 2.9Kb](/calendaric.js)

### Simple utility for generating calendar days

```js
import { calendaricOfMonth } from "caledaric";

//  Notice that months range is from 0 to 11
let { calendaricWeeks } = calendaricOfMonth({
  month: 8,
  year: 2021,
});

//  Days of week are mapped like that:
//  1: "Monday"
//  2: "Tuesday"
//  3: "Wednesday"
//  4: "Thursday"
//  5: "Friday"
//  6: "Saturday"
//  0: "Sunday"

// You get calendaricWeeks:
[
  {
    1: null,
    2: null,
    3: { day: 1, weekDayName: "Wednesday", weekDay: 3, month: 8, year: 2021 },
    4: { day: 2, weekDayName: "Thursday", weekDay: 4, month: 8, year: 2021 },
    5: { day: 3, weekDayName: "Friday", weekDay: 5, month: 8, year: 2021 },
    6: { day: 4, weekDayName: "Saturday", weekDay: 6, month: 8, year: 2021 },
    0: { day: 5, weekDayName: "Sunday", weekDay: 0, month: 8, year: 2021 },
  },

  {
    1: { day: 6, weekDayName: "Monday", weekDay: 1, month: 8, year: 2021 },
    2: { day: 7, weekDayName: "Tuesday", weekDay: 2, month: 8, year: 2021 },
    3: { day: 8, weekDayName: "Wednesday", weekDay: 3, month: 8, year: 2021 },
    4: { day: 9, weekDayName: "Thursday", weekDay: 4, month: 8, year: 2021 },
    5: { day: 10, weekDayName: "Friday", weekDay: 5, month: 8, year: 2021 },
    6: { day: 11, weekDayName: "Saturday", weekDay: 6, month: 8, year: 2021 },
    0: { day: 12, weekDayName: "Sunday", weekDay: 0, month: 8, year: 2021 },
  },

  {
    1: { day: 13, weekDayName: "Monday", weekDay: 1, month: 8, year: 2021 },
    2: { day: 14, weekDayName: "Tuesday", weekDay: 2, month: 8, year: 2021 },
    3: { day: 15, weekDayName: "Wednesday", weekDay: 3, month: 8, year: 2021 },
    4: { day: 16, weekDayName: "Thursday", weekDay: 4, month: 8, year: 2021 },
    5: { day: 17, weekDayName: "Friday", weekDay: 5, month: 8, year: 2021 },
    6: { day: 18, weekDayName: "Saturday", weekDay: 6, month: 8, year: 2021 },
    0: { day: 19, weekDayName: "Sunday", weekDay: 0, month: 8, year: 2021 },
  },

  {
    1: { day: 20, weekDayName: "Monday", weekDay: 1, month: 8, year: 2021 },
    2: { day: 21, weekDayName: "Tuesday", weekDay: 2, month: 8, year: 2021 },
    3: { day: 22, weekDayName: "Wednesday", weekDay: 3, month: 8, year: 2021 },
    4: { day: 23, weekDayName: "Thursday", weekDay: 4, month: 8, year: 2021 },
    5: { day: 24, weekDayName: "Friday", weekDay: 5, month: 8, year: 2021 },
    6: { day: 25, weekDayName: "Saturday", weekDay: 6, month: 8, year: 2021 },
    0: { day: 26, weekDayName: "Sunday", weekDay: 0, month: 8, year: 2021 },
  },

  {
    1: { day: 27, weekDayName: "Monday", weekDay: 1, month: 8, year: 2021 },
    2: { day: 28, weekDayName: "Tuesday", weekDay: 2, month: 8, year: 2021 },
    3: { day: 29, weekDayName: "Wednesday", weekDay: 3, month: 8, year: 2021 },
    4: { day: 30, weekDayName: "Thursday", weekDay: 4, month: 8, year: 2021 },
    5: null,
    6: null,
    0: null,
  },
];
```

Which can be represented as:

![Tux, the Linux mascot](/example.png)

Enjoy.
