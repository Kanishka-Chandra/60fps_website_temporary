import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useOrientation } from "react-use";
import { featureCards } from "../data";

const Features = () => {
  const targetRef = useRef(null);
  const { type } = useOrientation();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 0.1, 1], ["1%", "1%", "-52.5%"]);

  return (
    <>
      {!(type === "landscape-primary") ? (
        <section className="relative bg-black">
          <div className="flex w-full justify-center">
            <div className="m-4 flex flex-col items-center gap-4 overflow-hidden p-4">
              {featureCards.map((card, index) => {
                return <Card card={card} key={index} />;
              })}
            </div>
          </div>
        </section>
      ) : (
        <section ref={targetRef} className="relative h-[400vh] bg-black">
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div style={{ x }} className="m-0 flex gap-4">
              {featureCards.map((card, index) => {
                return <Card card={card} key={index} />;
              })}
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative size-[min(60vh,450px)] overflow-hidden bg-neutral-800"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="text bg-gradient-to-br from-white/20 to-white/0 p-8 font-black uppercase text-white backdrop-blur-md portrait:text-6xl landscape:md:text-6xl">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Features;
