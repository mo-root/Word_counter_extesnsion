var textAreas = document.getElementsByTagName('textarea');
for (var i = 0; i < textAreas.length; i++) {
    var textArea = textAreas[i];
    var counter = document.createElement('div');
    counter.innerHTML = "Word Count: 0";
    textArea.parentNode.insertBefore(counter, textArea.nextSibling);
    textArea.addEventListener('input', function() {
        var words = this.value.trim().split(/\s+/).length;
        counter.innerHTML = "Word Count: " + words;
    });
}
