const PitchSetIntervals = {
	"major_scale": {
		"tonic": "P1",
		"second": "M2",
		"third": "M3",
		"fourth": "P4",
		"fifth": "P5",
		"sixth": "M6",
		"seventh": "M7",
		"octave": "P8"
	},
	"natural_minor_scale": {
		"tonic": "P1",
		"second": "M2",
		"third": "m3",
		"fourth": "P4",
		"fifth": "P5",
		"sixth": "m6",
		"seventh": "m7",
		"octave": "P8"
	},
	"harmonic_minor_scale": {
		"tonic": "P1",
		"second": "M2",
		"third": "m3",
		"fourth": "P4",
		"fifth": "P5",
		"sixth": "m6",
		"seventh": "M7",
		"octave": "P8"
	},
	"melodic_minor_scale": {
		"tonic_ascending": "P1",
		"second_ascending": "M2",
		"third_ascending": "m3",
		"fourth_ascending": "P4",
		"fifth_ascending": "P5",
		"sixth_ascending": "M6",
		"seventh_ascending": "M7",
		"octave_ascending": "P8",
		"octave_descending": "P8",
		"seventh_descending": "m7",
		"sixth_descending": "m6",
		"fifth_descending": "P5",
		"fourth_descending": "P4",
		"third_descending": "m3",
		"second_descending": "M2",
		"tonic_descending": "P1"
	},
	"lydian_dominant_scale": {
		"tonic": "P1",
		"second": "M2",
		"third": "M3",
		"fourth": "A4",
		"fifth": "P5",
		"sixth": "M6",
		"seventh": "m7",
		"octave": "P8"
	},
	"Freygish_scale": {
		"tonic": "P1",
		"second": "m2",
		"third": "M3",
		"fourth": "P4",
		"fifth": "P5",
		"sixth": "m6",
		"seventh": "m7",
		"octave": "P8"
	},
	"double_harmonic_scale": {
		"tonic": "P1",
		"second": "m2",
		"third": "M3",
		"fourth": "P4",
		"fifth":"P5",
		"sixth":"m6",
		"seventh": "M7",
		"octave": "P8"
	},
	"whole_tone_scale_1": {
		"P1":"P1",
		"M2": "M2",
		"M3": "M3",
		"A4": "A4",
		"A5": "A5",
		"A6": "A6",
		"P8": "P8"
	},
	"whole_tone_scale_2": {
		"P1":"P1",
		"M2": "M2",
		"M3": "M3",
		"d5": "d5",
		"m6": "m6",
		"m7": "m7",
		"P8": "P8"
	},
	"octatonic_scale_WH": {
		"P1": "P1",
		"M2": "M2",
		"m3": "m3",
		"P4": "P4",
		"A4": "A4",
		"A5": "A5",
		"M6": "M6",
		"M7": "M7",
		"P8": "P8"
	},
	"octatonic_scale_HW": {
		"P1": "P1",
		"m2": "m2",
		"m3": "m3",
		"M3": "M3",
		"A4": "A4",
		"P5": "P5",
		"M6": "M6",
		"m7": "m7",
		"P8": "P8"
	},
	"altered_scale": {
		"P1": "P1",
		"m2": "m2",
		"m3": "m3",
		"d4": "d4",
		"d5": "d5",
		"m6": "m6",
		"m7": "m7",
		"P8": "P8"
	},
	"blues_scale_major": {
		"tonic": "P1",
		"second": "M2",
		"raised_second": "A2",
		"third": "M3",
		"fifth": "P5",
		"sixth": "M6",
		"octave": "P8"
	},
	"blues_scale_minor": {
		"tonic": "P1",
		"third": "m3",
		"fourth": "P4",
		"flat_fifth": "d5",
		"fifth": "P5",
		"seventh": "m7",
		"octave": "P8"
	},
	"enigmatic_scale": {
		"P1": "P1",
		"m2": "m2",
		"M3": "M3",
		"A4": "A4",
		"A5": "A5",
		"A6": "A6",
		"M7": "M7",
		"P8": "P8"
	},
	"Prometheus_scale": {
		"P1": "P1",
		"M2": "M2",
		"M3": "M3",
		"A4": "A4",
		"M6": "M6",
		"m7": "m7",
		"P8": "P8"
	},
	"major_tetrachord": {
		"tonic": "P1",
		"second": "M2",
		"third": "M3",
		"fourth": "P4"
	},
	"minor_tetrachord": {
		"tonic": "P1",
		"second": "M2",
		"third": "m3",
		"fourth": "P4"
	},
	"phrygian_tetrachord": {
		"tonic": "P1",
		"second": "m2",
		"third": "m3",
		"fourth": "P4"
	},
	"harmonic_tetrachord": {
		"tonic": "P1",
		"second": "m2",
		"third": "M3",
		"fourth": "P4"
	},
	"Common Intervals": {
		"P1": "P1",
		"m2": "m2",
		"M2": "M2",
		"A2": "A2",
		"m3": "m3",
		"M3": "M3",
		"P4": "P4",
		"A4": "A4",
		"d5": "d5",
		"P5": "P5",
		"A5": "A5",
		"m6": "m6",
		"M6": "M6",
		"A6": "A6",
		"d7": "d7",
		"m7": "m7",
		"M7": "M7",
		"P8": "P8"
	},
	"major_triad": {
		"root": "P1",
		"third": "M3",
		"fifth": "P5"
	},
	"minor_triad": {
		"root": "P1",
		"third": "m3",
		"fifth": "P5"
	},
	"augmented_triad": {
		"root": "P1",
		"third": "M3",
		"fifth": "A5"
	},
	"diminished_triad": {
		"root": "P1",
		"third": "m3",
		"fifth": "d5"
	},
	"dominant_seventh_chord": {
		"root": "P1",
		"third": "M3",
		"fifth": "P5",
		"seventh": "m7"
	},
	"dominant_seventh_flat_five_chord": {
		"root": "P1",
		"third": "M3",
		"fifth": "d5",
		"seventh": "m7"
	},
	"augmented_seventh_chord": {
		"root": "P1",
		"third": "M3",
		"fifth": "A5",
		"seventh": "m7"
	},
	"minor_seventh_chord": {
		"root": "P1",
		"third": "m3",
		"fifth": "P5",
		"seventh": "m7"
	},
	"minor_major_seventh_chord": {
		"root": "P1",
		"third": "m3",
		"fifth": "P5",
		"seventh": "M7"
	},
	"major_seventh_chord": {
		"root": "P1",
		"third": "M3",
		"fifth": "P5",
		"seventh": "M7"
	},
	"diminished_seventh_chord": {
		"root": "P1",
		"third": "m3",
		"fifth": "d5",
		"seventh": "d7"
	},
	"half_diminished_seventh_chord": {
		"root": "P1",
		"third": "m3",
		"fifth": "d5",
		"seventh": "m7"
	},
	"augmented_seventh_chord": {
		"root": "P1",
		"third": "M3",
		"fifth": "A5",
		"seventh": "m7"
	},
	"augmented_major_seventh_chord": {
		"root": "P1",
		"third": "M3",
		"fifth": "A5",
		"seventh": "M7"
	},
	"Italian_augmented_sixth_chord": {
		"root": "P1",
		"third": "M3",
		"sixth": "A6"
	},
	"French_augmented_sixth_chord": {
		"root": "P1",
		"third": "M3",
		"fourth": "A4",
		"sixth": "A6"
	},
	"German_augmented_sixth_chord": {
		"root": "P1",
		"third": "M3",
		"fifth": "P5",
		"sixth": "A6"
	},
	"Neapolitan_sixth_chord": {
		"root": "P1",
		"third": "M3",
		"fifth": "P5"
	},
	"dominant_ninth_chord": {
		"root": "P1",
		"third": "M3",
		"fifth": "P5",
		"seventh": "m7",
		"ninth": "M9"
	},
	"dominant_minor_ninth_chord": {
		"root": "P1",
		"third": "M3",
		"fifth": "P5",
		"seventh": "m7",
		"ninth": "m9"
	},
	"minor_ninth_chord": {
		"root": "P1",
		"third": "m3",
		"fifth": "P5",
		"seventh": "m7",
		"ninth": "M9"
	},
	"major_ninth_chord": {
		"root": "P1",
		"third": "M3",
		"fifth": "P5",
		"seventh": "M7",
		"ninth": "M9"
	},
	"dominant_thirteenth_chord": {
		"root": "P1",
		"third": "M3",
		"fifth": "P5",
		"seventh": "m7",
		"ninth": "M9",
		"eleventh": "P11",
		"thirteenth": "M13"
	},
	"Prometheus_chord": {
		"root": "P1",
		"fourth": "A4",
		"seventh": "m7",
		"tenth": "M10",
		"thirteenth": "M13",
		"sixteenth": "M16"
	},
	"Petrushka_chord": {
		"root1": "P1",
		"third1": "M3",
		"fifth1": "P5",
		"root2": "d5",
		"third3": "m7",
		"fifth2": "m9"
	},
	"quartal_triad": {
		"root": "P1",
		"fourth": "P4",
		"seventh": "m7"
	},
	"quartal_tetrad": {
		"root": "P1",
		"fourth": "P4",
		"seventh": "m7",
		"tenth": "m10"
	}
};