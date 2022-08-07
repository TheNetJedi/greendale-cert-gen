window.jsPDF = window.jspdf.jsPDF;
function getPdf() {
  const domElement = document.getElementById('certificate');
  html2canvas(domElement, {
    onclone: (document) => {
      document.getElementById('pdf-button').style.visibility = 'hidden';
    },
  }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    canvas.width = 1080;
    canvas.height = 810;
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [1080, 810],
    });
    pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
    pdf.save('certificate.pdf');
  });
}
document.getElementById('pdf-button').addEventListener('click', getPdf);
