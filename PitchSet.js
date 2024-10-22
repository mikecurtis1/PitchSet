const FiniteIntervals = {
    "1": {
        "sizes": [0],
        "0": "P",
        "P": 0
    },
    "2": {
        "sizes": [1,2],
        "1": "m",
        "2": "M",
        "m": 1,
        "M": 2
    },
    "3": {
        "sizes": [3,4],
        "3": "m",
        "4": "M",
        "m": 3,
        "M": 4
    },
    "4": {
        "sizes": [5],
        "5": "P",
        "P": 5
    },
    "5": {
        "sizes": [7],
        "7": "P",
        "P": 7
    },
    "6": {
        "sizes": [8,9],
        "8": "m",
        "9": "M",
        "m": 8,
        "M": 9
    },
    "7": {
        "sizes": [10,11],
        "10": "m",
        "11": "M",
        "m": 10,
        "M": 11
    },
    "8": {
        "sizes": [12],
        "12": "P",
        "P": 12
    }
};

const IntervalQualities = {
    'P':'perfect',
    'M':'major',
    'm':'minor'
};

const GamutOrder = {
    'C':1,
    'D':2,
    'E':3,
    'F':4,
    'G':5,
    'A':6,
    'B':7,
    1:'C',
    2:'D',
    3:'E',
    4:'F',
    5:'G',
    6:'A',
    7:'B'
};

const ChromaticOrder = {
    1:'C',
    2:2,
    3:'D',
    4:4,
    5:'E',
    6:'F',
    7:7,
    8:'G',
    9:9,
    10:'A',
    11:11,
    12:'B',
    'C':1,
    2:2,
    'D':3,
    4:4,
    'E':5,
    'F':6,
    7:7,
    'G':8,
    9:9,
    'A':10,
    11:11,
    'B':12
};

const Ordinals = {
    1:'unison',
    2:'second',
    3:'third',
    4:'fourth',
    5:'fifth',
    6:'sixth',
    7:'seventh',
    8:'eighth',
    9:'ninth',
    10:'tenth',
    11:'eleventh',
    12:'twelfth',
    13:'thirteenth',
    14:'fourteenth',
    15:'fifteenth'
};

const Tuples = {
    1:'single',
    2:'double',
    3:'triple',
    4:'quadruple',
    5:'quintuple',
    6:'sextuple',
    7:'septuple',
    8:'octuple',
    9:'nonuple',
    10:'decuple'
};

const Accidentals = {
    'double flat':'𝄫',
    'flat':'♭',
    'natural':'♮',
    'sharp':'♯',
    'double sharp':'𝄪',
    '𝄫':'double flat',
    '♭':'flat',
    '♮':'natural',
    '♯':'sharp',
    '𝄪':'double sharp'
};

class Pitch {
    constructor(str, explicit_natural=false) {
        this.string = str;
        this.letter = str.substring(0,1);
		this.accidentals = '';
		let regex = new RegExp('([𝄫♭♮♯𝄪]+)', 'u');
		if ( str.match(regex) !== null ) {
			this.accidentals = str.match(regex)[0];
		}
		this.accidentals = normalizeDoubleAccidental(this.accidentals);
		if (this.accidentals === '' && explicit_natural === true) {
			this.accidentals = '♮';
		}
		this.octave = Number(str.match(/(\d+)$/)[0]);
		this.string = this.letter + this.accidentals + this.octave;
        this.halfStepAlterations = quantifyAccidentals(this.accidentals);
        this.chromaticPos = calcPitchPosChromatic(this.letter, this.octave, this.halfStepAlterations);
        this.pianoKey = expressPianoKey(this.chromaticPos);
        this.midiNumber = expressMidiNumber(this.chromaticPos);
    }
};

class Interval {
    constructor(str) {
        this.string = str;
        this.quality = str.match(/^[mMPdA]+/)[0];
        this.number = str.match(/(\d+)$/)[0];
        this.simple = calcSimpleClass(this.number);
        this.simpleNormalized = normalizeCompoundClass(this.number);
        this.halfSteps = calcHalfStepsFromCodes(this.simple, this.simpleNormalized, this.quality);
        this.halfStepsNormalized = calcHalfStepsFromCodes(this.simple, this.simpleNormalized, this.quality, true);
    }
};

const expressPianoKey = function(chromaticPos=0) {
    let pianoKey = Number(chromaticPos) - 9;
    return pianoKey;
};

const expressMidiNumber = function(chromaticPos=0) {
    let midiNumber = Number(chromaticPos) + 11;
    return midiNumber;
};

const expressOrdinal = function (n, long=false) {
    n = Number(n);
    let str = '';
    if ( n >=1 && n <= 15 && long === true) {
        return Ordinals[n];
    }
    if ( n > 0 ) {
        if ( n >= 4 && n <= 20) {
            str =  n.toString() + 'th';
        } else {
            let f = n % 10;
            if ( f === 1 ) {
                str =  n.toString() + 'st';
            } else if ( f === 2 ) {
                str =  n.toString() + 'nd';
            } else if ( f === 3 ) {
                str =  n.toString() + 'rd';
            } else {
                str =  n.toString() + 'th';
            }
        }
    } else {
        str = n.toString();
    }
    return str;
};

const expressTuple = function (str) {
    let prepended = '';
    str = str.toString();
    // Javascript Unicode encoding is UTF-16
    // UTF-16 double-flat & double-sharp are each one code point of two code units
    // str.length counts code units
    // Array.from breaks a string on code points
    let len = Array.from(str).length;
    let a = Array.from(str)[0];
    let regex = new RegExp('^' + a + '{2,}$', 'u');
    if ( str.match(regex) !== null && Tuples[len] ) {
        prepended = Tuples[len] + ' ' + a; 
    } else {
        prepended = str;
    }
    return prepended;
};

const normalizeCompoundClass = function (n) {
    n = Number(n);
    let normalized = n;
    if (n > 15) {
        let f = Math.floor(n / 7);
        if (n % 7 === 1 || n % 7 === 0) {
            normalized = normalized - (f - 2) * 7;
        } else {
            normalized = normalized - (f - 1) * 7;
        }
    }
    return normalized;
};

const normalizeCompoundHalfSteps = function(n){
    n = Number(n);
    let normalized = n;
    if (n > 24) {
        let f = Math.floor(n / 12);
        if (n % 12 === 1 || n % 12 === 0) {
            normalized = normalized - (f - 2) * 12;
        } else {
            normalized = normalized - (f - 1) * 12;
        }
    }
    return normalized;
};

const normalizeDoubleAccidental = function (str) {
    let accidental = '';
    if ( str === '♭♭' ) {
        accidental = '𝄫';
    } else if ( str === '♯♯' ) {
        accidental = '𝄪';
    } else {
        return str;
    }
    return accidental;
};

const quantifyAccidentals = function (str){
    let halfSteps = 0;
    Array.from(str).forEach(
        function(chr){
            if(chr==='𝄫'){
                halfSteps = halfSteps - 2;
            }
            if(chr==='♭'){
                halfSteps = halfSteps - 1;
            }
            if(chr==='♮'){
                halfSteps = halfSteps;
            }
            if(chr==='♯'){
                halfSteps = halfSteps + 1;
            }
            if(chr==='𝄪'){
                halfSteps = halfSteps + 2;
            }
        }
    );
    return halfSteps;
};

const calcPitchPos = function(letter, octave) {
    let pitchPos = 0;
    let order = 0;
    order = GamutOrder[letter];
    pitchPos = order + (octave * 7);
    return pitchPos;
};

const calcPosOctave = function (pos){
    let octave = 0;
    pos = Number(pos);
    octave = Math.floor((pos-1)/7);
    return octave;
};

const calcPosLetter = function (pos) {
    let letter = '';
    pos = Number(pos);
    let i = pos % 7;
    if (i===0){
        i = 7;
    }
    letter = GamutOrder[i];
    return letter;
};

const calcPosOrder = function (pos) {
    let order = 0;
    pos = Number(pos);
    order = pos % 7;
    if (order === 0){
        order = 7;
    }
    return order
};

const calcPitchPosChromatic = function(letter, octave, halfsteps=0) {
    let pitchPos = 0;
    let order = 0;
    order = ChromaticOrder[letter];
    pitchPos = order + (octave * 12) + halfsteps;
    return pitchPos;
};

const calcSimpleClass = function (n) {
    let simple = 0;
    n = Number(n);
    simple = n % 7;
    if (simple === 0) {
        simple = 7;
    }
    if (simple === 1 && n >= 8){
        simple = 8;
    }
    return simple;
};

const calcIntervalClass = function (p1, p2){
    let intervalClass = 0;
    let pos1 = calcPitchPos(p1.letter, p1.octave);
    let pos2 = calcPitchPos(p2.letter, p2.octave);
    intervalClass = Math.abs(pos1 - pos2) + 1;
    intervalClass = normalizeCompoundClass(intervalClass);
    return intervalClass;
};

const calcHalfStepsFromPitches = function (p1, p2, normalize=false){
    let halfSteps = 0;
    let pos1 = calcPitchPosChromatic(p1.letter, p1.octave, p1.halfStepAlterations);
    let pos2 = calcPitchPosChromatic(p2.letter, p2.octave, p2.halfStepAlterations);
	halfSteps = Math.abs(pos1 - pos2);
    if (normalize === true) {
		return normalizeCompoundHalfSteps(halfSteps);
    } else {
		return halfSteps;
    }
};

const calcHalfStepsFromCodes = function (simple, normalized, quality, normalize=false) {
    let halfSteps = 0;
    if ( FiniteIntervals[simple] ) {
        if ( quality.match(/^d+$/g) ) {
            let min = Math.min.apply(Math, FiniteIntervals[simple]['sizes']);
            let len = quality.length;
            halfSteps = min - len;
        } else if ( quality.match(/^A+$/g) ) {
            let max = Math.max.apply(Math, FiniteIntervals[simple]['sizes']);
            let len = quality.length;
            halfSteps = max + len;
        } else {
            halfSteps = FiniteIntervals[simple][quality];
        }
    }
    if ( normalize === false ) {
		let q = normalized / 8;
		if ( q >= 1 ) {
			halfSteps = halfSteps + (Math.ceil(q) - 1) * 12
		}
    }
    return halfSteps;
};

const buildIntervalName = function(pitch1, pitch2){
    let intervalName = '';
    let accidentalsTotal = calcHalfStepsFromPitches(pitch2, pitch1);
    let intervalClass = calcIntervalClass(pitch1, pitch2);
    let halfSteps = calcHalfStepsFromPitches(pitch1, pitch2, true);
    let simpleClass = calcSimpleClass(Number(intervalClass));
    let simpleHalfSteps = 0;
    if (intervalClass > 8) {
        simpleHalfSteps = halfSteps - 12;
    } else {
        simpleHalfSteps = halfSteps;
    }
    intervalName = intervalClass;
    let min = Math.min.apply(Math, FiniteIntervals[simpleClass]['sizes']);
    let max = Math.max.apply(Math, FiniteIntervals[simpleClass]['sizes']);
    if (FiniteIntervals[simpleClass][simpleHalfSteps]) {
        return FiniteIntervals[simpleClass][simpleHalfSteps] + simpleClass;
    }
    if (simpleHalfSteps < min) {
        let m = Math.abs(simpleHalfSteps - min);
        intervalName = String('d').repeat(m).concat(intervalName);
    }
    if (simpleHalfSteps > max) {
        let m = Math.abs(simpleHalfSteps - max);
        intervalName = String('A').repeat(m).concat(intervalName);
    }
    return intervalName;
};

const transposePitch = function (pitch1, interval) {
	let transposedPitch = null;
	let pos1 = calcPitchPos(pitch1.letter, pitch1.octave);
    let pos2 = pos1 + Number(interval.simpleNormalized) - 1;
    let letter2 = calcPosLetter(pos2);
    let octave2 = calcPosOctave(pos2);
	let pitch2 = new Pitch(letter2 + '' + octave2);
	let accidentals = '';
	let diff = Math.abs(pitch2.chromaticPos - (pitch1.chromaticPos + interval.halfSteps));
	if (pitch2.chromaticPos < pitch1.chromaticPos + interval.halfSteps) {
		// add sharps
		accidentals = String('♯').repeat(diff );
		transposedPitch =  new Pitch(letter2 + accidentals + octave2);
	} else if (pitch2.chromaticPos > pitch1.chromaticPos + interval.halfSteps) {
		// add flats
		accidentals = String('♭').repeat(diff );
		transposedPitch =  new Pitch(letter2 + accidentals + octave2);
	} else {
		transposedPitch =  pitch2;
	}
	return transposedPitch;
}
