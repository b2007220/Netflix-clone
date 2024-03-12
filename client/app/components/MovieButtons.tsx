"use client";

import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";

interface iAppProps {
  overview: string;
  youtubeUrl: string;
  id: number;
  title: string;
  age: number;
  duration: number;
  release: number;
}

export default function MovieButtons({
  overview,
  youtubeUrl,
  id,
  title,
  age,
  duration,
  release,
}: iAppProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} className="text-lg font-medium">
        <PlayCircle className="mr-2 h-6 w-6"></PlayCircle>Play
      </Button>
      <Button
        onClick={() => setOpen(true)}
        className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white">
        <InfoIcon className="mr-2 h-6 w-6"></InfoIcon>Learn more
      </Button>
      <PlayVideoModal
        state={open}
        changeState={setOpen}
        age={age}
        duration={duration}
        release={release}
        title={title}
        key={id}
        overview={overview}
        youtubeUrl={youtubeUrl}></PlayVideoModal>
    </>
  );
}
