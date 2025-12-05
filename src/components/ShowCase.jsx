import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

function Showcase() {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      timeline
        .to(".mask img", {
          transform: "scale(1.1)",
        })
        .to(".content", { opacity: 1, y: 0, ease: "power1.in" });
    }
  }, [isTablet]);

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" autoPlay loop muted playsInline />
        <div className="mask">
          <img src="/mask-logo.svg" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>

            <div className="spacey-5 mt-7 pe-10">
              <p>
                Introducing{" "}
                <span className="text-white">M4, the next generation chip</span>
                . M4 powers
              </p>
              <p>
                the new MacBook Pro with incredible performance and efficiency,
                so you can tackle your biggest projects
              </p>
              <p>
                and still have plenty of battery life left over for all-day
                creativity and beyond.
              </p>
              <p className="text-primary">
                Learn more about Apple Intelligence
              </p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <h3>4x faster</h3>
              <p>pro rendering performance than M2</p>
            </div>

            <div className="space-y-2">
              <p>Up to</p>
              <h3>1.5x faster</h3>
              <p>Cpu performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
