// ✅ LOGIN FUNCTION
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("loginMessage").textContent = "✅ Login Successful!";
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1200); // Wait 1.2 sec before redirect
  });
}

// ✅ DONOR REGISTRATION FUNCTION
const donorForm = document.getElementById("donorForm");
const donorList = document.getElementById("donorList");
let donors = [];

if (donorForm) {
  donorForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let donor = {
      name: document.getElementById("donorName").value,
      blood: document.getElementById("donorBlood").value,
      email: document.getElementById("donorEmail").value,
      phone: document.getElementById("donorPhone").value,
      district: document.getElementById("donorDistrict").value,
    };

    donors.push(donor);
    displayDonors();
    document.getElementById("registerMessage").textContent = "✅ Donor Registered Successfully!";
    donorForm.reset();
  });
}

// ✅ DISPLAY DONORS
function displayDonors(filteredList = donors) {
  donorList.innerHTML = "";
  filteredList.forEach((donor) => {
    let li = document.createElement("li");
    li.textContent = `${donor.name} | ${donor.blood} | ${donor.email} | ${donor.phone} | ${donor.district}`;
    donorList.appendChild(li);
  });
}

// ✅ SEARCH DONOR
function searchDonor() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = donors.filter(donor =>
    donor.name.toLowerCase().includes(query) ||
    donor.blood.toLowerCase().includes(query) ||
    donor.district.toLowerCase().includes(query)
  );

  if (filtered.length > 0) {
    displayDonors(filtered);
    document.getElementById("searchMessage").textContent = `✅ Found ${filtered.length} donor(s).`;
  } else {
    donorList.innerHTML = "";
    document.getElementById("searchMessage").textContent = "❌ No donors found!";
  }
}
