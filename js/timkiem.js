function handleSearch(event) {
  event.preventDefault(); 
  const searchInput = document.querySelector("#search").value.trim().toLowerCase(); 

  
  if (searchInput === "iphone") {
    window.location.href = "IPHONE.html";
  } else if (searchInput === "realme") {
    window.location.href = "realme.html"; 
  } else if (searchInput === "samsung") {
    window.location.href = "SamSung.html"; 
  } else {
    alert("Không tìm thấy kết quả phù hợp!"); 
  }

  return false;
}