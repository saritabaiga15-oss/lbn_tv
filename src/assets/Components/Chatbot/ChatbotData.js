export const CHATBOT_CONFIG = {
  links: {
    watchLive: '#live',
    youtube: 'https://www.youtube.com/@loveworldindia247',
    facebook: 'https://www.facebook.com/LOVEWORLD.IND?mibextid=kFxxJD',
    mobileApp: 'https://kingschat.online/user/lw_india',
  },
  contact: {
    phone: '+91 9529607156 / +234 9085900344',
    whatsapp: '+91 9529607156',
    email: 'info@lbntv.org',
  },
  courses: [
    'Videography', 'Video Editing', 'Sound Production', 'Camera Operations',
    'Studio Lighting', 'Stage Design & Setup', 'Media Production', 'Broadcast Engineering',
    'Casting & Production Coordination', 'Voice Over Artist', 'Video Presentation',
    'New Media / Podcast', 'Social Media Strategy', 'Movie Scene & Studio Makeup',
    'Directing & Live Production',
  ],
  programmes: [
    { name: 'The Trumpet', schedule: 'Tuesday to Friday at 11:00 AM', category: 'Talk show' },
    { name: 'Word at Work', schedule: 'Thursdays at 8:30 PM', category: 'Talk show' },
    { name: 'TEEV-Blaze', schedule: 'Monday to Friday at 11:30 AM', category: 'Teens & youth' },
    { name: 'Pray With Me', schedule: 'Thursdays at 12:00 PM', category: 'Prayer' },
    { name: 'Ignite', schedule: 'Sundays at 3:00 PM', category: 'Teens & youth' },
    { name: 'Crafting Faith', schedule: 'Wednesdays at 4:00 PM', category: 'Talk show' },
    { name: 'Money Matters', schedule: 'Mondays at 7:00 PM', category: 'Talk show' },
    { name: 'Timeless Paragon', schedule: 'Saturdays at 10:00 AM', category: 'Kids' },

    { name: 'Dr. Prashanti', schedule: 'Tuesdays at 9:30 AM', category: 'Health & wellness' },
  ],
};

export const WELCOME_MESSAGE = {
  sender: 'bot',
  text: '👋 Welcome to LBN\n\nI’m the LBN Assistant. I can help you find programmes, watch live, learn about our services, training, sponsorship, and more.\n\nHow can I help you today?',
  actions: [
    { label: '🎥 Watch Live', type: 'link', href: 'https://www.youtube.com/@loveworldindia247/live' },
    { label: '📺 Programmes & Schedule', type: 'navigate', tab: 'programmes' },
    { label: '📖 About LBN', type: 'navigate', tab: 'about-us' },
    { label: '🎓 Media Training', type: 'navigate', tab: 'anchorcrest-foundation', hash: 'courses-grid' },
    { label: '🤝 Sponsorship', type: 'navigate', tab: 'anchorcrest-foundation', hash: 'sponsor-section' },
    { label: '🎙️ Media Services', type: 'navigate', tab: 'services' },
    { label: '❓ Frequently Asked Questions', type: 'navigate', tab: 'home', hash: 'faq' },
    { label: '📞 Contact Us', type: 'navigate', tab: 'home', hash: 'contacts' },
  ],
};

const actions = {
  about: [{ label: 'Open About LBN', type: 'navigate', tab: 'about-us' }],
  live: [
    { label: 'Watch Live', type: 'link', href: CHATBOT_CONFIG.links.youtube },
    { label: 'YouTube Live', type: 'link', href: CHATBOT_CONFIG.links.youtube },
    { label: 'Facebook Watch', type: 'link', href: CHATBOT_CONFIG.links.facebook },
  ],
  programmes: [
    { label: 'View Programmes', type: 'navigate', tab: 'programmes' },
    { label: 'View Schedule', type: 'navigate', tab: 'epg' },
  ],
  training: [{ label: 'View 15 Courses', type: 'navigate', tab: 'anchorcrest-foundation', hash: 'courses-grid' }],
  sponsorship: [{ label: 'Sponsor a Student', type: 'navigate', tab: 'anchorcrest-foundation', hash: 'sponsor-section' }],
  services: [{ label: 'Explore Services', type: 'navigate', tab: 'services' }],
  contact: [{ label: 'Open Contact Details', type: 'navigate', tab: 'home', hash: 'contacts' }],
};

function response(text, responseActions = []) {
  return { sender: 'bot', text, actions: responseActions };
}

export function getBotReply(userText) {
  const query = userText.toLowerCase();

  if (/watch|live|stream|youtube|facebook/.test(query)) {
    return response('🔴 Watch LBN Live\n\nYou can watch LoveWorld India Broadcasting Network live through the available streaming platforms. Choose a platform below.', actions.live);
  }
  if (/course|training|learn|editing|videograph|camera|lighting|podcast|voice over/.test(query)) {
    return response(`🎓 Media Training\n\nAnchorcrest Foundation offers practical studio media training for aspiring creators and production teams. Courses include ${CHATBOT_CONFIG.courses.slice(0, 8).join(', ')}, and more.\n\nWould you like to see all 15 courses?`, actions.training);
  }
  if (/sponsor|sponsorship|support a student|donat/.test(query)) {
    return response('🤝 Sponsor a Student\n\nYou can support young people through media training sponsorship. Options include:\n\n₹5,000 — Sponsor 1 Student\n₹10,000 — Sponsor 2 Students\n₹25,000 — Sponsor a Crew of 5 Students\n₹50,000 — Cohort Builder for 10 Students', actions.sponsorship);
  }
  if (/service|studio|podcast|audio|dubbing|equipment|camera/.test(query)) {
    return response('🎙️ Media Services\n\nLBN provides video production studios, chroma and podcast recording, acoustic dubbing and mixing, voice-over recording, 4K cameras, audio equipment, and studio lighting.', actions.services);
  }
  if (/schedule|programme|program|today|tonight|playing|coming up|what.+on/.test(query)) {
    const programmeList = CHATBOT_CONFIG.programmes.map((item) => `${item.name} — ${item.schedule}`).join('\n');
    return response(`📺 Programmes & Schedule\n\nOur programme guide includes:\n${programmeList}\n\nFor the complete day-by-day schedule, open the EPG. Programme timings and live status are maintained on the website schedule.`, actions.programmes);
  }
  if (/about|who are you|lbn|mission|vision|india|faith/.test(query)) {
    return response('🏠 About LBN\n\nLoveWorld India Broadcasting Network is a dedicated broadcasting network bringing inspiring, faith-based, and transformational content to audiences in India and beyond. LBN serves the Indian community through television, digital media, worship, teaching, family, youth, and children’s programming, with a purpose to communicate life, love, and the message of faith.', actions.about);
  }
  if (/faq|question|contact|reach|email|phone|whatsapp/.test(query)) {
    return response(`❓ Frequently Asked Questions\n\nYou can watch LBN through the live-streaming and digital platforms listed on the website. LBN provides faith-based programmes, media training, and production services.\n\nContact: ${CHATBOT_CONFIG.contact.phone}\nWhatsApp: ${CHATBOT_CONFIG.contact.whatsapp}\nEmail: ${CHATBOT_CONFIG.contact.email}`, actions.contact);
  }

  return response('I can help you navigate LBN, find programmes and schedules, watch live, explore media training and services, learn about sponsorship, or find contact details. What would you like to explore?', WELCOME_MESSAGE.actions);
}