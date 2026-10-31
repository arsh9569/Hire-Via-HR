import { Link } from 'react-router-dom'

const values = [
  {
    icon: <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5.5" /><circle cx="12" cy="12" r="2" /></svg>,
    title: 'Our Mission',
    text: 'To provide comprehensive, innovative solutions that elevate businesses and individuals alike – whether through connecting talent or shaping bright futures.',
    color: 'mission'
  },
  {
    icon: <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3.2 14.2 5l3-.2.5 2.9 2.3 1.9-1.4 2.7.7 2.9-2.7 1.2-1.2 2.7-2.9-.7L12 21l-2.5-1.6-2.9.7-1.2-2.7-2.7-1.2.7-2.9L2 10.1l2.3-1.9.5-2.9 3 .2L12 3.2Z" /><path d="m9 12 2 2 4-4" /><path d="M9 19.5v2l3-1.6 3 1.6v-2" /></svg>,
    title: 'Excellence, Always',
    text: 'We are committed to delivering top-notch staffing services that exceed the expectations of both our clients and candidates.',
    color: 'excellence'
  },
  {
    icon: <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 13h3l2 2h7.5a2 2 0 0 0 0-4H12a2 2 0 0 1-2-2h4a4 4 0 0 1 4 4" /><path d="M3 13v6h3l2 1h7a4 4 0 0 0 2.8-1.2L22 15a2 2 0 0 0-2.8-2.8l-2.1 1.5" /><path d="m16 3 .9 2 2.1.3-1.5 1.5.4 2.1L16 8l-1.9.9.4-2.1L13 5.3l2.1-.3L16 3Z" /></svg>,
    title: 'Empowerment & Innovation',
    text: 'We embrace change and empower our clients and candidates to reach their full potential through forward-thinking recruitment solutions.',
    color: 'empowerment'
  }
]

export default function About() {
  return (
    <main className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero-banner">
        <div className="about-hero-overlay">
          <div className="about-hero-content">

            <span className="about-story-label">
              OUR STORY
            </span>

            <h1>
              More Than Just a Recruitment
              <br />
              Agency.
              <span>
                We Are Your Partners in Success.
              </span>
            </h1>

            <p>
              Bridging the gap between exceptional talent and leading
              businesses in BPO, Call Centers, and Non-IT sectors.
              We don't just fill roles; we build careers and
              empower businesses.
            </p>

          </div>
        </div>
      </section>


      {/* VALUES SECTION */}
      <section className="about-values-section">

        <div className="about-section-heading">
          <span className="eyebrow">
            OUR PURPOSE. OUR PROMISE.
          </span>

          <h2>What drives us</h2>

          <p>
            Strong values. Shared ambitions. A better way to connect.
          </p>
        </div>

        <div className="about-values-grid">

          {values.map((value) => (
            <article
              className="about-value-card"
              key={value.title}
            >
              <div className={`about-value-icon ${value.color}`}>
                {value.icon}
              </div>

              <h3>{value.title}</h3>

              <p>{value.text}</p>
            </article>
          ))}

        </div>
      </section>


      {/* RECRUITMENT PARTNER SECTION */}
      <section className="about-partner-section">

        <div className="about-partner-container">

          <div className="about-team-visual">

            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
              alt="Professional team working together"
            />

            <div className="about-image-caption">
              <span className="caption-icon">♧</span>

              <div>
                <strong>Good people. Great possibilities.</strong>
                <p>That's where every success story starts.</p>
              </div>
            </div>

          </div>


          <div className="about-partner-content">

            <h2>
              Your trusted
              <br />
              recruitment <span>partner.</span>
            </h2>

            <p>
              At Hire Via HR, we believe the right connection can
              change everything. We began our journey with a simple
              purpose: to connect businesses with the right talent
              to drive meaningful growth.
            </p>

            <p>
              Whether you're an employer looking for reliable,
              job-ready staff or a candidate seeking genuine
              opportunities — our process is built on transparency,
              trust, and results.
            </p>

            <div className="about-partner-buttons">

              <Link to="/contact" className="btn btn-orange">
                Contact Our Team
              </Link>

              <Link to="/services" className="about-explore-link">
                Explore Services <span>→</span>
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  )
}