import React, { useState } from "react";
import "../styles/contact.css";                     // ruta relativa
import emailjs from "@emailjs/browser";            // importa EmailJS

export const Contact = () => {
    // ojo: usa user_name/user_email para coincidir con tu plantilla
    const [formData, setFormData] = useState({ user_name: "", user_email: "", message: "" });
    const [status, setStatus] = useState(""); // Para mostrar mensajes de estado

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Enviando...");


        try {
            // 👇 envía directamente usando tu Service ID y Template ID
            await emailjs.send(
                "service_lc0cc9f",   // tu Service ID
                "template_ygh6kii",             // tu Template ID
                {
                    user_name: formData.user_name,
                    user_email: formData.user_email,
                    message: formData.message,
                }
                // no pasamos la Public Key aquí, ya la inicializamos en App.jsx
            );
            setStatus("Correo enviado con éxito 🎉");
            setFormData({ user_name: "", user_email: "", message: "" });
        } catch (err) {
            console.error("EmailJS error:", err.status, err.text);
            setStatus("Error al enviar. Revisa la consola.");
        }
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">CONTACTO</h1>
            <div className="contact-card">
                <p>¿Quieres hablar conmigo? Rellena el formulario y estaré encantada de responderte.</p>

                <form onSubmit={handleSubmit} className="contact-form">

                    <input
                        type="text"
                        name="user_name"
                        placeholder="Tu nombre"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="user_email"
                        placeholder="Tu email"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Escribe tu mensaje..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Enviar</button>
                </form>

                {/* Mostrar estado del envío */}
                {status && <p className="status-message">{status}</p>}

                <div className="contact-info">
                    <div className="contact-info-item">
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:dariaztva@gmail.com">dariaztva@gmail.com</a>
                    </div>
                    <div className="contact-info-item">
                        <i className="fas fa-phone"></i>
                        <a href="tel:+34648705883">+34 648 70 58 83</a>
                    </div>
                </div>

            </div>
        </div>
    );
};
