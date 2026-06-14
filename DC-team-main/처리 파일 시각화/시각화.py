import librosa.display,librosa  #시각화에 필요한 라이브러리 
sig,sr = librosa.load()
plt.figure()
librosa.display.waveplot(sig,sr,alpha=0.5)  #파형 그래프로 시각화
plt.xlabel('Time')
plt.ylabel('Amplitude')
plt.title("Waveform")
plt.show()