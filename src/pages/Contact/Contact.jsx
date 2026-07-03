import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Buying",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (
    formData.name === "" ||
    formData.email === "" ||
    formData.phone === "" ||
    formData.message === ""
  ) {
    alert("Please fill all the fields.");
    return;
  }

  setLoading(true);

  emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    subject: formData.interest,
    message: formData.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
      .then(() => {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "Buying",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#fbf8f3] text-[#151515]">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#9b7b53]">
              Reach us
            </p>

            <h1 className="mt-3 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
              Speak to a senior advisor.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#666666] sm:text-base">
              No bots. No auto-replies. A real human responds—usually within two hours.
            </p>

           <div className="mt-8 flex flex-col gap-5 max-w-lg">
  <InfoCard
    icon={<FiPhone size={24} />}
    title="Phone"
    value="+1 (212) 555-0199"
  />

  <InfoCard
    icon={<FiMail size={24} />}
    title="Email"
    value="hello@aureliaestates.com"
  />

  <InfoCard
    icon={<FiMapPin size={24} />}
    title="Office"
    value={
      <>
        1240 Park Avenue, Suite 800
        <br />
        New York, NY 10128
      </>
    }
  />
</div>        </div>

          <div className="rounded-[1.75rem] border border-[#e9e0d4] bg-white p-5 shadow-[0_18px_40px_rgba(0,0,0,0.04)] sm:p-6">
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b7b53]">
                Contact form
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-[#666666]">
                We'll get back within two business hours.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Full name"
                  name="name"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                />

                <Field
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="jane@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <Field
                label="Phone"
                name="phone"
                placeholder="+1 (000) 000-0000"
                value={formData.phone}
                onChange={handleChange}
              />

              <div>
                <label className="mb-2 block text-sm font-medium text-[#222]">
                  Interest
                </label>

                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#ddd5c9] bg-[#fcfbf8] px-4 py-2.5 text-sm outline-none transition focus:border-[#9b7b53]"
                >
                  <option>Buying</option>
                  <option>Selling</option>
                  <option>Renting</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#222]">
                  Message
                </label>

                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about what you're looking for"
                  className="w-full rounded-2xl border border-[#ddd5c9] bg-[#fcfbf8] px-4 py-2.5 text-sm outline-none transition focus:border-[#9b7b53]"
                />
              </div>

              <button
  type="submit"
  disabled={loading}
  className="inline-flex w-full items-center justify-center rounded-full bg-[#155DFC] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0F4EE8] transition-all duration-300 disabled:opacity-60"
>
  {loading ? "Sending..." : "Send Message"}
</button>
            </form>
          </div>
        </section>

        <section className="mt-8 flex justify-center">
          <div className="w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-[#e9e0d4] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.04)]">
            <div className="flex h-[260px] items-center justify-center bg-[linear-gradient(135deg,#ece2d3,#f8f4ed)] sm:h-[300px]">
              <div className="rounded-2xl border border-dashed border-[#b89466] bg-white/50 px-6 py-4 text-sm font-medium text-[#8a6a42] backdrop-blur-sm">
                Interactive map placeholder
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function InfoCard({ icon, title, value }) {
  return (
    <div className="flex items-center gap-5 rounded-[28px] border border-[#e9e0d4] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#13274F] text-[#C6A15B]">
        {icon}
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.35em] font-semibold text-[#9b7b53]">
          {title}
        </p>

        <div className="mt-2 text-lg font-medium leading-7 text-[#151515]">
          {value}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#222]">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[#ddd5c9] bg-[#fcfbf8] px-4 py-2.5 text-sm outline-none transition focus:border-[#9b7b53]"
      />
    </div>
  );
}