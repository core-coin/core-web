import Spline from "@splinetool/react-spline";

export const IntroSection = () => {
  return (
    <section className="h-screen w-screen">
      <Spline
        className="opacity-80"
        scene="/models/home-intro.splinecode"
        onLoad={(app) => app.setZoom(0.3)}
      />
    </section>
  );
};
