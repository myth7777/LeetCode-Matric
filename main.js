document.addEventListener("DOMContentLoaded", function(){
    const searchButton = document.getElementById("login-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.querySelector("#easy-label");
    const mediumLabel = document.querySelector("#medium-label");
    const hardLabel = document.querySelector("#hard-label");
    const cardStatsContainer = document.querySelector(".stats-card");

    function validateUsername(username){
        if(username.trim() === ""){
            alert("Username should not be empty!");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{3,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching)
            alert("Invalid Username");
        return isMatching;
    }

    async function fetchUserDetails(username) {
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
        try{
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Unable to fetch the user details!");
            }
            const parsedData = await response.json();
            console.log("Logging data: ", parsedData);

            if (parsedData.status === "success" && parsedData.totalSolved === 0) {
                statsContainer.innerHTML = "<p>No Data Found! The user might not exist or has no activity.</p>";
                return;
            }
            displayUserData(parsedData);
        }
        catch(error){
            console.error("Error fetching data:", error);
            statsContainer.innerHTML = "<p>Error: Unable to fetch data. Please try again later.</p>";
        }
        finally{
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }


    function updateProgress(solved, total, label, circle){
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }

    function displayUserData(parsedData){
        const totalQues = parsedData.totalQuestions;
        const totalHardQues = parsedData.totalHard;
        const totalMediumQues = parsedData.totalMedium;
        const totalEasyQues = parsedData.totalEasy;

        const solvedTotalQues = parsedData.totalSolved;
        const solvedHardTotal = parsedData.hardSolved;
        const solvedMediumTotal = parsedData.mediumSolved;
        const solvedEasyTotal = parsedData.easySolved;

        updateProgress(solvedEasyTotal, totalEasyQues, easyLabel, easyProgressCircle);
        updateProgress(solvedMediumTotal, totalMediumQues, mediumLabel, mediumProgressCircle);
        updateProgress(solvedHardTotal, totalHardQues, hardLabel, hardProgressCircle);

        const cardsData = [
            {label: "Total Questions Solved", value: (solvedTotalQues+" / "+totalQues)}, 
            {label: "Ranking", value: parsedData.ranking}, 
            {label: "Acceptance Rate", value: parsedData.acceptanceRate},
            {label: "Contribution Points", value: parsedData.contributionPoints}
        ];
        console.log("card ka data: ", cardsData);

        cardStatsContainer.innerHTML = cardsData.map(
            data =>{
                return `
                    <div class="card">
                        <h3>${data.label}</h3>
                        <p>${data.value}</p>
                    </div>
                `
            }
        ).join("");
    }

    searchButton.addEventListener("click", function(){
        const username = usernameInput.value;
        console.log("Loggin username: ", username);
        if(validateUsername(username)){
            fetchUserDetails(username);
        }
    });
});