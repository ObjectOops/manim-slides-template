from manim import *

def FadeOutAll(scene : Scene):
    scene.play(*[FadeOut(i) for i in scene.mobjects])

# To separate the continuous animation into slides, use self.wait(1) to wait 1 second.
# When replaying the video, take note of the timestamp each of these waits is at.
# Add these to the closest second in `main.js`, as a second in the video each time it pauses.
