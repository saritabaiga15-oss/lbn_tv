import React, { useState } from 'react';
import './OneTimeGift.css';

const OneTimeGift = () => {
  const [selectedAmount, setSelectedAmount] = useState('5000');
  const [customAmount, setCustomAmount] = useState('');
  const [impactArea, setImpactArea] = useState('Partnering With Loveworld Broadcasting Network');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    prayerRequest: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const presetAmounts = ['1000', '2500', '5000', '10000', '25000', '50000'];

  const impactAreas = [
    {
      id: 'Partnering With Loveworld Broadcasting Network',
      title: 'Partnering With Loveworld Broadcasting Network',
      desc: 'Support the global mandate to impact India and Asia with round-the-clock Gospel broadcasting.'
    },
    {
      id: 'LBN Programs Sponsorship',
      title: 'LBN Programs Sponsorship',
      desc: 'Directly sponsor special faith-filled productions, talk shows, worship concerts, and studio programs.'
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

  const activeAmount = customAmount ? customAmount : selectedAmount;

  return (
    <div className="gift-page-section">
      <div className="gift-container">

        {/* Hero Banner */}
        <div className="gift-hero">
          <span className="gift-badge">ANCHORCREST FOUNDATION</span>
          <h1 className="gift-title">GIVE A ONE-TIME GIFT</h1>
          <div className="gift-statement-box">
            <p className="gift-statement-p">
              Anchorcrest Foundation empowers young people through media training, equipping them with skills and opportunities to build a brighter future.
            </p>
            <p className="gift-statement-p">
              Join our training programs, kick-start your journey, and become actively engaged in making a difference.
            </p>
            <p className="gift-statement-p">
              Sponsor a child today and help provide education, skills, and opportunities for a better tomorrow.
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="gift-success-card">
            <div className="success-badge-icon">✓</div>
            <h2 className="success-heading">Your Seed Sown Is Blessed!</h2>
            <p className="success-text">
              Thank you, <strong>{formData.name || 'Beloved Friend'}</strong>, for giving a one-time gift of <strong>₹{parseInt(activeAmount || '0').toLocaleString()}</strong> towards <em>{impactArea}</em>. May God bountifully reward your generosity.
            </p>
            <div className="success-scripture">
              "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap." — Luke 6:38
            </div>
            <button className="success-reset-btn" onClick={() => setSubmitted(false)}>
              Give Another Seed
            </button>
          </div>
        ) : (
          <div className="gift-layout-grid">
            
            {/* Left Column: Seed Selection & Form */}
            <div className="gift-main-col">
              
              {/* Step 1: Select Amount */}
              <div className="gift-card-block">
                <span className="step-tag">STEP 1</span>
                <h3 className="card-block-title">CHOOSE YOUR GIFT AMOUNT</h3>
                
                <div className="amount-pills-grid">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      className={`amount-pill ${selectedAmount === amt && !customAmount ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount('');
                      }}
                    >
                      <span className="pill-curr">₹</span>
                      <span className="pill-val">{parseInt(amt).toLocaleString()}</span>
                    </button>
                  ))}
                </div>

                <div className="custom-amt-wrapper">
                  <label className="field-label">OR ENTER CUSTOM AMOUNT (INR ₹)</label>
                  <div className="custom-input-box">
                    <span className="curr-icon">₹</span>
                    <input
                      type="number"
                      placeholder="e.g. 15000"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="custom-field"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Impact Designation */}
              <div className="gift-card-block">
                <span className="step-tag">STEP 2</span>
                <h3 className="card-block-title">DESIGNATE YOUR SEED</h3>
                <div className="impact-options-grid">
                  {impactAreas.map((area) => (
                    <div
                      key={area.id}
                      className={`impact-card ${impactArea === area.id ? 'active' : ''}`}
                      onClick={() => setImpactArea(area.id)}
                    >
                      <div className="impact-radio">
                        <span className={`radio-dot ${impactArea === area.id ? 'checked' : ''}`}></span>
                      </div>
                      <div className="impact-text">
                        <h4 className="impact-title">{area.title}</h4>
                        <p className="impact-desc">{area.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3: Donor Details */}
              <div className="gift-card-block">
                <span className="step-tag">STEP 3</span>
                <h3 className="card-block-title">YOUR INFORMATION</h3>
                
                <form onSubmit={handleSubmit} className="gift-form">
                  <div className="form-row-2">
                    <div className="form-field">
                      <label className="field-label">FULL NAME *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="gift-input"
                      />
                    </div>
                    <div className="form-field">
                      <label className="field-label">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="your.email@domain.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="gift-input"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label className="field-label">PHONE / KINGSCHAT *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="gift-input"
                      />
                    </div>
                    <div className="form-field">
                      <label className="field-label">CITY / REGION *</label>
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder="e.g. Mumbai, Maharashtra"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="gift-input"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="field-label">PRAYER REQUEST (OPTIONAL)</label>
                    <textarea
                      name="prayerRequest"
                      rows="3"
                      placeholder="Write your prayer request for our pastors and ministers to pray over your seed..."
                      value={formData.prayerRequest}
                      onChange={handleInputChange}
                      className="gift-textarea"
                    ></textarea>
                  </div>

                  <button type="submit" className="gift-submit-btn">
                    PROCEED TO COMPLETE GIFT OF ₹{parseInt(activeAmount || '0').toLocaleString()}
                  </button>
                </form>
              </div>

            </div>

            {/* Right Column: Bank Info & Summary */}
            <div className="gift-side-col">
              <div className="gift-summary-card">
                <h3 className="summary-title">GIVING SUMMARY</h3>
                <div className="summary-amount-display">
                  <span className="sum-lbl">Total Seed Amount</span>
                  <span className="sum-val">₹{parseInt(activeAmount || '0').toLocaleString()}</span>
                </div>
                <div className="summary-designation">
                  <span className="desig-lbl">Designation</span>
                  <span className="desig-val">{impactArea}</span>
                </div>

                <div className="gift-divider"></div>

                <div className="side-bank-details">
                  <h4 className="side-bank-heading">DIRECT BANK TRANSFER DETAILS</h4>
                  <div className="side-bank-info">
                    <p><strong>Account Name:</strong> ANCHORCREST FOUNDATION</p>
                    <p><strong>Account No:</strong> 923010049345208</p>
                    <p><strong>IFSC Code:</strong> UTIB0000269</p>
                    <p><strong>Bank:</strong> Axis Bank</p>
                    <p><strong>Branch:</strong> Kalyani Nagar</p>
                  </div>
                </div>

                <div className="blessing-quote">
                  "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default OneTimeGift;
