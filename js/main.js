document.querySelector(".button-container").addEventListener("click", () => {
  let text = document.getElementById("filter-jobs").value;
  console.log(text);
});

function getJobs() {
  return fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

function showJobs(jobs) {
  console.log(jobs);
  let jobsContainer = document.querySelector(".jobs-container");
  let jobsHTML = "";
  jobs.forEach((job) => {
    console.log(job.logo);

    jobsHTML += `
    <div class="job-tile">
    <div class="top">
      <img
        src="${job.logo}"
        alt=""
      />
      <span class="material-icons more_horiz">
        <i class="fas fa-ellipsis-h"></i>
      </span>
    </div>
    <div class="rolename">
      <span>${job.roleName}</span>
    </div>
    <div class="description">
      <span
        >${job.requirements.content}</span
      >
    </div>
    <div class="buttons">
      <div class="button apply-now">Apply Now</div>
      <div class="button">Message</div>
    </div>
  </div>
    `;
  });

  console.log(jobsHTML);

  jobsContainer.innerHTML = jobsHTML;
}

getJobs().then((data) => {
  showJobs(data);
});
