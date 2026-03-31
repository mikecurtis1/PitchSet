# PitchSet 

PitchSet is a lightweight JavaScript library for working with musically spelled pitch relationships—the kind of logic used in traditional music theory, notation software, and MIDI tooling.

Rather than treating notes as raw numbers, PitchSet models pitches and intervals the way musicians actually think about them:

`C♯` is different from `D♭`. Intervals have qualities like major, minor, and perfect. Transposition preserves correct spelling, not just pitch distance.

This kind of logic underpins professional tools like Sibelius, Finale, and MuseScore, as well as MIDI-based workflows and algorithmic composition systems.

## What It Does

PitchSet provides a small set of primitives for:

### Pitch Representation

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

### Interval Modeling

Work with intervals using standard music theory notation:

```Javascript
let i = new Interval("m3"); // Minor third
```

Supports:

* perfect / major / minor
* augmented (`A`) and diminished (`d`) (including multiples like `AA`, `dd`)
* compound intervals (9th, 13th, etc.)

### Transposition (Core Feature)

Transpose pitches correctly spelled, not just numerically:

```Javascript
let p1 = new Pitch("C4");
let i = new Interval("m3");

let result = transposePitch(p1, i);
// → E♭4 (not D♯4)
```

This is the key feature:
* enharmonic correctness is preserved automatically.

### Interval Detection

Determine the interval between two pitches:

```Javascript
let p1 = new Pitch("C4");
let p2 = new Pitch("E♭4");

let name = buildIntervalName(p1, p2);
// → "m3"
```
### Why This Exists

Most programming approaches to music reduce everything to numbers (e.g., MIDI note 60). That’s useful—but it loses notation-level meaning.

PitchSet instead models:

* diatonic structure (letter names)
* chromatic alteration (accidentals)
* interval quality

This makes it useful for:

* notation-aware tools
* theory education
* algorithmic composition
* generating scales, chords, and voicings with correct spelling

### Example: Building a Scale

```Javascript
let root = new Pitch("C4");

let intervals = ["M2","M3","P4","P5","M6","M7"]; // a major scale

let scale = intervals.map(i => {
  return transposePitch(root, new Interval(i));
});

// → C4 D4 E4 F4 G4 A4 B4 C5
```
## Live Demo

https://mikecurtis1.github.io/PitchSet/

## Design Notes (for Developers)

* Uses dual systems:
  * Gamut order (A–G cycle) for interval class
  * Chromatic order (12-tone) for semitone calculation
* Encodes interval logic via a finite lookup table (FiniteIntervals)
* Separates:
  * symbolic meaning (interval names)
  * numeric realization (half steps)

This hybrid approach mirrors how traditional theory bridges music staff notation and interval size.

## License

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

This project is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
