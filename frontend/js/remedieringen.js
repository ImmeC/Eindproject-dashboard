function toonDetails(id) {

    const details =
        document.getElementById(
            `details-${id}`
        );

    if (details.style.display === "none") {

        details.style.display = "block";

    } else {

        details.style.display = "none";

    }
}

async function verwijderRemediering(id) {

    await fetch(
        `http://localhost:5000/remedieringen/${id}`,
        {
            method: "DELETE"
        }
    );

    laadRemedieringen();
}

async function laadRemedieringen() {

    const response =
        await fetch(
            "http://localhost:5000/remedieringen"
        );

    const data =
        await response.json();

    const lijst =
        document.getElementById(
            "remedieringenLijst"
        );

    lijst.innerHTML = "";

    data.forEach(remediering => {

        lijst.innerHTML += `
        
            <div class="file-item">

                <p>
                    <strong>
                        ${remediering.titel}
                    </strong>
                </p>

                <span>
                    ${remediering.vak}
                </span>

                <br>

                <span>
                    ${remediering.datum}
                </span>

                <br><br>

                <button
                    onclick="toonDetails('${remediering._id}')">

                    Details

                </button>

                <button
                    onclick="verwijderRemediering('${remediering._id}')">

                    Verwijderen

                </button>

                <div
                    id="details-${remediering._id}"
                    style="display:none; margin-top:10px;">

                    <p>

                        <strong>
                            Beschrijving:
                        </strong>

                    </p>

                    <p>
                        ${remediering.beschrijving}
                    </p>

                </div>

            </div>

        `;
    });
}

async function toevoegenRemediering() {

    const titel =
        document.getElementById("titel").value;

    const vak =
        document.getElementById("vak").value;

    const beschrijving =
        document.getElementById("beschrijving").value;

    const datum =
        document.getElementById("datum").value;

    await fetch(
        "http://localhost:5000/remedieringen",
        {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify({
                titel,
                vak,
                beschrijving,
                datum
            })
        }
    );

    document.getElementById("titel").value = "";
    document.getElementById("vak").value = "";
    document.getElementById("beschrijving").value = "";
    document.getElementById("datum").value = "";

    laadRemedieringen();
}

laadRemedieringen();