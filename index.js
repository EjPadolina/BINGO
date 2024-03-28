    let B = false,
        I = false,
        N = false,
        G = false,
        O = false;

    let BNumber, INumber, NNumber, GNumber, ONumber;

    let B1 = 0,
        B2 = 0,
        B3 = 0,
        B4 = 0,
        B5 = 0;

    let I1 = 0,
        I2 = 0,
        I3 = 0,
        I4 = 0,
        I5 = 0;

    let N1 = 0,
        N2 = 0,
        N3 = 0,
        N4 = 0,
        N5 = 0;

    let G1 = 0,
        G2 = 0,
        G3 = 0,
        G4 = 0,
        G5 = 0;

    let O1 = 0,
        O2 = 0,
        O3 = 0,
        O4 = 0,
        O5 = 0;

    function newNumber1(maxNumber) {
        let x = Math.floor(Math.random() * maxNumber) + 1;

        if (x <= 15) {
            if (x != B2 && x != B3 && x != B4 && x != B5) {
                console.log(`New number is ${x} belongs to "B"`);
                B = true;
                document.querySelector("#td1").textContent = x;
                BNumber = x;
                B1 = x;
            }
        } else if (x >= 16 && x <= 30) {
            if (x != I2 && x != I3 && x != I4 && x != I5) {
                console.log(`New number is ${x} belongs to "I"`);
                I = true;
                document.querySelector("#td2").textContent = x;
                INumber = x;
                I1 = x;
            }
        } else if (x >= 31 && x <= 45) {
            if (x != N2 && x != N3 && x != N4 && x != N5) {
                console.log(`New number is ${x} belongs to "N"`);
                N = true;
                document.querySelector("#td3").textContent = x;
                NNumber = x;
                N1 = x;
            }
        } else if (x >= 46 && x <= 60) {
            if (x != G2 && x != G3 && x != G4 && x != G5) {
                console.log(`New number is ${x} belongs to "G"`);
                G = true;
                document.querySelector("#td4").textContent = x;
                GNumber = x;
                G1 = x;
            }
        } else if (x >= 61 && x <= 75) {
            if (x != O2 && x != O3 && x != O4 && x != O5) {
                console.log(`New number is ${x} belongs to "O"`);
                O = true;
                document.querySelector("#td5").textContent = x;
                ONumber = x;
                O1 = x;
            }
        } else {
            console.log(`New number ${x} is invalid.`);
        }

        if (B && I && N && G && O) {
            console.log('BINGOOOOOOO!!!!');
            console.table({
                B: BNumber,
                I: INumber,
                N: NNumber,
                G: GNumber,
                O: ONumber,
            });
        }
    }

    function newNumber2(maxNumber) {
        let x = Math.floor(Math.random() * maxNumber) + 1;

        if (x <= 15) {
            if (x != B1 && x != B3 && x != B4 && x != B5) {
                console.log(`New number is ${x} belongs to "B"`);
                B = true;
                document.querySelector("#td6").textContent = x;
                BNumber = x;
                B2 = x;
            }
        } else if (x >= 16 && x <= 30) {
            if (x != I1 && x != I3 && x != I4 && x != I5) {
                console.log(`New number is ${x} belongs to "I"`);
                I = true;
                document.querySelector("#td7").textContent = x;
                INumber = x;
                I2 = x;
            }
        } else if (x >= 31 && x <= 45) {
            if (x != N1 && x != N3 && x != N4 && x != N5) {
                console.log(`New number is ${x} belongs to "N"`);
                N = true;
                document.querySelector("#td8").textContent = x;
                NNumber = x;
                N2 = x;
            }
        } else if (x >= 46 && x <= 60) {
            if (x != G1 && x != G3 && x != G4 && x != G5) {
                console.log(`New number is ${x} belongs to "G"`);
                G = true;
                document.querySelector("#td9").textContent = x;
                GNumber = x;
                G2 = x;
            }
        } else if (x >= 61 && x <= 75) {
            if (x != O1 && x != O3 && x != O4 && x != O5) {
                console.log(`New number is ${x} belongs to "O"`);
                O = true;
                document.querySelector("#td10").textContent = x;
                ONumber = x;
                O2 = x;
            }
        } else {
            console.log(`New number ${x} is invalid.`);
        }

        if (B && I && N && G && O) {
            console.log('BINGOOOOOOO!!!!');
            console.table({
                B: BNumber,
                I: INumber,
                N: NNumber,
                G: GNumber,
                O: ONumber,
            });
        }
    }

    function newNumber3(maxNumber) {
        let x = Math.floor(Math.random() * maxNumber) + 1;

        if (x <= 15) {
            if (x != B1 && x != B2 && x != B4 && x != B5) {
                console.log(`New number is ${x} belongs to "B"`);
                B = true;
                document.querySelector("#td11").textContent = x;
                BNumber = x;
                B3 = x;
            }
        } else if (x >= 16 && x <= 30) {
            if (x != I1 && x != I2 && x != I4 && x != I5) {
                console.log(`New number is ${x} belongs to "I"`);
                I = true;
                document.querySelector("#td12").textContent = x;
                INumber = x;
                I3 = x;
            }
        } else if (x >= 31 && x <= 45) {
            if (x != N1 && x != N2 && x != N4 && x != N5) {
                console.log(`New number is ${x} belongs to "N"`);
                N = true;
                document.querySelector("#td13").textContent = x;
                NNumber = x;
                N3 = x;
            }
        } else if (x >= 46 && x <= 60) {
            if (x != G1 && x != G2 && x != G4 && x != G5) {
                console.log(`New number is ${x} belongs to "G"`);
                G = true;
                document.querySelector("#td14").textContent = x;
                GNumber = x;
                G3 = x;
            }
        } else if (x >= 61 && x <= 75) {
            if (x != O1 && x != O2 && x != O4 && x != O5) {
                console.log(`New number is ${x} belongs to "O"`);
                O = true;
                document.querySelector("#td15").textContent = x;
                ONumber = x;
                O3 = x;
            }
        } else {
            console.log(`New number ${x} is invalid.`);
        }

        if (B && I && N && G && O) {
            console.log('BINGOOOOOOO!!!!');
            console.table({
                B: BNumber,
                I: INumber,
                N: NNumber,
                G: GNumber,
                O: ONumber,
            });
        }
    }

    function newNumber4(maxNumber) {
        let x = Math.floor(Math.random() * maxNumber) + 1;

        if (x <= 15) {
            if (x != B1 && x != B2 && x != B3 && x != B5) {
                console.log(`New number is ${x} belongs to "B"`);
                B = true;
                document.querySelector("#td16").textContent = x;
                BNumber = x;
                B4 = x;
            }
        } else if (x >= 16 && x <= 30) {
            if (x != I1 && x != I2 && x != I3 && x != I5) {
                console.log(`New number is ${x} belongs to "I"`);
                I = true;
                document.querySelector("#td17").textContent = x;
                INumber = x;
                I4 = x;
            }
        } else if (x >= 31 && x <= 45) {
            if (x != N1 && x != N2 && x != N3 && x != N5) {
                console.log(`New number is ${x} belongs to "N"`);
                N = true;
                document.querySelector("#td18").textContent = x;
                NNumber = x;
                N4 = x;
            }
        } else if (x >= 46 && x <= 60) {
            if (x != G1 && x != G2 && x != G3 && x != G5) {
                console.log(`New number is ${x} belongs to "G"`);
                G = true;
                document.querySelector("#td19").textContent = x;
                GNumber = x;
                G4 = x;
            }
        } else if (x >= 61 && x <= 75) {
            if (x != O1 && x != O2 && x != O3 && x != O5) {
                console.log(`New number is ${x} belongs to "O"`);
                O = true;
                document.querySelector("#td20").textContent = x;
                ONumber = x;
                O4 = x;
            }
        } else {
            console.log(`New number ${x} is invalid.`);
        }

        if (B && I && N && G && O) {
            console.log('BINGOOOOOOO!!!!');
            console.table({
                B: BNumber,
                I: INumber,
                N: NNumber,
                G: GNumber,
                O: ONumber,
            });
        }
    }

    function newNumber5(maxNumber) {
        let x = Math.floor(Math.random() * maxNumber) + 1;

        if (x <= 15) {
            if (x != B1 && x != B2 && x != B3 && x != B4) {
                console.log(`New number is ${x} belongs to "B"`);
                B = true;
                document.querySelector("#td21").textContent = x;
                BNumber = x;
                B5 = x;
            }
        } else if (x >= 16 && x <= 30) {
            if (x != I1 && x != I2 && x != I3 && x != I4) {
                console.log(`New number is ${x} belongs to "I"`);
                I = true;
                document.querySelector("#td22").textContent = x;
                INumber = x;
                I5 = x;
            }
        } else if (x >= 31 && x <= 45) {
            if (x != N1 && x != N2 && x != N3 && x != N4) {
                console.log(`New number is ${x} belongs to "N"`);
                N = true;
                document.querySelector("#td23").textContent = x;
                NNumber = x;
                N5 = x;
            }
        } else if (x >= 46 && x <= 60) {
            if (x != G1 && x != G2 && x != G3 && x != G4) {
                console.log(`New number is ${x} belongs to "G"`);
                G = true;
                document.querySelector("#td24").textContent = x;
                GNumber = x;
                G5 = x;
            }
        } else if (x >= 61 && x <= 75) {
            if (x != O1 && x != O2 && x != O3 && x != O4) {
                console.log(`New number is ${x} belongs to "O"`);
                O = true;
                document.querySelector("#td25").textContent = x;
                ONumber = x;
                O5 = x;
            }
        } else {
            console.log(`New number ${x} is invalid.`);
        }

        if (B && I && N && G && O) {
            console.log('BINGOOOOOOO!!!!');
            console.table({
                B: BNumber,
                I: INumber,
                N: NNumber,
                G: GNumber,
                O: ONumber,
            });
        }
    }

    let counter = 5;
    while (!B || !I || !N || !G || !O) {
        newNumber1(75);
    }
    B = false;
    I = false;
    N = false;
    G = false;
    O = false;
    while (!B || !I || !N || !G || !O) {
        newNumber2(75);
    }
    B = false;
    I = false;
    N = false;
    G = false;
    O = false;
    while (!B || !I || !N || !G || !O) {
        newNumber3(75);
    }
    B = false;
    I = false;
    N = false;
    G = false;
    O = false;
    while (!B || !I || !N || !G || !O) {
        newNumber4(75);
    }
    B = false;
    I = false;
    N = false;
    G = false;
    O = false;
    while (!B || !I || !N || !G || !O) {
        newNumber5(75);
    }
    document.addEventListener("DOMContentLoaded", function() {
        newNumber1(75);
        newNumber2(75);
        newNumber3(75);
        newNumber4(75);
        newNumber5(75);

    });
