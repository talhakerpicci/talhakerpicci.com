import { PortableText } from "@portabletext/react";
import type { ProfileType } from "@/types";
import { CustomPortableTextFavicon } from "../shared/CustomPortableTextFavicon";
import { skills, userProfile } from '../../data/data';

export default async function Usage() {
  return (
    <section className="max-w-2xl">
      <div className="mb-8">
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Usage</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-xl">
          Tools, technologies and gadgets I use on a daily basis but not limited
          to.
        </p>
      </div>
      <PortableText
        key={userProfile._id}
        value={userProfile.usage as any}
        components={CustomPortableTextFavicon}
      />
    </section>
  );
}
