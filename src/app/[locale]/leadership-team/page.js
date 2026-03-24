import Link from 'next/link';
import styles from '../about/page.module.css';
import ScrollReveal from '../../../components/ui/ScrollReveal';
import TeamSection from '../../../components/Team/TeamSection';

// ── Leadership data ──────────────────────────────────────────
const leaders = [
  {
    name:  'Dr. Khaled Hamood Al-Azab',
    title: 'Vice President of the Arab Volunteer Union',
    subtitle: 'Expert in Strategic Planning & Institutional Capacity Building',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    bio: 'An accomplished consultant and academic with over 18 years of experience in management, strategic planning, and organizational development. Holding a Ph.D. in "Administration and Planning," he has spearheaded major regional initiatives in collaboration with international organizations such as the UNDP and GIZ. Dr. Al-Azab specializes in designing institutional models, conflict resolution, and developing complex procedural manuals for the third sector and government entities across the GCC and the Arab world.',
    expertise: [
      'Strategic & Operational Planning',
      'Institutional Capacity Building & Organizational Restructuring',
      'Project Management, Monitoring, Evaluation, Accountability, and Learning (MEAL)',
      'Training of Trainers (TOT) & Curriculum Design',
    ],
    experience: [
      { role: 'Vice President, Arab Volunteer Union (Bahrain)', desc: 'Leading development and training strategies at a regional level.' },
      { role: 'Consultant for GIZ & UNDP', desc: 'Executed projects on social cohesion, conflict management, and strategic roadmap development in complex environments.' },
      { role: 'Chairman, Attanweer Development Foundation (ADF)', desc: 'Directed financial and administrative operations, leading multi-disciplinary teams to achieve institutional KPIs.' },
    ],
  },
  {
    name:  'Sumair Ahmed Watani',
    title: 'Business Development & Growth Marketing Director',
    subtitle: 'Export Strategy & Supply Chain Expert',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    bio: 'A high-impact executive with over 20 years of global experience in crafting market penetration strategies, particularly within the KSA and Bahraini markets. Specializing in transforming commercial objectives into tangible results through digital transformation and product development, he has a proven track record of driving multimillion-dollar revenue growth. He excels in navigating GCC regulatory standards and managing complex supply chains for the FMCG sector.',
    expertise: [
      'KSA & GCC Market Penetration',
      'Brand Management & Product Development',
      'Growth Marketing & Digital Strategy (SEO/SMM)',
      'Export Operations & Regulatory Compliance',
    ],
    experience: [
      { role: 'Business Development Manager (United King Foods)', desc: 'Expanded footprint to 1,000+ stores in KSA, achieving a 160% increase in regional sales.' },
      { role: 'Planning Strategy Manager (Horwath Mak)', desc: 'Provided consultancy for UAE government entities regarding organizational restructuring and KSA market integration.' },
      { role: 'Marketing Manager (Mehran Foods)', desc: 'Led market entry into KSA and Bahrain, generating $10M in revenue and securing listings with major regional retailers.' },
    ],
  },
  {
    name:  'Sami Mohammed Ali',
    title: 'Manager of Grants & Capacity Building',
    subtitle: 'International Relations & Project Management Expert',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    bio: 'A dedicated professional with extensive experience in both the public and private sectors, specializing in donor relations and grant management. He possesses strong leadership skills in managing multi-national teams and overseeing large-scale projects with budgets exceeding $55 million. Mr. Ali is an expert in formulating organizational policies and procedures, combined with high-level diplomatic negotiation skills and official simultaneous interpretation capabilities.',
    expertise: [
      'Grant System Management & Partner Capacity Assessment',
      'Strategic Initiative Development & Risk Management',
      'International Relations & Diplomatic Protocol',
      'Monitoring, Evaluation, and Learning (MEAL) for cross-border projects',
    ],
    experience: [
      { role: 'Grants & Capacity Building Manager (International Islamic Charity Organization - Kuwait)', desc: 'Developed grant processes and oversaw partner assessments across 11 international offices.' },
      { role: 'Operations Manager (IICO)', desc: 'Managed diverse project portfolios in over 50 countries with a total budget exceeding $55M.' },
      { role: 'Liaison Officer & Interpreter (UAE & Sudan Embassies \u2013 Malaysia)', desc: 'Managed official events and provided high-level protocol and translation for ministerial and presidential delegations.' },
    ],
  },
  {
    name:  'Saleh Abd El Hamid Mohamed',
    title: 'Economic & Financial Analyst',
    subtitle: 'Institutional Development & AI Integration Expert',
    image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=800&q=80',
    bio: 'A distinguished Economic and Financial Analyst within the Minister\'s Office Sector at the Ministry of Finance. With a background that includes advanced diplomas in Behavioral Sciences and Artificial Intelligence, he is currently a Ph.D. candidate in Finance and Economics. He bridges the gap between deep economic theory and modern technological application, serving as an internationally accredited lecturer and a consultant for strategic policy development in government and private sectors.',
    expertise: [
      'Macro & Microeconomic Analysis and Financial Modeling',
      'Institutional Development & Strategic Planning',
      'AI Applications in Management and Economics',
      'Behavioral Sciences, Leadership, and Advanced Communication',
    ],
    experience: [
      { role: 'Ministry of Finance (Minister\'s Office Sector)', desc: 'Serving as a Financial Analyst and Institutional Developer for fiscal policies.' },
      { role: 'International Lecturer', desc: 'Delivering training programs in economics and AI for prestigious institutions including Cairo University and the League of Arab States.' },
      { role: 'Consultant, Egyptian Enterprise Center for Policy & Strategic Studies', desc: 'Prepared strategic working papers for international forums, including COP 27.' },
    ],
  },
];

export default function LeadershipTeam({ params: { locale } }) {
  const isAr = locale === 'ar';
  const chairman = leaders[0];
  const teamMembers = leaders.slice(1); // The other 3 team members

  return (
    <div className={styles.page}>

      {/* ── 1. PRESIDENT BANNER ─────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #061615 0%, #0d2826 100%)',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px',
          background: 'linear-gradient(90deg, #139088, #c5a059, #139088)',
        }} />

        <div className="container">
          <ScrollReveal animation="fadeUp">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span style={{
                display: 'inline-block', background: 'rgba(197,160,89,0.2)',
                border: '1px solid rgba(197,160,89,0.4)', color: '#c5a059',
                fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', padding: '0.4rem 1rem', borderRadius: '100px',
                marginBottom: '1rem',
              }}>
                {isAr ? 'القيادة العليا' : 'Leadership'}
              </span>
              <h1 style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900,
                color: '#fff', lineHeight: 1.2, marginBottom: '0.5rem',
              }}>
                {isAr ? 'رئيس مجلس الإدارة' : 'Leadership & Team'}
              </h1>
            </div>
          </ScrollReveal>

          {/* Full Width Banner Content */}
          <ScrollReveal animation="fadeUp" delay="0.2s">
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '2rem 5%', gap: '4rem',
              position: 'relative',
            }}>
              {/* Left Content */}
              <div style={{ flex: '1', maxWidth: '600px', zIndex: 2 }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#139088', marginBottom: '0.2rem' }}>
                  {chairman.name}
                </h2>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
                  {chairman.title}
                </h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>
                  {chairman.bio}
                </p>
                <a href="#" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '32px', height: '32px', background: '#0077b5',
                  color: '#fff', borderRadius: '4px', textDecoration: 'none',
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>

              {/* Right Image (Circular to match team) */}
              <div style={{
                position: 'relative',
                flexShrink: 0,
                width: '450px',
                display: 'flex',
                justifyContent: 'flex-end',
              }}>
                <div style={{
                  width: '320px', height: '320px', borderRadius: '50%',
                  overflow: 'hidden', flexShrink: 0,
                  border: '6px solid #f26f21', // Orange border to match
                  boxShadow: '0 10px 40px rgba(242,111,33,0.2)',
                }}>
                  <img
                    src={chairman.image}
                    alt={chairman.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Animated Divider */}
      <div className={styles.animatedLine} />

      {/* ── 2. TEAM GRID (3 members) ────────────────────────── */}
      <section className={styles.leadership}>
        <div className="container" style={{ padding: '0 0 6rem' }}>
          <ScrollReveal animation="fadeUp">
            {/* ── Left-aligned two-column team header ── */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '4rem',
              alignItems: 'center',
              marginBottom: '4rem',
              padding: '0 2rem',
            }}>

              {/* Left: Text Content */}
              <div style={{ maxWidth: '640px' }}>
                <h2 style={{
                  fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                  fontWeight: 900,
                  color: '#fff',
                  lineHeight: 1.1,
                  margin: '0 0 1rem',
                  letterSpacing: '-0.02em',
                }}>
                  {isAr ? 'نخبة من الاستشاريين' : 'Exceptional\nConsultants'}
                </h2>

                {/* Gold accent bar — left aligned */}
                <div style={{ width: '52px', height: '3px', background: '#c5a059', borderRadius: '2px', marginBottom: '1.75rem' }} />

                <p style={{
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '1.05rem',
                  lineHeight: 1.85,
                  margin: '0 0 1rem',
                }}>
                  {isAr
                    ? 'تتكون قيادتنا من محترفين متمرسين...'
                    : 'Our leadership is composed of seasoned professionals with deep expertise in strategy, governance, capacity development, institutional transformation, and communication.'}
                </p>
                <p style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.97rem',
                  lineHeight: 1.85,
                  margin: 0,
                }}>
                  {isAr
                    ? 'نجمع بين تجارب متنوعة...'
                    : 'We bring together diverse experiences from public sector reform, private sector growth, and civil society empowerment — enabling us to design solutions that are both pragmatic and forward-looking.'}
                </p>
              </div>

              {/* Right: Stat / Highlight Cards */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                minWidth: '220px',
              }}>
                {[
                  { icon: '🌍', value: '50+', label: 'Countries Reached' },
                  { icon: '📋', value: '20 Yrs', label: 'Avg. Expert Experience' },
                  { icon: '🤝', value: '100+', label: 'Projects Delivered' },
                ].map((stat, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '1rem 1.4rem',
                    backdropFilter: 'blur(6px)',
                    transition: 'border-color 0.2s',
                  }}>
                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{stat.icon}</span>
                    <div>
                      <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#c5a059', lineHeight: 1 }}>
                        {stat.value}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.25rem' }}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </ScrollReveal>

          <TeamSection leaders={teamMembers} isAr={isAr} />
        </div>
      </section>

      {/* ── 3. CTA ──────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className="container" style={{ padding: '7rem 0' }}>
          <ScrollReveal animation="fadeUp" threshold={0.2}>
            <div className={styles.ctaInner}>
              <div className={styles.ctaGoldLine} />
              <h2 className={styles.ctaTitle}>
                {isAr ? 'مستعد للعمل مع بروإكس؟' : 'Ready to Work With ProEx?'}
              </h2>
              <p className={styles.ctaText}>
                {isAr
                  ? 'تواصل مع فريقنا لنبدأ رحلة التحول المؤسسي معاً.'
                  : 'Connect with our team and begin your institutional transformation journey.'}
              </p>
              <div className={styles.ctaActions}>
                <Link href={`/${locale}/contact`} className={styles.btnGold}>
                  {isAr ? 'تواصل معنا' : 'Contact Us'}
                </Link>
                <Link href={`/${locale}/services`} className={styles.btnOutline}>
                  {isAr ? 'خدماتنا' : 'Our Services'}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
