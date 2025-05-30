import User from "/images/avatar/a-sm.jpg";
import User1 from "/images/avatar/b-sm.jpg";
import User2 from "/images/avatar/c-sm.jpg";
import User3 from "/images/avatar/d-sm.jpg";

export const inboxMessages = [
  {
    id: 1,
    user: {
      name: "Abu Bin Ishtiyak",
      image: "/images/avatar/a-sm.jpg",
    },
    attachment: false,
    unread: false,
    favourite: false,
    time:"10:00 AM",
    message: {
      subject: "Can we help you set up email forwording?",
      excerpt : " We’ve noticed you haven’t set up email forward ",
      reply: [
        {
          id: "rep_1",
          user: {
            name: "Abu Bin Ishtiyak",
            image: "/images/avatar/a-sm.jpg",
          },
          attachment: [{ name: "error-file.jpg" }, { name: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:00 AM",
          message: [
            "Hello team",
            "I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
        {
          id: "rep_2",
          user: {
            name: "Mildred Delgado",
            image: "/images/avatar/c-sm.jpg",
          },
          to: { user: 1, bcc: "team@softnio.com" },
          date: "14 Jan, 2020",
          time: "10:00 AM",
          message: [
            "Hello",
            "You valued response is very welcome, Our team will go over the issues that you have discussed and resolve it as soon as possible",
            "Thank you",
          ],
        },
        {
          id: "rep_3",
          user: {
            name: "Abu Bin Ishtiyak",
            image: "/images/avatar/a-sm.jpg",
          },
          date: "14 Jan, 2020",
          time: "10:00 AM",
          message: ["okayy", "Please let me know as soon as possible", "Thank you"],
        },
      ],
    },
  },
  {
    id: 2,
    user: {
      name: "Ricardo Salazar",
      image: "/images/avatar/b-sm.jpg",
    },
    badge: {
      text: "Feedback",
      theme: "primary"
    },
    attachment: true,
    unread: true,
    favourite: true,
    time:"10:00 AM",
    message: {
      subject: "Can we help you set up email forwording?",
      excerpt : " We’ve noticed you haven’t set up email forward ",
      reply: [
        {
          id: "rep_1",
          user: {
            name: "Ricardo Salazar",
            image: "/images/avatar/b-sm.jpg",
          },
          attachment: [{ name: "error-file.jpg" }, { name: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:00 AM",
          message: [
            "Hello team",
            "I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
      ],
    },
  },
  {
    id: 3,
    user: {
      name: "Larry Hughes",
      theme: "primary"
    },
    attachment: false,
    unread: true,
    favourite: false,
    time:"10:30 AM",
    message: {
      subject: "Individual Modal and Alert Design.",
      excerpt : "Please use the attached file for modal.",
      reply: [
        {
          id: "rep_1",
          user: {
            name: "Larry Hughes",
            theme: "primary"
          },
          attachment: [{ name: "error-file.jpg" }, { name: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:30 AM",
          message: [
            "Hello team",
            "I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
      ],
    },
  },
  {
    id: 4,
    user: {
      name: "Laura Matthews",
      image: "/images/avatar/c-sm.jpg",
    },
    badge: {
      text: "Social",
      theme: "green"
    },
    attachment: false,
    unread: false,
    favourite: true,
    time:"10:30 AM",
    message: {
      subject: "Laravel Developer - Interview List",
      excerpt : "https://docs.google.com/document/d/12oOKEs4qjMlUiHXNVjHJBK",
      reply: [
        {
          id: "rep_1",
          user: {
            name: "Laura Matthews",
            image: "/images/avatar/c-sm.jpg",
          },
          attachment: [{ name: "error-file.jpg" }, { name: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:30 AM",
          message: [
            "Hello team",
            "I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
      ],
    },
  },
  {
    id: 5,
    user: {
      name: "Tammy Wilson",
      image: "/images/avatar/d-sm.jpg",
    },
    attachment: false,
    unread: false,
    favourite: true,
    time:"10:00 AM",
    message: {
      subject: "TokenWiz - New Page",
      excerpt : "here are the 2 screens I would to implement with TokenWiz",
      reply: [
        {
          id: "rep_1",
          user: {
            name: "Tammy Wilson",
            image: "/images/avatar/d-sm.jpg",
          },
          attachment: [{ name: "error-file.jpg" }, { name: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:00 AM",
          message: [
            "Hello team",
            "I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
      ],
    },
  },
  {
    id: 6,
    user: {
      name: "Sara Phillips",
      theme: "indigo"
    },
    attachment: true,
    unread: true,
    favourite: true,
    time:"10:00 AM",
    message: {
      subject: "TokenLite Promo Assets",
      excerpt : "Please check out attached.",
      reply: [
        {
          id: "rep_1",
          user: {
            name: "Sara Phillips",
            theme: "indigo"
          },
          attachment: [{ name: "error-file.jpg" }, { name: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:00 AM",
          message: [
            "Hello team",
            "I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
      ],
    },
  },
  {
    id: 7,
    user: {
      name: "Mildred Arnold",
      theme: "purple"
    },
    attachment: false,
    unread: false,
    favourite: false,
    time:"10:30 AM",
    message: {
      subject: "Token Page Content.",
      excerpt : "Please check included links for content.",
      reply: [
        {
          id: "rep_1",
          user: {
            name: "Mildred Arnold",
            theme: "purple"
          },
          attachment: [{ name: "error-file.jpg" }, { name: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:30 AM",
          message: [
            "Hello team",
            "I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
      ],
    },
  },
  {
    id: 8,
    user: {
      name: "Abu Bin Ishtiyak",
      image: "/images/avatar/a-sm.jpg",
    },
    badge: {
      text: "Personal",
      theme: "red"
    },
    attachment: false,
    unread: false,
    favourite: false,
    time:"10:00 AM",
    message: {
      subject: "Feedback about licenses and support policy",
      excerpt : "Two important aspects of the marketplace are its licenses, which govern the use of your items by customers",
      reply: [
        {
          id: "rep_1",
          user: {
            name: "Abu Bin Ishtiyak",
            image: "/images/avatar/a-sm.jpg",
          },
          attachment: [{ name: "error-file.jpg" }, { name: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:00 AM",
          message: [
            "Hello team",
            "I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
      ],
    },
  },
  {
    id: 9,
    user: {
      name: "Tammy Wilson",
      image: "/images/avatar/d-sm.jpg",
    },
    badge: {
      text: "Team",
      theme: "sky"
    },
    attachment: false,
    unread: false,
    favourite: true,
    time:"10:30 AM",
    message: {
      subject: "Thanks for completing our survey",
      excerpt : "Since you've already completed our survey we wanted to give you the opportunity to win as well",
      reply: [
        {
          id: "rep_1",
          user: {
            name: "Tammy Wilson",
            image: "/images/avatar/d-sm.jpg",
          },
          attachment: [{ name: "error-file.jpg" }, { name: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:30 AM",
          message: [
            "Hello team",
            "I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
      ],
    },
  },
  {
    id: 10,
    user: {
      name: "Ricardo Salazar",
      image: "/images/avatar/b-sm.jpg",
    },
    attachment: false,
    unread: false,
    favourite: false,
    time:"10:30 AM",
    message: {
      subject: "Registration Confirmation for Envato Worldwide",
      excerpt : "The event organizer has provided the following information",
      reply: [
        {
          id: "rep_1",
          user: {
            name: "Ricardo Salazar",
            image: "/images/avatar/b-sm.jpg",
          },
          attachment: [{ name: "error-file.jpg" }, { name: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:30 AM",
          message: [
            "Hello team",
            "I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
      ],
    },
  },
  {
    id: 11,
    user: {
      name: "Catherine Larson",
      theme: "pink"
    },
    attachment: true,
    unread: false,
    favourite: false,
    time:"10:30 AM",
    message: {
      subject: "Bring personality to your design work.",
      excerpt : "As designers, how we tell our stories is key. We must be unique, genuine, and use language with purpose to get meaningful results in our design work.",
      reply: [
        {
          id: "rep_1",
          user: {
            name: "Catherine Larson",
            theme: "pink"
          },
          attachment: [{ name: "error-file.jpg" }, { name: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:30 AM",
          message: [
            "Hello team",
            "I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
      ],
    },
  },
  {
    id: 12,
    user: {
      name: "Sara Phillips",
      theme: "indigo"
    },
    attachment: false,
    unread: false,
    favourite: false,
    time:"10:30 AM",
    message: {
      subject: "Unique design portfolio examples.",
      excerpt : "Prepare to be blown away with our favourite unique design portfolio examples built",
      reply: [
        {
          id: "rep_1",
          user: {
            name: "Sara Phillips",
            theme: "indigo"
          },
          attachment: [{ name: "error-file.jpg" }, { name: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:30 AM",
          message: [
            "Hello team",
            "I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
      ],
    },
  },
  {
    id: 13,
    user: {
      name: "Laura Matthews",
      image: "/images/avatar/c-sm.jpg",
    },
    badge: {
      text: "Personal",
      theme: "red"
    },
    attachment: false,
    unread: false,
    favourite: false,
    time:"10:30 AM",
    message: {
      subject: "Credit Card Verification Incomplete.",
      excerpt : "Your recently submitted credit card verification has NOT been completed. We found the following errors in your submission.",
      reply: [
        {
          id: "rep_1",
          user: {
            name: "Laura Matthews",
            image: "/images/avatar/c-sm.jpg",
          },
          attachment: [{ name: "error-file.jpg" }, { name: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:30 AM",
          message: [
            "Hello team",
            "I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
      ],
    },
  },
  {
    id: 14,
    user: {
      name: "Maria Grant",
      theme: "secondary"
    },
    badge: {
      text: "Feedback",
      theme: "primary"
    },
    attachment: false,
    unread: false,
    favourite: false,
    time:"10:30 AM",
    message: {
      subject: "Introducing npm’s security insights API.",
      excerpt : "Something I think is very important to supply chain security is to have the right information available to make decisions about risk",
      reply: [
        {
          id: "rep_1",
          user: {
            name: "Maria Grant",
            theme: "secondary"
          },
          attachment: [{ name: "error-file.jpg" }, { name: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:30 AM",
          message: [
            "Hello team",
            "I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
      ],
    },
  },
  {
    id: 15,
    user: {
      name: "Timothy Nichols",
      theme: "secondary"
    },
    attachment: false,
    unread: false,
    favourite: false,
    time:"10:30 AM",
    message: {
      subject: "Do your table designs pass The Lunch Test",
      excerpt : "This email goes out to everyone who designs data-heavy applications. Lists and tables aren’t exactly the sexiest part of design, but in my own personal experience",
      reply: [
        {
          id: "rep_1",
          user: {
            name: "Timothy Nichols",
            theme: "secondary"
          },
          attachment: [{ name: "error-file.jpg" }, { name: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:30 AM",
          message: [
            "Hello team",
            "I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
      ],
    },
  },
  {
    id: 16,
    user: {
      name: "Jenkins Lori",
      theme: "primary"
    },
    attachment: false,
    unread: false,
    favourite: false,
    time:"10:30 AM",
    message: {
      subject: "Can I get email alerts.",
      excerpt : "If you subscribe to email notifications, you will receive an email alert",
      reply: [
        {
          id: "rep_1",
          user: {
            name: "Jenkins Lori",
            theme: "primary"
          },
          attachment: [{ name: "error-file.jpg" }, { name: "full-page-error.jpg" }],
          date: "14 Jan, 2020",
          time: "10:30 AM",
          message: [
            "Hello team",
            "I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.",
            "Thank you",
          ],
        },
      ],
    },
  },
]
export const draftList = [
  {
    id: 1,
    meta: {
      time: "05:45 PM",
      subject: "Decline a job offer",
      message: "I have been facing trouble since yesterday to open my account",
      tags: ["Business"],
      checked: false,
    },
  },
  {
    id: 2,
    meta: {
      time: "07:45 PM",
      subject: "Grateful Reply",
      message: "Thank you for taking our time to mailing your issue, we will go though the problem",
      tags: ["Management"],
      checked: false,
    },
  },
  {
    id: 3,
    meta: {
      time: "10:10 PM",
      subject: "Approach a customer",
      message: "Is it possible to talk for a few minutes",
      tags: [""],
      checked: false,
    },
  },
  {
    id: 4,
    meta: {
      time: "01:32 AM",
      subject: "Decline a job offer",
      message: "I would like to decline an offer made",
      tags: ["Mail"],
      checked: false,
    },
  },
];

export const inboxNav = [
  {
    name: "Inbox",
    icon: "inbox",
    active: true,
    badge: {
      text: "8",
      theme: "primary",
    },
  },
  {
    name: "Draft",
    icon: "edit",
    badge: {
      text: "12",
      theme: "light",
    },
  },
  {
    name: "Favourite",
    icon: "star",
  },
  {
    name: "Sent",
    icon: "send",
  },
  {
    name: "Archive",
    icon: "archive",
  },
  {
    name: "Spam",
    icon: "alert",
  },
  {
    name: "Trash",
    icon: "trash",
    badge: {
      text: "8",
      theme: "red-pale",
    },
  },
  {
    name: "All Mails",
    icon: "emails",
  },
];

export const inboxLabels = [
  {
    id: 1,
    text: "Business",
    color: "primary",
  },
  {
    id: 2,
    text: "Personal",
    color: "red",
  },
  {
    id: 3,
    text: "Social",
    color: "green",
  },
];

export const colourOptions = [
  { value: "primary", label: "Primary" },
  { value: "success", label: "Success" },
  { value: "info", label: "Info" },
  { value: "warning", label: "Warning" },
  { value: "danger", label: "Danger" },
  { value: "secondary", label: "Secondary" },
];

export const inboxContacts = [
  {
    id: 1,
    name: "Abu Bin Ishtiyak",
    image: User,
    theme: "primary",
    designation: "CEO of Softnio",
    mail: "info@softnio.com",
  },
  {
    id: 2,
    name: "Dora Schmidt",
    image: User1,
    theme: "primary",
    designation: "VP Product Imagelab",
    mail: "dora@softnio.com",
  },
  {
    id: 3,
    name: "Jessica Fowler",
    image: User2,
    theme: "primary",
    designation: "Developer at Softnio",
    mail: "jess@softnio.com",
  },
  {
    id: 4,
    name: "Eula Flowers",
    image: User3,
    theme: "primary",
    designation: "Co-Founder of Vitzo",
    mail: "flowers@vitzo.com",
  },
];

export const formTemplates = [
  {
    id: 0,
    text: "Thank you message",
  },
  {
    id: 1,
    text: "Your issues solved",
  },
  {
    id: 2,
    text: "Welcome message",
  },
];
