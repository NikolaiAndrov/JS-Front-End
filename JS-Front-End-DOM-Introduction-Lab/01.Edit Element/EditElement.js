function editElement(ref, textToReplace, replacer) {
   let content = ref.textContent;
   let editedContent = content.replace(new RegExp(textToReplace, 'g'), replacer);
   ref.textContent = editedContent;
}