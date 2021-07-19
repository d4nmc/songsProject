`use strict`

// // heading

// let newHeading = document.createElement("h1");
// let headingText = document.createTextNode("Playlist");
// let playlistHeading = document.querySelector("#playListHeading");
// newHeading.apendChild(headingText);
// playlistHeading.appendChild(newHeading);

// CREATE

const SONGNAME = document.querySelector("#songName");
const ARTISTNAME = document.querySelector("#artistName");
const YEARRELEASED = document.querySelector("#yearReleased");
const SONGGENRE = document.querySelector("#songGenre");
const GOTBASS = document.querySelector("#gotBass");
const DIV = document.querySelector("#responsefromdb");
let submitBTN = document.querySelector("#subBTN");

// READ

let readBTN = document.querySelector("#readBTN");

// DELETE

const DELETEID = document.querySelector("#deleteID");
let deleteBTN = document.querySelector("#delBtn");

// UPDATE 

const UPSONGNAME = document.querySelector("#upsongName");
const UPARTISTNAME = document.querySelector("#upartistName");
const UPYEARRELEASED = document.querySelector("#upyearReleased");
const UPDIV = document.querySelector("#responsefromdb");
const UPDATEID = document.querySelector("#updateID");
let updateBTN = document.querySelector("#updateBTN");

// CREATE THE CUSTOM BIT
const printToScreen = (msg) => {
    const P = document.createElement("p");
    const TEXT = document.createTextNode(msg);

    P.appendChild(TEXT);
    DIV.appendChild(P);
}

// CREATE THE SONG METHOD F
const createSong = (e) => {
    e.preventDefault();

    const SONGNAME_VALUE = SONGNAME.value;
    const ARTISTNAME_VALUE = ARTISTNAME.value;
    const YEARRELEASED_VALUE = YEARRELEASED.value;
    const SONGGENRE_VALUE = SONGGENRE.value;
    const GOTBASS_VALUE = GOTBASS.value;
    console.log(SONGNAME_VALUE, ARTISTNAME_VALUE, YEARRELEASED_VALUE, SONGGENRE_VALUE, GOTBASS_VALUE)



    let data = {
        songName: SONGNAME_VALUE,
        artistName: ARTISTNAME_VALUE,
        yearReleased: YEARRELEASED_VALUE,
        songGenre: SONGGENRE_VALUE,
        gotBass: GOTBASS_VALUE
    }
    axios.post('http://localhost:9092/songs/create', data, {
        Headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
        .then((response) => printToScreen("Song Addded!"))
        .catch((error) => printToScreen(error));
}

// READ METHOD

const readSong = (e) => {
    e.preventDefault();
    axios.get('http://localhost:9092/songs/read/', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
        .then((response) => {

            for (let entry in response.data) {

                printToScreen(JSON.stringify(response.data[entry].songName));

            }
        })

        .catch((error) => printToScreen("Something has went wrong, try again"));
}

// UPDATE METHOD

const updateSong = (b) => {
    b.preventDefault();

    const SONGNAME_VALUE = UPSONGNAME.value;
    const ARTISTNAME_VALUE = UPARTISTNAME.value;
    const UPYEARRELEASED_VALUE = UPYEARRELEASED.value;
    const SONGGENRE_VALUE = UPSONGGENRE.value;
    const GOTBASS_VALUE = UPGOTBASS.VALUE;
    const UPDATEID_VALUE = Number(UPDATEID.value);

    console.log(SONGNAME_VALUE, ARTISTNAME_VALUE, YEARRELEASED_VALUE, SONGGENRE_VALUE, GOTBASS_VALUE, UPDATEID_VALUE);

    let data = {
        songName: SONGNAME_VALUE,
        artistName: ARTISTNAME_VALUE,
        yearReleased: YEARRELEASED_VALUE,
        songGenre: SONGGENRE_VALUE,
        gotBass: GOTBASS_VALUE
    }


    axios.put('http://localhost:9092/songs/replace/${UPDATEID_VALUE}', data, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    })
        .then((response) => printToScreen("Song details have been changed"))
        .catch((error) => printToScreen("Something has went wrong, try again"));

}

// delete the song method


const deleteSong = () => {


    const DELID = Number(DELETEID.value);

    axios.delete('http://localhost:9092/songs/delete/${DELID}', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
        .then((response) => printToScreen("The chosen song has been deleted"))
        .catch((error) => printToScreen("Something went wrong there, try again"));
}

submitBTN.addEventListener('click', createSong);
readBTN.addEventListener('click', readSong);
updateBTN.addEventListener('click', updateSong);
deleteBTN.addEventListener('click', deleteSong);