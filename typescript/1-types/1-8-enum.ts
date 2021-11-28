{
    // Enum

    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 20;

    const MONDAY = 0;
    const TUESDAY = 1;

    const DAYS_ENUM = Object.freeze({ MONDAY : 0, TUESDAY : 1, WEDNESDAY : 2 });

    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    enum Days {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    console.log(Days.Thursday)
}