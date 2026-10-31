import { Link } from 'react-router-dom'

const officeImages = {
  hero: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85',
  team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85',
}

const trustItems = [
  ['◎', 'Ethical Recruitment', 'Transparent, fair, and honest hiring practices with zero hidden fees.'],
  ['✓', 'Verified Job Roles', 'Every job listing and employer we work with is thoroughly vetted and legitimate.'],
  ['♡', 'Reliable Placement Support', 'Dedicated HR assistance from your first application to the final offer letter.'],
]

const strengths = [
  ['▣', 'World-Class Staffing', 'Connecting businesses with top talent to drive growth.'],
  ['✥', 'Tailored Expertise', 'Leveraging deep industry knowledge to be your trusted partner.'],
  ['♧', 'Dual-Focus Approach', 'Delivering reliable staff for employers and legitimate jobs for candidates.'],
  ['◎', 'Industry Focus', 'Specialized placement solutions for BPO, Call Centers, and Non-IT sectors.'],
  ['✓', 'Ethical Recruitment', 'Transparent processes with zero hidden fees for candidates.'],
  ['↗', 'Proven Results', 'Ensuring seamless alignment built on excellence and empowerment.'],
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
    a: 'Hire Via HR follows transparent recruitment practices and does not charge candidates placement fees.',
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
            <span className="mock-eyebrow">RECRUITMENT SOLUTIONS</span>

            <h1>
              Streamline your hiring with{' '}
              <span>Hire Via HR</span>
            </h1>

            <p>
              Discover how Hire Via HR's expert placement services can help
              you connect with the right talent or find your next career
              opportunity in BPO, Call Centers, and Non-IT sectors.
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
            {trustItems.map(([icon, title, text]) => (
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

          <div className="mock-strength-grid">
            {strengths.map(([icon, title, text]) => (
              <article className="mock-strength-card" key={title}>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="mock-stats">
            <div><strong>500+</strong><small>Candidates Placed</small></div>
            <div><strong>50+</strong><small>Partner Companies</small></div>
            <div><strong>100%</strong><small>Free for Candidates</small></div>
            <div><strong>24/7</strong><small>HR Support</small></div>
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
            <span className="mock-eyebrow">WHAT PEOPLE SAY</span>
            <h2>Real Stories, <span>Real Impact</span></h2>
            <p className="mock-reviews-subtitle">
              Hear from our clients and candidates who have experienced success with Hire Via HR.
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

          <div className="mock-faq">
            <span className="mock-eyebrow">GOT QUESTIONS?</span>
            <h2>Frequently Asked <span>Questions</span></h2>
            <p>Find answers to common questions about our recruitment services and placement process.</p>

            <div className="mock-faq-list">
              {faqs.map(({ q, a }) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>

            <Link to="/contact" className="mock-orange-btn">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}