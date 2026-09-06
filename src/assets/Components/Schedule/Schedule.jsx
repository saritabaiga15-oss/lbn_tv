import React, { useState } from 'react';
import './Schedule.css';
import pastorChrisTeaching from '../../images/pastor_chris_teaching.png';
import rhapsodyTv from '../../images/rhapsody_tv.png';
import praiseAThon from '../../images/praise_a_thon.png';
import healingStreams from '../../images/healing_streams.png';
import gytv from '../../images/gytv.png';
import theTrumpet from '../../images/Trumpet.png';
import prayWithMe from '../../images/pray_with_me.jpg';
import duskTillDawn from '../../images/Dusk till dawn.png';
import moneyMatters from '../../images/MONEY MATTERS (1).png';
import chroniclesOfProphecy from '../../images/chronicles_of_prophecy.png';
import loveworldExtra from '../../images/loveworld_extra.png';
import loveworldExpressions from '../../images/loveworld_expressions.png';
import lovetoons from '../../images/lovetoons.png';
import drPrashanti from '../../images/Wholeness (1).png';
import craftingFaith from '../../images/Crafting Faith.png';
import LWS from '../../images/LWS.jpeg';
import igniteImg from '../../images/YOUTHIgnite.png';
import teevablaze from '../../images/TEEVABLAZE (1).png';
import wordAtWork from '../../images/Word at work.png';

const Schedule = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [selectedDay, setSelectedDay] = useState('Friday');
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [reminderSet, setReminderSet] = useState({});

  const categories = ['ALL', 'WORSHIP', 'TEACHING', 'HEALING', 'TEENS & KIDS', 'ROR', 'TALK SHOWS', 'SPECIALS'];

  const scheduleData = {
    Monday: [
      { time: '06:00 AM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseAThon },
      { time: '06:30 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '30m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
      { time: '07:00 AM', title: 'THE TRUMPET LIVE', category: 'TALK SHOWS', duration: '240m', host: 'Deacon Vijay Bansode', live: true, image: theTrumpet },
      { time: '11:00 AM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '11:30 AM', title: 'TEEVABLAZE', category: 'TEENS & KIDS', duration: '30m', host: 'LBN Youth', live: true, image: teevablaze },
      { time: '12:00 PM', title: 'Pray With Me', category: 'WORSHIP', duration: '30m', host: 'LBN Prayer Team', live: true, image: prayWithMe },
      { time: '12:30 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseAThon },
      { time: '01:00 PM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
      { time: '01:30 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
      { time: '02:30 PM', title: 'Rhapsody TV', category: 'ROR', duration: '90m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '04:00 PM', title: 'Lovetoons', category: 'TEENS & KIDS', duration: '60m', host: 'LBN Kids', live: false, image: lovetoons },
      { time: '07:30 PM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
      { time: '08:00 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
      { time: '09:00 PM', title: 'TEEVABLAZE – REBROADCAST', category: 'ROR', duration: '30m', host: 'LBN Youth', live: false, image: teevablaze },
      { time: '09:30 PM', title: 'Money Matters', category: 'SPECIALS', duration: '30m', host: 'Raj', live: false, image: moneyMatters },
      { time: '10:00 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseAThon },
      { time: '10:30 PM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '11:00 PM', title: 'Loveworld Expressions', category: 'SPECIALS', duration: '30m', host: 'LBN Music', live: false, image: loveworldExpressions },
      { time: '11:30 PM', title: 'Documentary', category: 'SPECIALS', duration: '30m', host: 'LBN', live: false, image: LWS },
      { time: '12:00 AM', title: 'Rhapsody TV', category: 'ROR', duration: '120m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '02:00 AM', title: 'YourLoveworld Specials Rebroadcasts', category: 'TEACHING', duration: '210m', host: 'LBN', live: false, image: praiseAThon },
      { time: '05:30 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams }
    ],
    Tuesday: [
      { time: '06:00 AM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseAThon },
      { time: '06:30 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '30m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
      { time: '07:00 AM', title: 'THE TRUMPET LIVE', category: 'TALK SHOWS', duration: '240m', host: 'Deacon Vijay Bansode', live: true, image: theTrumpet },
      { time: '11:00 AM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '11:30 AM', title: 'TEEVABLAZE', category: 'TEENS & KIDS', duration: '30m', host: 'LBN Youth', live: true, image: teevablaze },
      { time: '12:00 PM', title: 'Pray With Me', category: 'WORSHIP', duration: '30m', host: 'LBN Prayer Team', live: true, image: prayWithMe },
      { time: '12:30 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseAThon },
      { time: '01:00 PM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
      { time: '01:30 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
      { time: '02:30 PM', title: 'Rhapsody TV', category: 'ROR', duration: '90m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '04:00 PM', title: 'Lovetoons', category: 'TEENS & KIDS', duration: '60m', host: 'LBN Kids', live: false, image: lovetoons },
      { time: '05:00 PM', title: 'Kids Glows', category: 'TEENS & KIDS', duration: '30m', host: 'LBN Kids', live: false, image: gytv },
      { time: '05:30 PM', title: 'GYTV', category: 'TEENS & KIDS', duration: '120m', host: 'LBN Youth', live: false, image: gytv },
      { time: '07:30 PM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
      { time: '08:00 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
      { time: '09:00 PM', title: 'TEEVABLAZE – REBROADCAST', category: 'ROR', duration: '30m', host: 'LBN Youth', live: false, image: teevablaze },
      { time: '09:30 PM', title: 'Documentary', category: 'SPECIALS', duration: '30m', host: 'LBN', live: false, image: LWS },
      { time: '10:00 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseAThon },
      { time: '10:30 PM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '11:00 PM', title: 'Loveworld Expressions', category: 'SPECIALS', duration: '30m', host: 'LBN Music', live: false, image: loveworldExpressions },
      { time: '11:30 PM', title: 'Documentary', category: 'SPECIALS', duration: '30m', host: 'LBN', live: false, image: LWS },
      { time: '12:00 AM', title: 'Rhapsody TV', category: 'ROR', duration: '120m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '02:00 AM', title: 'YourLoveworld Specials Rebroadcasts', category: 'TEACHING', duration: '210m', host: 'LBN', live: false, image: praiseAThon },
      { time: '05:30 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams }
    ],
    Wednesday: [
      { time: '06:00 AM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseAThon },
      { time: '06:30 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '30m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
      { time: '07:00 AM', title: 'THE TRUMPET LIVE', category: 'TALK SHOWS', duration: '240m', host: 'Deacon Vijay Bansode', live: true, image: theTrumpet },
      { time: '11:00 AM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '11:30 AM', title: 'TEEVABLAZE', category: 'TEENS & KIDS', duration: '30m', host: 'LBN Youth', live: true, image: teevablaze },
      { time: '12:00 PM', title: 'Pray With Me', category: 'WORSHIP', duration: '30m', host: 'LBN Prayer Team', live: true, image: prayWithMe },
      { time: '12:30 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseAThon },
      { time: '01:00 PM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
      { time: '01:30 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
      { time: '02:30 PM', title: 'Rhapsody TV', category: 'ROR', duration: '90m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '04:00 PM', title: 'Dusk Till Dawn', category: 'TEENS & KIDS', duration: '30m', host: 'LBN Youth', live: false, image: duskTillDawn },
      { time: '04:30 PM', title: 'Lovetoons', category: 'TEENS & KIDS', duration: '60m', host: 'LBN Kids', live: false, image: lovetoons },
      { time: '05:30 PM', title: 'GYTV', category: 'TEENS & KIDS', duration: '120m', host: 'LBN Youth', live: false, image: gytv },
      { time: '07:30 PM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
      { time: '08:00 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
      { time: '09:00 PM', title: 'TEEVABLAZE – REBROADCAST', category: 'ROR', duration: '30m', host: 'LBN Youth', live: false, image: teevablaze },
      { time: '09:30 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseAThon },
      { time: '10:00 PM', title: 'Money Matters', category: 'SPECIALS', duration: '30m', host: 'Raj', live: false, image: moneyMatters },
      { time: '10:30 PM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '11:00 PM', title: 'Loveworld Expressions', category: 'SPECIALS', duration: '30m', host: 'LBN Music', live: false, image: loveworldExpressions },
      { time: '11:30 PM', title: 'Documentary', category: 'SPECIALS', duration: '30m', host: 'LBN', live: false, image: LWS },
      { time: '12:00 AM', title: 'Rhapsody TV', category: 'ROR', duration: '120m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '02:00 AM', title: 'YourLoveworld Specials Rebroadcasts', category: 'TEACHING', duration: '210m', host: 'LBN', live: false, image: praiseAThon },
      { time: '05:30 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams }
    ],
    Thursday: [
      { time: '06:00 AM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseAThon },
      { time: '06:30 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '30m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
      { time: '07:00 AM', title: 'THE TRUMPET LIVE', category: 'TALK SHOWS', duration: '240m', host: 'Deacon Vijay Bansode', live: true, image: theTrumpet },
      { time: '11:00 AM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '11:30 AM', title: 'TEEVABLAZE', category: 'TEENS & KIDS', duration: '30m', host: 'LBN Youth', live: true, image: teevablaze },
      { time: '12:00 PM', title: 'Pray With Me', category: 'WORSHIP', duration: '30m', host: 'LBN Prayer Team', live: true, image: prayWithMe },
      { time: '12:30 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseAThon },
      { time: '01:00 PM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
      { time: '01:30 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
      { time: '02:30 PM', title: 'Rhapsody TV', category: 'ROR', duration: '90m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '04:00 PM', title: 'Lovetoons', category: 'TEENS & KIDS', duration: '60m', host: 'LBN Kids', live: false, image: lovetoons },
      { time: '05:00 PM', title: 'Ignite', category: 'TEENS & KIDS', duration: '30m', host: 'LBN Youth', live: false, image: igniteImg },
      { time: '05:30 PM', title: 'GYTV', category: 'TEENS & KIDS', duration: '120m', host: 'LBN Youth', live: false, image: gytv },
      { time: '07:30 PM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
      { time: '08:00 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '30m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
      { time: '08:30 PM', title: 'Word at Work', category: 'TALK SHOWS', duration: '30m', host: 'LBN', live: false, image: wordAtWork },
      { time: '09:00 PM', title: 'TEEVABLAZE – REBROADCAST', category: 'ROR', duration: '30m', host: 'LBN Youth', live: false, image: teevablaze },
      { time: '09:30 PM', title: 'Documentary', category: 'SPECIALS', duration: '30m', host: 'LBN', live: false, image: LWS },
      { time: '10:00 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseAThon },
      { time: '10:30 PM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '11:00 PM', title: 'Loveworld Expressions', category: 'SPECIALS', duration: '30m', host: 'LBN Music', live: false, image: loveworldExpressions },
      { time: '11:30 PM', title: 'Documentary', category: 'SPECIALS', duration: '30m', host: 'LBN', live: false, image: LWS },
      { time: '12:00 AM', title: 'Rhapsody TV', category: 'ROR', duration: '120m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '02:00 AM', title: 'YourLoveworld Specials Rebroadcasts', category: 'TEACHING', duration: '210m', host: 'LBN', live: false, image: praiseAThon },
      { time: '05:30 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams }
    ],
    Friday: [
      { time: '06:00 AM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseAThon },
      { time: '06:30 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '30m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
      { time: '07:00 AM', title: 'THE TRUMPET LIVE', category: 'TALK SHOWS', duration: '240m', host: 'Deacon Vijay Bansode', live: true, image: theTrumpet },
      { time: '11:00 AM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '11:30 AM', title: 'TEEVABLAZE', category: 'TEENS & KIDS', duration: '30m', host: 'LBN Youth', live: true, image: teevablaze },
      { time: '12:00 PM', title: 'Pray With Me', category: 'WORSHIP', duration: '30m', host: 'LBN Prayer Team', live: true, image: prayWithMe },
      { time: '12:30 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseAThon },
      { time: '01:00 PM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
      { time: '01:30 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
      { time: '02:30 PM', title: 'Rhapsody TV', category: 'ROR', duration: '90m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '04:00 PM', title: 'Lovetoons', category: 'TEENS & KIDS', duration: '60m', host: 'LBN Kids', live: false, image: lovetoons },
      { time: '05:00 PM', title: 'Crafting Faith', category: 'SPECIALS', duration: '30m', host: 'LBN', live: false, image: craftingFaith },
      { time: '05:30 PM', title: 'GYTV', category: 'TEENS & KIDS', duration: '120m', host: 'LBN Youth', live: false, image: gytv },
      { time: '07:30 PM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
      { time: '08:00 PM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '30m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
      { time: '08:30 PM', title: 'HEALING STREAMS TESTIMONIES LIVE', category: 'HEALING', duration: '120m', host: 'Healing School', live: true, image: healingStreams },
      { time: '10:30 PM', title: 'Money Matters', category: 'SPECIALS', duration: '30m', host: 'Raj', live: false, image: moneyMatters },
      { time: '11:00 PM', title: 'Movie Night', category: 'SPECIALS', duration: '120m', host: 'LBN', live: false, image: LWS },
      { time: '01:00 AM', title: 'Rhapsody TV', category: 'ROR', duration: '60m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '02:00 AM', title: 'YourLoveworld Praise-A-Thon Rebroadcast', category: 'WORSHIP', duration: '210m', host: 'LBN', live: false, image: praiseAThon },
      { time: '05:30 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams }
    ],
    Saturday: [
      { time: '06:00 AM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseAThon },
      { time: '06:30 AM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
      { time: '07:00 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
      { time: '08:00 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
      { time: '08:30 AM', title: 'Documentary', category: 'SPECIALS', duration: '30m', host: 'LBN', live: false, image: LWS },
      { time: '09:00 AM', title: 'Wholeness', category: 'SPECIALS', duration: '30m', host: 'Dr. Prashanti', live: false, image: drPrashanti },
      { time: '09:30 AM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseAThon },
      { time: '10:00 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
      { time: '10:30 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
      { time: '11:30 AM', title: 'Lovetoons', category: 'TEENS & KIDS', duration: '60m', host: 'LBN Kids', live: false, image: lovetoons },
      { time: '12:30 PM', title: 'GYTV', category: 'TEENS & KIDS', duration: '120m', host: 'LBN Youth', live: false, image: gytv },
      { time: '02:30 PM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '03:00 PM', title: 'Praise and Worship', category: 'WORSHIP', duration: '30m', host: 'LBN', live: false, image: praiseAThon },
      { time: '03:30 PM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
      { time: '04:00 PM', title: 'Rhapsody TV', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '04:30 PM', title: 'LOVEWORLD EXTRA LIVE', category: 'SPECIALS', duration: '240m', host: 'LBN Global', live: true, image: loveworldExtra },
      { time: '08:30 PM', title: 'HEALING STREAMS TESTIMONIES LIVE', category: 'HEALING', duration: '120m', host: 'Healing School', live: true, image: healingStreams },
      { time: '10:30 PM', title: 'CHRONICLES OF PROPHECY LIVE', category: 'SPECIALS', duration: '120m', host: 'LBN Prophetic Team', live: true, image: chroniclesOfProphecy },
      { time: '12:30 AM', title: 'Movie Night', category: 'SPECIALS', duration: '120m', host: 'LBN', live: false, image: LWS },
      { time: '02:30 AM', title: 'Rhapsody TV', category: 'ROR', duration: '120m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '04:30 AM', title: 'Loveworld Expressions', category: 'SPECIALS', duration: '60m', host: 'LBN Music', live: false, image: loveworldExpressions },
      { time: '05:30 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams }
    ],
    Sunday: [
      { time: '06:00 AM', title: 'Worship (LWIndia)', category: 'WORSHIP', duration: '30m', host: 'LoveWorld India', live: false, image: praiseAThon },
      { time: '06:30 AM', title: 'ROR Dailies', category: 'ROR', duration: '30m', host: 'Pastor Chris', live: false, image: rhapsodyTv },
      { time: '07:00 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
      { time: '08:00 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
      { time: '08:30 AM', title: 'Documentary', category: 'SPECIALS', duration: '30m', host: 'LBN', live: false, image: LWS },
      { time: '09:00 AM', title: 'Wholeness', category: 'SPECIALS', duration: '30m', host: 'Dr. Prashanti', live: false, image: drPrashanti },
      { time: '09:30 AM', title: 'Worship (LWIndia)', category: 'WORSHIP', duration: '30m', host: 'LoveWorld India', live: false, image: praiseAThon },
      { time: '10:00 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams },
      { time: '10:30 AM', title: 'Pastor Chris Teaching', category: 'TEACHING', duration: '60m', host: 'Pastor Chris', live: false, image: pastorChrisTeaching },
      { time: '11:30 AM', title: 'Lovetoons', category: 'TEENS & KIDS', duration: '60m', host: 'LBN Kids', live: false, image: lovetoons },
      { time: '12:30 PM', title: 'GYTV', category: 'TEENS & KIDS', duration: '120m', host: 'LBN Youth', live: false, image: gytv },
      { time: '02:30 PM', title: 'ROR Travels', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '03:00 PM', title: 'Ignite Show', category: 'TEENS & KIDS', duration: '60m', host: 'LBN Youth', live: false, image: igniteImg },
      { time: '04:00 PM', title: 'Rhapsody TV', category: 'ROR', duration: '30m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '04:30 PM', title: 'LOVEWORLD EXTRA LIVE', category: 'SPECIALS', duration: '240m', host: 'LBN Global', live: true, image: loveworldExtra },
      { time: '08:30 PM', title: 'HEALING STREAMS TESTIMONIES LIVE', category: 'HEALING', duration: '120m', host: 'Healing School', live: true, image: healingStreams },
      { time: '10:30 PM', title: 'Documentary', category: 'SPECIALS', duration: '30m', host: 'LBN', live: false, image: LWS },
      { time: '11:00 PM', title: 'Movie Night', category: 'SPECIALS', duration: '120m', host: 'LBN', live: false, image: LWS },
      { time: '01:00 AM', title: 'Rhapsody TV', category: 'ROR', duration: '60m', host: 'LBN', live: false, image: rhapsodyTv },
      { time: '02:00 AM', title: 'YourLoveworld Praise-A-Thon Rebroadcast', category: 'WORSHIP', duration: '210m', host: 'LBN', live: false, image: praiseAThon },
      { time: '05:30 AM', title: 'Enter the Healing School', category: 'HEALING', duration: '30m', host: 'Healing School', live: false, image: healingStreams }
    ]
  };

  const toggleReminder = (id) => {
    setReminderSet(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const currentList = scheduleData[selectedDay] || [];
  const filteredList = activeCategory === 'ALL'
    ? currentList
    : currentList.filter(item => item.category === activeCategory);

  return (
    <section id="epg" className="epg-section">
      <div className="epg-container">
        
        {/* Header */}
        <div className="epg-header">
          <span className="epg-badge">ELECTRONIC PROGRAMME GUIDE</span>
          <h2 className="epg-title">WEEKLY BROADCAST SCHEDULE</h2>
          <p className="epg-subtitle">
            Never miss your favorite broadcasts. Plan your viewing, configure reminders, and stay tuned to live satellite feeds.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="epg-days-bar">
          {days.map((day) => (
            <button
              key={day}
              className={`epg-day-btn ${selectedDay === day ? 'active' : ''}`}
              onClick={() => setSelectedDay(day)}
            >
              <span className="day-name">{day.substring(0, 3).toUpperCase()}</span>
              <span className="day-full">{day}</span>
            </button>
          ))}
        </div>

        {/* Filter Categories */}
        <div className="epg-filters-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`epg-filter-chip ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Schedule Slots Timeline */}
        <div className="epg-timeline">
          {filteredList.map((slot, index) => {
            const slotId = `${selectedDay}-${index}`;
            const isReminder = reminderSet[slotId];

            return (
              <div key={index} className={`epg-slot-card ${slot.live ? 'is-live' : ''}`}>
                <div className="epg-slot-time-col">
                  <span className="slot-time">{slot.time}</span>
                  <span className="slot-duration">{slot.duration}</span>
                </div>

                <div className="epg-slot-img-col" style={{ backgroundImage: `url("${slot.image}")` }}>
                  {slot.live && <span className="live-pill">&bull; LIVE NOW</span>}
                </div>

                <div className="epg-slot-info-col">
                  <div className="epg-slot-meta">
                    <span className="slot-category">{slot.category}</span>
                    <span className="slot-host">Hosted by {slot.host}</span>
                  </div>
                  <h3 className="slot-title">{slot.title}</h3>
                </div>

                <div className="epg-slot-action-col">
                  <button
                    className={`reminder-btn ${isReminder ? 'set' : ''}`}
                    onClick={() => toggleReminder(slotId)}
                  >
                    {isReminder ? '✓ REMINDER SET' : '+ SET REMINDER'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Schedule;
