// - creare una lista di cose da fare e mostrarla in pagina con Vue;
// - aggiungere un campo di input e un pulsante per aggiungere nuove cose da fare alla lista;
// - cancellare un item dalla lista, al click sulla relativa icona 'X'.
// - Oltre al click sul pulsante, consentire l'inserimento del nuovo item anche premendo il tasto Invio della tastiera, dopo aver scritto il testo nel campo di input.

var app = new Vue({

  el: '#root',

  data: {
    toDoList: [
      "Fare la spesa",
      "Studiare",
      "Preparare il pranzo",
      "Completare l'esercitazione"
    ],
    newToDo: "",
    alertMessage: "",
    isHovering: false
  },

  methods: {
    addNew: function() {
      if (this.newToDo != "") {
      this.toDoList.push(this.newToDo),
      this.newToDo = "",
      this.alertMessage = ""
    } else this.alertMessage = "Inserisci un'attività valida!"
    },
    deleteX: function(index) {
      this.toDoList.splice(index, 1)
    },
  }

});
