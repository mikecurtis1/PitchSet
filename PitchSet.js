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

class Pitch {
    constructor(str) {
        this.string = str;
        this.letter = str.substring(0,1);
        this.accidentals = str.substring(1,str.length-1);
        this.octave = OctaveLimit(Number(str.substring(str.length-1)));
        this.halfStepAlterations = AccidentalHalfSteps(this.accidentals);
    }
}

class Interval {
    constructor(str) {
        this.string = str;
        this.quality = str.match(/^[mMPdA]+/)[0];
        this.number = str.match(/(\d+)$/)[0];
        this.simple = getSimpleClass(this.number);
        this.normalized = normalizeCompoundClass(this.number);
        this.halfSteps = getIntervalSize(this.simple, this.normalized, this.quality);
    }
}

const PitchPos = function(letter, octave) {
    let pitchPos = 0;
    let order = 0;
    order = GamutOrder[letter];
    pitchPos = order + (octave * 7);
    return pitchPos;
}

const PosOctave = function (pos){
    let octave = 0;
    pos = Number(pos);
    octave = Math.floor(pos/7);
    return octave;
}

const PosLetter = function (pos) {
    let letter = '';
    pos = Number(pos);
    let i = pos % 7;
    if (i===0){
        i = 7;
    }
    letter = GamutOrder[i];
    return letter;
}

const PosOrder = function (pos) {
    let order = 0;
    pos = Number(pos);
    order = pos % 7;
    if (order === 0){
        order = 7;
    }
    return order
}

const PitchPosChromatic = function(letter, octave) {
    let pitchPos = 0;
    let order = 0;
    order = ChromaticOrder[letter];
    pitchPos = order + (octave * 12);
    return pitchPos;
}

const OctaveLimit = function (n){
    n = Number(n);
    if (n < 0) {
        return 0;
    } else if (n > 8) {
        return 8;
    } 
    return n;
}

const getSimpleClass = function (n) {
    let s = 0;
    n = Number(n);
    s = n % 7;
    if (s === 0) {
        s = 7;
    }
    if (s === 1 && n >= 8){
        s = 8;
    }
    return s;
}

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
}

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
}

const CalculateIntervalClass = function (p1, p2){
    let intervalClass = 0;
    let pos1 = PitchPos(p1.letter, p1.octave);
    let pos2 = PitchPos(p2.letter, p2.octave);
    intervalClass = Math.abs(pos1 - pos2) + 1;
    intervalClass = normalizeCompoundClass(intervalClass);
    return intervalClass;
}

const AccidentalHalfSteps = function (str){
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
}

const CalculateIntervalHalfStep = function (p1, p2, accidentalsTotal=false){
    let halfSteps = 0;
    let pos1 = PitchPosChromatic(p1.letter, p1.octave);
    let pos2 = PitchPosChromatic(p2.letter, p2.octave);
    let diff = Math.abs(pos1 - pos2);
    halfSteps = diff;
    if (pos1 < pos2) {
        halfSteps = halfSteps - p1.halfStepAlterations;
        halfSteps = halfSteps + p2.halfStepAlterations;
    } 
    if (pos1 > pos2) {
        halfSteps = halfSteps + p1.halfStepAlterations;
        halfSteps = halfSteps - p2.halfStepAlterations;
    }
    if (accidentalsTotal === true) {
        return halfSteps - diff;
    } else {
        halfSteps = normalizeCompoundHalfSteps(halfSteps);
        return halfSteps;
    }
}

const getIntervalSize = function (simple, normalized, quality) {
    let size = 0;
    if ( FiniteIntervals[simple] ) {
        if ( quality.match(/^d+$/g) ) {
            let min = Math.min.apply(Math, FiniteIntervals[simple]['sizes']);
            let len = quality.length;
            size = min - len;
        } else if ( quality.match(/^A+$/g) ) {
            let max = Math.max.apply(Math, FiniteIntervals[simple]['sizes']);
            let len = quality.length;
            size = max + len;
        } else {
            size = FiniteIntervals[simple][quality];
        }
    }
    let q = normalized / 8;
    if ( q >= 1 ) {
        size = size + (Math.ceil(q) - 1) * 12
    }
    return size;
}

const getIntervalName = function(pitch1, pitch2){
    let intervalName = '';
    let accidentalsTotal = CalculateIntervalHalfStep(pitch2, pitch1, true);
    let intervalClass = CalculateIntervalClass(pitch1, pitch2);
    let halfSteps = CalculateIntervalHalfStep(pitch1, pitch2);
    let simpleClass = getSimpleClass(Number(intervalClass));
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
}

const Harmonize = function (pitch1, interval) {
    let pitch2 = null;
    let pitch2String = '';
    let accidentals = '';
    let pos1 = PitchPos(pitch1.letter, pitch1.octave);
    let pos2 = pos1 + Number(interval.number) - 1;
    let letter2 = PosLetter(pos2);
    let octave = PosOctave(pos2);
    let tempPitch2 = new Pitch(letter2 + '' + octave);
    let tempSize = CalculateIntervalHalfStep(pitch1, tempPitch2);
    let diff = interval.halfSteps - tempSize;
    if (diff < 0) {
        accidentals = String('♭').repeat(Math.abs(diff));
    } else if (diff > 0){
        accidentals = String('♯').repeat(Math.abs(diff));
    } else {
        accidentals = '♮';
    }
    pitch2String = letter2 + accidentals + octave;
    pitch2 = new Pitch(pitch2String);
    return pitch2;
}