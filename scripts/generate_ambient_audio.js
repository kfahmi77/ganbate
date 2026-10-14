const fs = require("fs");
const path = require("path");

// Generates a valid RIFF/WAVE PCM audio file containing a soft, warm 432Hz ambient chord with subtle vibrato and exponential fade
function generateWarmAmbientWav() {
  const sampleRate = 44100;
  const durationSeconds = 12;
  const numChannels = 2;
  const bytesPerSample = 2; // 16-bit
  const totalSamples = sampleRate * durationSeconds;
  const dataSize = totalSamples * numChannels * bytesPerSample;

  const buffer = Buffer.alloc(44 + dataSize);

  // RIFF identifier
  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write("WAVE", 8);

  // 'fmt ' chunk
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16); // Chunk size
  buffer.writeUInt16LE(1, 20); // Audio format: PCM
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * numChannels * bytesPerSample, 28); // Byte rate
  buffer.writeUInt16LE(numChannels * bytesPerSample, 32); // Block align
  buffer.writeUInt16LE(bytesPerSample * 8, 34); // Bits per sample

  // 'data' chunk
  buffer.write("data", 36);
  buffer.writeUInt32LE(dataSize, 40);

  // Warm chord frequencies (G major 9: G3, B3, D4, F#4, A4)
  const chordFreqs = [196.0, 246.94, 293.66, 369.99, 440.0];

  let offset = 44;
  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;

    // Gentle fade in (first 1.5s) and fade out (last 1.5s) for smooth looping
    let envelope = 1.0;
    if (t < 1.5) {
      envelope = t / 1.5;
    } else if (t > durationSeconds - 1.5) {
      envelope = (durationSeconds - t) / 1.5;
    }

    // Sum chord harmonics with gentle warmth
    let sampleVal = 0;
    for (let f = 0; f < chordFreqs.length; f++) {
      const freq = chordFreqs[f];
      // Subtle detune and vibrato
      const vibrato = Math.sin(2 * Math.PI * 0.4 * t) * 0.4;
      const wave = Math.sin(2 * Math.PI * (freq + vibrato) * t);
      // Soft overtone
      const overtone = 0.25 * Math.sin(2 * Math.PI * (freq * 2) * t);
      sampleVal += (wave + overtone) * (0.12 / chordFreqs.length);
    }

    sampleVal *= envelope;

    // 16-bit PCM amplitude (-32768 to 32767)
    const intVal = Math.max(-32767, Math.min(32767, Math.floor(sampleVal * 32767)));

    // Stereo Left & Right
    buffer.writeInt16LE(intVal, offset);
    buffer.writeInt16LE(intVal, offset + 2);
    offset += 4;
  }

  const outDir = path.join(__dirname, "../public/audio");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const destPath = path.join(outDir, "background.mp3");
  fs.writeFileSync(destPath, buffer);
  console.log("Successfully generated ambient audio at:", destPath);
}

generateWarmAmbientWav();
