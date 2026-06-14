import subprocess
import os

input_file = "example.mp3"
output_file = os.path.splitext(input_file)[0] + ".wav"
ffmpeg_path = "C:\\ffmpeg-7.1.1-essentials_build\\ffmpeg-7.1.1-essentials_build\\bin\\ffmpeg.exe"

subprocess.run([
    ffmpeg_path, "-y", "-i", input_file, output_file
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

print(f"변환 완료: {output_file}")