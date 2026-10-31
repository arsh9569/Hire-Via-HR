import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'

const serviceCards = [
  {
    title: 'BPO Staffing',
    description: 'Connecting businesses with skilled outsourcing professionals. From entry-level executives to team leaders and managers, we find the right operational fit.',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM9 13c-4.1 0-7 2.06-7 4.65V20h14v-2.35C16 15.06 13.1 13 9 13Zm8 0c-.58 0-1.12.04-1.63.12 1.65.98 2.63 2.45 2.63 4.18V20h4v-2.35c0-2.59-2.06-4.65-5-4.65Z" /></svg>
  },
  {
    title: 'Call Centre Recruitment',
    description: 'Specialized sourcing for inbound and outbound call centers. Communicative professionals for customer support, telesales, and technical helpdesk roles.',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 13v-1a8 8 0 0 1 16 0v1M4 13h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2Zm16 0h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2Zm-1 6a5 5 0 0 1-5 3h-2" /></svg>
  },
  {
    title: 'Non-IT Placement',
    description: 'The right people for administrative, back-office, sales, marketing, and operations roles. Corporate talent that moves your business forward.',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 4V3h6v1h4a2 2 0 0 1 2 2v2H3V6a2 2 0 0 1 2-2h4Zm4 0h-2v1h2V4Zm8 6v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8h8v2h2v-2h8Zm-10 0h2v2h-2v-2Z" /></svg>
  }
]
export default function Services() {
  return <>
    <section className="hero container services-hero"><div className="hero-copy"><span className="eyebrow">PEOPLE. POTENTIAL. POSSIBILITIES.</span><h1>Great people.<br/>Right places.<br/><span>Better futures.</span></h1><p>Expert placement services, tailored to you. Whether you're building a reliable team or taking your next career step, we make recruitment transparent, fast, and human.</p><div className="button-row"><Link to="/contact" className="btn btn-orange">Contact Our Team</Link><a href="#specializations" className="text-link">Explore Services →</a></div></div><div className="hero-visual"><div className="image-placeholder"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85" alt="Professionals collaborating in an office" /></div></div></section>
    <section className="section container" id="specializations"><SectionTitle eyebrow="OUR SPECIALIZATIONS" title="The right talent." accent="For your industry." subtitle="Focused expertise. Thoughtful connections. Lasting impact."/><div className="three-grid">{serviceCards.map(({ title, description, icon })=><article className="info-card service-detail" key={title}><span className="icon-bubble service-icon">{icon}</span><h3>{title}</h3><p>{description}</p><Link to="/contact" className="text-link">Find your talent →</Link></article>)}</div></section>
    <section className="section two-paths"><div className="container"><SectionTitle eyebrow="TWO PATHS. ONE PEOPLE-FIRST APPROACH." title="Wherever you are, we move" accent="you forward."/><div className="two-grid"><article className="path-card employer"><span className="eyebrow">FOR EMPLOYERS</span><h2>Your next great hire.<br/>Without the hard work.</h2><p>We save your HR team time. Our screening means you meet qualified, job-ready people who fit your company culture.</p><ul><li>Volume hiring capability</li><li>Pre-screened candidates</li><li>Fast turnaround times</li></ul><Link to="/contact" className="text-link">Request Staff →</Link></article><article className="path-card candidate"><span className="eyebrow">FOR JOB SEEKERS</span><h2>A new opportunity.<br/>A brighter beginning.</h2><p>Fresher or experienced professional, your next chapter is out there. We connect you with trusted employers and help you feel interview-ready.</p><ul><li>100% free placement assistance</li><li>Verified job openings</li><li>Dedicated career guidance</li></ul><Link to="/contact" className="text-link">Contact Us →</Link></article></div></div></section>
    <section className="cta-banner"><div className="container"><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>Great teams. Bright futures.<br/>Let's make it happen.</h2><p>Find your next great hire or your next big opportunity.</p><Link to="/contact" className="btn btn-white">Contact Our Team</Link></div></section>
  </>
}