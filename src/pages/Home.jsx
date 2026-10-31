import { Link } from 'react-router-dom'

const officeImages = {
  hero: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85',
  team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85',
}

const trustItems = [
  {
    title: 'Ethical Recruitment',
    text: 'Transparent, fair, and honest hiring practices with zero hidden fees.',
    icon: <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><path d="m5 25 7-10 5 6 6-9 5 7" /><circle cx="27" cy="24" r="5" /><path d="m31 28 4 5M28 10l5-7" /></svg>,
  },
  {
    title: 'Verified Job Roles',
    text: 'Every job listing and employer we work with is thoroughly vetted and legitimate.',
    icon: <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><path d="M12 18v15H7V18h5Zm0 13h17a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H21l2-7a3 3 0 0 0-3-4l-8 11v15Z" /></svg>,
  },
  {
    title: 'Reliable Placement Support',
    text: 'Dedicated HR assistance from your first application to the final offer letter.',
    icon: <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><rect x="4" y="6" width="10" height="9" rx="1" /><rect x="26" y="6" width="10" height="9" rx="1" /><rect x="26" y="25" width="10" height="9" rx="1" /><path d="M14 10h12M9 15v14h17M21 10v10h5v5" /></svg>,
  },
]

const strengths = [
  [<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 19V5m0 14h16M7 14l4-4 3 3 5-6M16 7h3v3" /></svg>, 'World-Class Staffing', 'Connecting businesses with top talent to drive growth.'],
  [<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 1.7-4.3 1.5 1.5 0 0 1 1-2.7H19a2 2 0 0 0 2-2 9 9 0 0 0-9-9Z" /><circle cx="7.5" cy="11" r="1" /><circle cx="10" cy="7.5" r="1" /><circle cx="15" cy="7.5" r="1" /><circle cx="17.5" cy="11" r="1" /></svg>, 'Tailored Expertise', 'Leveraging deep industry knowledge to be your trusted partner.'],
  [<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 19V5m0 14h17M8 16v-4m4 4V8m4 8v-6m4 6V5" /></svg>, 'Dual-Focus Approach', 'Delivering reliable staff for employers and legitimate jobs for candidates.'],
  [<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 4h8v4a4 4 0 0 1-8 0V4Zm0 2H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4m-4 2v3m-4 3h8m-6-3h4" /></svg>, 'Industry Focus', 'Specialized placement solutions for BPO, Call Centers, and Non-IT sectors.'],
  [<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 12v-1a8 8 0 0 1 16 0v1M4 12h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2Zm16 0h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2Zm-1 6a5 5 0 0 1-5 3h-2" /></svg>, 'Ethical Recruitment', 'Transparent processes with zero hidden fees for candidates.'],
  [<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 12h5V7h5v5h6v5h-6v4H9v-4H4v-5Zm10-5V4h3V2h3v3h-2v2" /></svg>, 'Proven Results', 'Ensuring seamless alignment built on excellence, innovation, and empowerment.'],
]

const services = [
  ['BPO & KPO Placements', 'Connecting businesses with skilled professionals for Business Process Outsourcing roles.', 'BPO Staffing'],
  ['Call Center Staffing', 'Dedicated recruitment for inbound and outbound call centers.', 'Volume Hiring'],
  ['Non-IT Recruitment', 'Placing candidates in administrative, back-office, sales, marketing, and operations roles.', 'Corporate Roles'],
]

const reviews = [
  {
    name: 'Rahul Sharma',
    initials: 'RS',
    rating: 5,
    dark: true,
    text: 'Hire Via HR completely transformed our hiring process. Their team delivered highly qualified candidates quickly. Their screening process is top-notch.',
  },
  {
    name: 'Sneha Gupta',
    initials: 'SG',
    rating: 5,
    text: 'Hire Via HR has become our go-to agency for all volume hiring needs. Their understanding of the BPO landscape is excellent. Ethical, fast, and professional.',
  },
  {
    name: 'Rahul Kumar',
    initials: 'RK',
    rating: 5,
    text: 'I was struggling to find a good Non-IT role. The recruiters at Hire Via HR guided me through interview preparation and helped me find a suitable opportunity.',
  },
  {
    name: 'Priya Singh',
    initials: 'PS',
    rating: 5,
    text: 'Very transparent and ethical process. They never asked for placement fees and helped me find a great job in a BPO company.',
  },
  {
    name: 'Neha Verma',
    initials: 'NV',
    rating: 4,
    text: 'Professional and supportive recruiters. They understood what kind of BPO job I was looking for and matched me with a suitable opportunity.',
  },
  {
    name: 'Amit Kumar',
    initials: 'AK',
    rating: 5,
    text: 'Hire Via HR completely transformed our hiring process. Their team delivered highly qualified candidates quickly.',
  },
  {
    name: 'Vikram Desai',
    initials: 'VD',
    rating: 5,
    dark: true,
    text: 'A highly reliable staffing partner. Their talent pool for Non-IT and administrative roles is impressive. They have helped streamline our recruitment process.',
  },
]

const faqs = [
  {
    q: 'Does Hire Via HR charge candidates for job placements?',
    a: 'No, absolutely not. Hire Via HR is an ethical recruitment agency. Our services are entirely free for job seekers and candidates. We are compensated by our corporate clients for successfully finding them the right talent. You should never pay a registration or placement fee to get a job through us.',
  },
  {
    q: 'What industries and roles do you specialize in?',
    a: 'We specialize in recruitment for BPO, Call Centers, and Non-IT sectors.',
  },
  {
    q: 'How long does the placement process take?',
    a: 'The timeline depends on the role, employer requirements, and candidate selection process.',
  },
  {
    q: 'How do you screen candidates before sending them to employers?',
    a: 'We evaluate candidates based on the skills and suitability required for each role.',
  },
]

function ReviewCard({ review }) {
  return (
    <article className={`mock-review-card ${review.dark ? 'dark' : ''}`}>
      <p>{review.text}</p>

      <div className="mock-review-user">
        <div className="mock-avatar">{review.initials}</div>

        <div className="mock-review-person">
          <strong>{review.name}</strong>
          <span className="mock-stars">
            {'★'.repeat(review.rating)}
            {'☆'.repeat(5 - review.rating)}
            <small> ({review.rating} out of 5)</small>
          </span>
        </div>

        <span className="mock-x">𝕏</span>
      </div>
    </article>
  )
}

export default function Home() {
  return (
    <main className="mock-home">

      {/* HERO + TRUST */}
      <section className="mock-hero-trust">
        <div className="mock-hero container">
          <div className="mock-hero-copy">
            {/* <span className="mock-eyebrow">RECRUITMENT SOLUTIONS</span> */}

            <h1>
              Streamline your hiring with{' '}
              <span>Hire Via HR</span>
            </h1>

            <p>
              Discover how Hire Via HR's expert placement services can help
              you connect with the right talent or find your next career
              opportunity in BPO, Call Centers,Non-IT sectors,Work from Home and Data Entry.
            </p>

            <Link to="/contact" className="mock-orange-btn hero-button">
              Find a Job <span>→</span>
            </Link>
          </div>

          <div className="mock-hero-image">
            <img src={officeImages.hero} alt="Recruitment team working together" />

            <div className="mock-growth">
              <strong>+12.39%</strong>
              <small>Growth Rate</small>
            </div>

            <div className="mock-revenue">
              <strong>$483,203</strong>
              <small>Revenue Generated</small>
            </div>
          </div>
        </div>

        <div className="mock-trust container">
          <div className="mock-section-heading">
            <span className="mock-eyebrow">OUR PROMISE</span>
            <h2>Built on <span>Trust</span></h2>
            <p>
              We take the risk out of hiring. Our transparent processes ensure
              businesses get reliable talent and candidates find legitimate careers.
            </p>
          </div>

          <div className="mock-trust-grid">
            {trustItems.map(({ icon, title, text }) => (
              <article className="mock-trust-card" key={title}>
                <span className="mock-trust-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RECRUITMENT PARTNER */}
      <section className="mock-partner">
        <div className="container mock-partner-grid">
          <div className="mock-partner-image">
            <img src={officeImages.team} alt="Professional team collaborating in an office" />

            <div className="mock-image-caption">
              <span>♧</span>
              <div>
                <strong>Good people. Great possibilities.</strong>
                <small>That's where every success story starts.</small>
              </div>
            </div>
          </div>

          <div className="mock-partner-copy">
            <h2>
              A Recruitment Partner You Can <span>Trust</span>
            </h2>

            <ul>
              <li>Connecting businesses with top talent to drive growth.</li>
              <li>Leveraging deep industry knowledge to be your trusted partner.</li>
              <li>Delivering reliable staff for employers and legitimate jobs for candidates.</li>
            </ul>

            <div className="mock-button-row">
              <Link to="/contact" className="mock-orange-btn">Contact Our Team</Link>
              <Link to="/services" className="mock-outline-btn">Explore Services →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PARTNER + STATS */}
      <section className="mock-why">
        <div className="container">
          <div className="mock-why-heading">
            <h2>Why Partner with <span>Hire Via HR?</span></h2>
            <p>
              We combine deep industry expertise with a personalized approach
              to connect businesses with top-tier talent and help candidates
              find legitimate career opportunities. With a focus on ethical
              recruitment and proven results, we are committed to helping you succeed.
            </p>
          </div>
        </div>

        <div className="mock-strength-band">
          <div className="container">
            <div className="mock-strength-grid">
              {strengths.map(([icon, title, text]) => (
                <article className="mock-strength-card" key={title}>
                  <span>{icon}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="mock-stats">
            <div><span className="mock-stat-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.6 3.4c-4.2-.5-8.5 1-11.5 4L6.6 9.9l-3.3.4-2.1 2.1 5 1.1 4.3 4.3 1.1 5 2.1-2.1.4-3.3 2.5-2.5c3-3 4.5-7.3 4-11.5ZM15.5 8.5a1.5 1.5 0 1 1 2.1 2.1 1.5 1.5 0 0 1-2.1-2.1Z" /></svg></span><strong>500+</strong><small>Candidates Placed</small></div>
            <div><span className="mock-stat-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 12 3.2 3.2L17 8.5" /><circle cx="12" cy="12" r="9" /></svg></span><strong>50+</strong><small>Partner Companies</small></div>
            <div><span className="mock-stat-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18V6m0 12h16M7 14l4-4 3 3 5-6m-4 0h4v4" /></svg></span><strong>100%</strong><small>Free for Candidates</small></div>
            <div><span className="mock-stat-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 16 6-6 4 4 7-8m-5 0h5v5" /></svg></span><strong>24/7</strong><small>HR Support</small></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mock-services">
        <div className="container mock-services-grid">
          <div className="mock-services-intro">
            <h2>
              Expert Placement Services for{' '}
              <span>BPO, Call Centers</span> & <span>Non-IT Sectors</span>
            </h2>

            <p>
              We are a premier recruitment agency dedicated to bridging the
              gap between exceptional talent and leading employers.
            </p>

            <Link to="/about" className="mock-purple-link">
              Explore About Us →
            </Link>
          </div>

          <div className="mock-service-cards">
            {services.map(([title, text, label]) => (
              <article className="mock-service-card" key={title}>
                <small>{label}</small>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link to="/contact">→</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS + FAQ */}
      <section className="mock-reviews-faq">
        <div className="container mock-reviews-faq-grid">
          <div className="mock-reviews">
            <h2>What Our <span>Users</span> Say</h2>
            <p className="mock-reviews-subtitle">
              Real stories. Real results. See why leading employers and top talent trust Hire Via HR.
            </p>

            <div className="mock-reviews-grid">
              <div className="mock-review-column">
                <ReviewCard review={reviews[0]} />
                <ReviewCard review={reviews[1]} />
              </div>

              <div className="mock-review-column">
                <ReviewCard review={reviews[2]} />
                <ReviewCard review={reviews[3]} />
                <ReviewCard review={reviews[4]} />
              </div>

              <div className="mock-review-column">
                <ReviewCard review={reviews[5]} />
                <ReviewCard review={reviews[6]} />
              </div>
            </div>
          </div>
        </div>

        <div className="mock-faq-section">
          <div className="container">
            <div className="mock-faq">
              <div className="mock-faq-intro">
                <h2>Frequently Asked<br /><span>Questions</span></h2>
                <p>As a trusted recruitment partner, we are dedicated to providing transparent information. Find answers to common questions from employers and job seekers below.</p>
                <Link to="/contact" className="mock-faq-contact">Contact Us</Link>
              </div>

              <div className="mock-faq-list">
                {faqs.map(({ q, a }) => (
                  <details key={q}>
                    <summary>{q}</summary>
                    <p>{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}