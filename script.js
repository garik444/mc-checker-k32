function checkMC() {
  const mcInput = document.getElementById("mcInput").value;
  const resultBox = document.getElementById("resultBox");
  const mcNumber = document.getElementById("mcNumber");
  const truckCount = document.getElementById("truckCount");
  const driverCount = document.getElementById("driverCount");
  const inspectionCount = document.getElementById("inspectionCount");

  if (!/^\d{6}$/.test(mcInput)) {
    alert("Please enter a valid 6-digit MC number.");
    return;
  }

  const trucks = Math.floor(Math.random() * 50) + 1;
  const drivers = Math.floor(Math.random() * (trucks + 1)); // ≤ trucks
  const inspections = Math.floor(Math.random() * 20) + 1;

  mcNumber.textContent = mcInput;
  truckCount.textContent = trucks;
  driverCount.textContent = drivers;
  inspectionCount.textContent = inspections;

  resultBox.classList.remove("hidden");
}
