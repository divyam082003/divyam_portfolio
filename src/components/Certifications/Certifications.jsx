import "./Certifications.css";
import certifications from "../../data/certifications";

export default function Certifications() {
  const cards = [...certifications, ...certifications];

  return (
    <section className="certifications-section" id="certifications">

      <div className="cert-header">
        <span>CERTIFICATIONS & ACHIEVEMENTS</span>

        <p>
          Certifications, achievements and recognitions that reflect my
          continuous learning and professional growth.
        </p>
      </div>

      <div className="marquee">

        <div className="marquee-track">

          {[...certifications, ...certifications].map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="cert-card" key={index}>
                <div className="cert-icon">
                  <Icon />
                </div>

                <div className="cert-content">
                  <h4>{item.title}</h4>
                  <span>{item.issuer}</span>
                </div>
              </div>
            );
          })}

        </div>

        <div className="marquee-track reverse">

          {[...certifications, ...certifications].map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="cert-card" key={index}>
                <div className="cert-icon">
                  <Icon />
                </div>

                <div className="cert-content">
                  <h4>{item.title}</h4>
                  <span>{item.issuer}</span>
                </div>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}