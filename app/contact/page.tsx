import Image from "next/image";
import backgroundImg from "@/public/images/japan.png";

function ContactPage() {
  return (
    <div className="bg-emerald-500/50 z-0">
      <section className="mt-12 flex items-center justify-center">
        <div className="overflow-hidden">
          <Image
            src={backgroundImg}
            alt="Cover Image"
            className="object-cover"
            fill
          />
        </div>

        <div className="p-8 mt-12 z-2 bg-green-100/70  justify-center items-center flex flex-col w-7/10 rounded-2xl">
          <h1 className="text-3xl text-black mb-3 lg:text-6xl"> Contact Me</h1>
          <p className="text-black sms:text-lg md:text-xl lg:text-2xl w-7/10 text-xs">
            I&apos;m always open to new opportunities, collaborations, or just a
            friendly chat. Whether you&apos;re hiring, have a project in mind,
            or want to connect — feel free to reach out! 📧 Email:
            [your.email@example.com] 💼 LinkedIn: [Your LinkedIn URL] 🐙 GitHub:
            [Your GitHub URL] Looking forward to hearing from you
          </p>
        </div>
      </section>
    </div>
  );
}
export default ContactPage;
