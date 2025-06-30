"use client";

import { BsCircleFill } from "react-icons/bs";

export const BrandScroller = () => {
  return (
    <div className="group flex overflow-hidden py-2 [--gap:2rem] [gap:var(--gap))] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div
            className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
            key={i}
          >
            <div className="flex items-center w-28 gap-3">
              <BsCircleFill size={24} />
              <p className="text-lg font-semibold opacity-80">SUNHACKS</p>
            </div>
            <div className="flex items-center w-28 gap-3">
              <BsCircleFill size={24} />
              <p className="text-lg font-semibold opacity-80">HWI</p>
            </div>
            <div className="flex items-center w-28 gap-3">
              <BsCircleFill size={24} />
              <p className="text-lg font-semibold opacity-80">SUNHACKS</p>
            </div>
            <div className="flex items-center w-28 gap-3">
              <BsCircleFill size={24} />
              <p className="text-lg font-semibold opacity-80">HWI</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export const BrandScrollerReverse = () => {
  return (
    <div className="group flex overflow-hidden py-2 [--gap:2rem] [gap:var(--gap))] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div
            className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-reverse flex-row"
            key={i}
          >
            <div className="flex items-center w-28 gap-3">
              <BsCircleFill size={24} />
              <p className="text-lg font-semibold opacity-80">SUNHACKS</p>
            </div>
            <div className="flex items-center w-28 gap-3">
              <BsCircleFill size={24} />
              <p className="text-lg font-semibold opacity-80">HWI</p>
            </div>
            <div className="flex items-center w-28 gap-3">
              <BsCircleFill size={24} />
              <p className="text-lg font-semibold opacity-80">SUNHACKS</p>
            </div>
            <div className="flex items-center w-28 gap-3">
              <BsCircleFill size={24} />
              <p className="text-lg font-semibold opacity-80">HWI</p>
            </div>
          </div>
        ))}
    </div>
  );
};