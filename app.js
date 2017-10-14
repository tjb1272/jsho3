/*establish family inheritance from grandparent to child */
class grandparent {
    constructor(hairColor, eyeColor){
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        }
        vertical(){
        }
    }
    class parent extends grandparent {
        vertical(){
        }
    }
    class child extends parent {
        vertical(){
        }
    } 

    let grandma = new grandparent;
    let mother = new parent;
    let daughter = new child;

/*create array with loop to insert each family members attributes */

    function granny(...vertical) {
        for (let value of vertical) {
            console.log('Grandma June has '+vertical[0]+' hair and '+vertical[1]+' eyes. She can also jump '+vertical[2]+' inches high.');
        }
    }
        granny('Grey', 'Brown', 12);
    function mom(...vertical) {
        for (let value of vertical) {
            console.log('Mother Mary has '+vertical[0]+' hair and '+vertical[1]+' eyes. She can also jump '+vertical[2]+' inches high.');
        }
    }
        mom('Brown', 'Green', 23);
    function girl(...vertical) {
        for (let value of vertical) {
            console.log('Daughter Georgia has '+vertical[0]+' hair and '+vertical[1]+' eyes. She can also jump '+vertical[2]+' inches high.');
        }
    }
        girl('Red', 'Hazel', 19);



