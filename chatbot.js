const sendButton = document.getElementById("send-button");
const userInput = document.getElementById("user-input");

sendButton.addEventListener("click", async function() {
    const userQuestion = userInput.value.trim();

    if (userQuestion) {
        try {
            const response = await fetch('http://localhost:5000/receive-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: userQuestion }),
            });

            if (response.ok) {
                const doctorResponse = await response.json();
                console.log('Response from backend:', doctorResponse.result);

              // Handling Response from Backend
                const chatbox = document.querySelector(".chatbox");

                const newMessageUser = document.createElement("div");
                newMessageUser.classList.add("user-message");
                newMessageUser.textContent = userQuestion;
                chatbox.appendChild(newMessageUser);

                const newMessageDoctor = document.createElement("div");
                newMessageDoctor.classList.add("doctor-message");

                // Replace newline characters (\n) with HTML line break tags (<br>)
                doctorResponse.result = doctorResponse.result.replace(/\n/g, '<br>');

                newMessageDoctor.innerHTML = doctorResponse.result;
                chatbox.appendChild(newMessageDoctor);

                userInput.value = "";

            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
});
