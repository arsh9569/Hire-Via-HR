import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  function handleSubmit(event) {
    event.preventDefault()
    // Frontend-only for now. Connect an email service before production.
    setSent(true)
  }
  return <>
    <section className="contact-page">
      <div className="container"><div className="contact-heading"><h1>Contact Us</h1><p>Any question or remarks? Just write us a message!</p></div>
        <div className="contact-panel">
          <aside className="contact-info"><h2>Contact Information</h2><p>Say something to start a conversation!</p><div className="contact-detail"><b>☎</b><a href="tel:+919220762559">+91 9220762559</a></div><div className="contact-detail"><b>✉</b><a href="mailto:info@hireviahr.in">info@hireviahr.in</a></div><div className="contact-detail"><b>⌖</b><span>D100, 3rd Floor, Gali Number 40, Rajapuri, Uttam Nagar, New Delhi - 110059</span></div><div className="social-links"><a href="https://www.facebook.com/" aria-label="Facebook">f</a><a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a><a href="https://www.instagram.com/" aria-label="Instagram">◎</a></div></aside>
          <form className="contact-form" onSubmit={handleSubmit}><div className="form-grid"><label>First Name<input required name="firstName" placeholder="First name"/></label><label>Last Name<input required name="lastName" placeholder="Last name"/></label><label>Email<input required type="email" name="email" placeholder="you@example.com"/></label><label>Phone Number<input name="phone" type="tel" placeholder="+91"/></label></div>
            <fieldset><legend>Select Subject</legend><div className="radio-row">{['General Inquiry','Job Related Query','Technical Support','Complaint / Feedback'].map((v,i)=><label key={v}><input type="radio" name="subject" value={v} defaultChecked={i===0}/>{v}</label>)}</div></fieldset>
            <label>Message<textarea required name="message" rows="4" placeholder="Write your message..."/></label>
            <button className="btn btn-navy submit-btn" type="submit">Send Message</button>
            {sent && <p className="form-notice">Form preview submitted. Email delivery is not configured yet.</p>}
          </form>
        </div>
      </div>
    </section>
  </>
}