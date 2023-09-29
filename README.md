# manim-slides-template
Template for making buggy animated web slides with Manim intended to be deployed on GitHub Pages.  
There is different repository on GitHub called manim-slides, which is ~~probably~~ definitely much better.
## Requirements
- [Manim](https://github.com/ManimCommunity/manim)
- Jekyll (optional)
- LaTex packages (optional)
> See Dockerfile.
## Usage
Write Manim animations in `main.py`.
```py
from manim import *

def FadeOutAll(scene : Scene):
    scene.play(*[FadeOut(i) for i in scene.mobjects])

class Test(Scene):
    def construct(self):
        words = ["This", "is", "a", "test."]
        words_tex = [Text(i) for i in words]
        word = words_tex[0]
        self.play(Write(word))
        for i in words_tex:
            self.play(Transform(word, i))
        self.wait(1)
        FadeOutAll(self)
```
Add scene names to `videos.txt`.
Concatenate scenes into a single file.
```sh
cd media/videos/[insert scene video directory]
../../../../concat.sh
```
Copy the resulting video file from `media/...` into the project root directory and rename to `presentation.mp4`.  
Determine the timestamp for each slide either by timing the video or counting the number of animations.  
Add these to `main.js`.
```js
const pauseTimes = [6];
```
### Optional
Install gh-pages dependencies and run `bundle exec jekyll serve` to test on localhost.
## Expectable Bugs
- May need to refresh page cache with <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>R</kbd>.
- May not be compatible with all browsers.
- The space bar may not resume the slides if the mouse was used to adjust progress.
