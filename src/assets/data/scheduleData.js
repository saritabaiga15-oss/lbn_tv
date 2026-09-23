import pastorChrisTeaching from '../images/pastor_chris_teaching.png';
import yourLoveworldSpecials from '../images/YourLWS.jpeg';
import rhapsodyTv from '../images/rhapsody_tv.png';
import praiseAThon from '../images/praise_a_thon.png';
import healingStreams from '../images/healing_streams.png';
import gytv from '../images/gytv.png';
import theTrumpet from '../images/Trumpet.png';
import prayWithMe from '../images/pray_with_me.jpg';
import moneyMatters from '../images/MoneyMatter.jpeg';
import chroniclesOfProphecy from '../images/chronicles_of_prophecy.png';
import loveworldExtra from '../images/loveworld_extra.png';
import loveworldExpressions from '../images/loveworld_expressions.png';
import lovetoons from '../images/lovetoons.png';
import drPrashanti from '../images/Wholeness (1).png';
import craftingFaith from '../images/Crafting Faith.png';
import igniteImg from '../images/YOUTHIgnite.png';
import teevablaze from '../images/TEEVABLAZE .png';
import wordAtWork from '../images/TheWordatWork.png';
import praiseWorship from '../images/praise_worship_live.jpg';
import documentaryStudio from '../images/documentary_studio.png';
import healthyLiving from '../images/healthy_living.jpg';
import timelessParagonNew from '../images/timeless_paragon_new.jpg';
import voiceOfPraise from '../images/voice_of_praise.jpg';

export const getSlotStartMinutes = (time) => {
  const [hours, minutes] = time.split(/[: ]/).map(Number);
  const isPm = time.includes('PM');
  const normalizedHours = hours === 12 ? 0 : hours;
  return (normalizedHours + (isPm ? 12 : 0)) * 60 + minutes;
};

export const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const getNowNext = () => {
  const now = new Date();
  const istStr = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  const ist = new Date(istStr);
  const dayName = DAYS_OF_WEEK[ist.getDay()];
  const currentMins = ist.getHours() * 60 + ist.getMinutes();
  const slots = scheduleData[dayName] || [];

  if (slots.length === 0) {
    return { current: null, next: null, upcoming: [], isLive: false };
  }

  let currentIdx = -1;
  let isActiveTime = false;
  for (let i = 0; i < slots.length; i++) {
    const startMins = getSlotStartMinutes(slots[i].time);
    const duration = parseInt(slots[i].duration, 10) || 30;
    if (currentMins >= startMins && currentMins < startMins + duration) {
      currentIdx = i;
      isActiveTime = true;
      break;
    }
  }

  if (currentIdx === -1) {
    for (let i = slots.length - 1; i >= 0; i--) {
      if (getSlotStartMinutes(slots[i].time) <= currentMins) {
        currentIdx = i;
        break;
      }
    }
  }

  if (currentIdx === -1) {
    currentIdx = 0;
  }

  const current = slots[currentIdx];
  const next = currentIdx + 1 < slots.length ? slots[currentIdx + 1] : null;
  const upcoming = slots.slice(currentIdx + 1, currentIdx + 5);
  const isLive = Boolean(isActiveTime && current && current.live);
  return { current, next, upcoming, isLive };
};

export const categories = [
  'ALL',
  'WORSHIP',
  'TEACHING',
  'HEALING',
  'TEENS & YOUTHS',
  'KIDDIES',
  'ROR',
  'TALK SHOWS',
  'PRAYER',
  'SPECIALS'
];

export const scheduleData = {
  Monday: [
    { time: '06:00 AM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseWorship },
    { time: '06:30 AM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
    { time: '07:00 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '08:00 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
    { time: '08:30 AM', title: 'Documentary', category: 'SPECIALS', duration: '30m', host: 'LBN', live: false, image: documentaryStudio },
    { time: '09:00 AM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseWorship },
    { time: '09:30 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
    { time: '10:00 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '11:00 AM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
    { time: '11:30 AM', title: 'TEEVABLAZE LIVE', category: 'TEENS & YOUTHS', duration: '30m', host: 'LBN Youth', live: true, image: teevablaze },
    { time: '12:00 PM', title: 'Pray with me', category: 'PRAYER', duration: '30m', host: 'LBN Prayer Team', live: true, image: prayWithMe },
    { time: '12:30 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseWorship },
    { time: '01:00 PM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
    { time: '01:30 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '02:30 PM', title: 'Wholeness', category: 'SPECIALS', duration: '30m', host: 'Dr. Prashanti', live: false, image: drPrashanti },
    { time: '03:00 PM', title: 'Lovetoons', category: 'KIDDIES', duration: '30m', host: 'LBN Kids', live: false, image: lovetoons },
    { time: '03:30 PM', title: 'TEEVABLAZE – REBROADCAST', category: 'ROR', duration: '30m', host: 'LBN Youth', live: false, image: teevablaze },
    { time: '04:00 PM', title: 'THE TRUMPET LIVE (04:00PM – 07:00PM)', category: 'TALK SHOWS', duration: '180m', host: 'Deacon Vijay Bansode', live: true, image: theTrumpet },
    { time: '07:00 PM', title: 'The Word at work', category: 'TALK SHOWS', duration: '30m', host: 'LBN', live: false, image: wordAtWork },
    { time: '07:30 PM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
    { time: '08:00 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '09:00 PM', title: 'Documentary', category: 'SPECIALS', duration: '30m', host: 'LBN', live: false, image: documentaryStudio },
    { time: '09:30 PM', title: 'Money Matters', category: 'SPECIALS', duration: '30m', host: 'LBN', live: false, image: moneyMatters },
    { time: '10:00 PM', title: 'TRUMPET REBROADCAST (10:00PM – 11:00PM)', category: 'TALK SHOWS', duration: '60m', host: 'Deacon Vijay Bansode', live: false, image: theTrumpet },
    { time: '11:00 PM', title: 'Loveworld Expressions', category: 'SPECIALS', duration: '30m', host: 'LBN Music', live: false, image: loveworldExpressions },
    { time: '11:30 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '30m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '12:00 AM', title: 'Documentary', category: 'SPECIALS', duration: '120m', host: 'LBN', live: false, image: documentaryStudio },
    { time: '02:00 AM', title: 'YourLoveworld Specials Rebroadcasts', category: 'TEACHING', duration: '210m', host: 'Pastor Chris', live: false, image: yourLoveworldSpecials },
    { time: '05:30 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams }
  ],
  Tuesday: [
    { time: '06:00 AM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseWorship },
    { time: '06:30 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '30m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '07:00 AM', title: 'THE TRUMPET LIVE (07:00AM – 11:00AM)', category: 'TALK SHOWS', duration: '240m', host: 'Deacon Vijay Bansode', live: true, image: theTrumpet },
    { time: '11:00 AM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
    { time: '11:30 AM', title: 'TEEVABLAZE LIVE', category: 'TEENS & YOUTHS', duration: '30m', host: 'LBN Youth', live: true, image: teevablaze },
    { time: '12:00 PM', title: 'Pray with me', category: 'PRAYER', duration: '30m', host: 'LBN Prayer Team', live: true, image: prayWithMe },
    { time: '12:30 PM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
    { time: '01:00 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '02:00 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseWorship },
    { time: '02:30 PM', title: 'Healthy Living', category: 'SPECIALS', duration: '30m', host: 'LBN Health', live: false, image: healthyLiving },
    { time: '03:00 PM', title: 'TRUMPET REBROADCAST (03:00PM – 04:00PM)', category: 'TALK SHOWS', duration: '60m', host: 'Deacon Vijay Bansode', live: false, image: theTrumpet },
    { time: '04:00 PM', title: 'TEEVABLAZE – REBROADCAST', category: 'ROR', duration: '30m', host: 'LBN Youth', live: false, image: teevablaze },
    { time: '04:30 PM', title: 'Lovetoons', category: 'KIDDIES', duration: '60m', host: 'LBN Kids', live: false, image: lovetoons },
    { time: '05:30 PM', title: 'Timeless Paragon', category: 'KIDDIES', duration: '30m', host: 'LBN Kids', live: false, image: timelessParagonNew },
    { time: '06:00 PM', title: 'Ignite', category: 'TEENS & YOUTHS', duration: '60m', host: 'LBN Youth', live: false, image: igniteImg },
    { time: '07:00 PM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
    { time: '07:30 PM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
    { time: '08:00 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '09:00 PM', title: 'Voice of Praise', category: 'WORSHIP', duration: '60m', host: 'LBN Worship', live: false, image: voiceOfPraise },
    { time: '10:00 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseWorship },
    { time: '10:30 PM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
    { time: '11:00 PM', title: 'Loveworld Expressions', category: 'SPECIALS', duration: '30m', host: 'LBN Music', live: false, image: loveworldExpressions },
    { time: '11:30 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '30m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '12:00 AM', title: 'Documentary', category: 'SPECIALS', duration: '120m', host: 'LBN', live: false, image: documentaryStudio },
    { time: '02:00 AM', title: 'YourLoveworld Specials Rebroadcasts', category: 'TEACHING', duration: '210m', host: 'Pastor Chris', live: false, image: yourLoveworldSpecials },
    { time: '05:30 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams }
  ],
  Wednesday: [
    { time: '06:00 AM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseWorship },
    { time: '06:30 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '30m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '07:00 AM', title: 'THE TRUMPET LIVE (07:00AM – 11:00AM)', category: 'TALK SHOWS', duration: '240m', host: 'Deacon Vijay Bansode', live: true, image: theTrumpet },
    { time: '11:00 AM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
    { time: '11:30 AM', title: 'TEEVABLAZE LIVE', category: 'TEENS & YOUTHS', duration: '30m', host: 'LBN Youth', live: true, image: teevablaze },
    { time: '12:00 PM', title: 'Pray with me', category: 'PRAYER', duration: '30m', host: 'LBN Prayer Team', live: true, image: prayWithMe },
    { time: '12:30 PM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
    { time: '01:00 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '02:00 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseWorship },
    { time: '02:30 PM', title: 'Wholeness', category: 'SPECIALS', duration: '30m', host: 'Dr. Prashanti', live: false, image: drPrashanti },
    { time: '03:00 PM', title: 'TRUMPET REBROADCAST (03:00PM – 04:00PM)', category: 'TALK SHOWS', duration: '60m', host: 'Deacon Vijay Bansode', live: false, image: theTrumpet },
    { time: '04:00 PM', title: 'TEEVABLAZE – REBROADCAST', category: 'ROR', duration: '30m', host: 'LBN Youth', live: false, image: teevablaze },
    { time: '04:30 PM', title: 'Lovetoons', category: 'KIDDIES', duration: '60m', host: 'LBN Kids', live: false, image: lovetoons },
    { time: '05:30 PM', title: 'Dusk Till Dawn', category: 'TEENS & YOUTHS', duration: '30m', host: 'LBN Youth', live: false, image: gytv },
    { time: '06:00 PM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
    { time: '06:30 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseWorship },
    { time: '07:00 PM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
    { time: '07:30 PM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
    { time: '08:00 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '09:00 PM', title: 'Documentary', category: 'SPECIALS', duration: '30m', host: 'LBN', live: false, image: documentaryStudio },
    { time: '09:30 PM', title: 'Money Matters', category: 'SPECIALS', duration: '30m', host: 'LBN', live: false, image: moneyMatters },
    { time: '10:00 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseWorship },
    { time: '10:30 PM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
    { time: '11:00 PM', title: 'Loveworld Expressions', category: 'SPECIALS', duration: '30m', host: 'LBN Music', live: false, image: loveworldExpressions },
    { time: '11:30 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '30m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '12:00 AM', title: 'Documentary', category: 'SPECIALS', duration: '120m', host: 'LBN', live: false, image: documentaryStudio },
    { time: '02:00 AM', title: 'YourLoveworld Specials Rebroadcasts', category: 'TEACHING', duration: '210m', host: 'Pastor Chris', live: false, image: yourLoveworldSpecials },
    { time: '05:30 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams }
  ],
  Thursday: [
    { time: '06:00 AM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseWorship },
    { time: '06:30 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '30m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '07:00 AM', title: 'THE TRUMPET LIVE (07:00AM – 11:00AM)', category: 'TALK SHOWS', duration: '240m', host: 'Deacon Vijay Bansode', live: true, image: theTrumpet },
    { time: '11:00 AM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
    { time: '11:30 AM', title: 'TEEVABLAZE LIVE', category: 'TEENS & YOUTHS', duration: '30m', host: 'LBN Youth', live: true, image: teevablaze },
    { time: '12:00 PM', title: 'Pray with me', category: 'PRAYER', duration: '30m', host: 'LBN Prayer Team', live: true, image: prayWithMe },
    { time: '12:30 PM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
    { time: '01:00 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '02:00 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseWorship },
    { time: '02:30 PM', title: 'Healthy Living', category: 'SPECIALS', duration: '30m', host: 'LBN Health', live: false, image: healthyLiving },
    { time: '03:00 PM', title: 'TRUMPET REBROADCAST (03:00PM – 04:00PM)', category: 'TALK SHOWS', duration: '60m', host: 'Deacon Vijay Bansode', live: false, image: theTrumpet },
    { time: '04:00 PM', title: 'TEEVABLAZE – REBROADCAST', category: 'ROR', duration: '30m', host: 'LBN Youth', live: false, image: teevablaze },
    { time: '04:30 PM', title: 'Lovetoons', category: 'KIDDIES', duration: '60m', host: 'LBN Kids', live: false, image: lovetoons },
    { time: '05:30 PM', title: 'Ignite', category: 'TEENS & YOUTHS', duration: '60m', host: 'LBN Youth', live: false, image: igniteImg },
    { time: '06:30 PM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
    { time: '07:00 PM', title: 'Fruitful', category: 'TALK SHOWS', duration: '30m', host: 'LBN', live: false, image: wordAtWork },
    { time: '07:30 PM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
    { time: '08:00 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '30m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '08:30 PM', title: 'The Word at Work', category: 'TALK SHOWS', duration: '30m', host: 'LBN', live: false, image: wordAtWork },
    { time: '09:00 PM', title: 'Voice of Praise', category: 'WORSHIP', duration: '60m', host: 'LBN Worship', live: false, image: voiceOfPraise },
    { time: '10:00 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseWorship },
    { time: '10:30 PM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
    { time: '11:00 PM', title: 'Loveworld Expressions', category: 'SPECIALS', duration: '30m', host: 'LBN Music', live: false, image: loveworldExpressions },
    { time: '11:30 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '30m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '12:00 AM', title: 'Documentary', category: 'SPECIALS', duration: '120m', host: 'LBN', live: false, image: documentaryStudio },
    { time: '02:00 AM', title: 'YourLoveworld Specials Rebroadcasts', category: 'TEACHING', duration: '210m', host: 'Pastor Chris', live: false, image: yourLoveworldSpecials },
    { time: '05:30 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams }
  ],
  Friday: [
    { time: '06:00 AM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseWorship },
    { time: '06:30 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '30m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '07:00 AM', title: 'THE TRUMPET LIVE (07:00AM – 11:00AM)', category: 'TALK SHOWS', duration: '240m', host: 'Deacon Vijay Bansode', live: true, image: theTrumpet },
    { time: '11:00 AM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
    { time: '11:30 AM', title: 'TEEVABLAZE LIVE', category: 'TEENS & YOUTHS', duration: '30m', host: 'LBN Youth', live: true, image: teevablaze },
    { time: '12:00 PM', title: 'Pray with me', category: 'PRAYER', duration: '30m', host: 'LBN Prayer Team', live: true, image: prayWithMe },
    { time: '12:30 PM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
    { time: '01:00 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '02:00 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseWorship },
    { time: '02:30 PM', title: 'Wholeness', category: 'SPECIALS', duration: '30m', host: 'Dr. Prashanti', live: false, image: drPrashanti },
    { time: '03:00 PM', title: 'TRUMPET REBROADCAST (03:00PM – 04:00PM)', category: 'TALK SHOWS', duration: '60m', host: 'Deacon Vijay Bansode', live: false, image: theTrumpet },
    { time: '04:00 PM', title: 'TEEVABLAZE – REBROADCAST', category: 'ROR', duration: '30m', host: 'LBN Youth', live: false, image: teevablaze },
    { time: '04:30 PM', title: 'Lovetoons', category: 'KIDDIES', duration: '60m', host: 'LBN Kids', live: false, image: lovetoons },
    { time: '05:30 PM', title: 'Crafting Faith', category: 'KIDDIES', duration: '30m', host: 'LBN Kids', live: false, image: craftingFaith },
    { time: '06:00 PM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
    { time: '06:30 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseWorship },
    { time: '07:00 PM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
    { time: '07:30 PM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
    { time: '08:00 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '30m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '08:30 PM', title: 'HEALING STREAMS TESTIMONIES LIVE (08:30PM – 10:30PM)', category: 'HEALING', duration: '120m', host: 'Healing School', live: true, image: healingStreams },
    { time: '10:30 PM', title: 'Money Matters', category: 'SPECIALS', duration: '30m', host: 'LBN', live: false, image: moneyMatters },
    { time: '11:00 PM', title: 'Movie Night', category: 'SPECIALS', duration: '120m', host: 'LBN', live: false, image: documentaryStudio },
    { time: '01:00 AM', title: 'Documentary', category: 'SPECIALS', duration: '60m', host: 'LBN', live: false, image: documentaryStudio },
    { time: '02:00 AM', title: 'YourLoveworld Praise-A-Thon RE-BRO', category: 'WORSHIP', duration: '210m', host: 'Pastor Chris', live: false, image: praiseAThon },
    { time: '05:30 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams }
  ],
  Saturday: [
    { time: '06:00 AM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseWorship },
    { time: '06:30 AM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
    { time: '07:00 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '08:00 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
    { time: '08:30 AM', title: 'Documentary', category: 'SPECIALS', duration: '30m', host: 'LBN', live: false, image: documentaryStudio },
    { time: '09:00 AM', title: 'Wholeness', category: 'SPECIALS', duration: '30m', host: 'Dr. Prashanti', live: false, image: drPrashanti },
    { time: '09:30 AM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseWorship },
    { time: '10:00 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
    { time: '10:30 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '11:30 AM', title: 'Lovetoons', category: 'KIDDIES', duration: '30m', host: 'LBN Kids', live: false, image: lovetoons },
    { time: '12:00 PM', title: 'Timeless Paragon', category: 'KIDDIES', duration: '30m', host: 'LBN Kids', live: false, image: timelessParagonNew },
    { time: '12:30 PM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
    { time: '01:00 PM', title: 'Fruitful', category: 'TALK SHOWS', duration: '30m', host: 'LBN', live: false, image: wordAtWork },
    { time: '01:30 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '120m', host: 'LBN', live: false, image: praiseWorship },
    { time: '03:30 PM', title: 'Voice of Praise', category: 'WORSHIP', duration: '60m', host: 'LBN Worship', live: false, image: voiceOfPraise },
    { time: '04:30 PM', title: 'LOVEWORLD EXTRA (04:30PM – 08:30PM)', category: 'SPECIALS', duration: '240m', host: 'LBN Global', live: true, image: loveworldExtra },
    { time: '08:30 PM', title: 'HEALING STREAMS TESTIMONIES LIVE (08:30PM – 10:30PM)', category: 'HEALING', duration: '120m', host: 'Healing School', live: true, image: healingStreams },
    { time: '10:30 PM', title: 'CHRONICLES OF PROPHECY LIVE (10:30PM – 12:30AM)', category: 'SPECIALS', duration: '120m', host: 'LBN Prophetic Team', live: true, image: chroniclesOfProphecy },
    { time: '12:30 AM', title: 'Movie Night', category: 'SPECIALS', duration: '120m', host: 'LBN', live: false, image: documentaryStudio },
    { time: '02:30 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '120m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '04:30 AM', title: 'Loveworld Expressions', category: 'SPECIALS', duration: '60m', host: 'LBN Music', live: false, image: loveworldExpressions },
    { time: '05:30 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams }
  ],
  Sunday: [
    { time: '06:00 AM', title: 'Worship (LWIndia)', category: 'WORSHIP', duration: '30m', host: 'LoveWorld India', live: false, image: praiseWorship },
    { time: '06:30 AM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
    { time: '07:00 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '08:00 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
    { time: '08:30 AM', title: 'Documentary', category: 'SPECIALS', duration: '30m', host: 'LBN', live: false, image: documentaryStudio },
    { time: '09:00 AM', title: 'Wholeness', category: 'SPECIALS', duration: '30m', host: 'Dr. Prashanti', live: false, image: drPrashanti },
    { time: '09:30 AM', title: 'Worship (LWIndia)', category: 'WORSHIP', duration: '30m', host: 'LoveWorld India', live: false, image: praiseWorship },
    { time: '10:00 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
    { time: '10:30 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
    { time: '11:30 AM', title: 'Lovetoons', category: 'KIDDIES', duration: '60m', host: 'LBN Kids', live: false, image: lovetoons },
    { time: '12:30 PM', title: 'Crafting Faith', category: 'KIDDIES', duration: '30m', host: 'LBN Kids', live: false, image: craftingFaith },
    { time: '01:00 PM', title: 'Timeless Paragon', category: 'KIDDIES', duration: '30m', host: 'LBN Kids', live: false, image: timelessParagonNew },
    { time: '01:30 PM', title: 'Dusk Till Dawn', category: 'TEENS & YOUTHS', duration: '30m', host: 'LBN Youth', live: false, image: gytv },
    { time: '02:00 PM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
    { time: '02:30 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseWorship },
    { time: '03:00 PM', title: 'IGNITE (03:00PM – 04:00PM)', category: 'TEENS & YOUTHS', duration: '60m', host: 'LBN Youth', live: true, image: igniteImg },
    { time: '04:00 PM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
    { time: '04:30 PM', title: 'LOVEWORLD EXTRA (04:30PM – 08:30PM)', category: 'SPECIALS', duration: '240m', host: 'LBN Global', live: true, image: loveworldExtra },
    { time: '08:30 PM', title: 'HEALING STREAMS TESTIMONIES LIVE (08:30PM – 10:30PM)', category: 'HEALING', duration: '120m', host: 'Healing School', live: true, image: healingStreams },
    { time: '10:30 PM', title: 'Documentary', category: 'SPECIALS', duration: '30m', host: 'LBN', live: false, image: documentaryStudio },
    { time: '11:00 PM', title: 'Movie Night', category: 'SPECIALS', duration: '120m', host: 'LBN', live: false, image: documentaryStudio },
    { time: '01:00 AM', title: 'Documentary', category: 'SPECIALS', duration: '60m', host: 'LBN', live: false, image: documentaryStudio },
    { time: '02:00 AM', title: 'YourLoveworld Praise-A-Thon RE-BRO', category: 'WORSHIP', duration: '210m', host: 'Pastor Chris', live: false, image: praiseAThon },
    { time: '05:30 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams }
  ]
};
