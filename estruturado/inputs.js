module.exports = document.getElementById('emailForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const recipient = document.getElementById('recipient').value;
  const subject = document.getElementById('subject').value;
  const body = document.getElementById('body').value;

  const data = {
    recipient: recipient,
    subject: subject,
    body: body
  };

  return data
});