import { defineQuery } from 'groq';

export const PROGRAMMES_QUERY = defineQuery(
  `*[_type == "programme"] | order(_createdAt desc){
    _id,
    title,
    slug,
    category,
    image,
    "video": coalesce(videoFile.asset->url, videoUrl),
    "videoUrl": coalesce(videoFile.asset->url, videoUrl),
    schedule,
    duration,
    tagline,
    description,
    body
  }`
);

export const PROGRAMME_BY_SLUG_QUERY = defineQuery(
  `*[_type == "programme" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    category,
    image,
    "video": coalesce(videoFile.asset->url, videoUrl),
    "videoUrl": coalesce(videoFile.asset->url, videoUrl),
    schedule,
    duration,
    tagline,
    description,
    body
  }`
);

export const ARTICLES_QUERY = defineQuery(
  `*[_type == "article"] | order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    summary,
    body
  }`
);

export const SCHEDULE_ITEMS_QUERY = defineQuery(
  `*[_type == "scheduleItem"] | order(order asc){
    _id,
    title,
    day,
    time,
    order,
    startMinutes,
    category,
    duration,
    host,
    live,
    image,
    programmeRef->{
      _id,
      title,
      slug,
      category
    }
  }`
);

export const GLOBAL_PROGRAMS_QUERY = defineQuery(
  `*[_type == "globalPrograms"] | order(order asc){
    _id,
    title,
    slug,
    badge,
    broadcastDate,
    description,
    linkUrl,
    order,
    image
  }`
);

export const MESSAGES_QUERY = defineQuery(
  `*[_type == "messages"] | order(order asc){
    _id,
    title,
    slug,
    badge,
    objectPosition,
    description,
    "video": coalesce(videoFile.asset->url, videoUrl),
    "videoUrl": coalesce(videoFile.asset->url, videoUrl),
    order,
    image
  }`
);

export const MEDIA_QUERY = defineQuery(
  `*[_type == "mediaItem"] | order(order asc){
    _id,
    title,
    slug,
    mediaType,
    section,
    image,
    "video": coalesce(videoFile.asset->url, externalVideoUrl),
    externalVideoUrl,
    caption,
    programmeRef->{
      _id,
      title,
      slug
    },
    order
  }`
);

export const MEDIA_BY_SECTION_QUERY = defineQuery(
  `*[_type == "mediaItem" && section == $section] | order(order asc){
    _id,
    title,
    slug,
    mediaType,
    section,
    image,
    "video": coalesce(videoFile.asset->url, externalVideoUrl),
    externalVideoUrl,
    caption,
    programmeRef->{
      _id,
      title,
      slug
    },
    order
  }`
);

