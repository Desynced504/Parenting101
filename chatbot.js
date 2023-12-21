const userInput = document.getElementById("user-input");
const sendMessageButton = document.getElementById("send-button");

sendMessageButton.addEventListener("click", function() {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    // Add logic here to process user message (e.g., check keywords, generate response)
    // Here's a simple example
    const doctorMessage = "That's an interesting question! Remember, every child is unique and specific situations require professional guidance. " +
      "However, you could try... (insert general advice related to a common topic)";
    // Update the chatbox with the new messages
    const chatbox = document.querySelector(".chatbox");
    const newMessageUser = document.createElement("div");
    newMessageUser.classList.add("user-message");
    newMessageUser.textContent = userMessage;
    chatbox.appendChild(newMessageUser);
    const newMessageDoctor = document.createElement("div");
    newMessageDoctor.classList.add("doctor-message");
    newMessageDoctor.textContent = doctorMessage;
    chatbox.appendChild(newMessageDoctor);
    userInput.value = "";
  }
});
