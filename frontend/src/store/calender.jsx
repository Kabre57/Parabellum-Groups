var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();

var tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

var yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
var y_dd = String(yesterday.getDate()).padStart(2, "0");
var y_mm = String(yesterday.getMonth() + 1).padStart(2, "0");
var y_yyyy = yesterday.getFullYear();

var YM = yyyy + "-" + mm;
var YESTERDAY = y_yyyy + "-" + y_mm + "-" + y_dd;
var TODAY = yyyy + "-" + mm + "-" + dd;

var month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const returnDate = (date) => {
  if (date !== undefined) {
    const dateSection = date.split("-");
    let newDate = dateSection[2] + " " + month[Number(dateSection[1]) - 1] + " " + dateSection[0];
    return newDate;
  }
};

export const events = [
  {
      id: 'default-event-id-' + Math.floor(Math.random()*9999999),
      title: 'Reader will be distracted',
      start: YM + '-03T13:30:00',
      end: YM + '-03T14:30:00',
      className: "fc-event-danger",
      description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden. 1",
  },
  {
      id: 'default-event-id-' + Math.floor(Math.random()*9999999),
      title: 'Rabfov va hezow.',
      start: YM + '-14T13:30:00',
      end: YM + '-14',
      className: "fc-event-success",
      description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
      id: 'default-event-id-' + Math.floor(Math.random()*9999999),
      title: 'The leap into electronic',
      start: YM + '-05',
      end: YM + '-06',
      className: "fc-event-primary",
      description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
      id: 'default-event-id-' + Math.floor(Math.random()*9999999),
      title: 'Lorem Ipsum passage - Product Release',
      start: YM + '-02',
      end: YM + '-04',
      className: "fc-event-primary",
      description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
    id: 'default-event-id-' + Math.floor(Math.random()*9999999),
      title: 'Gibmuza viib hepobe.',
      start: YM + '-12',
      end: YM + '-10',
      className: "fc-event-pink-soft",
      description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
      id: 'default-event-id-' + Math.floor(Math.random()*9999999),
      title: 'Jidehse gegoj fupelone.',
      start: YM + '-07T16:00:00',
      end: YM + '-07T17:00:00',
      className: "fc-event-danger-soft",
      description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
      id: 'default-event-id-' + Math.floor(Math.random()*9999999),
      title: 'Ke uzipiz zip.',
      start: YM + '-16T16:00:00',
      end: YM + '-14',
      className: "fc-event-info-soft",
      description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
      id: 'default-event-id-' + Math.floor(Math.random()*9999999),
      title: 'Piece of classical Latin literature',
      start: TODAY,
      end: TODAY + 'T11:00:00',
      className: "fc-event-primary",
      description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
      id: 'default-event-id-' + Math.floor(Math.random()*9999999),
      title: 'Nogok kewwib ezidbi.',
      start: TODAY + 'T10:00:00',
      end: TODAY + 'T11:00:00',
      className: "fc-event-info",
      description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
      id: 'default-event-id-' + Math.floor(Math.random()*9999999),
      title: 'Mifebi ik cumean.',
      start: TODAY + 'T14:30:00',
      end: TODAY + 'T15:30:00',
      className: "fc-event-warning-soft",
      description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
      id: 'default-event-id-' + Math.floor(Math.random()*9999999),
      title: 'Play Time',
      start: TODAY + 'T17:30:00',
      end: TODAY + 'T18:30:00',
      className: "fc-event-info",
      description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
      id: 'default-event-id-' + Math.floor(Math.random()*9999999),
      title: 'Rujfogve kabwih haznojuf.',
      start: YESTERDAY + 'T05:00:00',
      end: YESTERDAY + 'T06:00:00',
      className: "fc-event-danger",
      description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  },
  {
      id: 'default-event-id-' + Math.floor(Math.random()*9999999),
      title: 'simply dummy text of the printing',
      start: YESTERDAY + 'T07:00:00',
      end: YESTERDAY + 'T08:00:00',
      className: "fc-event-primary-soft",
      description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
  }
];

export const eventOptions = [
    { value: 'fc-event-primary', label: 'Company' },
    { value: 'fc-event-success', label: 'Seminars' },
    { value: 'fc-event-info', label: 'Conferences' },
    { value: 'fc-event-warning', label: 'Meeting' },
    { value: 'fc-event-danger', label: 'Business dinners' },
    { value: 'fc-event-secondary', label: 'Private' },
    { value: 'fc-event-pink', label: 'Workshop' },
    { value: 'fc-event-primary-soft', label: 'Auctions' },
    { value: 'fc-event-success-soft', label: 'Networking events' },
    { value: 'fc-event-info-soft', label: 'Product launches' },
    { value: 'fc-event-warning-soft', label: 'Fundrising' },
    { value: 'fc-event-danger-soft', label: 'Sponsored' },
    { value: 'fc-event-secondary-soft', label: 'Sports events' },
    { value: 'fc-event-pink-soft', label: 'Exhibition' },
];
