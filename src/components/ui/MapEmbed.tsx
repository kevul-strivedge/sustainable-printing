// components/ui/MapEmbed.tsx

const MapEmbed = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:py-20 py-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.8866422843125!2d144.9794775748619!3d-37.79269627198085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64322926f8bdd%3A0xca4f901a3bdd452!2s71-77%20Queens%20Parade%2C%20Fitzroy%20North%20VIC%203068%2C%20Australia!5e0!3m2!1sen!2sin!4v1779275910435!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      />
    </div>
  );
};

export default MapEmbed;