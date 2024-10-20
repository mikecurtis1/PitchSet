/*
console.log(expressOrdinal(-1));
console.log(expressOrdinal(0));
console.log(expressOrdinal(1));
console.log(expressOrdinal(2));
console.log(expressOrdinal(3));
console.log(expressOrdinal(4));
console.log(expressOrdinal(9));
console.log(expressOrdinal(10));
console.log(expressOrdinal(11));
console.log(expressOrdinal(12));
console.log(expressOrdinal(13));
console.log(expressOrdinal(14));
console.log(expressOrdinal(20));
console.log(expressOrdinal(21));
console.log(expressOrdinal(22));
console.log(expressOrdinal(23));
console.log(expressOrdinal(24));
console.log(expressOrdinal(25));
console.log(expressOrdinal(120));
console.log(expressOrdinal(121));
console.log(expressOrdinal(122));
console.log(expressOrdinal(123));
console.log(expressOrdinal(124));
console.log(expressOrdinal(125));
console.log(expressOrdinal(1, true));
console.log(expressOrdinal(2, true));
console.log(expressOrdinal(3, true));
console.log(expressOrdinal(14, true));
console.log(expressOrdinal(15, true));
console.log(expressOrdinal(16, true));
*/

/*console.log(normalizeDoubleAccidental('𝄫'));
console.log(normalizeDoubleAccidental('♭♭♭'));
console.log(normalizeDoubleAccidental('♭♭'));
console.log(normalizeDoubleAccidental('♭'));
console.log(normalizeDoubleAccidental(5));
console.log(normalizeDoubleAccidental('foo'));
console.log(normalizeDoubleAccidental('♯'));
console.log(normalizeDoubleAccidental('♯♯'));
console.log(normalizeDoubleAccidental('♯♯♯'));
console.log(normalizeDoubleAccidental('𝄪'));*/

/*
console.log(expressTuple('foo'));
console.log(expressTuple('oo'));
console.log(expressTuple('o'));
console.log(expressTuple('♭'));
console.log(expressTuple('♭♭'));
console.log(expressTuple('𝄫'));
console.log(expressTuple('𝄫𝄫'));
console.log(expressTuple('♭♭♭♭♭♭'));
console.log(expressTuple('♯'));
console.log(expressTuple('♯♯'));
console.log(expressTuple('𝄪'));
console.log(expressTuple('𝄪𝄪'));
console.log(expressTuple('♯♯♯♯♯♯♯'));
*/

//let pitch = new Pitch('C♯4');
/*console.log('============');
pitch = new Pitch('A0');
pos = calcPitchPosChromatic(pitch.letter, pitch.octave, pitch.halfStepAlterations);
pitch.chromaticPos = pos;
pitch.pianoKey = expressPianoKey(pos);
pitch.midiNumber = expressMidiNumber(pos);
console.log(pitch);
console.log('============');
pitch = new Pitch('C4');
pos = calcPitchPosChromatic(pitch.letter, pitch.octave, pitch.halfStepAlterations);
pitch.chromaticPos = pos;
pitch.pianoKey = expressPianoKey(pos);
pitch.midiNumber = expressMidiNumber(pos);
console.log(pitch);
console.log('============');
pitch = new Pitch('C♯4');
pos = calcPitchPosChromatic(pitch.letter, pitch.octave, pitch.halfStepAlterations);
pitch.chromaticPos = pos;
pitch.pianoKey = expressPianoKey(pos);
pitch.midiNumber = expressMidiNumber(pos);
console.log(pitch);
console.log('============');
pitch = new Pitch('C♭♭♭4');
pos = calcPitchPosChromatic(pitch.letter, pitch.octave, pitch.halfStepAlterations);
pitch.chromaticPos = pos;
pitch.pianoKey = expressPianoKey(pos);
pitch.midiNumber = expressMidiNumber(pos);
console.log(pitch);*/

/*
// ♯ ♭
const Pitch1 = new Pitch('C♯♯2');
const Pitch2 = new Pitch('D♭♭2');
//const Pitch1 = new Pitch('C2');
//const Pitch2 = new Pitch('G♭2');
//const Pitch1 = new Pitch('C2');
//const Pitch2 = new Pitch('D5');
//const Pitch1 = new Pitch('C♭♭2');
//const Pitch2 = new Pitch('D♯♯5');
//const Pitch1 = new Pitch('C♭♭2');
//const Pitch2 = new Pitch('D♯♯2');
//const Pitch1 = new Pitch('C♯♯2');
//const Pitch2 = new Pitch('D♭♭2');
//const Pitch1 = new Pitch('C2');
//const Pitch2 = new Pitch('B4');
//const Pitch1 = new Pitch('C2');
//const Pitch2 = new Pitch('F♯5');
//const Pitch1 = new Pitch('C𝄫2');
//const Pitch2 = new Pitch('F♯♯♯2');

console.log('====================');
console.log(Pitch1);
console.log(Pitch2);
console.log('====================');
console.log(Pitch1.string);
console.log(Pitch2.string);
console.log('====================');
console.log('Interval class: ' + calcIntervalClass(Pitch1, Pitch2));
console.log('Interval size in half steps: ' + calcHalfStepsFromPitches(Pitch1, Pitch2));
console.log('Interval size in half steps: ' + calcHalfStepsFromPitches(Pitch2, Pitch1));
console.log(buildIntervalName(Pitch2, Pitch1));

console.log(new Interval('dddd2'));
console.log(new Interval('ddd2'));

console.log('15:' + normalizeCompoundClass(15));
console.log('16:' + normalizeCompoundClass(16));
console.log('18:' + normalizeCompoundClass(18));
console.log('21:' + normalizeCompoundClass(21));
console.log('22:' + normalizeCompoundClass(22));
console.log('23:' + normalizeCompoundClass(23));
console.log('25:' + normalizeCompoundClass(25));
console.log('28:' + normalizeCompoundClass(28));
console.log('1:' + normalizeCompoundClass(1));
console.log('4:' + normalizeCompoundClass(4));
console.log('7:' + normalizeCompoundClass(7));
console.log('8:' + normalizeCompoundClass(8));
console.log('9:' + normalizeCompoundClass(9));
console.log('14:' + normalizeCompoundClass(14));
console.log('15:' + normalizeCompoundClass(15));
console.log('16:' + normalizeCompoundClass(16));
console.log('21:' + normalizeCompoundClass(21));
console.log('22:' + normalizeCompoundClass(22));

console.log(new Interval('A11'));

console.log(GamutOrder['F']);
console.log(GamutOrder[GamutOrder['F']]);
console.log(GamutOrder[GamutOrder['F']+2]);
let letter1 = 'D';
let steps = 4;
let start = Number(GamutOrder[letter1]);
let end = Number(start + steps);
let letter2 = GamutOrder[end];
console.log(end);
console.log('Letter1:'+letter1+', ascend:'+steps+', to letter2:'+letter2);
*/

/*
const testPitch = new Pitch('C4');

console.log(testPitch);

console.log(calcPitchPos(testPitch.letter, testPitch.octave));

console.log(calcPosOctave(29));

console.log(calcPosLetter(29));

console.log(calcPosOrder(29));

console.log(new Interval('ddd2'));
console.log(buildIntervalName(new Pitch('C♯♯2'), new Pitch('D♭♭2')));
console.log(buildIntervalName(new Pitch('B3'), new Pitch('C♭♭♭4')));

console.log(new Interval('d5'));
console.log(buildIntervalName(new Pitch('B3'), new Pitch('F4')));
console.log(buildIntervalName(new Pitch('C4'), new Pitch('G♭4')));

console.log(new Interval('AAA2'));
console.log(buildIntervalName(new Pitch('C♭4'), new Pitch('D♯♯4')));
console.log(buildIntervalName(new Pitch('C4'), new Pitch('D♯♯♯4')));
console.log(buildIntervalName(new Pitch('B3'), new Pitch('C♯♯♯♯4')));

console.log(new Interval('M3'));
console.log(buildIntervalName(new Pitch('B♭3'), new Pitch('D4')));
console.log(buildIntervalName(new Pitch('D4'), new Pitch('F♯4')));
console.log(buildIntervalName(new Pitch('C4'), new Pitch('E4')));

console.log(new Interval('P5'));
console.log(buildIntervalName(new Pitch('B♭3'), new Pitch('F4')));
console.log(buildIntervalName(new Pitch('B♮3'), new Pitch('F♯4')));
console.log(buildIntervalName(new Pitch('C4'), new Pitch('G4')));

*/

// ♯ ♭

console.log('==================================================');
console.log(new Pitch('C♭4'));
console.log(new Interval('m2'));
console.log(transposePitch(new Pitch('C♭4'), new Interval('m2')));

console.log('==================================================');
console.log(new Pitch('C4'));
console.log(new Interval('m3'));
console.log(transposePitch(new Pitch('C4'), new Interval('m3')));

console.log('==================================================');
console.log(new Pitch('C4'));
console.log(new Interval('A4'));
console.log(transposePitch(new Pitch('C4'), new Interval('A4')));

console.log('==================================================');
console.log(new Pitch('C4'));
console.log(new Interval('A6'));
console.log(transposePitch(new Pitch('C4'), new Interval('A6')));

console.log('==================================================');
console.log(new Pitch('C4'));
console.log(new Interval('m21'));
console.log(transposePitch(new Pitch('C4'), new Interval('m21')));

/*console.log('==================================================');
console.log(new Pitch('C𝄫2'));
console.log('==================================================');
console.log(new Pitch('C𝄫𝄫2'));

console.log('==================================================');
console.log(new Pitch('E𝄫𝄫4'));
console.log(new Interval('P4'));
console.log(transposePitch(new Pitch('E𝄫𝄫4'), new Interval('P4')));

console.log('==================================================');
console.log(new Pitch('E♭p♭4'));
console.log(new Interval('P4'));
console.log(transposePitch(new Pitch('E♭p♭4'), new Interval('P4')));

console.log('==================================================');
console.log(new Pitch('E♭♯4'));
console.log(new Interval('P4'));
console.log(transposePitch(new Pitch('E♭♯4'), new Interval('P4')));

console.log('==================================================');
console.log(new Pitch('E♭4'));
console.log(new Interval('Pc4'));
console.log(transposePitch(new Pitch('E♭4'), new Interval('Pc4')));*/

//console.log(calcHalfStepsFromCodes('7', '14', 'm'));
//console.log(calcHalfStepsFromCodes('7', '14', 'm', true));