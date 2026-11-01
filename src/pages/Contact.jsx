import { useEffect, useRef, useState } from 'react'

const DEFAULT_API_URL = 'https://hire-via-hr-backend.onrender.com'

function getApiUrl() {
  if (import.meta.env.DEV) return ''

  const configuredApiUrl = import.meta.env.VITE_API_URL?.trim()
  if (!configuredApiUrl) return DEFAULT_API_URL

  try {
    const url = new URL(configuredApiUrl)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      throw new TypeError('Expected an HTTP or HTTPS URL.')
    }
    return configuredApiUrl.replace(/\/+$/, '')
  } catch (error) {
    console.error('Invalid VITE_API_URL; using the default Render API URL.', error)
    return DEFAULT_API_URL
  }
}

const countryRecords = [

  ['Afghanistan', '+93', 'AF'],

  ['Åland Islands', '+358', 'AX'],

  ['Albania', '+355', 'AL'],

  ['Algeria', '+213', 'DZ'],

  ['American Samoa', '+1', 'AS'],

  ['Andorra', '+376', 'AD'],

  ['Angola', '+244', 'AO'],

  ['Anguilla', '+1', 'AI'],

  ['Antarctica', '—', 'AQ'],

  ['Antigua and Barbuda', '+1', 'AG'],

  ['Argentina', '+54', 'AR'],

  ['Armenia', '+374', 'AM'],

  ['Aruba', '+297', 'AW'],

  ['Australia', '+61', 'AU'],

  ['Austria', '+43', 'AT'],

  ['Azerbaijan', '+994', 'AZ'],

  ['Bahamas', '+1', 'BS'],

  ['Bahrain', '+973', 'BH'],

  ['Bangladesh', '+880', 'BD'],

  ['Barbados', '+1', 'BB'],

  ['Belarus', '+375', 'BY'],

  ['Belgium', '+32', 'BE'],

  ['Belize', '+501', 'BZ'],

  ['Benin', '+229', 'BJ'],

  ['Bermuda', '+1', 'BM'],

  ['Bhutan', '+975', 'BT'],

  ['Bolivia', '+591', 'BO'],

  ['Bosnia and Herzegovina', '+387', 'BA'],

  ['Botswana', '+267', 'BW'],

  ['Bouvet Island', '—', 'BV'],

  ['Brazil', '+55', 'BR'],

  ['British Indian Ocean Territory', '+246', 'IO'],

  ['British Virgin Islands', '+1', 'VG'],

  ['Brunei', '+673', 'BN'],

  ['Bulgaria', '+359', 'BG'],

  ['Burkina Faso', '+226', 'BF'],

  ['Burundi', '+257', 'BI'],

  ['Cambodia', '+855', 'KH'],

  ['Cameroon', '+237', 'CM'],

  ['Canada', '+1', 'CA'],

  ['Cape Verde', '+238', 'CV'],

  ['Caribbean Netherlands', '+599', 'BQ'],

  ['Cayman Islands', '+1', 'KY'],

  ['Central African Republic', '+236', 'CF'],

  ['Chad', '+235', 'TD'],

  ['Chile', '+56', 'CL'],

  ['China', '+86', 'CN'],

  ['Christmas Island', '+61', 'CX'],

  ['Cocos (Keeling) Islands', '+61', 'CC'],

  ['Colombia', '+57', 'CO'],

  ['Comoros', '+269', 'KM'],

  ['Congo', '+242', 'CG'],

  ['Cook Islands', '+682', 'CK'],

  ['Costa Rica', '+506', 'CR'],

  ['Croatia', '+385', 'HR'],

  ['Cuba', '+53', 'CU'],

  ['Curaçao', '+599', 'CW'],

  ['Cyprus', '+357', 'CY'],

  ['Czechia', '+420', 'CZ'],

  ['Denmark', '+45', 'DK'],

  ['Djibouti', '+253', 'DJ'],

  ['Dominica', '+1', 'DM'],

  ['Dominican Republic', '+1', 'DO'],

  ['DR Congo', '+243', 'CD'],

  ['Ecuador', '+593', 'EC'],

  ['Egypt', '+20', 'EG'],

  ['El Salvador', '+503', 'SV'],

  ['Equatorial Guinea', '+240', 'GQ'],

  ['Eritrea', '+291', 'ER'],

  ['Estonia', '+372', 'EE'],

  ['Eswatini', '+268', 'SZ'],

  ['Ethiopia', '+251', 'ET'],

  ['Falkland Islands', '+500', 'FK'],

  ['Faroe Islands', '+298', 'FO'],

  ['Fiji', '+679', 'FJ'],

  ['Finland', '+358', 'FI'],

  ['France', '+33', 'FR'],

  ['French Guiana', '+594', 'GF'],

  ['French Polynesia', '+689', 'PF'],

  ['French Southern and Antarctic Lands', '+262', 'TF'],

  ['Gabon', '+241', 'GA'],

  ['Gambia', '+220', 'GM'],

  ['Georgia', '+995', 'GE'],

  ['Germany', '+49', 'DE'],

  ['Ghana', '+233', 'GH'],

  ['Gibraltar', '+350', 'GI'],

  ['Greece', '+30', 'GR'],

  ['Greenland', '+299', 'GL'],

  ['Grenada', '+1', 'GD'],

  ['Guadeloupe', '+590', 'GP'],

  ['Guam', '+1', 'GU'],

  ['Guatemala', '+502', 'GT'],

  ['Guernsey', '+44', 'GG'],

  ['Guinea', '+224', 'GN'],

  ['Guinea-Bissau', '+245', 'GW'],

  ['Guyana', '+592', 'GY'],

  ['Haiti', '+509', 'HT'],

  ['Heard Island and McDonald Islands', '—', 'HM'],

  ['Honduras', '+504', 'HN'],

  ['Hong Kong', '+852', 'HK'],

  ['Hungary', '+36', 'HU'],

  ['Iceland', '+354', 'IS'],

  ['India', '+91', 'IN'],

  ['Indonesia', '+62', 'ID'],

  ['Iran', '+98', 'IR'],

  ['Iraq', '+964', 'IQ'],

  ['Ireland', '+353', 'IE'],

  ['Isle of Man', '+44', 'IM'],

  ['Israel', '+972', 'IL'],

  ['Italy', '+39', 'IT'],

  ['Ivory Coast', '+225', 'CI'],

  ['Jamaica', '+1', 'JM'],

  ['Japan', '+81', 'JP'],

  ['Jersey', '+44', 'JE'],

  ['Jordan', '+962', 'JO'],

  ['Kazakhstan', '+7', 'KZ'],

  ['Kenya', '+254', 'KE'],

  ['Kiribati', '+686', 'KI'],

  ['Kosovo', '+383', 'XK'],

  ['Kuwait', '+965', 'KW'],

  ['Kyrgyzstan', '+996', 'KG'],

  ['Laos', '+856', 'LA'],

  ['Latvia', '+371', 'LV'],

  ['Lebanon', '+961', 'LB'],

  ['Lesotho', '+266', 'LS'],

  ['Liberia', '+231', 'LR'],

  ['Libya', '+218', 'LY'],

  ['Liechtenstein', '+423', 'LI'],

  ['Lithuania', '+370', 'LT'],

  ['Luxembourg', '+352', 'LU'],

  ['Macau', '+853', 'MO'],

  ['Madagascar', '+261', 'MG'],

  ['Malawi', '+265', 'MW'],

  ['Malaysia', '+60', 'MY'],

  ['Maldives', '+960', 'MV'],

  ['Mali', '+223', 'ML'],

  ['Malta', '+356', 'MT'],

  ['Marshall Islands', '+692', 'MH'],

  ['Martinique', '+596', 'MQ'],

  ['Mauritania', '+222', 'MR'],

  ['Mauritius', '+230', 'MU'],

  ['Mayotte', '+262', 'YT'],

  ['Mexico', '+52', 'MX'],

  ['Micronesia', '+691', 'FM'],

  ['Moldova', '+373', 'MD'],

  ['Monaco', '+377', 'MC'],

  ['Mongolia', '+976', 'MN'],

  ['Montenegro', '+382', 'ME'],

  ['Montserrat', '+1', 'MS'],

  ['Morocco', '+212', 'MA'],

  ['Mozambique', '+258', 'MZ'],

  ['Myanmar', '+95', 'MM'],

  ['Namibia', '+264', 'NA'],

  ['Nauru', '+674', 'NR'],

  ['Nepal', '+977', 'NP'],

  ['Netherlands', '+31', 'NL'],

  ['New Caledonia', '+687', 'NC'],

  ['New Zealand', '+64', 'NZ'],

  ['Nicaragua', '+505', 'NI'],

  ['Niger', '+227', 'NE'],

  ['Nigeria', '+234', 'NG'],

  ['Niue', '+683', 'NU'],

  ['Norfolk Island', '+672', 'NF'],

  ['North Korea', '+850', 'KP'],

  ['North Macedonia', '+389', 'MK'],

  ['Northern Mariana Islands', '+1', 'MP'],

  ['Norway', '+47', 'NO'],

  ['Oman', '+968', 'OM'],

  ['Pakistan', '+92', 'PK'],

  ['Palau', '+680', 'PW'],

  ['Palestine', '+970', 'PS'],

  ['Panama', '+507', 'PA'],

  ['Papua New Guinea', '+675', 'PG'],

  ['Paraguay', '+595', 'PY'],

  ['Peru', '+51', 'PE'],

  ['Philippines', '+63', 'PH'],

  ['Pitcairn Islands', '+64', 'PN'],

  ['Poland', '+48', 'PL'],

  ['Portugal', '+351', 'PT'],

  ['Puerto Rico', '+1', 'PR'],

  ['Qatar', '+974', 'QA'],

  ['Réunion', '+262', 'RE'],

  ['Romania', '+40', 'RO'],

  ['Russia', '+7', 'RU'],

  ['Rwanda', '+250', 'RW'],

  ['Saint Barthélemy', '+590', 'BL'],

  ['Saint Helena, Ascension and Tristan da Cunha', '+290', 'SH'],

  ['Saint Kitts and Nevis', '+1', 'KN'],

  ['Saint Lucia', '+1', 'LC'],

  ['Saint Martin', '+590', 'MF'],

  ['Saint Pierre and Miquelon', '+508', 'PM'],

  ['Saint Vincent and the Grenadines', '+1', 'VC'],

  ['Samoa', '+685', 'WS'],

  ['San Marino', '+378', 'SM'],

  ['São Tomé and Príncipe', '+239', 'ST'],

  ['Saudi Arabia', '+966', 'SA'],

  ['Senegal', '+221', 'SN'],

  ['Serbia', '+381', 'RS'],

  ['Seychelles', '+248', 'SC'],

  ['Sierra Leone', '+232', 'SL'],

  ['Singapore', '+65', 'SG'],

  ['Sint Maarten', '+1', 'SX'],

  ['Slovakia', '+421', 'SK'],

  ['Slovenia', '+386', 'SI'],

  ['Solomon Islands', '+677', 'SB'],

  ['Somalia', '+252', 'SO'],

  ['South Africa', '+27', 'ZA'],

  ['South Georgia', '+500', 'GS'],

  ['South Korea', '+82', 'KR'],

  ['South Sudan', '+211', 'SS'],

  ['Spain', '+34', 'ES'],

  ['Sri Lanka', '+94', 'LK'],

  ['Sudan', '+249', 'SD'],

  ['Suriname', '+597', 'SR'],

  ['Svalbard and Jan Mayen', '+47', 'SJ'],

  ['Sweden', '+46', 'SE'],

  ['Switzerland', '+41', 'CH'],

  ['Syria', '+963', 'SY'],

  ['Taiwan', '+886', 'TW'],

  ['Tajikistan', '+992', 'TJ'],

  ['Tanzania', '+255', 'TZ'],

  ['Thailand', '+66', 'TH'],

  ['Timor-Leste', '+670', 'TL'],

  ['Togo', '+228', 'TG'],

  ['Tokelau', '+690', 'TK'],

  ['Tonga', '+676', 'TO'],

  ['Trinidad and Tobago', '+1', 'TT'],

  ['Tunisia', '+216', 'TN'],

  ['Türkiye', '+90', 'TR'],

  ['Turkmenistan', '+993', 'TM'],

  ['Turks and Caicos Islands', '+1', 'TC'],

  ['Tuvalu', '+688', 'TV'],

  ['Uganda', '+256', 'UG'],

  ['Ukraine', '+380', 'UA'],

  ['United Arab Emirates', '+971', 'AE'],

  ['United Kingdom', '+44', 'GB'],

  ['United States', '+1', 'US'],

  ['United States Minor Outlying Islands', '—', 'UM'],

  ['United States Virgin Islands', '+1', 'VI'],

  ['Uruguay', '+598', 'UY'],

  ['Uzbekistan', '+998', 'UZ'],

  ['Vanuatu', '+678', 'VU'],

  ['Vatican City', '+39', 'VA'],

  ['Venezuela', '+58', 'VE'],

  ['Vietnam', '+84', 'VN'],

  ['Wallis and Futuna', '+681', 'WF'],

  ['Western Sahara', '+212', 'EH'],

  ['Yemen', '+967', 'YE'],

  ['Zambia', '+260', 'ZM'],

  ['Zimbabwe', '+263', 'ZW'],

]



const countries = countryRecords.map(([name, code, countryCode]) => ({

  name,

  code,

  flagUrl: `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`,

}))



export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(countries.find(({ name }) => name === 'India'))
  const [countrySearch, setCountrySearch] = useState('')
  const [countryMenuOpen, setCountryMenuOpen] = useState(false)
  const countryPickerRef = useRef(null)

  useEffect(() => {
    if (!countryMenuOpen) return undefined
    function handlePointerDown(event) {
      if (!countryPickerRef.current?.contains(event.target)) setCountryMenuOpen(false)
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') setCountryMenuOpen(false)
    }
    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [countryMenuOpen])

  const filteredCountries = countries.filter(({ name, code }) =>
    `${name} ${code}`.toLowerCase().includes(countrySearch.trim().toLowerCase())
  )

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = Object.fromEntries(new FormData(form))
    if (formData.phone?.trim()) {
      formData.phone = `${formData.countryCode} ${formData.phone.trim()}`
    }
    setLoading(true)
    setSent(false)
    setError('')
    const controller = new AbortController()
    const timeoutId = window.setTimeout(() => controller.abort(), 90000)
    try {
      const apiUrl = getApiUrl()
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal
      })
      let result
      try {
        result = await response.json()
      } catch {
        throw new Error(
          response.ok
            ? 'The contact server returned an invalid response. Please try again later or call +91 9220762559.'
            : `The contact service is unavailable (HTTP ${response.status}). Please try again later or call +91 9220762559.`
        )
      }
      if (!response.ok) {
        throw new Error(result.message || 'Unable to send your message. Please try again.')
      }
      setSent(true)
      form.reset()
      setSelectedCountry(countries.find(({ name }) => name === 'India'))
    } catch (err) {
      if (controller.signal.aborted) {
        setError('The request timed out. Please try again or call +91 9220762559.')
      } else {
        setError(
          err instanceof TypeError
            ? 'Could not connect to the contact server. Please try again later or call +91 9220762559.'
            : err.message
        )
      }
      console.error(err)
    } finally {
      window.clearTimeout(timeoutId)
      setLoading(false)
    }
  }

  return (
    <section className="contact-page">
      <div className="container">
        <div className="contact-heading">
          <h1>Contact Us</h1>
          <p>Any question or remarks? Just write us a message!</p>
        </div>
        <div className="contact-panel">


          <aside className="contact-info"><h2>Contact Information</h2><p>Say something to start a conversation!</p><div className="contact-detail"><b>☎</b><a href="tel:+919220762559">+91 9220762559</a></div><div className="contact-detail"><b>✉</b><a href="mailto:info@hireviahr.in">info@hireviahr.in</a></div><div className="contact-detail"><b>⌖</b><span>Rajapuri, Uttam Nagar, Dwarka, New Delhi - 110075<br />Branch offices: Hyderabad, Bangalore, Pune, Chandigarh and Mumbai</span></div><div className="social-links"><a href="https://www.facebook.com/" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.954.93-1.954 1.884v2.285h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" /></svg></a><a href="https://www.linkedin.com/" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.903 3.37-1.903 3.601 0 4.267 2.37 4.267 5.455v6.339zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 23.227 24 23.2 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></a><a href="https://www.instagram.com/" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="social-icon-dot" cx="17.5" cy="6.5" r="1" /></svg></a></div></aside>

          <form className="contact-form" onSubmit={handleSubmit}><div className="form-grid"><label>First Name<input required name="firstName" placeholder="First name"/></label><label>Last Name<input required name="lastName" placeholder="Last name"/></label><label>Email<input required type="email" name="email" placeholder="you@example.com"/></label><label className="phone-number-field">Phone Number<div className="phone-input-row"><div className="phone-country-picker" ref={countryPickerRef}><button className="phone-code-trigger" type="button" aria-label={`Select country code, current selection ${selectedCountry.name} ${selectedCountry.code}`} aria-haspopup="listbox" aria-expanded={countryMenuOpen} onClick={() => { setCountryMenuOpen(!countryMenuOpen); setCountrySearch('') }}><img className="phone-country-flag" src={selectedCountry.flagUrl} alt="" aria-hidden="true"/><span>{selectedCountry.code}</span><span className="phone-code-chevron" aria-hidden="true">⌄</span></button>{countryMenuOpen && <div className="phone-country-menu"><input className="phone-country-search" type="search" aria-label="Search country name or calling code" placeholder="Search country or code" value={countrySearch} onChange={event => setCountrySearch(event.target.value)} autoFocus/><div className="phone-country-options" role="listbox" aria-label="Countries">{filteredCountries.length ? filteredCountries.map(country => <button className="phone-country-option" type="button" role="option" aria-selected={selectedCountry.name === country.name} key={country.name} onClick={() => { setSelectedCountry(country); setCountryMenuOpen(false); setCountrySearch('') }}><img src={country.flagUrl} alt="" aria-hidden="true"/><span>{country.name}</span><span className="phone-country-option-code">{country.code}</span></button>) : <p className="phone-country-empty">No countries found.</p>}</div></div>}</div><input className="phone-number-input" name="phone" type="tel" autoComplete="tel-national" placeholder="Phone number" aria-label="Phone number"/><input type="hidden" name="countryCode" value={selectedCountry.code}/></div></label></div>

            <fieldset><legend>Select Subject</legend><div className="radio-row">{['General Inquiry','Job Related Query','Technical Support','Complaint / Feedback'].map((v,i)=><label key={v}><input type="radio" name="subject" value={v} defaultChecked={i===0}/>{v}</label>)}</div></fieldset>

            <label>Message<textarea required name="message" rows="4" placeholder="Write your message..."/></label>

            <button className="btn btn-navy submit-btn" type="submit" disabled={loading}>{loading ? "Sending..." : "Send Message"}</button>

            {sent && <p className="form-notice" role="status">Message sent successfully!</p>}
            {error && <p className="form-notice form-notice-error" role="alert">{error}</p>}

          </form>
        </div>
      </div>
    </section>
  )
}
