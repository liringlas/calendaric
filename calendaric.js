"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calendaricOfMonth = exports.WEEK_DAYS = void 0;
exports.WEEK_DAYS = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    0: "Sunday",
};
// Utility functions
var incrementOneDay = function (date) {
    date.setDate(date.getDate() + 1);
    return date;
};
var getWeekDayName = function (date) {
    return exports.WEEK_DAYS[date.getDay()];
};
var makeEmptyCalendaricWeek = function () { return ({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    0: null,
}); };
var populateWeeks = function (weeksArray, day, isLastDayOfMonth) {
    // Add first week
    if (weeksArray.length === 0) {
        weeksArray.push(makeEmptyCalendaricWeek());
    }
    var lastIterableWeek = weeksArray[weeksArray.length - 1];
    lastIterableWeek[day.weekDay] = day;
    var isSunday = day.weekDay === 0;
    // It's sunday but not the last day of month
    if (isSunday && !isLastDayOfMonth) {
        weeksArray.push(makeEmptyCalendaricWeek());
    }
    return weeksArray;
};
// Notice that months range is from 0 to 11
function calendaricOfMonth(_a) {
    var month = _a.month, year = _a.year;
    var initial = new Date(year, month);
    var initial_month = initial.getMonth();
    var iterated = initial;
    var weekDays = Object.keys(exports.WEEK_DAYS).map(Number);
    var calendaricDaysMap = new Map(weekDays.map(function (week_day) { return [week_day, []]; }));
    var calendaricWeeks = [];
    // Is it still the same month we're iterating?
    while (iterated.getMonth() === initial_month) {
        var weekDay = iterated.getDay();
        var day = iterated.getDate();
        var weekDayName = getWeekDayName(iterated);
        var calendaricDay = {
            day: day,
            weekDayName: weekDayName,
            weekDay: weekDay,
            month: month,
            year: year,
        };
        // Mutate to next day
        iterated = incrementOneDay(iterated);
        // Check if iterated day belongs to the next month
        var isLastDayOfMonth = iterated.getMonth() !== initial_month;
        calendaricDaysMap.set(weekDay, __spreadArray(__spreadArray([], (calendaricDaysMap.get(weekDay) || []), true), [
            calendaricDay,
        ], false));
        calendaricWeeks = populateWeeks(calendaricWeeks, calendaricDay, isLastDayOfMonth);
    }
    return { calendaricDaysMap: calendaricDaysMap, calendaricWeeks: calendaricWeeks };
}
exports.calendaricOfMonth = calendaricOfMonth;
