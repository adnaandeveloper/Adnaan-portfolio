import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://formsubmit.co/amaydeveloper@gmail.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div
      className="portfolio-container"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Add this to your public/index.html <head>:
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      */}

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Header Section */}
            <header className="text-center mb-5">
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  border: "4px solid #4e54c8",
                  padding: "5px",
                  margin: "0 auto 20px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src="/cvBilled.jpg"
                  alt="Adnaan Mohamud Abdullahi Tirare"
                  className="img-fluid rounded-circle"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h1
                className="display-4 fw-bold mb-3"
                style={{
                  color: "#2d3748",
                  letterSpacing: "-0.5px",
                  background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Adnaan Mohamud Abdullahi Tirare
              </h1>
              <p
                className="lead mb-4"
                style={{
                  color: "#4a5568",
                  fontSize: "1.25rem",
                  fontWeight: "500",
                }}
              >
                Software Engineer | MERN Stack & .NET Developer
              </p>
            </header>

            {/* About Section */}
            <section
              className="mb-5 p-4 rounded"
              style={{
                backgroundColor: "white",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                borderLeft: "4px solid #4e54c8",
              }}
            >
              <h2 className="h3 fw-bold mb-3" style={{ color: "#2d3748" }}>
                About Me
              </h2>
              <p
                className="mb-0"
                style={{
                  color: "#4a5568",
                  lineHeight: "1.7",
                  fontSize: "1.05rem",
                }}
              >
                I am an optimistic and hardworking software engineer, dedicated
                to shaping the future through website development. In the next
                five years, I envision myself contributing my expertise to large
                private or public organizations, maximizing their digital
                potential. With a passion for creating impactful websites and a
                patient mindset, I bring a strong commitment to continuous
                learning and improvement.
              </p>
            </section>

            {/* Skills Section */}
            <section
              className="mb-5 p-4 rounded"
              style={{
                backgroundColor: "white",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              }}
            >
              <h2 className="h3 fw-bold mb-4" style={{ color: "#2d3748" }}>
                Skills
              </h2>
              <div className="row">
                {[
                  "MERN Stack",
                  "React",
                  "Redux",
                  "MongoDB",
                  "Express",
                  ".NET / C#",
                  "MUI",
                  "Ant Design",
                  "Bootstrap",
                ].map((skill) => (
                  <div key={skill} className="col-md-4 mb-3">
                    <div className="d-flex align-items-center">
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "#4e54c8",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      ></div>
                      <span
                        style={{
                          color: "#4a5568",
                          fontWeight: "500",
                        }}
                      >
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section className="mb-5">
              <h2 className="h3 fw-bold mb-4" style={{ color: "#2d3748" }}>
                Projects
              </h2>
              <div
                className="card border-0 shadow-sm mb-3"
                style={{
                  transition: "transform 0.3s ease",
                  borderLeft: "3px solid #4e54c8",
                }}
              >
                <div className="card-body">
                  <h3
                    className="card-title fw-bold mb-2"
                    style={{ color: "#2d3748" }}
                  >
                    Online Store
                  </h3>
                  <p
                    className="card-text mb-3"
                    style={{
                      color: "#4a5568",
                      lineHeight: "1.6",
                    }}
                  >
                    A fully functional online store with product pages, cart,
                    and user authentication built using the MERN stack.
                  </p>
                  <a
                    href="https://github.com/adnaandeveloper/OnlineStore"
                    className="btn btn-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "#4e54c8",
                      border: "none",
                      padding: "0.375rem 1rem",
                      borderRadius: "6px",
                    }}
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section
              className="mb-5 p-4 rounded"
              style={{
                backgroundColor: "white",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              }}
            >
              <h2 className="h3 fw-bold mb-4" style={{ color: "#2d3748" }}>
                Contact
              </h2>
              <p
                className="mb-4"
                style={{
                  color: "#4a5568",
                  lineHeight: "1.7",
                }}
              >
                Feel free to reach out to me for freelance opportunities or
                collaborations!
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <a
                  href="mailto:amaydeveloper@gmail.com"
                  className="d-flex align-items-center px-3 py-2 rounded"
                  style={{
                    backgroundColor: "#f0f4ff",
                    color: "#4e54c8",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#4e54c8";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#f0f4ff";
                    e.currentTarget.style.color = "#4e54c8";
                  }}
                >
                  <Mail className="me-2" size={16} />
                  amaydeveloper@gmail.com
                </a>
                <a
                  href="https://github.com/adnaandeveloper"
                  target="_blank"
                  className="d-flex align-items-center px-3 py-2 rounded"
                  style={{
                    backgroundColor: "#f0f4ff",
                    color: "#4e54c8",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#4e54c8";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#f0f4ff";
                    e.currentTarget.style.color = "#4e54c8";
                  }}
                >
                  <Github className="me-2" size={16} />
                  GitHub
                </a>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="form-control"
                      onChange={handleChange}
                      style={{
                        padding: "0.75rem 1rem",
                        borderRadius: "6px",
                        border: "1px solid #e2e8f0",
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="form-control"
                      onChange={handleChange}
                      style={{
                        padding: "0.75rem 1rem",
                        borderRadius: "6px",
                        border: "1px solid #e2e8f0",
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      className="form-control"
                      rows="4"
                      onChange={handleChange}
                      style={{
                        padding: "0.75rem 1rem",
                        borderRadius: "6px",
                        border: "1px solid #e2e8f0",
                      }}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-100 py-2 rounded border-0"
                    style={{
                      backgroundColor: "#4e54c8",
                      color: "white",
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#3a41b5";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#4e54c8";
                    }}
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <div
                  className="alert alert-success"
                  style={{
                    borderRadius: "6px",
                    border: "none",
                    backgroundColor: "#e6fffa",
                    color: "#065f46",
                  }}
                >
                  Thank you! Your message has been sent.
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
