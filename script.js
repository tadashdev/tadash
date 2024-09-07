document.getElementById("notifyBtn").addEventListener("click", function() {
    if ("Notification" in window) {
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                new Notification("Olá!", {
                    body: "Você ativou as notificações do nosso site!",
                    icon: "https://via.placeholder.com/128"
                });
            } else {
                alert("Permissão negada para notificações.");
            }
        });
    } else {
        alert("Este navegador não suporta notificações.");
    }
});
