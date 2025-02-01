/**Check if given chord is minor or major.

 Rules
 Basic minor/major chord have three elements.
 A chord is minor when the interval between first and second element = 3 and between second and third = 4
 A chord is major when the interval between first and second element = 4 and between second and third = 3
 In a minor/major chord the interval between first and third element is always = 7
 There is a preloaded list of the 12 notes of a chromatic scale built on C. This means that there are (almost)
 all allowed note' s names in music:

 ['C', ['C#', 'Db'], 'D', ['D#', 'Eb'], 'E', 'F', ['F#', 'Gb'], 'G', ['G#', 'Ab'], 'A', ['A#', 'Bb'], 'B']
 Note that e.g. 'C#' - 'C' = 1, 'C' - 'C#' = 1, 'Db' - 'C' = 1 and 'B' - 'C' = 1.

 Input: String of notes separated by whitespace, e. g. 'A C# E'

 Output: String message: 'Minor', 'Major' or 'Not a chord'
 */
function minorOrMajor(chord){
    let chords = ['C', ['C#', 'Db'], 'D', ['D#', 'Eb'], 'E', 'F', ['F#', 'Gb'], 'G', ['G#', 'Ab'], 'A', ['A#', 'Bb'], 'B']
    chord = chord.split(" ")
    let firstChord;
    let secondChord;
    let thirdChord;
    for(let i = 0 ;i<chord.length;i++){
        for(let j =0;j<chords.length ;j++){
            if(Array.isArray(chords[j])){
                if(chords[j].includes(chord[i])&& firstChord ===undefined){
                    firstChord = j
                    break
                }else if(chords[j].includes(chord[i])&& secondChord ===undefined){
                    secondChord = j
                    break
                }else if(chords[j].includes(chord[i])&& thirdChord===undefined){
                    thirdChord = j
                    break
                }else{
                    continue
                }
            }else if(chords.includes(chord[i])&& firstChord ===undefined ){
                firstChord = chords.indexOf(chord[i])
                break
            }else if(chords.includes(chord[i])&& secondChord ===undefined){
                secondChord = chords.indexOf(chord[i])
                break
            }else if(chords.includes(chord[i])&& thirdChord===undefined){
                thirdChord = chords.indexOf(chord[i])
                break
            }else{
                continue
            }
        }
    }if(secondChord - firstChord === 3 && thirdChord - secondChord === 4){
        return 'Minor'
    }else if(secondChord - firstChord === 4 && thirdChord - secondChord === 3){
        return 'Major'
    }else{return 'Not a chord'}
}console.log(minorOrMajor('C Eb G'))
console.log(minorOrMajor('F# A C#'))