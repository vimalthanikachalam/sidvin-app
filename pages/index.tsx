import { VideosView } from "@/components/Videos";

export default function Home() {
  return (
    <>
      <div className="mobile__view">
        This site is visible only on larger screens.
      </div>
      <div className="homepage__innerView">
        <div className="home__page__container">
          <VideosView />
          <div className="sidvin__video__content">
            Experience the captivating story of innovations in engineering, human wealth that
            contributed to them, and the technology that emerged as a result. Join us as we embark
            on yet another inspiring journey into the limitless possibilities of extreme
            engineering.
          </div>
        </div>
      </div>
    </>
  );
}
