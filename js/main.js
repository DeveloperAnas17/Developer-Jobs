document.querySelector(".button-container").addEventListener("click", () => {
  let text = document.getElementById("filter-jobs").value;
  console.log(text);
});

function getJobs() {
 return fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

function showJobs(jobs) {

}


getJobs().then(data =>) {
    showJobs(jobs)
}
