// alert.js
export function showAlert() {
  // Create the overlay
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  overlay.style.zIndex = 9999;

  // Create the alert box
  const alertBox = document.createElement('div');
  alertBox.style.position = 'fixed';
  alertBox.style.top = '50%';
  alertBox.style.left = '50%';
  alertBox.style.transform = 'translate(-50%, -50%)';
  alertBox.style.width = '80%';
  alertBox.style.maxWidth = '400px';
  alertBox.style.padding = '20px';
  alertBox.style.backgroundColor = '#fff';
  alertBox.style.borderRadius = '10px';
  alertBox.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  alertBox.style.zIndex = 10000;
  alertBox.style.textAlign = 'left';

  // Create the alert content
  const alertContent = `
    <h2 style="margin-top: 0; font-size: 24px; color: #333;">Login Detail:</h2>
    <br>
    <p><strong>Normal User:</strong> Please register yourself and check the real user experience.</p>
    <br>
    <p><strong>Admin:</strong> </p>
    <p>Email: uditrsahani@gmail.com</p>
    <p>Password: 123456</p>
    <button id="YourButtonId" onclick="doFucntion()"  style="margin-top: 20px; padding: 10px 20px; background-color: #28a745; color: #fff; border: none; border-radius: 5px; cursor: pointer;">OK</button>
  `;

  alertBox.innerHTML = alertContent;

  // Append alert box to overlay
  overlay.appendChild(alertBox);

  // Append overlay to body
  document.body.appendChild(overlay);
  document.getElementById("YourButtonId").addEventListener("click", doFunction);

  // Add event listener to close button
  function doFunction() {
    console.log('clicked')
    overlay.removeChild(alertBox);
    };
  
  
  
}
