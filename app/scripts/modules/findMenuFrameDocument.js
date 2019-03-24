export default function () {
  const frame = document.getElementById('FRAME1') || document.getElementsByName('FRAME1')[0]
  if (frame) {
    return frame.contentWindow.document
  }
}
