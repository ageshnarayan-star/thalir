/**
 * THALIR — Clickable Prototype Demonstration Data
 * Realistic sample data for seed-funding presentation.
 * Child: Arjun (8 years old)
 * Parent: Ananya
 * Class Teacher: Ms. Kavya
 * Speech Therapist: Dr. Meera Krishnan
 */

var THALIR_DATA = {
  child: {
    id: "child-arjun-01",
    name: "Arjun",
    age: "8 years",
    dob: "April 14, 2018",
    diagnosisLabel: "Neurodevelopmental Support Profile",
    supportAreas: [
      { id: "comm", name: "Communication", level: "Primary Support", color: "sage", desc: "Visual prompts & functional phrase practice" },
      { id: "daily", name: "Daily routines", level: "Active Guidance", color: "teal", desc: "Step checklists for morning and evening routines" },
      { id: "social", name: "Social participation", level: "Emerging Milestone", color: "amber", desc: "Small group activities with structured turn-taking" },
      { id: "learning", name: "Learning support", level: "Classroom Accommodation", color: "blue", desc: "Multisensory visual math and reading prompts" }
    ],
    communicationPreferences: "Prefers visual prompts and simple instructions. Benefits from 5-second processing pauses and affirmative modeling.",
    importantNotes: "Sensitive to abrupt acoustic changes (school bells, loud whistles). Keep noise-dampening ear protectors accessible during assemblies. Loves botanical walks and puzzle blocks.",
    emergencyInfo: {
      primaryContact: "Ananya (Mother) · +91 98401 23456",
      secondaryContact: "Karthik (Father) · +91 98402 34567",
      pediatrician: "Dr. S. Ranganathan, Developmental Pediatrician",
      hospital: "Apollo Children's Centre, Chennai",
      allergies: "Mild peanut sensitivity (non-anaphylactic; nut-free snacks required)",
      bloodGroup: "O Positive"
    }
  },

  careTeam: [
    {
      id: "member-ananya",
      name: "Ananya",
      role: "Parent / Caregiver",
      affiliation: "Family Guardian",
      badge: "Primary Admin",
      initials: "AN",
      accessLevel: "Full Administrative Ownership",
      canView: "All Records + Care Passport + Permissions",
      contact: "ananya.parent@example.com",
      avatarColor: "emerald"
    },
    {
      id: "member-kavya",
      name: "Ms. Kavya",
      role: "Class Teacher",
      affiliation: "Greenfield Inclusive Academy",
      badge: "Educator",
      initials: "KV",
      accessLevel: "Can view: School Updates + Progress",
      canView: "School Updates + Progress",
      contact: "kavya.teacher@greenfield.edu",
      avatarColor: "blue"
    },
    {
      id: "member-meera",
      name: "Dr. Meera Krishnan",
      role: "Speech Therapist",
      affiliation: "CareSteps Pediatric Development Centre",
      badge: "Clinical Lead",
      initials: "MK",
      accessLevel: "Can view: Therapy + Progress + Care Passport",
      canView: "Therapy + Progress + Care Passport",
      contact: "dr.meera@carestepscentre.org",
      avatarColor: "teal"
    },
    {
      id: "member-david",
      name: "David Chen",
      role: "Occupational Therapist",
      affiliation: "CareSteps Sensory Gym",
      badge: "Therapist",
      initials: "DC",
      accessLevel: "Can view: Therapy + Progress",
      canView: "Therapy + Progress",
      contact: "david.chen@carestepscentre.org",
      avatarColor: "amber"
    }
  ],

  dashboardToday: [
    {
      id: "today-1",
      type: "therapy",
      title: "Speech therapy",
      time: "10:30 AM",
      subtitle: "Session with Dr. Meera Krishnan",
      location: "CareSteps Clinic & Digital Log",
      screenTarget: "appointments",
      tag: "Today's Care",
      tagColor: "teal",
      icon: "message-square"
    },
    {
      id: "today-2",
      type: "school",
      title: "School update",
      time: "New",
      subtitle: "Classroom participation observation from Ms. Kavya",
      location: "Greenfield Academy",
      screenTarget: "school",
      tag: "New Update",
      tagColor: "blue",
      icon: "book-open"
    },
    {
      id: "today-3",
      type: "home",
      title: "Home activity",
      time: "6:00 PM",
      subtitle: "Sensory wind-down & visual routine review",
      location: "Home environment",
      screenTarget: "care_passport",
      tag: "Daily Routine",
      tagColor: "emerald",
      icon: "home"
    }
  ],

  overviewMetrics: [
    {
      id: "ov-comm",
      label: "Communication",
      score: 72,
      subtitle: "Consistent visual AAC usage during daily interactions",
      targetScreen: "progress"
    },
    {
      id: "ov-daily",
      label: "Daily routines",
      score: 84,
      subtitle: "Follows morning routine checklist independently",
      targetScreen: "progress"
    },
    {
      id: "ov-social",
      label: "Social participation",
      score: 58,
      subtitle: "Engaging in 15-minute guided small group play",
      targetScreen: "progress"
    }
  ],

  progressPassport: {
    categories: [
      {
        id: "cat-comm",
        name: "Communication",
        progress: 72,
        currentGoal: "Use functional communication during daily routines.",
        latestUpdate: "Used visual communication independently 6 times this week.",
        updatedBy: "Speech Therapist · Today",
        author: "Dr. Meera Krishnan",
        date: "Today",
        trend: "+8% this month",
        historyNotes: [
          "Initiated choice requests during snack break using picture tiles.",
          "Demonstrated clear vocal affirmation paired with pointing."
        ]
      },
      {
        id: "cat-social",
        name: "Social & Emotional",
        progress: 58,
        currentGoal: "Join structured peer activities and practice reciprocal sharing.",
        latestUpdate: "Arjun joined the group activity and remained engaged for approximately 15 minutes.",
        updatedBy: "Class Teacher · Yesterday",
        author: "Ms. Kavya",
        date: "Yesterday",
        trend: "+5% this month",
        historyNotes: [
          "Shared coloring materials with peer Siddharth during art workshop.",
          "Remained seated calmly during the 15-minute group reading circle."
        ]
      },
      {
        id: "cat-daily",
        name: "Daily Living",
        progress: 84,
        currentGoal: "Complete morning dressing and backpack organization checklist.",
        latestUpdate: "Completed morning checklist without verbal prompting 4 days this week.",
        updatedBy: "Parent · 2 days ago",
        author: "Ananya",
        date: "2 days ago",
        trend: "+12% this month",
        historyNotes: [
          "Successfully packed school snack box and water bottle into bag.",
          "Transitions smoothly from breakfast table to entry hallway."
        ]
      },
      {
        id: "cat-learning",
        name: "Learning & Participation",
        progress: 67,
        currentGoal: "Sustain attention for 15-minute academic table tasks using visual timer.",
        latestUpdate: "Completed math block patterns with 14 minutes sustained concentration.",
        updatedBy: "Special Educator · 3 days ago",
        author: "Ms. Kavya & SEN Team",
        date: "3 days ago",
        trend: "+7% this month",
        historyNotes: [
          "Used the sand-timer visual cue with high engagement.",
          "Completed counting exercises with minimal sensory fatigue."
        ]
      }
    ],
    timeline: [
      {
        id: "tl-1",
        category: "Communication",
        authorRole: "Speech Therapist",
        authorName: "Dr. Meera Krishnan",
        date: "Today, 9:15 AM",
        note: "Used visual communication independently 6 times this week during snack and circle time.",
        tag: "Therapist Update"
      },
      {
        id: "tl-2",
        category: "Social Participation",
        authorRole: "Class Teacher",
        authorName: "Ms. Kavya",
        date: "Yesterday, 2:40 PM",
        note: "Arjun joined the group activity and remained engaged for approximately 15 minutes.",
        tag: "School Update"
      },
      {
        id: "tl-3",
        category: "Daily Routines",
        authorRole: "Parent",
        authorName: "Ananya",
        date: "2 days ago, 8:00 AM",
        note: "Completed morning checklist without verbal prompting 4 days this week.",
        tag: "Parent Update"
      },
      {
        id: "tl-4",
        category: "Occupational Therapy",
        authorRole: "Occupational Therapist",
        authorName: "David Chen",
        date: "4 days ago, 4:15 PM",
        note: "Demonstrated improved bilateral motor coordination using weighted resistance putty.",
        tag: "Therapist Update"
      }
    ]
  },

  carePassport: {
    childInfo: {
      name: "Arjun",
      age: "8 years",
      supportSummary: "Receptive and expressive language support, sensory regulation adaptations, and structured daily transition support.",
      strengths: "Strong visual memory, deep fascination with mechanical structures, warm and collaborative disposition."
    },
    medicalTherapy: {
      currentTherapies: [
        { name: "Speech & Language Therapy", frequency: "2 sessions / week", clinician: "Dr. Meera Krishnan" },
        { name: "Occupational & Sensory Therapy", frequency: "1 session / week", clinician: "David Chen" }
      ],
      therapistInfo: "Dr. Meera Krishnan (Lead Speech Pathologist) · CareSteps Pediatric Centre, Alwarpet",
      medicalNotes: "General health is excellent. Audiology and optometry screenings completed with typical physiological markers. No daily pharmaceutical regimen.",
      appointmentHistory: "Regular bi-weekly clinical attendance with 94% continuity over the past 6 months."
    },
    schoolSupport: {
      school: "Greenfield Inclusive Academy",
      class: "Grade 3 — Inclusive Cohort",
      teacher: "Ms. Kavya",
      learningAccommodations: [
        "Desk positioned in quiet perimeter zone away from noisy corridor doors",
        "Visual timetable placed on top-right corner of desk",
        "5-minute advance visual warning before class bells or activity changes",
        "Access to quiet sensory corner with noise-dampening ear protectors when needed"
      ],
      accommodations: [
        "Desk positioned in quiet perimeter zone away from noisy corridor doors",
        "Visual timetable placed on top-right corner of desk",
        "5-minute advance visual warning before class bells or activity changes",
        "Access to quiet sensory corner with noise-dampening ear protectors when needed"
      ],
      recentObservations: "Arjun demonstrates outstanding visual puzzle problem-solving and responds enthusiastically to peer encouragement."
    },
    dailySupport: {
      routines: "Structured morning routine (wake up at 6:45 AM, 15-minute quiet sensory adjustment, breakfast, visual checklist). Bedtime routine starts at 8:15 PM with dim lighting.",
      communicationPreferences: "Prefers visual prompts and simple instructions. Thrives when questions offer 2 clear visual options rather than open-ended queries.",
      sensoryPreferences: "Calmed by gentle deep pressure (weighted lap pad), dim ambient lighting, and soothing instrumental soundscapes. Dislikes sudden high-frequency sirens.",
      caregiverGuidelines: "Always give a 5-minute visual warning before wrapping up preferred activities. Avoid sudden physical repositioning."
    }
  },

  schoolConnect: {
    newUpdates: [
      {
        id: "sch-up-1",
        title: "Classroom Participation",
        content: "Arjun joined the group activity and remained engaged for approximately 15 minutes.",
        author: "Ms. Kavya · Class Teacher",
        timestamp: "Today, 10:45 AM",
        tag: "Classroom Engagement"
      },
      {
        id: "sch-up-2",
        title: "Visual Routine Adaptation",
        content: "Introduced the new library schedule card today. Arjun grasped the book checkout protocol effortlessly and smiled warmly.",
        author: "Ms. Kavya · Class Teacher",
        timestamp: "Yesterday, 2:15 PM",
        tag: "Accomplishment"
      }
    ],
    calendar: [
      {
        id: "sc-event-1",
        type: "Parent meeting",
        title: "Parent–Teacher Individualized Plan Review",
        date: "Next Monday · 11:00 AM",
        location: "Academy Consultation Room 3 & Virtual Meet",
        lead: "Ms. Kavya & SEN Coordinator"
      },
      {
        id: "sc-event-2",
        type: "School activity",
        title: "Sensory-Friendly Art & Nature Morning",
        date: "Thursday · 9:30 AM",
        location: "Academy Botanical Courtyard",
        lead: "Inclusive Movement & Art Faculty"
      },
      {
        id: "sc-event-3",
        type: "Assessment",
        title: "Term 1 Developmental Milestone Review",
        date: "Oct 18 · 10:00 AM",
        location: "Resource Wing Suite",
        lead: "Multidisciplinary Advisory Committee"
      },
      {
        id: "sc-event-4",
        type: "Support session",
        title: "Classroom Speech Observation Session",
        date: "Oct 22 · 1:30 PM",
        location: "Grade 3 Classroom",
        lead: "Dr. Meera Krishnan & Ms. Kavya"
      }
    ]
  },

  appointments: [
    {
      id: "apt-1",
      service: "Speech Therapy",
      time: "10:30 AM · Today",
      professional: "Dr. Meera Krishnan",
      location: "CareSteps Pediatric Centre, Alwarpet",
      focus: "Functional AAC communication & pragmatic verbal phrases",
      isToday: true
    },
    {
      id: "apt-2",
      service: "Occupational Therapy",
      time: "4:00 PM · Friday",
      professional: "David Chen",
      location: "CareSteps Sensory Gym",
      focus: "Sensory modulation and fine motor coordination",
      isToday: false
    },
    {
      id: "apt-3",
      service: "Parent–Teacher Meeting",
      time: "11:00 AM · Monday",
      professional: "Ms. Kavya (Class Teacher)",
      location: "Greenfield Inclusive Academy",
      focus: "Quarterly IEP review & classroom accommodations update",
      isToday: false
    }
  ],

  professionals: [
    {
      id: "prof-1",
      name: "Dr. Meera Krishnan",
      specialization: "Speech & Language",
      title: "Speech & Language Therapist",
      distance: "3.2 km",
      rating: "4.8",
      experience: "12 years experience",
      availability: "Available this week",
      location: "CareSteps Pediatric Centre, Alwarpet",
      bio: "Pediatric speech-language pathologist specializing in AAC communication devices, functional social pragmatic language, and family-centered coaching.",
      verified: true
    },
    {
      id: "prof-2",
      name: "David Chen",
      specialization: "Occupational Therapy",
      title: "Pediatric Occupational Therapist",
      distance: "4.1 km",
      rating: "4.9",
      experience: "9 years experience",
      availability: "Available tomorrow",
      location: "CareSteps Sensory Gym, Mylapore",
      bio: "Specializes in sensory processing integration, bilateral motor planning, and daily living routine autonomy for school-aged children.",
      verified: true
    },
    {
      id: "prof-3",
      name: "Dr. Ananya Sen, Ph.D.",
      specialization: "Psychology",
      title: "Child & Adolescent Psychologist",
      distance: "5.0 km",
      rating: "4.7",
      experience: "11 years experience",
      availability: "Available next week",
      location: "MindBridge Developmental Clinic, Nungambakkam",
      bio: "Compassionate developmental psychologist offering strengths-based neurodiversity assessments and emotional resilience support for families.",
      verified: true
    },
    {
      id: "prof-4",
      name: "Rajesh Sundaram, BCBA",
      specialization: "Behavioural Support",
      title: "Positive Behaviour Support Specialist",
      distance: "3.8 km",
      rating: "4.8",
      experience: "8 years experience",
      availability: "Available Friday",
      location: "BridgeWays Behavioral Centre, T. Nagar",
      bio: "Focuses on functional communication training, antecedent environmental modifications, and non-aversive support structures.",
      verified: true
    },
    {
      id: "prof-5",
      name: "Sunita Nair, M.Ed",
      specialization: "Special Education",
      title: "Inclusive Education Specialist",
      distance: "2.4 km",
      rating: "4.9",
      experience: "14 years experience",
      availability: "Available this week",
      location: "Inclusion Works Consultancy, Adyar",
      bio: "Collaborates closely with schools, parents, and clinical teams to draft meaningful IEP goals and classroom differentiated learning plans.",
      verified: true
    },
    {
      id: "prof-6",
      name: "Pooja Deshmukh, MPT",
      specialization: "Physiotherapy",
      title: "Pediatric Physiotherapist",
      distance: "4.6 km",
      rating: "4.8",
      experience: "10 years experience",
      availability: "Available Thursday",
      location: "ActiveSteps Pediatric Rehab, Kilpauk",
      bio: "Certified pediatric physiotherapist specializing in vestibular balance, postural alignment, and joyful gross motor engagement.",
      verified: true
    }
  ],

  aacButtons: [
    { id: "btn-water", code: "WATER", label: "WATER", phrase: "I want water.", icon: "droplet", category: "need" },
    { id: "btn-food", code: "FOOD", label: "FOOD", phrase: "I want food.", icon: "utensils", category: "need" },
    { id: "btn-help", code: "HELP", label: "HELP", phrase: "I need help, please.", icon: "life-buoy", category: "urgent" },
    { id: "btn-toilet", code: "TOILET", label: "TOILET", phrase: "I need to use the washroom.", icon: "bath", category: "need" },
    { id: "btn-break", code: "BREAK", label: "BREAK", phrase: "I need a break.", icon: "pause-circle", category: "regulation" },
    { id: "btn-yes", code: "YES", label: "YES", phrase: "Yes.", icon: "check-circle-2", category: "response" },
    { id: "btn-no", code: "NO", label: "NO", phrase: "No, thank you.", icon: "x-circle", category: "response" },
    { id: "btn-happy", code: "HAPPY", label: "HAPPY", phrase: "I feel happy.", icon: "smile", category: "emotion" },
    { id: "btn-sad", code: "SAD", label: "SAD", phrase: "I feel sad.", icon: "frown", category: "emotion" },
    { id: "btn-uncomfortable", code: "UNCOMFORTABLE", label: "UNCOMFORTABLE", phrase: "I feel uncomfortable.", icon: "alert-triangle", category: "emotion" }
  ],

  earlyAwareness: {
    disclaimer: "Awareness information is not a diagnosis. Only a qualified professional can provide a clinical assessment.",
    cards: [
      {
        id: "ea-speech",
        title: "Communication & Speech",
        summary: "Recognizing expressive communication styles, non-verbal indicators, and speech milestones.",
        details: "Children develop communication at different tempos. Look for patterns such as relying entirely on physical leading without pointing, hesitation responding to their name, or distress when unable to make everyday requests known. Early consultation with a speech-language pathologist provides affirmative, gentle scaffolding."
      },
      {
        id: "ea-behavior",
        title: "Attention & Behaviour",
        summary: "Understanding high energy, sustained attention windows, and task redirection responses.",
        details: "Variations in executive functioning and impulse regulation are common. When a child experiences frequent overwhelm during routine seatwork or shows intense absorption in specific topics, compassionate environmental accommodations create stability and success."
      },
      {
        id: "ea-social",
        title: "Social Interaction",
        summary: "Observing reciprocal connection, parallel engagement, and shared attention cues.",
        details: "Peer interaction encompasses parallel play, cooperative gaming, and solitary restorative time. If your child finds eye contact demanding or feels uncertain joining group games, structured small-group guidance can support meaningful social connection."
      },
      {
        id: "ea-learning",
        title: "Learning",
        summary: "Multimodal processing, reading/math comprehension, and visual learning styles.",
        details: "Children frequently thrive when concepts are taught with tangible visuals, hands-on counters, and step-by-step timetables rather than purely spoken lectures. Special educators tailor learning strategies to each child's innate strengths."
      },
      {
        id: "ea-sensory",
        title: "Sensory Needs",
        summary: "Reactivity to acoustics, fluorescent lighting, clothing textures, and movement.",
        details: "A sensory processing profile is unique to every nervous system. Heightened sensitivity to sudden sounds or a strong appetite for spinning and deep pressure indicate sensory modulation needs best supported by pediatric occupational therapy."
      },
      {
        id: "ea-daily",
        title: "Daily Activities",
        summary: "Autonomous dressing, eating habits, sleep transitions, and personal organization.",
        details: "Self-care activities demand complex motor sequencing and emotional regulation. Predictable visual step cards and gentle pacing turn everyday morning and bedtime transitions into calm, reassuring rituals."
      }
    ],
    questionnaire: [
      {
        qId: 1,
        question: "When expressing an everyday need (such as hunger or asking for an object), your child most often:",
        options: [
          { text: "Speaks in fluent, multi-word spoken sentences", score: 0 },
          { text: "Uses gestures, single words, or leads an adult by the hand", score: 1 },
          { text: "Relies on visual picture cards or displays distress when trying to communicate", score: 2 }
        ]
      },
      {
        qId: 2,
        question: "In environments with loud sudden acoustics (e.g. blenders, school bells, sirens), your child:",
        options: [
          { text: "Adapts comfortably with minimal distraction", score: 0 },
          { text: "Shows brief hesitation and seeks reassurance", score: 1 },
          { text: "Frequently covers ears, retreats, or experiences sensory distress", score: 2 }
        ]
      },
      {
        qId: 3,
        question: "When an established daily schedule or expected sequence changes unexpectedly:",
        options: [
          { text: "Transitions smoothly with a brief spoken explanation", score: 0 },
          { text: "Requires a few minutes of extra transition time or visual reorientation", score: 1 },
          { text: "Experiences significant distress or difficulty shifting to the new task", score: 2 }
        ]
      },
      {
        qId: 4,
        question: "During collaborative play or group activities with peers of their age:",
        options: [
          { text: "Enjoys reciprocal turn-taking and spontaneous cooperative games", score: 0 },
          { text: "Plays alongside peers (parallel play) and benefits from guided prompts to join", score: 1 },
          { text: "Consistently prefers solitary play and feels overwhelmed in group spaces", score: 2 }
        ]
      }
    ]
  },

  familyResources: [
    {
      id: "res-1",
      section: "For Parents",
      category: "Routines & Regulation",
      title: "Creating Predictable Visual Schedules at Home",
      author: "Thalir Clinical Team",
      readTime: "4 min read",
      description: "How visual sequence cards reduce morning transition friction and foster everyday independence."
    },
    {
      id: "res-2",
      section: "For Parents",
      category: "Communication",
      title: "Connecting Before Correcting: Affirming Expressive Communication",
      author: "Dr. Meera Krishnan, SLP",
      readTime: "6 min read",
      description: "Practical ways to validate gestures, vocalizations, and AAC requests without performance pressure."
    },
    {
      id: "res-3",
      section: "For Caregivers",
      category: "Everyday Strategies",
      title: "Caregiver Hand-Off Guide: Sharing Sensory Profiles Seamlessly",
      author: "Thalir Family Support Panel",
      readTime: "5 min read",
      description: "Key pointers for grandparents, babysitters, and drivers to understand sensory calming triggers."
    },
    {
      id: "res-4",
      section: "For Educators",
      category: "Inclusive Classroom",
      title: "Inclusive Seating & Low-Distraction Classroom Design",
      author: "Ms. Kavya Sundaram & SEN Panel",
      readTime: "7 min read",
      description: "Simple, dignified environmental modifications that empower neurodivergent learners in general education."
    },
    {
      id: "res-5",
      section: "Understanding Your Child",
      category: "Neurodevelopment",
      title: "Understanding Sensory Overload vs. Behavioral Meltdowns",
      author: "Pediatric Occupational Therapy Advisory",
      readTime: "5 min read",
      description: "A compassionate clinical look at how sensory dysregulation occurs and how co-regulation restores calm."
    }
  ],

  notifications: [
    {
      id: "notif-1",
      title: "New school update from Ms. Kavya.",
      timestamp: "15m ago",
      read: false,
      targetScreen: "school",
      type: "school",
      summary: "Classroom participation observation logged for Arjun."
    },
    {
      id: "notif-2",
      title: "Speech therapy appointment tomorrow at 10:30 AM.",
      timestamp: "2h ago",
      read: false,
      targetScreen: "appointments",
      type: "appointment",
      summary: "Clinical review session with Dr. Meera Krishnan at CareSteps Centre."
    },
    {
      id: "notif-3",
      title: "Progress Passport updated by your therapist.",
      timestamp: "Today, 9:15 AM",
      read: false,
      targetScreen: "progress",
      type: "progress",
      summary: "Dr. Meera updated the Communication milestone (+8% progress)."
    },
    {
      id: "notif-4",
      title: "New message from CareSteps Centre.",
      timestamp: "Yesterday",
      read: true,
      targetScreen: "care_passport",
      type: "system",
      summary: "Quarterly therapy summary document uploaded to Care Passport."
    }
  ]
};

if (typeof window !== 'undefined') window.THALIR_DATA = THALIR_DATA;
if (typeof global !== 'undefined') global.THALIR_DATA = THALIR_DATA;
