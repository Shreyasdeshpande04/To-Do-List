function startVoiceRecognition() {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';

    recognition.onresult = function(event) {
        const result = event.results[0][0].transcript;
        document.getElementById("task-name").value = result;
        addTask();
    };

    recognition.start();
}