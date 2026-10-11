// All swappable content for the invitation lives here: names, text, image paths, music, venue, events.
// Edit this file to re-skin the invite without touching index.html.
window.WEDDING_CONTENT = {
  couple: {
    groomFirst: 'Subash',
    brideFirst: 'Gayathri',
    groomParents: 'S/o Mr. S. Kolappan Achari & Mrs. Jagadeeswari C',
    groomCity: 'Nedumangad, Trivandrum',
    brideParents: 'D/o Mr. Gopalakrishnan KT & Mrs. Suma Kumari VC',
    brideCity: 'Chengannur, Alappuzha',
    families: 'KOLAPPAN & GOPALAKRISHNAN FAMILIES'
  },

  texts: {
    heroInviteLabel: 'YOU ARE INVITED TO THE WEDDING OF',
    openButton: 'OPEN INVITATION',
    heroTamil: 'திருமண அழைப்பிதழ்',
    heroMalayalam: 'വിവാഹ ക്ഷണക്കത്ത്',
    heroSub: 'TOGETHER WITH THEIR FAMILIES',
    weds: 'WEDS',

    blessingTamil: 'ஸ்ரீ கணேசாய நம: · ஸ்ரீ மீனாட்சி சுந்தரேஸ்வரர் துணை',
    blessingMalayalam: 'ഓം ശ്രീ ഗുരുവായൂരപ്പൻ തുണ',
    blessingBody: 'With the blessings of the Almighty and our elders, we joyfully invite you and your family to grace the wedding of our children and share in the happiness of this sacred union.',

    groomLabel: 'THE GROOM',
    brideLabel: 'THE BRIDE',

    ourStoryLabel: 'OUR STORY',
    ourStoryTitle: 'Two journeys, one path',
    storyCaptions: ['Where it began', 'Adventures together', 'The question', 'Two families, one'],

    saveDateLabel: 'SAVE THE DATE',
    scratchTitle: 'Scratch to reveal',
    scratchPrompt: 'SCRATCH THE CARD TO CONTINUE',
    scrollPrompt: 'SCROLL TO CONTINUE',

    countdownLabel: 'COUNTING DOWN TO THE MUHURTHAM',
    days: 'DAYS', hours: 'HOURS', mins: 'MINS', secs: 'SECS',

    ceremoniesLabel: 'ORDER OF CEREMONIES',
    ceremoniesTitle: 'Walk with us',
    directionsLabel: 'DIRECTIONS',

    venueLabel: 'THE VENUE',
    openMapsLabel: 'OPEN IN MAPS',
    shareLabel: 'SHARE THE JOY',
    shareWhatsappLabel: 'Share on WhatsApp',
    addCalendarLabel: 'Add all events to Calendar',
    copyLinkLabel: 'Copy invitation link',

    footerTamil: '',
    footer: 'Your gracious presence and blessings will make our special day even more memorable.',
    withLove: 'WITH LOVE'
  },

  images: {
    gopuram: 'assets/gopuram.png',
    elephants: 'assets/elephants.png',
    groom: 'assets/groom.jpg',
    bride: 'assets/bride.jpg',
    story1: 'assets/story-1.jpg',
    story2: 'assets/story-2.jpg',
    story3: 'assets/story-3.jpg',
    story4: 'assets/story-4.jpg',
    procession: 'assets/procession.png'
  },

  music: {
    // Put your song here. Falls back to a soft generated veena-style drone if missing.
    url: 'assets/music.mp3'
  },

  venue: {
    name: 'St Ignatius Orthodox Cathedral Parish Hall',
    address: 'Puthentheruv, Chengannur, Keralam',
    mapQuery: 'St Ignatius Orthodox Cathedral Parish Hall, Puthentheruv, Chengannur, Alappuzha',
    mapSearchQuery: 'St Ignatius Orthodox Cathedral Parish Hall, PERUMPALLIL PADINJARETHIL, NEW STREET, Chengannur, Keralam 689121'
  },

  // Muhurtham instant, used to drive the countdown. Month is 0-indexed (0 = January).
  weddingDate: {
    y: 2027, 
    mo: 0, 
    d: 31, 
    h: 12, 
    mi: 5, 
    s: 0,
    display: '31 Jan 2027',
    dayDisplay: 'SUNDAY',
    muhurthamDisplay: '12.05 PM · 31 January'
  },

  // One row per ceremony. s/e are UTC ICS timestamps (YYYYMMDDTHHMMSSZ) used for the .ics download.
  events: [
    { 
      t: 'Nischayam', 
      d: '1', 
      m: 'NOV', 
      day: 'Sunday', 
      time: '12:00 PM onwards', 
      venue: "Y's Men Community Hall, Kalluvarambu, Chengannur, Alappuzha", 
      s: '20271101T063000Z', e: '20271101T093000Z' 
    },
    // { 
    //   t: 'Haldi & Mehendi', 
    //   d: '29', 
    //   m: 'JAN', 
    //   day: 'Friday', 
    //   time: '10:00 AM onwards', 
    //   venue: 'Residency Gardens, Race Course, Coimbatore', 
    //   s: '20270129T043000Z', 
    //   e: '20270129T083000Z' 
    // },
    { 
      t: 'Wedding Ceremony', 
      d: '31', 
      m: 'JAN', 
      day: 'Saturday', 
      time: 'Muhurtham 12.05 PM', 
      venue: 'St Ignatius Orthodox Cathedral Parish Hall, Puthentheruv, Chengannur, Alappuzha', 
      s: '20270131T063000Z', 
      e: '20270131T093000Z' 
    },
    { 
      t: 'Reception', 
      d: '1', 
      m: 'FEB', 
      day: 'Monday', 
      time: '4:00 PM onwards', 
      venue: 'Sree Vidya Auditorium, Pazhakutty, Nedumangad', 
      s: '20270201T123000Z', 
      e: '20270201T163000Z' 
    }
  ]
};
