export const firm = {
  name: 'Vance & Thornbury',
  nameLeft: 'VANCE',
  nameRight: 'THORNBURY',
  tagline: 'Attorneys at Law',
  founded: 1968,
  promise: 'No fee unless we win — you owe nothing until your case is resolved.',
  address: '412 Kestrel Avenue, Suite 900, Bellhaven, OR 97204',
  addressShort: '412 Kestrel Avenue, Suite 900 — Bellhaven, OR',
  phone: '+1 (503) 555 0182',
  phoneAlt: '+1 (503) 555 0199',
  email: 'office@vancethornbury.law',
  hours: 'Mon – Fri: 08.30am – 17.30pm',
  hoursFull: 'Monday – Friday: 08.30am to 17.30pm · Weekends by appointment',
}

export const languages = ['English', 'Español', 'Français', 'Deutsch', '中文']

export const navigation = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'Our Firm', to: '/about' },
      { label: 'Our History', to: '/about' },
      { label: 'Testimonials', to: '/about' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    label: 'Practice Areas',
    to: '/practice',
    children: [
      { label: 'Corporate Law', to: '/practice/corporate-law' },
      { label: 'Family Law', to: '/practice/family-law' },
      { label: 'Criminal Defence', to: '/practice/criminal-defence' },
      { label: 'Estate & Probate', to: '/practice/estate-probate' },
      { label: 'Employment Law', to: '/practice/employment-law' },
      { label: 'Immigration Law', to: '/practice/immigration-law' },
    ],
  },
  { label: 'Attorneys', to: '/attorneys' },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
]

export const heroSlides = [
  {
    image: '/images/hero-1.jpg',
    eyebrow: 'Trial Counsel Since 1968',
    title: 'We Are Board Certified Family Law Specialists',
    text: 'Nearly six decades representing families, founders and the wrongly accused across Oregon and Washington. Consultations are free and confidential.',
    primary: { label: 'Contact Our Attorneys', to: '/contact' },
    secondary: { label: 'View Practice Areas', to: '/practice' },
  },
  {
    image: '/images/hero-2.jpg',
    eyebrow: 'Senior Trial Attorney',
    title: 'Margaret L. Thornbury',
    text: 'Forty-one jury trials, thirty-three verdicts for the plaintiff. When the other side will not settle fairly, we are ready for the courtroom.',
    portrait: true,
    portraitSrc: '/images/attorney-2.jpg',
    portraitAlt: 'Margaret L. Thornbury, senior trial attorney',
    primary: { label: 'Make an Appointment', to: '/contact' },
    secondary: { label: 'Meet the Team', to: '/attorneys' },
  },
  {
    image: '/images/hero-3.jpg',
    eyebrow: 'We Are Vance & Thornbury',
    title: 'Attorneys Fighting For Your Freedom',
    text: 'Criminal defence built on preparation, not bluster. We read every page of discovery and we tell you plainly where you stand.',
    primary: { label: 'Free Case Review', to: '/contact' },
    secondary: { label: 'Our Results', to: '/about' },
  },
]

export const practiceAreas = [
  {
    slug: 'corporate-law',
    icon: 'briefcase',
    label: 'Corporate Law',
    title: 'Structuring Businesses Built To Last.',
    text: 'Formation, shareholder agreements, financing rounds and the disputes that follow. We act for founders and boards from first term sheet to exit.',
    detail:
      'Our corporate group advises closely held companies and venture-backed startups across Oregon and Washington. Most matters begin with governance that was never properly papered — we fix that first, then handle whatever the growth brings.',
  },
  {
    slug: 'family-law',
    icon: 'family',
    label: 'Family Law',
    title: 'Dissolution, Custody & Domestic Relations.',
    text: 'Board certified specialists handling separation, parenting plans, support and the difficult modifications that come years later.',
    detail:
      'Family matters are decided on detail and credibility. We prepare financial disclosures properly, we prepare you for testimony, and we do not let a case drift while the costs mount.',
  },
  {
    slug: 'criminal-defence',
    icon: 'shield',
    label: 'Criminal Defence',
    title: 'The Body Of Law On Offences Against The State.',
    text: 'From arraignment to appeal. We challenge the stop, the search and the science before anyone talks about a plea.',
    detail:
      'A defence is built in the first two weeks. We obtain discovery early, retain our own experts, and file the motions that narrow what a jury will ever hear.',
  },
  {
    slug: 'estate-probate',
    icon: 'scroll',
    label: 'Estate & Probate',
    title: 'Wills, Trusts And Orderly Succession.',
    text: 'Planning that survives contest, and administration handled with the least possible burden on a grieving family.',
    detail:
      'We draft plans that anticipate the arguments: capacity, undue influence, and blended-family claims. When a contest does come, our litigators already know the file.',
  },
  {
    slug: 'employment-law',
    icon: 'scales',
    label: 'Employment Law',
    title: 'Wrongful Termination & Workplace Claims.',
    text: 'Discrimination, retaliation, wage and hour, and restrictive covenants — on both sides of the table.',
    detail:
      'Most employment claims turn on a paper trail created long before anyone consulted a lawyer. We reconstruct it, and we move quickly on the deadlines that bar claims outright.',
  },
  {
    slug: 'immigration-law',
    icon: 'globe',
    label: 'Immigration Law',
    title: 'Status, Petitions And Removal Defence.',
    text: 'Family petitions, employment visas, naturalisation and representation before the immigration courts.',
    detail:
      'Immigration work rewards precision and punishes delay. We track every receipt notice and priority date so nothing is lost to a missed window.',
  },
]

export const aboutTiles = [
  { image: '/images/about-1.jpg', title: 'Request a Quote', icon: 'edit' },
  { image: '/images/about-2.jpg', title: 'Investigation', icon: 'search' },
  { image: '/images/about-3.jpg', title: 'Legal Proceeding', icon: 'gavel' },
]

export const history = [
  { year: '1968', title: 'The firm opens in Bellhaven', text: 'Two trial lawyers, one rented room above a hardware store, and a practice built on referrals from clients who had been turned away elsewhere.' },
  { year: '1984', title: 'Family law group founded', text: 'A dedicated domestic relations team is established, later producing three of the state’s board certified family law specialists.' },
  { year: '1999', title: 'Named firm of the year', text: 'Recognised by the state bar association following a decade of appellate work that reshaped local employment precedent.' },
  { year: '2018', title: 'Second office opens', text: 'A Portland office opens to serve corporate and immigration clients across the wider metropolitan region.' },
]

export const stats = [
  { value: 2840, label: 'Cases Handled', tone: 'navy' },
  { value: 2317, label: 'Favourable Outcomes', tone: 'gold' },
  { value: 41, label: 'Jury Trials', tone: 'light' },
  { value: 96, label: 'Active Matters', tone: 'deep' },
]

export const values = [
  { icon: 'scales', title: 'Fight For Justice', text: 'Seeking justice takes emotional and financial investment. When we take a call, we take it seriously — and we tell you honestly whether you have a case.' },
  { icon: 'briefcase', title: 'Best Case Strategy', text: 'Proving liability in personal injury and complex civil litigation requires relentless preparation. Strategy is decided before the first filing, not after.' },
  { icon: 'user', title: 'Experienced Attorneys', text: 'Every matter is supervised by a partner with at least fifteen years in practice. You will never be handed to someone learning on your file.' },
]

export const attorneys = [
  { slug: 'harlan-vance', name: 'Harlan Vance', role: 'Managing Partner', area: 'Corporate Law', phone: '+1 (503) 555 0110', email: 'h.vance@vancethornbury.law', image: '/images/attorney-1.jpg',
    bio: 'Harlan has advised closely held businesses for twenty-six years, with a particular focus on shareholder disputes and succession in family-owned companies.' },
  { slug: 'margaret-thornbury', name: 'Margaret L. Thornbury', role: 'Senior Partner', area: 'Family Law', phone: '+1 (503) 555 0114', email: 'm.thornbury@vancethornbury.law', image: '/images/attorney-2.jpg',
    bio: 'A board certified family law specialist and the firm’s most experienced trial attorney, with forty-one jury trials to her name.' },
  { slug: 'desmond-okafor', name: 'Desmond Okafor', role: 'Partner', area: 'Criminal Defence', phone: '+1 (503) 555 0121', email: 'd.okafor@vancethornbury.law', image: '/images/attorney-3.jpg',
    bio: 'A former public defender who has tried more than ninety criminal matters, Desmond leads the firm’s defence and appellate practice.' },
  { slug: 'ines-caballero', name: 'Inés Caballero', role: 'Associate Partner', area: 'Immigration Law', phone: '+1 (503) 555 0136', email: 'i.caballero@vancethornbury.law', image: '/images/attorney-4.jpg',
    bio: 'Inés represents families and employers before USCIS and the immigration courts, and runs the firm’s pro bono naturalisation clinic.' },
]

export const testimonials = [
  { quote: 'They took a case two other firms had told me was hopeless, read every page of it, and found the procedural error that ended the whole matter. I have never seen anyone work that carefully.', name: 'Rowan Ellery', role: 'Founder, Ellery Fabrication', avatar: '/images/avatar-2.jpg' },
  { quote: 'What I remember is that nobody ever oversold me. I was told exactly what was likely, what it would cost, and how long it would take — and all three turned out to be right.', name: 'Priya Sandoval', role: 'Client, Family Law', avatar: '/images/avatar-1.jpg' },
  { quote: 'My custody matter ran eighteen months. Not once did I have to chase them for an update, and not once did I speak to someone who did not already know my file.', name: 'Grace Okonkwo', role: 'Client, Domestic Relations', avatar: '/images/avatar-3.jpg' },
]

export const news = [
  { slug: 'appellate-win-suppression', day: '21', month: 'Aug', date: 'August 21, 2026', category: 'Criminal Defence', tag: 'Appeals', author: 'Desmond Okafor', comments: 6, likes: 12, image: '/images/news-1.jpg',
    title: 'Appellate court suppresses evidence from an unlawful stop',
    excerpt: 'The panel held that an extended roadside detention without reasonable suspicion tainted everything that followed, and reversed the conviction outright.' },
  { slug: 'paternity-and-parenting-plans', day: '27', month: 'Jul', date: 'July 27, 2026', category: 'Family Law', tag: 'Custody', author: 'Margaret Thornbury', comments: 7, likes: 5, image: '/images/news-2.jpg',
    title: 'Legal issues around paternity and parenting plans',
    excerpt: 'Establishing paternity changes support, custody and inheritance at once. Here is the order we recommend addressing them in, and why sequence matters.' },
  { slug: 'unfair-business-practices', day: '14', month: 'Jun', date: 'June 14, 2026', category: 'Corporate Law', tag: 'Disputes', author: 'Harlan Vance', comments: 6, likes: 12, image: '/images/news-3.jpg',
    title: 'Judgement entered in unfair business practices claim',
    excerpt: 'A three-year dispute between former partners closes with a finding of breach and an accounting order. What the decision means for shareholder agreements.' },
]

export const faqs = [
  { q: 'Do you charge for the first consultation?', a: 'No. The initial consultation is free and confidential, whether or not we go on to represent you. We will tell you honestly if we think you do not need a lawyer.' },
  { q: 'What does "no fee unless we win" actually cover?', a: 'It applies to contingency matters — principally personal injury and certain employment claims. You owe no attorney fee unless we recover. Court filing costs are explained in writing before you sign anything.' },
  { q: 'How long will my case take?', a: 'A negotiated resolution typically takes three to nine months. A matter that goes to trial usually runs twelve to twenty-four. We give you a realistic estimate at the outset and revise it in writing if anything changes.' },
  { q: 'Will I work with the attorney I meet first?', a: 'Yes. The partner you meet at consultation supervises your file from start to finish. Associates and paralegals support the work but never replace that relationship.' },
  { q: 'Do you practise outside Oregon?', a: 'We are admitted in Oregon and Washington, and appear in federal courts in both. For matters elsewhere we will refer you to counsel we know personally.' },
]

export const partners = ['Aldermann', 'Corvid Trust', 'Halloway Group', 'Beacon Mutual', 'Ferris & Kwan', 'Northgate Holdings']

export const tweets = [
  { handle: '@VanceThornbury', text: 'Our pro bono naturalisation clinic returns to the Bellhaven library on the first Saturday of next month.', time: '18 min ago' },
  { handle: '@VanceThornbury', text: 'Reminder: the deadline to file a wage claim in Oregon is shorter than most people assume. Ask early.', time: '3 hours ago' },
  { handle: '@BellhavenBar', text: 'Congratulations to Margaret Thornbury on her appointment to the family law advisory committee.', time: '1 day ago' },
]
