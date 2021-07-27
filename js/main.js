document.querySelector(".button-container").addEventListener("click", () => {
  let text = document.getElementById("filter-jobs").value;
  getJobs().then((jobs) => {
    let filterdJobs = filterJobs(jobs, text);
    // console.log(filterdJobs);
    showJobs(filterdJobs);
  });
});

function getJobs() {
  return fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

function filterJobs(jobs, searchText) {
  if (searchText) {
    let filterdJobs = jobs.filter((job) => {
      if (
        job.roleName.toLowerCase().includes(searchText) ||
        job.type.toLowerCase().includes(searchText) ||
        job.company.toLowerCase().includes(searchText) ||
        job.requirements.content.toLowerCase().includes(searchText)
      ) {
        return true;
      } else {
        return false;
      }
    });
    return filterdJobs;
  } else {
    return jobs;
  }
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
