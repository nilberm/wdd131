const params = new URLSearchParams(window.location.search);
const reviewCountOutput = document.getElementById("review-count");
const summaryOutput = document.getElementById("summary");

function escapeHtml(text) {
  const holder = document.createElement("div");
  holder.textContent = text;
  return holder.innerHTML;
}

function getProductName(productId) {
  const match = products.find((product) => product.id === productId);
  return match ? match.name : "Unknown product";
}

if (params.has("product")) {
  const previousCount = Number(localStorage.getItem("reviewCount")) || 0;
  const newCount = previousCount + 1;
  localStorage.setItem("reviewCount", newCount);

  const reviewWord = newCount === 1 ? "review" : "reviews";
  reviewCountOutput.textContent = `You have completed ${newCount} ${reviewWord} on this device.`;

  const features = params.getAll("features");
  const featureText = features.length > 0 ? features.join(", ") : "None selected";

  summaryOutput.innerHTML = `
    <dt>Product</dt>
    <dd>${escapeHtml(getProductName(params.get("product")))}</dd>
    <dt>Overall rating</dt>
    <dd>${escapeHtml(params.get("rating") || "")} out of 5</dd>
    <dt>Date of installation</dt>
    <dd>${escapeHtml(params.get("installdate") || "")}</dd>
    <dt>Useful features</dt>
    <dd>${escapeHtml(featureText)}</dd>
    <dt>Written review</dt>
    <dd>${escapeHtml(params.get("review") || "No written review")}</dd>
    <dt>Name</dt>
    <dd>${escapeHtml(params.get("username") || "Anonymous")}</dd>
  `;
} else {
  reviewCountOutput.textContent = "No review was submitted yet. Please fill out the review form.";
}
