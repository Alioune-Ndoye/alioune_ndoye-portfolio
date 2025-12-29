import { motion } from "framer-motion";
import { Music } from "lucide-react";

export function NowPlaying() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Music className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl">Now Playing</h2>
          </div>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            My curated playlist of favorite tracks and artists that inspire my creative work
          </p>
          <div className="mx-auto w-24 h-1 bg-primary rounded mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-card/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-border">
              <iframe
                data-testid="spotify-embed"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/249IAY2xvOVPnTIX75FFpH?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        <style>{`
          @media (max-width: 768px) {
            iframe[data-testid="spotify-embed"] {
              height: 282px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
