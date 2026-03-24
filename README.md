# PitchSet 

PitchSet is a lightweight JavaScript library for working with musically spelled pitch relationships—the kind of logic used in traditional music theory, notation software, and MIDI tooling.

Rather than treating notes as raw numbers, PitchSet models pitches and intervals the way musicians actually think about them:

`C♯` is different from `D♭`. Intervals have qualities like major, minor, and perfect. Transposition preserves correct spelling, not just pitch distance.

This kind of logic underpins professional tools like Sibelius, Finale, and MuseScore, as well as MIDI-based workflows and algorithmic composition systems.

https://mikecurtis1.github.io/PitchSet/

## What It Does

PitchSet provides a small set of primitives for:

🎵 Pitch Representation

Create fully specified pitches including:

* letter name (A–G)
* accidentals (`♭`, `♯`, `𝄫`, `𝄪`, etc.)
* octave

```Javascript
let p = new Pitch("C♯4");
```

Each pitch internally tracks:

* chromatic position
* MIDI note number
* piano key index
