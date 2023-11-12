const toggle = document.getElementById('checkbox');
const planMontly = document.getElementById('planMonthly');
const planYearly = document.getElementById('planYearly');

function swap() {
  if (toggle.checked) {
    planMonthly.dataset.status = "inactive";
    planYearly.dataset.status = "active";
  } else {
    planMonthly.dataset.status = "active";
    planYearly.dataset.status = "inactive";
  }
}

toggle.addEventListener('click', swap)