import testimonialsData from "./testimonialsData.json";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="container" id="testimonials">
      <h2 className="section-title" id="testimonialsheading">
        Testimonials
      </h2>
      <div className="testimonials-container">
        {testimonialsData.testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <div className="testimonial-content">❝{testimonial.comment}❞</div>
            <div className="testimonial-details">
              <div className="testimonial-img">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>{" "}
              <div>
                <small className="testimonial-name">{testimonial.name}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
