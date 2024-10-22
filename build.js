const letterSelect = document.getElementById('letter');
const accidentalSelect = document.getElementById('accidental');
const octaveSelect = document.getElementById('octave');
const pitchSetIntervalsSelect = document.getElementById('pitch_set_intervals');
const buildButton = document.getElementById('build');
const outputTextArea = document.getElementById('output');

const buildPitchString = function(pitch, intervals) {
	let str = '';
	intervals.split(' ').forEach(value => {
		p = transposePitch(pitch, new Interval(value));
		str += p.string + ' ';
	});
	return str.trim();
}

const populateSelectPitchSetIntervals = function([key, value]){
	let optionText = key;
	optionText = optionText.replaceAll('_', ' ');
	optionText = optionText[0].toUpperCase() + optionText.slice(1);
	if ( key === 'major_scale' ) {
		html = '<option value="' + key + '" selected="selected">' + optionText + '</option>';
	} else {
		html = '<option value="' + key + '">' + optionText + '</option>';
	}
	pitchSetIntervalsSelect.insertAdjacentHTML("beforeend", html);
};

const buildPitchSet = function() {
	let html = '';
	let pitchString = letterSelect.value + accidentalSelect.value + octaveSelect.value;
	let intervalString = Object.values(PitchSetIntervals[pitchSetIntervalsSelect.value]).join(' ');
	html += pitchString;
	html += ' ' + "\n";
	html += pitchSetIntervalsSelect.value;
	html += ' (';
	html += intervalString;
	html += ') ' + "\n";
	html += buildPitchString(new Pitch(pitchString), intervalString);
	outputTextArea.innerHTML = html;
};

Object.entries(PitchSetIntervals).forEach(populateSelectPitchSetIntervals);

buildButton.addEventListener('click', buildPitchSet);
