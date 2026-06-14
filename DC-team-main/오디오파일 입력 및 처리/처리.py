from scipy.io import wavfile
import numpy as np
import os

wav_path = "example.wav"

while True:
    if os.path.exists(wav_path):
        print("파일을 찾았습니다")
        break
    else:
        print("파일을 찾을 수 없습니다")
        
sample_rate, data = wavfile.read(wav_path)

if len(data.shape) == 2:
    data = data[:, 0]

print(f"샘플링 주파수: {sample_rate} Hz")
print(f"데이터 길이: {len(data)} 샘플")
print(f"재생 시간: {len(data) / sample_rate:.2f} 초")
