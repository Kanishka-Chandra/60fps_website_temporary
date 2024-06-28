import React from "react";
import { useAnimate } from "framer-motion";
import { clients } from "../data";

export const Client = () => {
  return (
    <div className="bg-neutral-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <ClipPathLinks />
      </div>
    </div>
  );
};

const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-neutral-900 border border-neutral-900">
      <div className="grid grid-cols-3 divide-x divide-neutral-900">
        <LinkBox
          icon={clients[0].icon}
          iconInveted={clients[0].iconInverted}
          href={clients[0].href}
          alt={clients[0].alt}
        />
        <LinkBox
          icon={clients[1].icon}
          iconInveted={clients[1].iconInverted}
          href={clients[1].href}
          alt={clients[1].alt}
        />
        <LinkBox
          icon={clients[2].icon}
          iconInveted={clients[2].iconInverted}
          href={clients[2].href}
          alt={clients[2].alt}
        />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900">
        <LinkBox
          icon={clients[3].icon}
          iconInveted={clients[3].iconInverted}
          href={clients[3].href}
          alt={clients[3].alt}
        />
        <LinkBox
          icon={clients[4].icon}
          iconInveted={clients[4].iconInverted}
          href={clients[4].href}
          alt={clients[4].alt}
        />
        <LinkBox
          icon={clients[5].icon}
          iconInveted={clients[5].iconInverted}
          href={clients[5].href}
          alt={clients[5].alt}
        />
        <LinkBox
          icon={clients[6].icon}
          iconInveted={clients[6].iconInverted}
          href={clients[6].href}
          alt={clients[6].alt}
        />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-900">
        <LinkBox
          icon={clients[7].icon}
          iconInveted={clients[7].iconInverted}
          href={clients[7].href}
          alt={clients[7].alt}
        />
        <LinkBox
          icon={clients[8].icon}
          iconInveted={clients[8].iconInverted}
          href={clients[8].href}
          alt={clients[8].alt}
        />
        <LinkBox
          icon={clients[9].icon}
          iconInveted={clients[9].iconInverted}
          href={clients[9].href}
          alt={clients[9].alt}
        />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ icon, iconInveted, href, alt }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      {/* <Icon className="text-xl sm:text-3xl lg:text-4xl" />
       */}
      <div className="size-6 md:size-10">
        <img src={icon} alt={alt} />
      </div>
      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-neutral-900 text-white"
      >
        {/* <Icon className="text-xl sm:text-3xl md:text-4xl" /> */}
        <div className={iconInveted}>
          <img src={iconInveted} alt={alt} />
        </div>
      </div>
    </a>
  );
};
