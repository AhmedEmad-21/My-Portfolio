import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-h-fit mt-48 w-full flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-2 gap-8 overflow-hidden"
    >
      {/* Left Section */}
      <div className="text-center lg:text-left max-w-2xl space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-gray-800 dark:text-gray-100"
        >
          Hey{" "}
          <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
          , I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Ahmed Emad
          </span>{" "}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-2xl text-muted-foreground font-medium"
        >
          <TypeAnimation
            sequence={[
              "Aspiring Full Stack Developer",
              2000,
              "Tech Explorer",
              2000,
              "Software Engineer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center lg:justify-start text-muted-foreground text-base md:text-lg"
        >
          <MapPin className="h-5 w-5 mr-2 text-primary" />
          Based in Giza, Egypt
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center lg:justify-start gap-5 pt-4"
        >
          <a
            href="https://github.com/AhmedEmad-21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/ahmed-emad21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:ahmedand3509@gmail.com"
            className="text-muted-foreground hover:text-primary transition"
            title="Send Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="/assets/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition"
            title="View CV"
          >
            <FileText size={24} />
          </a>
        </motion.div>
      </div>

      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative flex justify-center"
      >
        <img
          src="/assets/Me.jpeg"
          alt="Ahmed Emad"
          className="relative z-10 h-48 md:h-64 rounded-full border-4 border-blue-500 shadow-sm object-fit "
          loading="lazy"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
