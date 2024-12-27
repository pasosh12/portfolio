import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        fpsLimit: 120,
            interactivity: {
            events: {
                onClick: {
                    enable: true,
                        mode: "push",
                },
                onHover: {
                    enable: true,
                        mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                        duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#666666",
            },
            links: {
                color: "#666666",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 0.5,
            },
            move: {
                direction: "none",
                    enable: true,
                    outModes: {
                default: "bounce",
                },
                random: false,
                    speed: 1,
                    straight: false,
            },
            number: {
                density: {
                    enable: true,
                        area: 2000,
                },
                value: 80,
            },
            opacity: {
                value: 0.2,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 0.2, max: 0.5 },
            },
        },
        detectRetina: true,
    }}
    />
);
};