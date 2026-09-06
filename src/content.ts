import type {
  ExperienceItem,
  Frame,
  Lang,
  LocalizedString,
  Project,
  SkillGroup,
} from './types'

export const asset = (path: string) => import.meta.env.BASE_URL + path

export const PROFILE = {
  name: 'Hazem Mohamed',
  role: { en: 'Video Editor', ar: 'مونتير فيديو' } satisfies LocalizedString,
  email: 'hazem7mmohammed@gmail.com',
  location: {
    en: 'Cairo, Egypt',
    ar: 'القاهرة، مصر',
  } satisfies LocalizedString,
  socials: {
    youtube: 'https://youtube.com/@yourname',
    instagram: 'https://instagram.com/hazem_mmohammedd',
    linkedin: 'https://linkedin.com/in/hazem-mohamed-3193542b3',
    whatsapp: 'https://wa.me/201123368374',
    x: 'https://x.com/yourname',
  },
}

export type Dict = {
  'nav.work': string
  'nav.recent': string
  'nav.about': string
  'nav.skills': string
  'nav.experience': string
  'nav.contact': string
  'hero.availability': string
  'hero.greeting': string
  'hero.tagline': string
  'hero.ctaReel': string
  'hero.ctaContact': string
  'hero.statYears': string
  'hero.statPlugin': string
  'hero.statAI': string
  marquee: string[]
  'showreel.eyebrow': string
  'showreel.title': string
  'showreel.subtitle': string
  'showreel.placeholder': string
  'recent.eyebrow': string
  'recent.title': string
  'recent.subtitle': string
  'recent.tag': string
  'ba.eyebrow': string
  'ba.title': string
  'ba.subtitle': string
  'ba.tag': string
  'sfx.eyebrow': string
  'sfx.title': string
  'sfx.subtitle': string
  'sfx.tag': string
  'work.eyebrow': string
  'work.title': string
  'work.subtitle': string
  'filters.all': string
  'filters.commercials': string
  'filters.music': string
  'filters.social': string
  'filters.docs': string
  'work.open': string
  'work.tools': string
  'work.year': string
  'work.duration': string
  'work.noVideo': string
  'about.eyebrow': string
  'about.title': string
  'about.p1': string
  'about.p2': string
  'about.infoTitle': string
  'about.infoLocation': string
  'about.infoLanguages': string
  'about.infoLanguagesValue': string
  'about.infoGear': string
  'about.infoGearValue': string
  'skills.eyebrow': string
  'skills.title': string
  'skills.subtitle': string
  'experience.eyebrow': string
  'experience.title': string
  'experience.subtitle': string
  'contact.eyebrow': string
  'contact.title': string
  'contact.subtitle': string
  'contact.whatsapp': string
  'contact.response': string
  'footer.rights': string
  'footer.built': string
  'footer.top': string
  'modal.close': string
}

export const translations: Record<Lang, Dict> = {
  en: {
    'nav.work': 'Work',
    'nav.recent': 'Recent',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'hero.availability': 'Available for freelance',
    'hero.greeting': "Hi, I'm",
    'hero.tagline':
      "Freelance video editor with 3+ years of hands-on experience in short-form and long-form content — strong motion graphics in After Effects and an AI-driven, multidisciplinary approach to every project.",
    'hero.ctaReel': 'Watch showreel',
    'hero.ctaContact': 'Get in touch',
    'hero.statYears': 'Years of editing',
    'hero.statPlugin': 'After Effects plugin built',
    'hero.statAI': 'AI-driven creative workflow',
    marquee: [
      'Editing',
      'Motion Graphics',
      'Short Form',
      'Long Form',
      'After Effects',
      'Premiere Pro',
      'CapCut',
      'AI-Assisted Workflows',
    ],
    'showreel.eyebrow': 'Showreel',
    'showreel.title': 'My work, in one cut',
    'showreel.subtitle': 'A minute of my favorite edits — cut, colored and finished by me.',
    'showreel.placeholder': 'Drop your reel at /public/videos/showreel.mp4',
    'recent.eyebrow': 'Recent Frames',
    'recent.title': 'Fresh cuts, straight off the timeline',
    'recent.subtitle': 'Latest frames from recent edits — hover to play.',
    'recent.tag': 'Recent frame',
    'ba.eyebrow': 'Before & After',
    'ba.title': 'See the transformation',
    'ba.subtitle': 'Recent before & after cuts — hover and watch the frame come alive.',
    'ba.tag': 'B&A',
    'sfx.eyebrow': 'SFX',
    'sfx.title': 'Sound design, cut to the frame',
    'sfx.subtitle': 'Cut-to-picture sound effects from recent edits — hover to play, click for sound.',
    'sfx.tag': 'SFX',
    'work.eyebrow': 'Portfolio',
    'work.title': 'Featured work',
    'work.subtitle':
      'Selected projects across commercials, music videos, social and documentary.',
    'filters.all': 'All',
    'filters.commercials': 'Commercials',
    'filters.music': 'Music videos',
    'filters.social': 'Social',
    'filters.docs': 'Documentary',
    'work.open': 'Open project',
    'work.tools': 'Tools',
    'work.year': 'Year',
    'work.duration': 'Duration',
    'work.noVideo': 'Add the video file to /public/videos',
    'about.eyebrow': 'About',
    'about.title': 'The editor behind the cut',
    'about.p1':
      'Freelance video editor with 3+ years of hands-on experience in short-form and long-form content — strong motion graphics in After Effects and an AI-driven, multidisciplinary approach to every project.',
    'about.p2': '',
    'about.infoTitle': 'Quick facts',
    'about.infoLocation': 'Based in',
    'about.infoLanguages': 'Languages',
    'about.infoLanguagesValue': 'Arabic (native) · English (B1/B2)',
    'about.infoGear': 'Editing rack',
    'about.infoGearValue': 'Premiere Pro · After Effects · CapCut',
    'skills.eyebrow': 'Skills',
    'skills.title': 'Tools I master',
    'skills.subtitle': 'Everything a modern edit needs, under one timeline.',
    'experience.eyebrow': 'Experience',
    'experience.title': "Where I've cut my teeth",
    'experience.subtitle': 'A short history of my work behind the timeline.',
    'contact.eyebrow': 'Contact',
    'contact.title': "Let's cut something great together",
    'contact.subtitle':
      "I'm currently taking on new projects. Tell me about yours — I usually reply within 24 hours.",
    'contact.whatsapp': 'Chat on WhatsApp',
    'contact.response': 'Usually replies within 24h',
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Designed & built with React',
    'footer.top': 'Back to top',
    'modal.close': 'Close',
  },
  ar: {
    'nav.work': 'الأعمال',
    'nav.recent': 'الأحدث',
    'nav.about': 'عنّي',
    'nav.skills': 'المهارات',
    'nav.experience': 'الخبرة',
    'nav.contact': 'تواصل معي',
    'hero.availability': 'متاح للعمل الحر',
    'hero.greeting': 'مرحبًا، أنا',
    'hero.tagline':
      'مونتير فيديو مستقل بخبرة فعلية تزيد عن 3 سنوات في المحتوى القصير والطويل لمنصات التواصل — موشن جرافيك قوي في برنامج أفتر إفكتس، وأسلوب عمل إبداعي يدمج الذكاء الاصطناعي في كل مشروع.',
    'hero.ctaReel': 'شاهد الشوريل',
    'hero.ctaContact': 'تواصل معي',
    'hero.statYears': 'سنوات من المونتاج',
    'hero.statPlugin': 'إضافة أفتر إفكتس بنيتها بنفسي',
    'hero.statAI': 'سير عمل إبداعي بالذكاء الاصطناعي',
    marquee: [
      'مونتاج',
      'موشن جرافيك',
      'محتوى قصير',
      'محتوى طويل',
      'أفتر إفكتس',
      'بريمير برو',
      'كاب كت',
      'سير عمل بالذكاء الاصطناعي',
    ],
    'showreel.eyebrow': 'الشوريل',
    'showreel.title': 'أعمالي في مقطع واحد',
    'showreel.subtitle': 'دقيقة من أفضل مقاطعي — قص وتلوين وتجهيز نهائي مني.',
    'showreel.placeholder': 'ضع ملف الشوريل في /public/videos/showreel.mp4',
    'recent.eyebrow': 'لقطات حديثة',
    'recent.title': 'لقطات جديدة من شريط الزمن',
    'recent.subtitle': 'أحدث اللقطات من مونتاجات حديثة — مرّر لمشاهدتها.',
    'recent.tag': 'لقطة حديثة',
    'ba.eyebrow': 'قبل وبعد',
    'ba.title': 'شاهد التحوّل',
    'ba.subtitle': 'مونتاجات «قبل وبعد» حديثة — مرّر وشاهد اللقطة تنبض بالحياة.',
    'ba.tag': 'قبل وبعد',
    'sfx.eyebrow': 'المؤثرات الصوتية',
    'sfx.title': 'مؤثرات صوتية على الصورة',
    'sfx.subtitle': 'مؤثرات صوتية مركّبة على اللقطات من مونتاجات حديثة — مرّر للتشغيل واضغط للصوت.',
    'sfx.tag': 'SFX',
    'work.eyebrow': 'معرض الأعمال',
    'work.title': 'أعمال مميزة',
    'work.subtitle':
      'مشاريع مختارة ما بين إعلانات وفيديوهات موسيقية وسوشيال ميديا وأفلام وثائقية.',
    'filters.all': 'الكل',
    'filters.commercials': 'إعلانات',
    'filters.music': 'فيديوهات موسيقية',
    'filters.social': 'سوشيال ميديا',
    'filters.docs': 'وثائقيات',
    'work.open': 'فتح المشروع',
    'work.tools': 'الأدوات',
    'work.year': 'السنة',
    'work.duration': 'المدة',
    'work.noVideo': 'ضع ملف الفيديو في /public/videos',
    'about.eyebrow': 'عنّي',
    'about.title': 'المونتير خلف المقدمات',
    'about.p1':
      'أنا مونتير فيديو مستقل بخبرة فعلية تزيد عن 3 سنوات في إنتاج المحتوى القصير والطويل لمواقع التواصل والمنصات الرقمية — مع موشن جرافيك قوي في برنامج أفتر إفكتس.',
    'about.p2':
      'لا أكتفي بقص اللقطات. أبدأ بتحليل احتياجات العميل والمحتوى الحالي لأكتشف ما يمكن تحسينه، ثم أعمل بأسلوب يجمع الذكاء الاصطناعي والمعرفة متعددة التخصصات على طول مسار العمل — من الفكرة ودعم الإنتاج حتى المونتاج النهائي.',
    'about.infoTitle': 'معلومات سريعة',
    'about.infoLocation': 'المقر',
    'about.infoLanguages': 'اللغات',
    'about.infoLanguagesValue': 'العربية (لغة أم) · الإنجليزية (B1/B2)',
    'about.infoGear': 'عدّة التحرير',
    'about.infoGearValue': 'بريمير برو · أفتر إفكتس · كاب كت',
    'skills.eyebrow': 'المهارات',
    'skills.title': 'أدوات أتقنها',
    'skills.subtitle': 'كل ما يحتاجه المونتاج العصري على توقيت زمني واحد.',
    'experience.eyebrow': 'الخبرة',
    'experience.title': 'رحلتي وراء شريط الزمن',
    'experience.subtitle': 'لمحة قصيرة عن مسيرتي في المونتاج.',
    'contact.eyebrow': 'تواصل',
    'contact.title': 'لنصنع شيئًا رائعًا معًا',
    'contact.subtitle': 'أستقبل حاليًا مشاريع جديدة. أخبرني عن مشروعك — أرد عادةً خلال 24 ساعة.',
    'contact.whatsapp': 'تواصل عبر واتساب',
    'contact.response': 'أرد عادةً خلال 24 ساعة',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.built': 'صُمم وبُني بـ React',
    'footer.top': 'العودة إلى الأعلى',
    'modal.close': 'إغلاق',
  },
}

export function translate(
  str: LocalizedString,
  lang: Lang,
): string {
  return str[lang]
}

export const PROJECTS: Project[] = [
  {
    id: 'summer-campaign',
    title: { en: 'Summer Campaign 25', ar: 'حملة الصيف 25' },
    category: 'commercials',
    description: {
      en: 'A high-energy product campaign — rhythmic cuts, punchy color and kinetic titles built to stop the scroll.',
      ar: 'حملة منتج عالية الطاقة — مونتاج إيقاعي وألوان قوية وعناوين حركية صُممت لتوقّف المتصفح.',
    },
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    duration: '0:30',
    year: '2025',
    src: asset('videos/project-1.mp4'),
  },
  {
    id: 'neon-nights',
    title: { en: 'Neon Nights', ar: 'ليالي النيون' },
    category: 'music',
    description: {
      en: 'Music video cut to the beat — contrast-driven color, speed ramps and a storyboard that breathes with the song.',
      ar: 'فيديو موسيقي على الإيقاع — ألوان عالية التباين ومنحنيات سرعة وقصة تتنفس مع الأغنية.',
    },
    tools: ['Premiere Pro', 'After Effects', 'Color Grading'],
    duration: '3:12',
    year: '2025',
    src: asset('videos/project-2.mp4'),
  },
  {
    id: 'daily-grind',
    title: { en: 'Daily Grind', ar: 'روتين اليوم' },
    category: 'social',
    description: {
      en: 'A vertical short-form series — tight pacing, clean captions and hook-first structure for the feed.',
      ar: 'سلسلة محتوى قصير بالوضع الرأسي — إيقاع محكم وعناوين نظيفة وبنية تبدأ بـ«الخطاف» للسوشيال ميديا.',
    },
    tools: ['Premiere Pro', 'CapCut', 'Motion Graphics'],
    duration: '0:45',
    year: '2024',
    src: asset('videos/project-3.mp4'),
  },
  {
    id: 'voices-of-the-city',
    title: { en: 'Voices of the City', ar: 'أصوات المدينة' },
    category: 'docs',
    description: {
      en: 'A short documentary — patient pacing, layered sound and a grade that lets the city speak for itself.',
      ar: 'فيلم وثائقي قصير — إيقاع هادئ وصوت متعدد الطبقات وتلوين يترك المدينة تتحدث عن نفسها.',
    },
    tools: ['Premiere Pro', 'DaVinci Resolve', 'Sound Design'],
    duration: '8:20',
    year: '2024',
    src: asset('videos/project-4.mp4'),
  },
  {
    id: 'launch-day',
    title: { en: 'Launch Day', ar: 'يوم الإطلاق' },
    category: 'commercials',
    description: {
      en: 'Product launch film — premium feel, cinematic transitions and a final edit that lands the promise.',
      ar: 'فيلم إطلاق منتج — طابع فاخر وانتقالات سينمائية ومونتاج نهائي يثبّت الوعد.',
    },
    tools: ['Premiere Pro', 'After Effects'],
    duration: '1:00',
    year: '2023',
    src: asset('videos/project-5.mp4'),
  },
  {
    id: 'behind-the-lens',
    title: { en: 'Behind the Lens', ar: 'خلف العدسة' },
    category: 'social',
    description: {
      en: 'Creator series — documentary-style handheld feel, interview driven, finished for multi-platform delivery.',
      ar: 'سلسلة صنّاع محتوى — إحساس وثائقي بالكاميرا اليدوية، تعتمد على اللقاءات، وتُجهّز لعدة منصات.',
    },
    tools: ['Premiere Pro', 'Color Grading', 'Audio Cleanup'],
    duration: '1:30',
    year: '2023',
    src: asset('videos/project-6.mp4'),
  },
]

export const PROJECT_VIDEOS = PROJECTS.map((p) => p.src)
export const SHOWREEL_SRC = asset('videos/showreel.mp4')

export const FRAMES: Frame[] = [
  {
    id: 'frame-1',
    title: { en: 'Frame 01', ar: 'إطار 01' },
    duration: '0:26',
    year: '2026',
    src: asset('videos/recent-frames/frame-1.mp4'),
  },
  {
    id: 'frame-2',
    title: { en: 'Frame 02', ar: 'إطار 02' },
    duration: '0:26',
    year: '2026',
    src: asset('videos/recent-frames/frame-2.mp4'),
  },
  {
    id: 'frame-3',
    title: { en: 'Frame 03', ar: 'إطار 03' },
    duration: '0:27',
    year: '2026',
    src: asset('videos/recent-frames/frame-3.mp4'),
  },
]

export const BEFORE_AFTERS: Frame[] = [
  {
    id: 'ba-1',
    title: { en: 'B&A 01', ar: 'قبل وبعد 01' },
    duration: '1:01',
    year: '2026',
    src: asset('videos/before-after.mp4'),
  },
  {
    id: 'ba-2',
    title: { en: 'B&A 02', ar: 'قبل وبعد 02' },
    duration: '0:34',
    year: '2026',
    src: asset('videos/before-after-2.mp4'),
  },
]

export const SFX_CLIPS: Frame[] = [
  {
    id: 'sfx-1',
    title: { en: 'SFX — Zubair', ar: 'مؤثرات — الزبير' },
    duration: '0:17',
    year: '2026',
    src: asset('videos/sfx.mp4'),
  },
  {
    id: 'sfx-2',
    title: { en: 'SFX — Map Tutorial', ar: 'مؤثرات — درس الخريطة' },
    duration: '0:07',
    year: '2026',
    src: asset('videos/sfx-2.mp4'),
  },
]

export const FRAME_VIDEOS = FRAMES.map((f) => f.src)
export const BA_VIDEOS = BEFORE_AFTERS.map((b) => b.src)
export const SFX_VIDEOS = SFX_CLIPS.map((s) => s.src)

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'freelance',
    role: { en: 'Freelance Video Editor', ar: 'مونتير فيديو مستقل' },
    org: { en: 'Self-employed', ar: 'عمل حر' },
    period: { en: '3+ years', ar: 'أكثر من 3 سنوات' },
    location: { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' },
    points: [
      {
        en: 'Edit short-form and long-form content for social media and digital platforms — footage selection, arrangement, pacing and timing.',
        ar: 'مونتاج المحتوى القصير والطويل لمواقع التواصل والمنصات الرقمية — اختيار اللقطات، ترتيبها، الإيقاع والتوقيت.',
      },
      {
        en: 'Design motion graphics and animated elements in After Effects that carry each video’s message and visual identity.',
        ar: 'تصميم موشن جرافيك وعناصر متحركة في أفتر إفكتس تدعم رسالة الفيديو وهويته البصرية.',
      },
      {
        en: 'Analyze client needs and existing content before editing; contribute ideas and visual directions to creators and social teams.',
        ar: 'تحليل احتياجات العميل والمحتوى الحالي قبل المونتاج؛ وتقديم أفكار واتجاهات بصرية لصنّاع المحتوى وفِرق السوشيال ميديا.',
      },
      {
        en: 'Work AI-first across learning, research and troubleshooting — including independently building a complete After Effects plugin via AI-assisted development.',
        ar: 'أعمل بأسلوب يعتمد الذكاء الاصطناعي في التعلم والبحث وحل المشكلات — بما في ذلك بناء إضافة أفتر إفكتس كاملة ذاتيًا من خلال تطوير بمساعدة الذكاء الاصطناعي.',
      },
    ],
  },
  {
    id: 'education',
    role: {
      en: 'Information Systems — Fourth Year (in progress)',
      ar: 'نظم المعلومات — الفرقة الرابعة (جاري)',
    },
    org: {
      en: 'Al Jazeera Higher Institute for Information Systems',
      ar: 'معهد الجزيرة العالي لنظم المعلومات',
    },
    period: { en: 'In progress', ar: 'جاري' },
    location: { en: 'Mokattam, Cairo, Egypt', ar: 'المقطم، القاهرة، مصر' },
    points: [
      {
        en: 'Self-taught editor — skills built through real freelance work, practical experimentation and continuous research rather than formal courses.',
        ar: 'مونتير علّم نفسه — مهارات بُنيت عبر العمل الحر الحقيقي والتجربة العملية والبحث المستمر وليس عبر دورات رسمية.',
      },
      {
        en: 'Studies adjacent fields — content strategy, marketing, sales, graphic design and automation — to make sharper creative decisions.',
        ar: 'أدرس مجالات قريبة — استراتيجية المحتوى، التسويق، المبيعات، التصميم وأتمتة العمل — لاتخاذ قرارات إبداعية أدق.',
      },
    ],
  },
]

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'editing',
    label: { en: 'Editing', ar: 'المونتاج' },
    items: [
      { name: 'Adobe Premiere Pro', level: 95 },
      { name: 'Short-Form Content', level: 92 },
      { name: 'Long-Form & Pacing', level: 88 },
    ],
  },
  {
    id: 'motion',
    label: { en: 'Motion Graphics', ar: 'الموشن جرافيك' },
    items: [
      { name: 'After Effects', level: 90 },
      { name: 'Kinetic Titles & Effects', level: 82 },
      { name: 'Visual Enhancement', level: 80 },
    ],
  },
  {
    id: 'creative',
    label: { en: 'Client & Creative', ar: 'العميل والإبداع' },
    items: [
      { name: 'Content & Client Analysis', level: 90 },
      { name: 'Creative Ideation', level: 85 },
      { name: 'Cross-Team Collaboration', level: 84 },
    ],
  },
  {
    id: 'ai',
    label: { en: 'AI & Creative Tech', ar: 'الذكاء الاصطناعي والتقنيات' },
    items: [
      { name: 'AI-Assisted Workflows', level: 92 },
      { name: 'Plugin Development', level: 82 },
      { name: 'Automation & Tooling', level: 72 },
    ],
  },
]

export const HERO_STATS = [
  { value: '3+', labelKey: 'hero.statYears' },
  { value: '1', labelKey: 'hero.statPlugin' },
  { value: 'AI', labelKey: 'hero.statAI' },
] as const