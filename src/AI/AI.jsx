import React from "react";
import style from "./AI.module.css";
import { Typewriter } from "react-simple-typewriter";

function AI() {
  return (
    <div className={style.aiComponentContainer}>
      <div className={style.aiTopHeader}>
        <div className={style.aiTopHeaderInner}>
          <h5>
            AI can
            <span>
              <Typewriter
                cursor={true}
                words={[
                  "generate cube",
                  "make all objects Rotate",
                  "generate random colors",
                ]}
                loop={false}
              />
            </span>
          </h5>
          <h1>Introducing CTRUH AI ALPHA</h1>
          <p>
            The power of AI is coming to the 3rd dimension. Generate objects,
            animations, and textures using prompts.
          </p>
          <button>Join the Waitlist</button>
        </div>
      </div>
      <div className={style.AiVideoContainer}>
        <video
          src="https://ctruht0.blob.core.windows.net/ctruh-test/Waitlist_Thanks_Reel.mp4"
          autoPlay
          loop
          muted
          width={"70%"}
        ></video>
      </div>
    </div>
  );
}

export default AI;
