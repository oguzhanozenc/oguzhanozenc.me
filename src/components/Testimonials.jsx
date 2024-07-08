import testimonialsData from "./testimonialsData.json";
import "../css/Testimonials.css";
import { MdOutlineStarPurple500 } from "react-icons/md";

export default function Testimonials() {
  return (
    <section className="container" id="testimonials">
      <h2 className="section-title" id="testimonialsheading">
        Testimonials
      </h2>

      <div className="testimonials-container">
        <div className="rating-container testimonial-item">
          <a href="https://www.fiverr.com/oguzhanozenc" target="_blank">
            <div className="rating">
              <div>
                <p>5.0 </p>
              </div>
              <div className="stars">
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
              </div>{" "}
              <div className="explanation">
                <small>Based on Freelancer Platform Reviews</small>
              </div>
            </div>
          </a>
        </div>
        {testimonialsData.testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <div className="testimonial-content">❝{testimonial.comment}❞</div>
            <div className="testimonial-details">
              <div className="testimonial-img">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>{" "}
              <div>
                <p className="testimonial-name">{testimonial.name}</p>
                <small className="testimonial-title">{testimonial.title}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
