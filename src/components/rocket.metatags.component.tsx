import { Rocket } from "@/types/rocket.type";
import React from "react";

export default function RocketMetatags({ rocket }: { rocket: Rocket }) {
  return (
    <>
      <title>{`${rocket.name} - SpaceX Rockets`}</title>
      <meta
        name="description"
        content={`${rocket.description.substring(0, 100)}...`}
      />
      <meta property="og:title" content={`${rocket.name} - SpaceX Rockets`} />
      <meta
        property="og:description"
        content={`${rocket.description.substring(0, 100)}...`}
      />
      <meta property="og:image" content={rocket.flickr_images[0]} />
      <meta
        property="og:url"
        content={`https://spacex.lexit.com.br/${rocket.id}`}
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lexit" />
      <meta name="twitter:creator" content="@lexit" />
      <meta name="twitter:title" content={`${rocket.name} - SpaceX Rockets`} />
      <meta
        name="twitter:description"
        content={`${rocket.description.substring(0, 100)}...`}
      />
      <meta name="twitter:image" content={rocket.flickr_images[0]} />
      <meta
        name="twitter:url"
        content={`https://spacex.lexit.com.br/${rocket.id}`}
      />
    </>
  );
}
