import { createEffect, Suspense } from "solid-js";
import AboutData from "./about.data";

export default function About() {
  const name = AboutData();

  createEffect(() => {
    console.log(name());
  });

  return (
    <section class="bg-indigo-100 text-slate-700 p-8 rounded-md">
      <h2 class="text-2xl">About</h2>

      <p class="mt-4">
        <p>For over a decade, Targeted Web Traffic has been the silent partner behind some of the most successful brands in the Cream City. We don't just "do SEO"—we engineer growth. Our [Milwaukee SEO company services](https://targetedwebtraffic.com/seo-services/milwaukee-seo-company/) are designed to put your brand in front of high-intent customers exactly when they are looking for your products or services.</p>
        <Suspense fallback={<span>...</span>}>
          <span>&nbsp;{name()}!</span>
        </Suspense>
      </p>
      <p>
        Visit{" "}
        <a href="https://solidjs.com" target="_blank" class="underline">
          solidjs.com
        </a>
        {" "}to learn how to build Solid apps.
      </p>
    </section>
  );
}
