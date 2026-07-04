import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "../../context/ThemeContext";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  const { theme } = useTheme();

const primaryColor =
  theme === "dark"
    ? "#5B8CFF"
    : "#5B8CFF";
  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        fullScreen: false,
        fpsLimit: 60,

        particles: {
          number: {
            value: 40,
          },

          color: {
            value: primaryColor,
          },

          links: {
            enable: true,
            color: primaryColor,
            distance: 160,
            opacity: 0.18,
          },

          move: {
            enable: true,
            speed: 0.55,
          },

          opacity: {
            value: 0.55,
          },

          size: {
            value: {
              min: 1.2,
              max: 3.2,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}