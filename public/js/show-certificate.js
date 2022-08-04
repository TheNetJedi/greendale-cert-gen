window.jsPDF = window.jspdf.jsPDF;
function getPdf() {
  const domElement = document.getElementById('certificate');
  html2canvas(domElement, {
    onclone: (document) => {
      document.getElementById('pdf-button').style.visibility = 'hidden';
    },
  }).then((canvas) => {
    console.log('here!');
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [1080, 810],
    });
    pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
    pdf.save('certificate.pdf');
  });
}
console.log('test test');
document.getElementById('pdf-button').addEventListener('click', getPdf);
