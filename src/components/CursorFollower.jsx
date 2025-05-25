import { useEffect } from "react";
import { gsap } from "gsap";

const CursorFollower = () => {
  useEffect(() => {
    const follower = document.querySelector(".cursor-follower");
    if (!follower) return;

    let posX = 0,
      posY = 0;
    let mouseX = 0,
      mouseY = 0;
    let animationFrameId;
    let animation;

    const animate = () => {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      gsap.set(follower, {
        css: {
          left: posX - 12,
          top: posY - 12,
        },
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Start the animation
    animationFrameId = requestAnimationFrame(animate);

    // Add event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("mousemove", handleMouseMove);
      if (animation) animation.kill();
    };
  }, []);

  return <div className="cursor-follower"></div>;
};

export default CursorFollower;
