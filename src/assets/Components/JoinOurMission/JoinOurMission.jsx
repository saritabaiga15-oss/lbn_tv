import React, { useState } from 'react';
import './JoinOurMission.css';

const JoinOurMission = () => {
  const [selectedTier, setSelectedTier] = useState('Gold');
  const [customAmount, setCustomAmount] = useState('');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    prayerRequest: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const tiers = [
    {
      id: 'Bronze',
      name: 'Bronze Partner',
      amount: '1,000',
      tagline: 'Sustaining Daily Hope',
      features: [
        'Supports 5 hours of 24/7 digital broadcasting',
        'Monthly pastoral partner letter & prayer bulletin',
        'Digital newsletter & broadcast guide'
      ]
    },
    {
      id: 'Silver',
      name: 'Silver Partner',
      amount: '2,500',
      tagline: 'Empowering Regional Feeds',
      popular: false,
      features: [
        'Powers regional language translation feeds',
        'Direct access to exclusive live ministry streams',
        'Quarterly spiritual growth resources',
        'All Bronze tier benefits'
      ]
    },
    {
      id: 'Gold',
      name: 'Gold Kingdom Builder',
      amount: '5,000',
      tagline: 'Expanding Satellite Outreach',
      popular: true,
      features: [
        'Transponder & HD transmission sponsorship',
        'VIP priority access to live crusades & concerts',
        'Special partner recognition in global prayer network',
        'All Silver tier benefits'
      ]
    },
    {
      id: 'Diamond',
      name: 'Diamond Ambassador',
      amount: '25,000',
      tagline: 'Transforming Asia & Beyond',
      popular: false,
      features: [
        'Major sponsorship for new studio productions',
        'Executive partner roundtables with leadership',
        'Annual commemorative partner certificate',
        'All Gold tier benefits'
      ]
    }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mission-page-section">
      <div className="mission-container">
        
        {/* Hero Banner with Anchorcrest Foundation Mission Narrative */}
        <div className="mission-hero">
          <span className="mission-badge">ANCHORCREST FOUNDATION</span>
          <h1 className="mission-title">JOIN OUR MISSION</h1>
          
          <div className="mission-statement-box">
            <p className="mission-lead-p">
              Anchorcrest Foundation empowers young people through media training, equipping them with skills and opportunities to build a brighter future.
            </p>
            <p className="mission-mid-p">
              Join our training programs, kick-start your journey, and become actively engaged in making a difference.
            </p>
            <p className="mission-cta-p">
              Sponsor a child today and help provide education, skills, and opportunities for a better tomorrow.
            </p>
          </div>
        </div>

        {/* Mission Impact Pillars */}
        <div className="mission-pillars-grid">
          <div className="mission-pillar-card">
            <div className="pillar-icon-box">🎓</div>
            <h3 className="pillar-title">Youth Media Training</h3>
            <p className="pillar-desc">
              Empowering youth with cutting-edge media production, broadcasting, sound engineering, and digital journalism skills.
            </p>
          </div>

          <div className="mission-pillar-card">
            <div className="pillar-icon-box">🚀</div>
            <h3 className="pillar-title">Kick-Start Your Journey</h3>
            <p className="pillar-desc">
              Get hands-on studio experience, mentorship with seasoned directors, and active engagement in life-transforming shows.
            </p>
          </div>

          <div className="mission-pillar-card">
            <div className="pillar-icon-box">🤝</div>
            <h3 className="pillar-title">Sponsor a Child Today</h3>
            <p className="pillar-desc">
              Provide essential education, scripture values, creative kits, and future opportunities to under-served children.
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="mission-success-card">
            <div className="success-badge-icon">✓</div>
            <h2 className="success-heading">Welcome to the LBN Partner Family!</h2>
            <p className="success-text">
              Thank you, <strong>{formData.name || 'Partner'}</strong>, for taking a stand to sponsor youth media training and child empowerment. A confirmation has been sent to <strong>{formData.email}</strong> with your partner ID and monthly giving portal details.
            </p>
            <div className="success-scripture">
              "And God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work." — 2 Corinthians 9:8
            </div>
            <button className="success-reset-btn" onClick={() => setSubmitted(false)}>
              Manage Partnership Details
            </button>
          </div>
        ) : (
          <>
            {/* Step 1: Select Tier */}
            <div className="mission-section-block">
              <div className="block-header">
                <span className="step-tag">STEP 1</span>
                <h2 className="block-title">SELECT YOUR PARTNERSHIP TIER</h2>
                <p className="block-desc">Choose a monthly commitment that matches your faith and vision for empowering lives.</p>
              </div>

              <div className="tiers-grid">
                {tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`tier-card ${selectedTier === tier.id ? 'selected' : ''} ${tier.popular ? 'popular' : ''}`}
                    onClick={() => {
                      setSelectedTier(tier.id);
                      setCustomAmount('');
                    }}
                  >
                    {tier.popular && <span className="popular-badge">MOST POPULAR</span>}
                    <h3 className="tier-name">{tier.name}</h3>
                    <div className="tier-pricing">
                      <span className="currency">₹</span>
                      <span className="amount">{tier.amount}</span>
                      <span className="period">/ month</span>
                    </div>
                    <p className="tier-tagline">{tier.tagline}</p>
                    <ul className="tier-features-list">
                      {tier.features.map((feat, idx) => (
                        <li key={idx}>
                          <span className="check-icon">✓</span> {feat}
                        </li>
                      ))}
                    </ul>
                    <button className={`tier-select-btn ${selectedTier === tier.id ? 'active' : ''}`}>
                      {selectedTier === tier.id ? 'SELECTED TIER' : 'CHOOSE TIER'}
                    </button>
                  </div>
                ))}
              </div>

              {/* Custom Amount Option */}
              <div className="custom-tier-box">
                <span className="custom-tier-label">Prefer a custom monthly giving amount?</span>
                <div className="custom-input-group">
                  <span className="custom-currency-prefix">₹</span>
                  <input
                    type="number"
                    placeholder="Enter custom amount in INR"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedTier('Custom');
                    }}
                    className="custom-tier-input"
                  />
                  <button
                    type="button"
                    className={`custom-tier-apply-btn ${selectedTier === 'Custom' ? 'active' : ''}`}
                    onClick={() => setSelectedTier('Custom')}
                  >
                    Set Custom Amount
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2: Partnership Form */}
            <div className="mission-section-block">
              <div className="block-header">
                <span className="step-tag">STEP 2</span>
                <h2 className="block-title">PARTNER INFORMATION &amp; DETAILS</h2>
                <p className="block-desc">Please provide your contact information to receive updates on how your seed impacts lives.</p>
              </div>

              <form onSubmit={handleSubmit} className="mission-form-container">
                <div className="form-grid-2">
                  <div className="form-field">
                    <label className="field-label">FULL NAME *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Samuel David"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mission-input"
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. samuel@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mission-input"
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-field">
                    <label className="field-label">PHONE / KINGSCHAT NUMBER *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mission-input"
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label">CITY &amp; STATE *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. Pune, Maharashtra"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="mission-input"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="field-label">SPECIAL PRAYER REQUEST (OPTIONAL)</label>
                  <textarea
                    name="prayerRequest"
                    rows="3"
                    placeholder="Share any prayer requests with our global intercessory team..."
                    value={formData.prayerRequest}
                    onChange={handleInputChange}
                    className="mission-textarea"
                  ></textarea>
                </div>

                {/* Bank Details Box with Updated Anchorcrest Foundation Info */}
                <div className="mission-bank-card">
                  <div className="bank-card-header">
                    <h4 className="bank-title">OFFICIAL BANK TRANSFER &amp; GIVING DETAILS</h4>
                    <span className="verified-badge">VERIFIED MINISTRY ACCOUNT</span>
                  </div>
                  <div className="bank-grid">
                    <div className="bank-item">
                      <span className="bank-lbl">Account Name</span>
                      <span className="bank-val gold-txt">ANCHORCREST FOUNDATION</span>
                    </div>
                    <div className="bank-item">
                      <span className="bank-lbl">Bank Name</span>
                      <span className="bank-val">Axis Bank</span>
                    </div>
                    <div className="bank-item">
                      <span className="bank-lbl">Account Number</span>
                      <span className="bank-val">923010049345208</span>
                    </div>
                    <div className="bank-item">
                      <span className="bank-lbl">IFSC Code</span>
                      <span className="bank-val">UTIB0000269</span>
                    </div>
                    <div className="bank-item full-width">
                      <span className="bank-lbl">Branch</span>
                      <span className="bank-val">Kalyani Nagar</span>
                    </div>
                  </div>
                </div>

                <button type="submit" className="mission-submit-cta">
                  CONFIRM &amp; JOIN OUR MISSION NOW
                </button>
              </form>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default JoinOurMission;
