"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import Link from "next/link";

export type projectImageLink = {
  profileImage: string;
  id: string;
  link: string;
};

export type artImageLink = {
  image: string;
  id: string;
  link: string;
};

function HeroCarousel({
  items,
}: {
  items: (projectImageLink | artImageLink)[];
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <div className=" block p-8 w-full ">
      <Carousel
        className="w-9/10"
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
      >
        <CarouselContent className="">
          {items.map((item, index) => {
            const { link, id } = item;
            let img = null;
            if (link == "art") {
              const i: artImageLink = item as artImageLink;
              img = i.image;
            } else {
              const i: projectImageLink = item as projectImageLink;
              img = i.profileImage;
            }

            return (
              <CarouselItem key={index} className="md:basis-1/3 sm:basis-1/2">
                <Card className=" bg-blue-400/40 rounded-lg">
                  <CardContent className="">
                    <Link href={`/${link}/${id}`}>
                      <div className="relative min-h-full">
                        <Image
                          src={img}
                          alt="hero"
                          width="0"
                          height="0"
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="hidden sm:flex">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
export default HeroCarousel;
