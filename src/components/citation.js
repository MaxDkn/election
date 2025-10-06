"use client";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function Citations({ citations }) {
  return (
    <div className="space-y-2 mt-6">
      <Marquee gradient={false} speed={100}>
        {citations.map((c, i) => (
          <span key={i} style={{ color: "#92cbab" }} className="mx-8 text-black font-bold">
            {c.text} <span style={{ color: "#5e9577" }} className=" font-bold">{c.author}</span>
          </span>
        ))}
      </Marquee>

      <Marquee gradient={false} speed={150} direction="right">
        {citations.map((c, i) => (
          <span key={i} style={{ color: "#92cbab" }} className="mx-8 text-black font-bold">
            {c.text} <span style={{ color: "#5e9577" }} className="font-bold">{c.author}</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}