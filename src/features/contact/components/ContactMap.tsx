import { contact } from "@/src/shared/data/site-content";

export function ContactMap() {
  return (
    <div className="mt-4 h-72 overflow-hidden border border-white/10 bg-surface grayscale transition-[filter] hover:grayscale-0">
      <iframe
        title={contact.mapTitle}
        src="https://www.google.com/maps?q=Nora%20Commercial%20Complex%2C%20Hawally%2C%20Kuwait&output=embed"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      />
    </div>
  );
}
