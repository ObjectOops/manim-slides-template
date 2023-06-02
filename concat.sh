# Run in directory with videos.
# This script combines the individual scenes into one file.
# Add file names to `videos.txt` in order. Replace example content.
cp ../../../../videos.txt .
ffmpeg -f concat -safe 0 -i videos.txt -c copy presentation.mp4
rm videos.txt
