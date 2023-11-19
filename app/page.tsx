import Script from "next/script";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="Study-room">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/amfWIRasxtI?si=eNHEPLXRzhrGYNrF&autoplay=1&mute=1&cc_load_policy=0&controls=0&disablekb=0&fs=0&iv_load_policy=1&modestbranding=0&playsinline=1&rel=1&modestbranding=1&enablejsapi=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          allowFullScreen
        ></iframe>
        </div>
      </div>
    </main>
  );
}
