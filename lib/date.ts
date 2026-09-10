const parseDate = (dateString: string): Date | undefined => {
  const germanDateMatch = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(dateString);

  if (germanDateMatch) {
    const [, day, month, year] = germanDateMatch;
    const date = new Date(Number(year), Number(month) - 1, Number(day));

    if (
      date.getFullYear() === Number(year) &&
      date.getMonth() === Number(month) - 1 &&
      date.getDate() === Number(day)
    ) {
      return date;
    }

    return undefined;
  }

  const date = new Date(dateString);
  return Number.isNaN(date.getTime()) ? undefined : date;
};

export const formatDateTime = (dateString: string) => {
  if (!dateString) return "";
  const date = parseDate(dateString);
  if (!date) return dateString;
  // return only the date if the date string has no time
  if (dateString.length === 10)
    return new Intl.DateTimeFormat("de-de", {
      dateStyle: "short",
      timeStyle: "short",
    })
      .format(date)
      .split(",")[0];
  // then specify how you want your dates to be formatted
  return new Intl.DateTimeFormat("de-de", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
};

export const formatDate = (dateString: string) => {
  if (!dateString) return "";
  const date = parseDate(dateString);
  if (!date) return dateString;
  // return only the date if the date string has no time
  if (dateString.length === 10)
    return new Intl.DateTimeFormat("de-de", {
      dateStyle: "short",
    })
      .format(date)
      .split(",")[0];
  // then specify how you want your dates to be formatted
  return new Intl.DateTimeFormat("de-de", {
    dateStyle: "short",
  }).format(date);
};

export interface FormattedDate {
  day: string;
  month: string;
  shortMonth: string;
  year: string;
  formatted: string;
  groupDate: string;
}

export const formatDateToObject = (dateString: string): FormattedDate => {
  const date = parseDate(dateString);
  if (!date) {
    return {
      day: "",
      month: "",
      shortMonth: "",
      year: "",
      formatted: dateString,
      groupDate: "",
    };
  }

  return {
    day: date.getDate().toString(),
    month: date.getMonth().toString(),
    shortMonth: date.toLocaleDateString("default", { month: "short" }),
    year: date.getFullYear().toString(),
    formatted: formatDate(date.toISOString()),
    groupDate: date.toLocaleDateString(),
  };
};
