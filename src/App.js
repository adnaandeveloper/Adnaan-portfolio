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
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1.1rem", // Base font size increased
      }}
    >
      {/* Add this to your public/index.html <head>:
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
      */}

      <div className="container py-5" style={{ maxWidth: "1200px" }}>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            {/* Header Section */}
            <header className="text-center mb-5">
              <div
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  border: "5px solid #6c63ff",
                  padding: "6px",
                  margin: "0 auto 30px",
                  boxShadow: "0 8px 25px rgba(108, 99, 255, 0.2)",
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
                className="display-3 fw-bold mb-3"
                style={{
                  color: "#2d3748",
                  letterSpacing: "-1px",
                  background: "linear-gradient(90deg, #6c63ff, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: "1.2",
                }}
              >
                Adnaan Mohamud Abdullahi Tirare
              </h1>
              <p
                className="lead mb-4"
                style={{
                  color: "#4a5568",
                  fontSize: "1.5rem",
                  fontWeight: "500",
                }}
              >
                Software Engineer | MERN Stack & .NET Developer
              </p>
            </header>

            {/* About Section */}
            <section
              className="mb-5 p-5 rounded-4"
              style={{
                backgroundColor: "white",
                boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                borderLeft: "5px solid #6c63ff",
                borderRight: "1px solid #f1f1f1",
              }}
            >
              <h2
                className="h2 fw-bold mb-4"
                style={{
                  color: "#2d3748",
                  fontSize: "2rem",
                }}
              >
                About Me
              </h2>
              <p
                className="mb-0"
                style={{
                  color: "#4a5568",
                  lineHeight: "1.8",
                  fontSize: "1.2rem",
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
              className="mb-5 p-5 rounded-4"
              style={{
                backgroundColor: "white",
                boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                background: "linear-gradient(to right, #ffffff, #f9f9ff)",
              }}
            >
              <h2
                className="h2 fw-bold mb-4"
                style={{
                  color: "#2d3748",
                  fontSize: "2rem",
                }}
              >
                Skills
              </h2>
              <div className="row g-4">
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
                  <div key={skill} className="col-md-4 col-lg-3">
                    <div
                      className="d-flex align-items-center p-3 rounded-3"
                      style={{
                        backgroundColor: "#f6f5ff",
                        borderLeft: "3px solid #6c63ff",
                      }}
                    >
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          backgroundColor: "#6c63ff",
                          borderRadius: "50%",
                          marginRight: "12px",
                        }}
                      ></div>
                      <span
                        style={{
                          color: "#4a5568",
                          fontWeight: "600",
                          fontSize: "1.1rem",
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
              <h2
                className="h2 fw-bold mb-4"
                style={{
                  color: "#2d3748",
                  fontSize: "2rem",
                }}
              >
                Projects
              </h2>
              <div
                className="card border-0 shadow-lg mb-4 rounded-4"
                style={{
                  transition: "transform 0.3s ease",
                  borderLeft: "5px solid #6c63ff",
                  backgroundColor: "#f6f5ff",
                }}
              >
                <div className="card-body p-5">
                  <h3
                    className="card-title fw-bold mb-3"
                    style={{
                      color: "#2d3748",
                      fontSize: "1.5rem",
                    }}
                  >
                    Online Store
                  </h3>
                  <p
                    className="card-text mb-4"
                    style={{
                      color: "#4a5568",
                      lineHeight: "1.8",
                      fontSize: "1.15rem",
                    }}
                  >
                    A fully functional online store with product pages, cart,
                    and user authentication built using the MERN stack.
                  </p>
                  <a
                    href="https://github.com/adnaandeveloper/OnlineStore"
                    className="btn btn-primary btn-lg px-4 py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "#6c63ff",
                      border: "none",
                      borderRadius: "8px",
                      fontWeight: "600",
                      boxShadow: "0 4px 15px rgba(108, 99, 255, 0.3)",
                    }}
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section
              className="mb-5 p-5 rounded-4"
              style={{
                backgroundColor: "white",
                boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                background: "linear-gradient(to right, #ffffff, #f9f9ff)",
              }}
            >
              <h2
                className="h2 fw-bold mb-4"
                style={{
                  color: "#2d3748",
                  fontSize: "2rem",
                }}
              >
                Contact
              </h2>
              <p
                className="mb-4"
                style={{
                  color: "#4a5568",
                  lineHeight: "1.8",
                  fontSize: "1.2rem",
                }}
              >
                Feel free to reach out to me for freelance opportunities or
                collaborations!
              </p>

              <div className="d-flex flex-wrap gap-4 mb-5">
                <a
                  href="mailto:amaydeveloper@gmail.com"
                  className="d-flex align-items-center px-4 py-3 rounded-3"
                  style={{
                    backgroundColor: "#f0f0ff",
                    color: "#6c63ff",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    fontWeight: "500",
                    fontSize: "1.1rem",
                    boxShadow: "0 4px 10px rgba(108, 99, 255, 0.1)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#6c63ff";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#f0f0ff";
                    e.currentTarget.style.color = "#6c63ff";
                  }}
                >
                  <Mail className="me-3" size={20} />
                  amaydeveloper@gmail.com
                </a>
                <a
                  href="https://github.com/adnaandeveloper"
                  target="_blank"
                  className="d-flex align-items-center px-4 py-3 rounded-3"
                  style={{
                    backgroundColor: "#f0f0ff",
                    color: "#6c63ff",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    fontWeight: "500",
                    fontSize: "1.1rem",
                    boxShadow: "0 4px 10px rgba(108, 99, 255, 0.1)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#6c63ff";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#f0f0ff";
                    e.currentTarget.style.color = "#6c63ff";
                  }}
                >
                  <Github className="me-3" size={20} />
                  GitHub Profile
                </a>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="form-control form-control-lg"
                      onChange={handleChange}
                      style={{
                        padding: "1rem",
                        borderRadius: "10px",
                        border: "1px solid #e2e8f0",
                        fontSize: "1.1rem",
                      }}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="form-control form-control-lg"
                      onChange={handleChange}
                      style={{
                        padding: "1rem",
                        borderRadius: "10px",
                        border: "1px solid #e2e8f0",
                        fontSize: "1.1rem",
                      }}
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      className="form-control form-control-lg"
                      rows="5"
                      onChange={handleChange}
                      style={{
                        padding: "1rem",
                        borderRadius: "10px",
                        border: "1px solid #e2e8f0",
                        fontSize: "1.1rem",
                      }}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-100 py-3 rounded-3 border-0"
                    style={{
                      backgroundColor: "#6c63ff",
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.2rem",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 15px rgba(108, 99, 255, 0.4)",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#5a52d4";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#6c63ff";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <div
                  className="alert alert-success p-4 rounded-3"
                  style={{
                    border: "none",
                    backgroundColor: "#e6fffa",
                    color: "#065f46",
                    fontSize: "1.1rem",
                  }}
                >
                  Thank you! Your message has been sent successfully. I'll get
                  back to you soon.
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
