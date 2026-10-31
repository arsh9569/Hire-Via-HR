import { Link } from 'react-router-dom'

const values = [
  {
    icon: '◎',
    title: 'Our Mission',
    text: 'To provide comprehensive, innovative solutions that elevate businesses and individuals alike – whether through connecting talent or shaping bright futures.',
    color: 'mission'
  },
  {
    icon: '♙',
    title: 'Excellence, Always',
    text: 'We are committed to delivering top-notch staffing services that exceed the expectations of both our clients and candidates.',
    color: 'excellence'
  },
  {
    icon: '♧',
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